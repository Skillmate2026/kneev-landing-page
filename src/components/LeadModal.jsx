'use client';
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

const COPY = {
  whatsapp: {
    title: "Chat with us on WhatsApp",
    subtitle: "Share your details and we'll continue the conversation on WhatsApp.",
    button: "Continue to WhatsApp",
  },
  book: {
    title: "Book Your Assessment",
    subtitle: "Priority slots available for local residents.",
    button: "Book Your ₹600 Knee Assessment",
  },
};

/**
 * @param {{ data: ({ mode: "whatsapp" | "book", location: string } | null), onClose: () => void }} props
 */
export default function LeadModal({ data, onClose, concernOptions }) {
  const mode = data?.mode ?? null;
  const location = data?.location ?? "";

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!mode) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mode, onClose]);

  if (!mode) return null;

  const copy = COPY[mode];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <LeadForm
          mode={mode}
          location={location}
          formTitle={copy.title}
          formSubtitle={copy.subtitle}
          buttonText={copy.button}
          {...(concernOptions ? { concernOptions } : {})}
        />
      </div>
    </div>
  );
}
