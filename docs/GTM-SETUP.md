# GTM Setup Prompt — Lead Capture Conversion Tracking

Build spec for the **Google Tag Manager container** that consumes the dataLayer events
pushed by the lead-capture system (`src/lib/leads.js`). Hand this to whoever builds the GTM
container (human or AI). It is site-agnostic except for the IDs in §0 — swap those per site.

> The **website** already pushes everything below. GTM only needs to *consume* it.
> Nothing here requires another code change.

---

## 0. Per-site IDs (fill these in)

| Thing | Value |
|-------|-------|
| GTM container ID | `GTM-T4XRZVBB` |
| GA4 Measurement ID | `G-XXXXXXXXXX`  ← from GA4 → Admin → Data Streams |
| Google Ads Conversion ID | `AW-XXXXXXXXXX` ← from Google Ads → Goals → Conversions |
| Conversion label — Book lead | `XXXXXXXXXXXXXXXXX` ← per conversion action |
| Conversion label — WhatsApp lead | `XXXXXXXXXXXXXXXXX` |
| (optional) Conversion label — Call | `XXXXXXXXXXXXXXXXX` |

---

## 1. The dataLayer contract (what the site already pushes)

| `event` | When | Params present |
|---------|------|----------------|
| `whatsapp_click` | WhatsApp CTA clicked (modal opens) | `cta_location` |
| `book_appointment_click` | any Book CTA clicked (modal opens) | `cta_location` |
| `call_click` | any `tel:` link clicked | `cta_location` |
| `whatsapp_lead` | form submitted via WhatsApp flow | `lead_type`, `cta_location`, `concern`, `form_name`, `form_phone` (E.164), `page_url` |
| `book_appointment_lead` | form submitted via Book flow | `lead_type`, `cta_location`, `concern`, `form_name`, `form_phone` (E.164), `page_url` |

- The two `*_click` events = **micro-conversions / intent** (good for optimization, not the primary conversion).
- The two `*_lead` events = **primary conversions** (an actual captured lead). Count these in Google Ads.
- `form_name` / `form_phone` are **PII** → Google Ads enhanced conversions tag **ONLY**. Never into GA4.

---

## 2. Variables (Variables → User-Defined → New → Data Layer Variable)

Create one Data Layer Variable per field. Name them exactly:

| Variable name | Data Layer Variable Name |
|---------------|--------------------------|
| `DLV - cta_location` | `cta_location` |
| `DLV - lead_type` | `lead_type` |
| `DLV - concern` | `concern` |
| `DLV - page_url` | `page_url` |
| `DLV - form_name` | `form_name` |
| `DLV - form_phone` | `form_phone` |

Also enable these **Built-In Variables**: `Page URL`, `Page Path`, `Click URL`, `Event`.

---

## 3. Triggers (Triggers → New → Custom Event)

One Custom Event trigger per event. "Event name" must match exactly (no regex).

| Trigger name | Event name | Fires on |
|--------------|-----------|----------|
| `CE - whatsapp_click` | `whatsapp_click` | All Custom Events |
| `CE - book_appointment_click` | `book_appointment_click` | All Custom Events |
| `CE - call_click` | `call_click` | All Custom Events |
| `CE - whatsapp_lead` | `whatsapp_lead` | All Custom Events |
| `CE - book_appointment_lead` | `book_appointment_lead` | All Custom Events |

---

## 4. GA4 tags

### 4a. GA4 Configuration / Google Tag (fires once on all pages)
- Tag type: **Google Tag** (`G-XXXXXXXXXX`)
- Trigger: **Initialization - All Pages**
- Leave default settings (sends `page_view`).

### 4b. GA4 Event tags (one per event)
Tag type **GA4 Event**, Configuration tag = the Google Tag above. **Do NOT add `form_name`/`form_phone`.**

| Tag name | Event name (GA4) | Event Parameters | Trigger |
|----------|------------------|------------------|---------|
| `GA4 - whatsapp_click` | `whatsapp_click` | `cta_location` = `{{DLV - cta_location}}` | `CE - whatsapp_click` |
| `GA4 - book_click` | `book_appointment_click` | `cta_location` = `{{DLV - cta_location}}` | `CE - book_appointment_click` |
| `GA4 - call_click` | `call_click` | `cta_location` = `{{DLV - cta_location}}` | `CE - call_click` |
| `GA4 - whatsapp_lead` | `generate_lead` | `cta_location`, `lead_type`={{DLV - lead_type}}, `concern`={{DLV - concern}}, `method`=`whatsapp` | `CE - whatsapp_lead` |
| `GA4 - book_lead` | `generate_lead` | `cta_location`, `lead_type`, `concern`, `method`=`book` | `CE - book_appointment_lead` |

> Using GA4's recommended `generate_lead` name for the two lead events makes them light up in
> GA4 reporting and can be imported into Google Ads as conversions if you prefer the GA4 path.
> In GA4 → Admin → Events, mark `generate_lead` as a **Key event** (conversion).

---

## 5. Google Ads conversion tags

### 5a. Conversion Linker (required, once)
- Tag type: **Conversion Linker**
- Trigger: **All Pages**

### 5b. Conversion tags (one per lead event)
Tag type **Google Ads Conversion Tracking**.

| Tag name | Conversion ID | Conversion Label | Trigger |
|----------|---------------|------------------|---------|
| `Ads - Book Lead` | `AW-XXXXXXXXXX` | book label | `CE - book_appointment_lead` |
| `Ads - WhatsApp Lead` | `AW-XXXXXXXXXX` | whatsapp label | `CE - whatsapp_lead` |
| `Ads - Call` (optional) | `AW-XXXXXXXXXX` | call label | `CE - call_click` |

Optionally pass a `Conversion Value` if leads have an assigned value; otherwise leave blank.

### 5c. Enhanced Conversions (improves match rate, uses the PII)
1. In **Google Ads → the conversion action → Settings → Enhanced conversions**, turn it ON
   (choose "Google Tag Manager").
2. In GTM, open each **`Ads - *Lead`** tag → **Include user-provided data** → **New variable** →
   **User-Provided Data** → choose **Manual configuration**:
   - **Phone** → `{{DLV - form_phone}}`  (already E.164, e.g. `+9163...`)
   - **Email** → leave blank (we don't collect it)
   - (optional) **First/Last name** → `{{DLV - form_name}}`
3. Attach that User-Provided Data variable to both lead conversion tags.

> Enhanced conversions is the *only* place `form_phone` / `form_name` may be used. Keep them
> out of GA4 and out of any other tag.

---

## 6. Consent / PII guardrails

- Never add `form_name` / `form_phone` as parameters on GA4 tags or non-Ads tags (policy violation).
- If a consent banner is in use, gate tags behind GTM **Consent Mode** (`ad_user_data`,
  `ad_personalization`, `analytics_storage`) as appropriate for the region.

---

## 7. Test in GTM Preview (before publishing)

1. GTM → **Preview** → enter the site URL → connect.
2. Load the page: **Google Tag** + **Conversion Linker** fire on container load.
3. Click a Book CTA → `book_appointment_click` appears; `GA4 - book_click` fires with the right `cta_location`.
4. Submit the form → `book_appointment_lead` appears; `GA4 - book_lead` **and** `Ads - Book Lead` fire.
   - Check the Ads tag's user-provided data shows the hashed phone (enhanced conversions).
5. Repeat for the WhatsApp flow (`whatsapp_click` → modal → submit → `whatsapp_lead` → redirect to wa.me).
6. Click a `tel:` link → `call_click` fires.
7. Open the page with `?utm_source=test&gclid=abc` and confirm `page_url` contains the full query string.

---

## 8. Publish

GTM → **Submit** → name the version (e.g. "Lead capture v1 — book/whatsapp/call") → Publish.
Then confirm in:
- **GA4 → Realtime** (events show up),
- **Google Ads → Conversions** (status moves to "Recording conversions" within a few hours of live traffic).

---

## 9. Reuse on another site

Everything above is identical per site **except §0 IDs** and the set of `cta_location` values
(which only affect reporting breakdowns, not setup). Duplicate the container or import this build,
swap the GA4 / Ads IDs + labels, and re-test in Preview.
