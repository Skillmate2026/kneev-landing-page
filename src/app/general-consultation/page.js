"use client";

import React from 'react';
import Script from 'next/script';

import LeadModal from '@/components/LeadModal';
import DoctorSection from '@/components/sections/DoctorSection';
import EverythingOneRoofSection from '@/components/sections/EverythingOneRoofSection';
import DayOneSection from '@/components/sections/DayOneSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';

import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ProblemsSection from './sections/ProblemsSection';
import PainDiagnosisSection from './sections/PainDiagnosisSection';
import LocationSection from './sections/LocationSection';
import FinalCtaSection from './sections/FinalCtaSection';

import { pushDataLayer } from '@/lib/leads';
import { schemaMarkup } from '@data/clinic';
import * as content from '@data/home';

export default function GeneralConsultationPage() {
  const [modal, setModal] = React.useState(null);

  const openBook = (location) => {
    pushDataLayer({ event: "book_appointment_click", cta_location: location });
    setModal({ mode: "book", location });
  };

  const handleCallClick = (location) => {
    pushDataLayer({ event: "call_click", cta_location: location });
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <HeroSection {...content.hero} form={content.appointmentForm} onOpenBook={openBook} onCall={handleCallClick} />
      <TrustSection {...content.trust} />
      <ProblemsSection {...content.problems} onBook={openBook} />
      <PainDiagnosisSection {...content.painDiagnosis} onBook={openBook} />
      <DoctorSection {...content.doctor} onBook={openBook} />
      <EverythingOneRoofSection {...content.oneRoof} onBook={openBook} />
      <DayOneSection steps={content.dayOneSteps} onBook={openBook} />
      <WhyChooseSection {...content.whyChoose} onBook={openBook} />
      <TestimonialsSection {...content.testimonials} />
      <LocationSection {...content.location} onCall={handleCallClick} />
      <FaqSection faqs={content.faqs} />
      <FinalCtaSection {...content.finalCta} onOpenBook={openBook} onCall={handleCallClick} />

      <LeadModal data={modal} onClose={() => setModal(null)} concernOptions={content.appointmentForm.concerns} />
    </main>
  );
}
