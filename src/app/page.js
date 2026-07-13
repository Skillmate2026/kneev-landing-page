"use client";

import React from 'react';
import Script from 'next/script';

import LeadModal from '@/components/LeadModal';
import { setFormInteracted } from '@/components/popup/useAppointmentPopup';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import ServicesSection from '@/components/sections/ServicesSection';
import DoctorSection from '@/components/sections/DoctorSection';
import KneevPromiseSection from '@/components/sections/KneevPromiseSection';
import EverythingOneRoofSection from '@/components/sections/EverythingOneRoofSection';
import DayOneSection from '@/components/sections/DayOneSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClinicInfoSection from '@/components/sections/ClinicInfoSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

import { pushDataLayer } from '@/lib/leads';
import { schemaMarkup } from '@data/clinic';
import { CONSULT_CONCERNS } from '@data/concerns';
import * as content from '@data/home';

export default function HomePage() {
  // { mode: "whatsapp" | "book", location: string } | null
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
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <HeroSection {...content.hero} concernOptions={CONSULT_CONCERNS} />
      <SocialProofBar stats={content.stats} />
      <ServicesSection {...content.services} />
      <DoctorSection {...content.doctor} />
      <KneevPromiseSection {...content.promise} onBook={openBook} />
      <EverythingOneRoofSection {...content.oneRoof} onBook={openBook} />
      <DayOneSection steps={content.dayOneSteps} onBook={openBook} />
      <WhyChooseSection {...content.whyChoose} onBook={openBook} />
      <TestimonialsSection {...content.testimonials} />
      <ClinicInfoSection heading={content.clinicHeading} onCall={handleCallClick} />
      <FaqSection faqs={content.faqs} />
      <FinalCtaSection {...content.finalCta} concernOptions={CONSULT_CONCERNS} />

      <LeadModal data={modal} onClose={() => setModal(null)} concernOptions={CONSULT_CONCERNS} />
    </main>
  );
}
