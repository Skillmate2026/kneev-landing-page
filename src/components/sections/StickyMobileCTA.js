"use client";

import { CalendarCheck } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-stretch">
        <a
          href="#booking-form"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#F47C20] text-white font-bold text-sm"
        >
          <CalendarCheck className="w-5 h-5" />
          Book Your Free Consultation
        </a>
      </div>
    </div>
  );
}
