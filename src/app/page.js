"use client";

import Script from 'next/script';

import LeadModal from '@/components/LeadModal';
import { setFormInteracted } from '@/components/popup/useAppointmentPopup';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import InstantTrustSection from '@/components/sections/InstantTrustSection';
import WhatYouGetSection from '@/components/sections/WhatYouGetSection';
import OurPromiseSection from '@/components/sections/OurPromiseSection';
import WhyPatientsTrustSection from '@/components/sections/WhyPatientsTrustSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SimpleBookingProcess from '@/components/sections/SimpleBookingProcess';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

import React from 'react';
import { schemaMarkup } from '@data/clinic';
import * as content from '@data/roboticKnee';

export default function HomePage() {
  const [modal, setModal] = React.useState(null);

  const openBook = (location) => {
    setFormInteracted();
    pushDataLayer({ event: "book_appointment_click", cta_location: location });
    setModal({ mode: "book", location });
  };

  const handleCallClick = (location) => {
    pushDataLayer({ event: "call_click", cta_location: location });
  };

  return (
    <main className="min-h-screen bg-[#F8F8F6] selection:bg-[#F47C20] selection:text-white font-sans overflow-x-hidden">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <HeroSection {...content.hero} onOpenModal={() => setModal({ mode: "book", location: "hero_form" })} />
      <TrustStrip />
      <InstantTrustSection {...content.instantTrust} />
      <WhatYouGetSection {...content.whatYouGet} />
      <OurPromiseSection {...content.ourPromise} />
      <WhyPatientsTrustSection {...content.whyTrust} />
      <TestimonialsSection {...content.testimonials} />
      <SimpleBookingProcess {...content.bookingProcess} />
      <FaqSection faqs={content.faqs} />
      <FinalCtaSection {...content.finalCta} onOpenModal={() => setModal({ mode: "book", location: "final_cta" })} />

      <LeadModal data={modal} onClose={() => setModal(null)} concernOptions={CONSULT_CONCERNS} />
    </main>
  );
}
