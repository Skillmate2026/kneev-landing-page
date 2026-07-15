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
 * Fixed sticky bottom bar ("Book Consultation" button) shown on every page.
 * Owns the lead-capture modal that opens when the button is clicked.
 */
export default function FloatingButtons() {
  const [modal, setModal] = React.useState(null);

  const openBook = () => {
    setFormInteracted();
    pushDataLayer({ event: "book_appointment_click", cta_location: "sticky_bar" });
    setModal({ mode: "book", location: "sticky_bar" });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          onClick={openBook}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#F47C20] text-white font-bold text-sm md:text-base hover:bg-[#E06A18] transition-colors"
        >
          <CalendarCheck className="w-5 h-5" />
          Book Your Consultation
        </button>
      </div>

      <LeadModal data={modal} onClose={() => setModal(null)} concernOptions={CONSULT_CONCERNS} />
    </>
  );
}
