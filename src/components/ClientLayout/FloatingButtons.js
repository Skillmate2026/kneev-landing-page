"use client";

import React from 'react';
import { CalendarCheck } from 'lucide-react';
import LeadModal from '../LeadModal';
import { setFormInteracted } from '../popup/useAppointmentPopup';
import { pushDataLayer } from '../../lib/leads';

const CONSULT_CONCERNS = [
  "Knee Pain",
  "Joint Pain",
  "Back/Spine Pain",
  "Sports Injury",
  "Arthritis",
  "Physiotherapy",
  "Other",
];

/**
 * Fixed bottom-right action buttons (Book / WhatsApp / Phone) shown on every page.
 * Owns the lead-capture modal that opens when Book or WhatsApp is clicked.
 */
export default function FloatingButtons({ hideBookCta = false }) {
  // { mode: "whatsapp" | "book", location: string } | null
  const [modal, setModal] = React.useState(null);

  const openBook = (location) => {
    setFormInteracted();
    pushDataLayer({ event: "book_appointment_click", cta_location: location });
    setModal({ mode: "book", location });
  };

  const openWhatsApp = (location) => {
    setFormInteracted();
    pushDataLayer({ event: "whatsapp_click", cta_location: location });
    setModal({ mode: "whatsapp", location });
  };

  const handleCallClick = (location) => {
    pushDataLayer({ event: "call_click", cta_location: location });
    // the tel: anchor still dials natively
  };

  return (
    <>
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">

        {/* Phone Button */}
        <a
          href="tel:+916366700736"
          onClick={() => handleCallClick("floating_button")}
          aria-label="Call Clinic"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#E97724] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(26,51,47,0.3)] hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
