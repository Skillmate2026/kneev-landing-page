// Shared lead-capture logic used by the inline form (LeadForm) and the popup (LeadModal).
// Single source of truth — change the constants below per site.

// ────────────────────────────────────────────────────────────────────────────
// PER-SITE CONFIG  (see Replication Guide §1)
// ────────────────────────────────────────────────────────────────────────────

// n8n webhook for this site.
export const WEBHOOK_URL = "https://n8n.nomiris.com/webhook/kneev";

// WhatsApp number — digits only, country code, no "+".
export const WHATSAPP_NUMBER = "916366700736";

// E.164 country prefix used for Google Ads enhanced conversions (+91 = India).
const PHONE_COUNTRY_CODE = "+91";

/**
 * @typedef {"whatsapp" | "book"} LeadMode
 */

/**
 * Pushes the conversion event to GTM, posts the lead to the webhook (keepalive so it
 * survives a redirect), then — for the WhatsApp flow — redirects to the chat with the
 * message prefilled. The "book" flow stays on-site (caller shows a thank-you state).
 *
 * @param {Object} args
 * @param {LeadMode} args.mode      which flow ("whatsapp" redirects, "book" stays)
 * @param {string}   args.location  which CTA opened this (cta_location)
 * @param {string}   args.name
 * @param {string}   args.phone
 * @param {string} [args.concern]   optional dropdown value (site-specific)
 * @param {string} [args.message]   optional free-text message
 * @param {Object} [args.extra]     any extra fields to merge into the webhook payload
 */
export function submitLead(args) {
  const {
    mode,
    location,
    name,
    phone,
    concern = "",
    message = "",
    extra = {},
  } = args;

  // Normalize to E.164 for Google Ads enhanced conversions.
  const phone10 = String(phone || "").replace(/\D/g, "").slice(-10);
  const phoneE164 = phone10 ? `${PHONE_COUNTRY_CODE}${phone10}` : phone;

  // Full landing URL captures any UTMs / gclid / hash without enumerating them.
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const payload = {
    name,
    phone,
    concern,
    message,
    lead_type: mode,
    cta_location: location,
    page_url: pageUrl,
    ...extra,
  };

  // 1. GTM conversion event — pushed SYNCHRONOUSLY before any redirect.
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: mode === "whatsapp" ? "whatsapp_lead" : "book_appointment_lead",
      lead_type: mode,
      cta_location: location,
      concern,
      form_name: name, // PII — Google Ads enhanced conversions ONLY, never GA4 params.
      form_phone: phoneE164, // PII — Google Ads enhanced conversions ONLY.
      page_url: pageUrl,
    });
  }

  // 2. POST to webhook. keepalive:true lets the request finish even after the page
  //    unloads on redirect. Fire-and-forget — we don't await it.
  if (typeof window !== "undefined") {
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  }

  // 3. WhatsApp flow redirects to the chat; "book" flow stays on-site.
  if (mode === "whatsapp" && typeof window !== "undefined") {
    const parts = [`Hi, I'm ${name} (${phone}).`];
    if (concern) parts.push(`I'd like help with: ${concern}.`);
    if (message) parts.push(message);
    const text = parts.join(" ");
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
}

/** Lightweight helper for the click-intent events (whatsapp_click / book_appointment_click / call_click). */
export function pushDataLayer(data) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
}
