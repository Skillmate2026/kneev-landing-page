"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import {
  Phone, MapPin, Clock, CheckCircle, Star,
  Activity, ChevronDown, MessageSquare,
  Stethoscope, Award, HeartPulse, Bone, ShieldCheck,
  ThumbsUp, ArrowRight, Video, Zap,Plus,Minus,Mail,
  CalendarCheck
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import LeadModal from '../components/LeadModal';
import { pushDataLayer } from '../lib/leads';

const CONSULT_CONCERNS = [
  "Knee Pain",
  "Joint Pain",
  "Back/Spine Pain",
  "Sports Injury",
  "Arthritis",
  "Physiotherapy",
  "Other",
];

export default function HomePage() {
  // { mode: "whatsapp" | "book", location: string } | null
  const [modal, setModal] = React.useState(null);

  const openBook = (location) => {
    pushDataLayer({ event: "book_appointment_click", cta_location: location });
    setModal({ mode: "book", location });
  };

  const openWhatsApp = (location) => {
    pushDataLayer({ event: "whatsapp_click", cta_location: location });
    setModal({ mode: "whatsapp", location });
  };

  const handleCallClick = (location) => {
    pushDataLayer({ event: "call_click", cta_location: location });
    // the tel: anchor still dials natively
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Kneev Orthopaedic Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560011",
          "addressCountry": "IN"
        },
        "telephone": "+916366700736",
        "url": "https://kneev.in",
        "medicalSpecialty": "Orthopedic"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* HEADER */}
      <Header />

      {/* 1. HERO SECTION */}
<section
  className="relative pt-10 pb-12 md:pt-16 md:pb-20 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/hero-knee.png')" }}
>
  {/* Premium Brand-Aligned Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1A332F] via-[#1A332F]/90 to-[#1A332F]/40 z-0"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">

    {/* Left Content */}
    <div className="lg:col-span-7 space-y-5 text-center md:text-left">
      <div className="inline-flex items-center text-[#E97724] font-bold text-[11px] md:text-sm tracking-wide uppercase bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
        Jayanagar&apos;s Trusted Orthopaedic Clinic · 2,500+ Patients · 4.9★ Google
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-white leading-[1.12] tracking-tight">
        Find Out What&apos;s Really Causing Your Pain, <br className="hidden lg:block"/>
        <span className="text-[#E97724]">and Get a Clear Plan to Fix It</span>
      </h1>

      <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
        Knee, back, joint, or sports pain wearing you down? At Kneev in Jayanagar, Dr. Amith takes the time to find the real root cause and gives you an honest, personalised treatment plan. Book a thorough orthopaedic assessment for just ₹600. Minutes from JP Nagar, Basavanagudi, Banashankari and BTM Layout.
      </p>

      {/* Google Rating Badge - Glassmorphism style */}
      <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mt-2 shadow-lg">
        <span className="font-black text-white mr-2">4.9</span>
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />)}
        </div>
        <span className="text-xs font-bold text-white/70 uppercase tracking-wide border-l border-white/30 pl-2">Google Reviews</span>
      </div>
    </div>

    {/* Right Lead Form - Kept white to pop against the dark image overlay */}
    <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto mt-6 lg:mt-0">
      <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
        {/* Delegating Form Logic to LeadForm Component */}
        <LeadForm
          mode="book"
          location="hero_form"
          formTitle="Book Your Assessment"
          formSubtitle="Priority slots available for local residents."
          buttonText="Book My ₹600 Assessment"
          concernOptions={CONSULT_CONCERNS}
        />
      </div>
    </div>

    {/* Trust Chips - sit below the form */}
    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 w-full">
      {[
        "We find the root cause, not just mask it",
        "We actually listen, no rushed 5-minute visits",
        "Honest, transparent advice"
      ].map((badge, i) => (
        <div key={i} className="flex items-center space-x-2 text-left bg-white/5 p-3 rounded-lg border border-white/10 shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
          <span className="font-bold text-sm text-white/95">{badge}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="bg-[#1A332F] text-white py-6 md:py-7 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 divide-y-0 md:divide-x divide-white/10 text-center">
          {[
            { stat: "17+ Years", label: "Experience" },
            { stat: "2,500+", label: "Patients Recovered" },
            { stat: "4.9★", label: "Google Rating" },
            { stat: "112+", label: "Five-Star Reviews" }
          ].map((item, i) => (
            <div key={i} className="px-2">
              <div className="text-2xl md:text-3xl font-black text-[#E97724] leading-none">{item.stat}</div>
              <div className="text-[11px] md:text-sm font-semibold text-white/70 uppercase tracking-wide mt-1.5">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES / WHAT WE TREAT */}
      <section className="py-8 md:py-12 px-4 bg-[#FDFCF8] border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <span className="text-[#E97724] font-bold text-xs uppercase tracking-widest">What We Treat</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A332F] mt-1.5">Comprehensive Orthopaedic Care, All in One Place</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              "Knee Pain Treatment",
              "Back & Spine Care",
              "Shoulder Pain Treatment",
              "Sports Injury Care",
              "Arthritis Management",
              "Fracture & Trauma Care"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 shadow-sm hover:border-[#E97724]/30 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
                <span className="font-bold text-sm md:text-[15px] text-[#1A332F]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DOCTOR */}
       <section id="doctor" className="py-10 md:py-14 px-4 bg-white border-b border-gray-100">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F]">Meet Dr. Amith P. Shetty</h2>
        </div>
        <div className="max-w-5xl mx-auto bg-[#FDFCF8] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">

          {/* Image Side */}
          <div className="md:w-2/5 relative h-[350px] md:h-auto flex-shrink-0">
            <Image
              src="/dr.JPG"
              alt="Dr. Amith P. Shetty - Orthopaedic Surgeon"
              fill
              className="object-cover object-top"
            />
            {/* Mobile-only name overlay so it sits nicely on the image */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A332F] via-[#1A332F]/80 to-transparent p-5 pt-12 md:hidden">
              <h3 className="text-white font-black text-2xl">Dr. Amith P. Shetty</h3>
              <p className="text-[#E97724] font-bold text-xs uppercase tracking-wider mt-1">Founder &amp; Chief Orthopaedic Surgeon</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">

            {/* Desktop Header */}
            <div className="hidden md:block mb-5">
              <h3 className="text-2xl md:text-3xl font-black text-[#1A332F] leading-tight">
                Dr. Amith P. Shetty
              </h3>
              <p className="text-[#E97724] font-bold text-xs lg:text-sm uppercase tracking-wider mt-1.5">
                Founder &amp; Chief Orthopaedic Surgeon
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-[#E97724] pl-4 my-2 md:mb-6">
              <p className="text-sm md:text-base text-gray-600 font-medium italic leading-relaxed">
                &ldquo;I treat the patient, not just the MRI. My job is to find the real cause of your pain and give you a clear, honest plan to get your quality of life back, with the right diagnosis, lifestyle correction, and targeted physiotherapy.&rdquo;
              </p>
            </blockquote>

            {/* Credentials List (Compacted) */}
            <div className="mt-6 md:mt-0 space-y-3 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1A332F] text-sm flex items-center border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                <Award className="w-4 h-4 mr-2 text-[#E97724]" /> Founder &amp; Chief Orthopaedic Surgeon
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>MBBS, MS (Orthopaedics)</strong> with extensive hands-on surgical training.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Dip SICOT (Belgium) &amp; FIJR (Germany)</strong>, advanced training in complex joint reconstruction.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>17+ years</strong> treating degenerative joint diseases and sports injuries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Consultant at Manipal &amp; Apollo Hospitals.</strong></span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE KNEEV PROMISE */}
      <section className="py-12 md:py-16 px-4 bg-[#1A332F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#E97724] font-bold text-xs uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" /> The Kneev Promise
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
            We Find the Real Cause, <br className="hidden md:block"/>Not Just Mask the Pain
          </h2>
          <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed mt-5 max-w-3xl mx-auto">
            Painkillers and quick five-minute appointments rarely fix anything. At Kneev, Dr. Amith takes the time to understand your symptoms, examine you properly, and identify what&apos;s actually driving your pain. You leave with a clear diagnosis and a treatment plan built for your body, not a one-size-fits-all prescription.
          </p>
          <div className="mt-8">
            <button onClick={() => openBook("kneev_promise")} className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all">
              Book My ₹600 Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. EVERYTHING UNDER ONE ROOF */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F]">Your Whole Recovery, in One Place</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2.5 font-medium max-w-2xl mx-auto">
              When you&apos;re in pain, the last thing you need is to travel between clinics and labs. We handle everything here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Stethoscope, title: "Unhurried Consultation", desc: "A real hands-on exam. We look at you, not just your reports." },
              { icon: Zap, title: "Same-Day Digital X-Ray", desc: "High-resolution imaging on-site, so you get answers the same visit." },
              { icon: Activity, title: "Movement Analysis (360° Motion Map)", desc: "We map how you move to find the hidden cause of your pain." },
              { icon: HeartPulse, title: "Targeted Physiotherapy", desc: "A personalised plan to rebuild strength and restore your movement safely." },
              { icon: Award, title: "Accurate Diagnosis", desc: "Clear answers about what's wrong and exactly what to do next." },
              { icon: MessageSquare, title: "Ongoing Support", desc: "Direct access to our team, even after you go home." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDFCF8] border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#E97724]/30 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#E97724]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#E97724]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1A332F] mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => openBook("everything_under_one_roof")} className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all">
              Book My ₹600 Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHAT TO EXPECT ON DAY ONE */}
      <section className="py-10 md:py-16 px-4 bg-[#F3F6F4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#E97724] font-bold text-xs uppercase tracking-widest">What To Expect On Day One</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] mt-2">A Simple, Stress-Free First Visit</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop horizontal connector line */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-[#1A332F]/15" aria-hidden="true"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6">
              {[
                { title: "Book Online", desc: "Pick a slot and skip the wait." },
                { title: "Walk In", desc: "Our team welcomes you at our Jayanagar clinic." },
                { title: "Meet Dr. Amith", desc: "A detailed manual exam to find the true root cause." },
                { title: "Leave With a Plan", desc: "A clear diagnosis and honest next steps, not a sales pitch." }
              ].map((step, idx, arr) => (
                <div key={idx} className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 pb-8 lg:pb-0 last:pb-0">
                  {/* Mobile vertical connector line */}
                  {idx !== arr.length - 1 && (
                    <div className="lg:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-[#1A332F]/15" aria-hidden="true"></div>
                  )}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#1A332F] text-white font-black text-lg flex items-center justify-center ring-8 ring-[#F3F6F4] shadow-md">
                    {idx + 1}
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="text-base md:text-lg font-bold text-[#1A332F] mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed lg:max-w-[220px] lg:mx-auto">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => openBook("day_one")} className="inline-flex items-center gap-2 bg-[#1A332F] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-all">
              Book Your Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE KNEEV */}
      <section className="py-10 md:py-16 px-4 bg-[#1A332F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">Why South Bengaluru Chooses Kneev</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "We Find the Root Cause", icon: Activity, desc: "We diagnose why it hurts, not just treat the symptom." },
              { title: "We Actually Listen", icon: MessageSquare, desc: "No rushed appointments. Dr. Amith gives you real time." },
              { title: "Transparent Pricing", icon: ThumbsUp, desc: "No hidden costs for consults, scans, or treatment." },
              { title: "Everything Under One Roof", icon: Stethoscope, desc: "Consult, X-ray, and rehab in one location." },
              { title: "Noticeable Relief, Early", icon: HeartPulse, desc: "Many patients feel real improvement after their first physio session." },
              { title: "Right in Your Neighbourhood", icon: MapPin, desc: "On 14th Cross, 2nd Block, Jayanagar, easy to reach from JP Nagar, Basavanagudi, Banashankari and BTM Layout." }
            ].map((box, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl">
                <box.icon className="w-7 h-7 md:w-8 md:h-8 text-[#E97724] mb-3" />
                <h3 className="text-base md:text-lg font-bold mb-1.5">{box.title}</h3>
                <p className="text-xs md:text-sm text-white/60 font-medium leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => openBook("why_choose_kneev")} className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all">
              Book My ₹600 Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. PATIENT TESTIMONIALS */}

      <section className="py-10 md:py-14 px-4 bg-[#FDFCF8] border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Real Patients. Real Relief.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-xl mx-auto">
              Trusted by your neighbours across South Bengaluru.
            </p>
          </div>

          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            {/* The auto-scrolling container with explicit scrollbar hiding classes */}
            <div
              id="testimonial-scroll"
              className="flex overflow-x-auto pb-4 gap-4 md:gap-5 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onMouseEnter={() => window.pauseScroll = true}
              onMouseLeave={() => window.pauseScroll = false}
              onTouchStart={() => window.pauseScroll = true}
              onTouchEnd={() => { setTimeout(() => window.pauseScroll = false, 3000) }}
            >
              {[
                { name: "Meenakshi", loc: "Jayanagar", text: "Finding an honest clinic nearby can be exhausting. Kneev provided an accurate diagnosis on the spot and didn't force excessive medication." },
                { name: "Srinivas", loc: "Basavanagudi", text: "The 360° motion mapping changed everything. They found the real reason my knee hurt during morning walks. Highly recommend this team." },
                { name: "Anitha", loc: "BTM Layout", text: "Dr. Amith took the time to explain my MRI step by step. I've never had a doctor be so patient. The treatment plan worked wonderfully." },
                { name: "Vikram", loc: "Banashankari", text: "The transparent pricing and direct doctor availability makes this the best clinic. I finally have relief from my chronic sciatica." }
              ].map((tst, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] md:min-w-[320px] max-w-[320px] flex-shrink-0 snap-center bg-white p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-3 flex justify-between items-center">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFBF23] fill-current" />)}
                      </div>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed mb-5">&ldquo;{tst.text}&rdquo;</p>
                  </div>

                  <div className="flex items-center pt-3 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-[#E97724]/10 text-[#E97724] flex items-center justify-center font-bold text-sm mr-3">
                      {tst.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1A332F] text-sm leading-tight">{tst.name}</div>
                      <div className="text-gray-500 font-medium text-xs">{tst.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLINIC INFORMATION + MAP */}
      <section className="py-10 md:py-14 px-4 bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Information Side */}
    <div className="space-y-5 md:space-y-6 text-center md:text-left">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
          Your Orthopaedic Specialist, Right Here in Jayanagar
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
          No long drives across the city while you&apos;re in pain. We&apos;re on 14th Cross, 2nd Block, easy to reach from across South Bengaluru.
        </p>
      </div>

      <div className="bg-[#FDFCF8] p-5 md:p-6 rounded-2xl border border-gray-100 text-left">
        <div className="space-y-3.5">
          {/* Address */}
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
            <a href="tel:+916366700736" onClick={() => handleCallClick("contact_section")} className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors">
              +91 636 670 0736
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
            <a href="mailto:kneevorthopaediccenter@gmail.com" className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors break-all">
              kneevorthopaediccenter@gmail.com
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-start pt-1">
            <Clock className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700 font-medium leading-snug">
              <p>Mon to Sat: 9:00 AM to 7:00 PM</p>
              <p className="text-[#E97724] font-bold mt-0.5">Sunday: By appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Distance Markers */}
      <div className="space-y-2 pt-2">
        <p className="uppercase text-gray-400 font-bold tracking-wider text-[10px]">Driving Distance:</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
          <span className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">Jayanagar (0 min)</span>
          <span className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">JP Nagar (5 min)</span>
          <span className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">Basavanagudi (7 min)</span>
          <span className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">Banashankari (8 min)</span>
          <span className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">BTM Layout (10 min)</span>
        </div>
      </div>
    </div>

    {/* Map Side */}
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[320px] md:h-[420px] w-full relative">
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1780162330680!5m2!1sen!2sin"
        width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         title="Clinic Location"
       ></iframe>
    </div>
  </div>
</section>

      {/* 10. FAQ SECTION (Two Column & Minimalist) */}
      <section className="py-12 md:py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
            {[
              {
                q: "What kind of pain do you treat?",
                a: "Knee pain, joint pain, back and neck pain, arthritis, sports injuries, and general orthopaedic concerns for all ages."
              },
              {
                q: "How is the consultation different from other clinics?",
                a: "Dr. Amith gives you a full 20 to 30 minute assessment with a proper hands-on exam, so you get a real diagnosis instead of a rushed prescription."
              },
              {
                q: "Is the ₹600 fee inclusive of X-rays?",
                a: "The ₹600 fee covers your complete clinical evaluation with Dr. Amith. Digital X-rays and lab diagnostics are charged separately at standard rates."
              },
              {
                q: "What should I bring to my first appointment?",
                a: "Please bring any recent X-rays, MRI scans, previous prescriptions, and a list of current medications to avoid repeating tests."
              },
              {
                q: "Is physiotherapy done at the same clinic?",
                a: "Yes. We have a fully equipped physiotherapy centre right here, so you don't have to travel elsewhere for rehab."
              },
              {
                q: "Do I need an appointment, or can I walk in?",
                a: "Walk-ins are accepted, but we recommend booking to secure your slot and minimise wait time."
              },
              {
                q: "Do you support insurance or corporate coverage?",
                a: "Yes, our team supports proper claim documentation for major treatments."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-gray-200 py-4 cursor-pointer">
                <summary className="font-bold text-[#1A332F] text-sm md:text-base flex justify-between items-center list-none outline-none">
                  <span>Q. {faq.q}</span>
                  <span className="relative flex-shrink-0 ml-4 w-4 h-4 flex items-center justify-center text-[#E97724]">
                    {/* The plus icon hides when open, minus shows when open */}
                    <Plus className="w-5 h-5 absolute transition-opacity duration-200 group-open:opacity-0" strokeWidth={2.5} />
                    <Minus className="w-5 h-5 absolute transition-opacity duration-200 opacity-0 group-open:opacity-100" strokeWidth={2.5} />
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm font-medium leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
<section className="py-12 md:py-20 px-4 bg-[#E97724] relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Take the First Step Toward a Pain-Free Life
            </h2>
            <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              You deserve to walk, work, and sleep without pain holding you back. Book your complete assessment with Jayanagar&apos;s trusted orthopaedic specialist for just ₹600. Priority slots for South Bengaluru residents.
            </p>

            <ul className="text-white space-y-3 font-bold text-sm md:text-base hidden md:block mt-6">
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> We find the root cause, not just mask it
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Honest, transparent advice
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Everything under one roof
              </li>
            </ul>
          </div>

          {/* Connected LeadForm Component */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
            <LeadForm
              mode="book"
              location="final_cta"
              formTitle="Book Your Assessment"
              formSubtitle="Priority slots available for local residents."
              buttonText="Book My ₹600 Assessment"
              concernOptions={CONSULT_CONCERNS}
            />
          </div>

        </div>
      </section>

      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">

        {/* Book Assessment Button */}
        <button
          onClick={() => openBook("floating_button")}
          aria-label="Book Assessment"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#1A332F] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(26,51,47,0.4)] hover:scale-110 transition-transform duration-300"
        >
          <CalendarCheck className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* WhatsApp Button - captures name/phone first, then redirects */}
        <button
          onClick={() => openWhatsApp("floating_button")}
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>

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

      {/* FORM POPUP MODAL (WhatsApp + Book modes) */}
      <LeadModal data={modal} onClose={() => setModal(null)} concernOptions={CONSULT_CONCERNS} />

    </main>
  );
}
