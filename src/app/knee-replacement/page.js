"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Phone, MapPin, Clock, CheckCircle, Star, 
  Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, Bone, ShieldCheck, 
  UserCheck, ThumbsUp, ArrowRight, Video, Mail, Plus, Minus,
  XCircle, CheckCircle2, FileText, IndianRupee, ShieldAlert, Building2
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export default function LandingPage() {

  const formatPhoneForGoogle = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 ? `+91${cleaned}` : `+${cleaned}`;
  };



  const handleFormSubmit = async (e, formName, setSubmittedState) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", 
        body: formData 
      });
      
      if (res.ok) {
        setSubmittedState(true);
        pushToDataLayer(formData, formName);
      } else {
        console.error("Form submission failed", await res.text());
      }
    } catch (err) {
      console.error("Form submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Skillmate Kneev Orthopaedic Centre",
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
      },
      {
        "@type": "Physician",
        "name": "Dr. Amith P. Shetty",
        "jobTitle": "Orthopaedic Surgeon",
        "medicalSpecialty": "Orthopaedics",
        "worksFor": {
          "@type": "MedicalClinic",
          "name": "Skillmate Kneev Orthopaedic Centre"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-12 md:pb-16 px-4 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/cond-acl.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/90 to-[#1A332F]/40 z-0"></div>
        <div className="absolute inset-0 bg-[#E97724]/5 mix-blend-multiply z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#1A332F] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide border border-[#1A332F]/10 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-[#E97724] fill-current" />
              Trusted by 2,500+ Patients in Bengaluru
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A332F] leading-[1.15] tracking-tight">
              Considering Knee Replacement?<br />
              <span className="text-[#E97724] relative whitespace-nowrap mt-2 block sm:inline-block">
                Get a Second Opinion First
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#E97724]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/></svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium bg-white/40 p-2 rounded-lg inline-block">
              <strong>Over 80% of our patients successfully avoid surgery</strong>. At Kneev, conservative care always comes first. Dr. Amith takes the time to find the real root cause of your pain. Get an honest clinical assessment for just <span className="font-black text-[#E97724] text-lg bg-[#E97724]/10 px-1.5 rounded">₹600</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 justify-center md:justify-start">
              <div className="flex items-start space-x-2.5 text-left bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-white/50">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm md:text-base text-[#1A332F] leading-tight">Conservative Care First:<br/><span className="text-gray-600 font-medium text-xs md:text-sm">Surgery is a last resort.</span></span>
              </div>
              <div className="flex items-start space-x-2.5 text-left bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-white/50">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm md:text-base text-[#1A332F] leading-tight">We Actually Listen:<br/><span className="text-gray-600 font-medium text-xs md:text-sm">No rushed appointments.</span></span>
              </div>
            </div>
          </div>

          <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto mt-6 lg:mt-0">
                <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
                  <div className="mb-5 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-[#1A332F]">Book Consultation</h3>
                    <p className="text-gray-500 text-xs mt-1 font-medium">Priority slots available today.</p>
                  </div>
                  {/* Delegating Form Logic to LeadForm Component */}
                  <LeadForm source="Hero Section" />
                </div>
              </div>
        </div>
      </section>

            {/* 2. DR AMIT SURGICAL CREDENTIALS */}
       <section id="doctor" className="py-10 md:py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto bg-[#FDFCF8] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="md:w-2/5 relative h-[350px] md:h-auto flex-shrink-0">
            <Image 
              src="/dr.JPG" 
              alt="Dr. Amith P. Shetty - Orthopedic Doctor" 
              fill
              className="object-cover object-top"
            />
            {/* Mobile-only name overlay so it sits nicely on the image */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A332F] via-[#1A332F]/80 to-transparent p-5 pt-12 md:hidden">
              <h3 className="text-white font-black text-2xl">Dr. Amith P. Shetty</h3>
              <p className="text-[#E97724] font-bold text-xs uppercase tracking-wider mt-1">Lead Orthopedic Surgeon</p>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            
            {/* Desktop Header */}
            <div className="hidden md:block mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] leading-tight">
                Dr. Amith P. Shetty
              </h2>
              <p className="text-[#E97724] font-bold text-xs lg:text-sm uppercase tracking-wider mt-1.5">
                Lead Orthopedic Surgeon
              </p>
            </div>
      
            {/* Quote Block */}
            <blockquote className="border-l-4 border-[#E97724] pl-4 my-2 md:mb-6">
              <p className="text-sm md:text-base text-gray-600 font-medium italic leading-relaxed">
                "Treat the patient, not just the MRI. Most joint issues resolve with lifestyle corrections and targeted physiotherapy. Surgery is strictly for when it's absolutely necessary to restore your quality of life."
              </p>
            </blockquote>
            
            {/* Credentials List (Compacted) */}
            <div className="mt-6 md:mt-0 space-y-3 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1A332F] text-sm flex items-center border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                <Award className="w-4 h-4 mr-2 text-[#E97724]" /> Founder & Chief Orthopaedic Surgeon
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>MBBS, MS Orthopaedics</strong> with extensive hands-on surgical training.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Dip SICOT (Belgium) & FIJR (Germany)</strong> specializing in complex joint reconstruction.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>17+ Years Experience</strong> handling degenerative diseases and sports injuries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Consultant At Manipal Hospitals & Apollo Hospitals</strong> specializing in degenerative diseases, sports injuries, and joint reconstruction.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section className="bg-[#1A332F] py-6 md:py-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A524B,transparent_70%)] opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 border border-white/5 bg-white/[0.02] rounded-2xl p-2 md:p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:divide-x lg:divide-white/10 gap-2 lg:gap-0">
            {[
              { metric: "17", label: "Years Experience" },
              { metric: "2,500", label: "Patients Recovered" },
              { metric: "4.9", label: "Google Rating", isStars: true },
              { metric: "112", label: "5-Star Reviews" },
            ].map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[55%] sm:w-[40%] lg:w-full snap-center py-3 px-2 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/[0.03] rounded-xl lg:rounded-none">
                {item.isStars ? (
                  <div className="flex flex-col items-center mb-1.5">
                    <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">{item.metric}</span>
                    <div className="flex mt-1 gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#E97724] fill-current" />)}
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 flex items-baseline tracking-tight leading-none">
                    {item.metric}<span className="text-[#E97724] text-xl md:text-2xl font-bold ml-0.5">+</span>
                  </div>
                )}
                <div className="w-8 h-px bg-white/10 mb-2 mt-1" />
                <div className="text-[10px] md:text-xs font-medium text-white/70 tracking-widest uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. IS VS IS NOT THE RIGHT CALL */}
      <section className="py-12 md:py-16 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14 space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#1A332F]">
              An Honest Diagnosis. No Unnecessary Surgeries.
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium">
              We look at your lifestyle, not just your MRI. Here is how we evaluate if joint replacement is actually required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* NOT the right call */}
            <div className="bg-[#F3F6F4] rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E97724]/5 rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <XCircle className="w-8 h-8 text-[#E97724]" />
                <h3 className="text-xl md:text-2xl font-black text-[#1A332F]">When Surgery is <span className="text-[#E97724] underline decoration-4 underline-offset-4">NOT</span> Needed</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Mild to moderate arthritis with preserved joint space.",
                  "Pain is mostly muscular or ligament-based (identifiable via 360° map).",
                  "You haven't yet tried a dedicated, personalized physiotherapy program.",
                  "Pain is manageable with lifestyle modifications and occasional medication."
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IS the right call */}
            <div className="bg-[#1A332F] rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <CheckCircle2 className="w-8 h-8 text-[#E97724]" />
                <h3 className="text-xl md:text-2xl font-black text-white">When Surgery <span className="text-[#E97724]">IS</span> the Right Call</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Bone-on-bone arthritis causing severe, constant pain even at rest.",
                  "Significant joint deformity (severely bowlegged or knock-kneed).",
                  "Conservative treatments (physio, injections) have completely failed.",
                  "Inability to perform basic daily activities like walking or sleeping."
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#E97724] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm md:text-base font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* 6. YOUR SECOND-OPINION PROCESS */}
      <section className="py-10 md:py-16 px-4 bg-white relative border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Your Second-Opinion Process at Kneev
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-2 max-w-xl mx-auto">
              A transparent, pressure-free path to understanding your real treatment options.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#E97724]/40 to-transparent z-0"></div>
            <div className="md:hidden absolute top-4 bottom-4 left-[19px] w-[2px] bg-[#E97724]/20 z-0"></div>

            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
              {[
                { step: "1", title: "Book Appointment", desc: "Reserve your slot online to ensure dedicated time with the doctor." },
                { step: "2", title: "Bring Your MRI", desc: "Bring your existing scans and reports to avoid repeating expensive tests." },
                { step: "3", title: "Physical Exam & Review", desc: "Dr. Amit performs a detailed manual check and correlates it with your scans." },
                { step: "4", title: "Treatment Plan", desc: "Leave with a transparent, honest diagnosis with zero pressure to opt for surgery." }
              ].map((item, idx) => (
                <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center group relative w-full">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#E97724] text-[#E97724] flex items-center justify-center font-black text-base shadow-[0_0_15px_rgba(233,119,36,0.1)] group-hover:bg-[#E97724] group-hover:text-white transition-all duration-300 z-10 mb-0 md:mb-4 mr-4 md:mr-0 group-hover:scale-110">
                    {item.step}
                  </div>
                  <div className="flex-1 mt-0.5 md:mt-0 px-0 md:px-2">
                    <h4 className="font-bold text-base md:text-lg text-[#1A332F] leading-tight mb-1.5">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* 7. PRICING TRANSPARENCY */}
      <section className="py-10 md:py-14 px-4 bg-[#F3F6F4] relative border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Pricing Transparency
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-2 max-w-xl mx-auto">
              No hidden fees. We believe you should know exactly what to expect before you walk in.
            </p>
          </div>

          {/* The "Pricing Board" - Mobile: Vertical List | Desktop: Horizontal Row */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* 1. Clinical Consultation */}
            <div className="flex-1 p-5 md:p-8 flex flex-row md:flex-col items-center justify-between md:justify-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-[#FDFCF8] transition-colors duration-300 group cursor-default">
              <div className="flex items-center gap-4 md:flex-col md:gap-3 text-left md:text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A332F]/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1A332F]/10 transition-all duration-300 flex-shrink-0">
                  <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-[#1A332F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A332F] text-sm md:text-base leading-tight">Clinical Consultation</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1 hidden md:block">Complete assessment & second opinion.</p>
                </div>
              </div>
              <div className="text-right md:text-center md:mt-3 flex-shrink-0">
                <div className="text-lg md:text-2xl font-black text-[#E97724]">₹600</div>
                <p className="text-[10px] text-gray-400 font-medium md:hidden mt-0.5 uppercase tracking-wide">Assessment</p>
              </div>
            </div>
            
            {/* 2. Digital Diagnostics */}
            <div className="flex-1 p-5 md:p-8 flex flex-row md:flex-col items-center justify-between md:justify-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-[#FDFCF8] transition-colors duration-300 group cursor-default">
              <div className="flex items-center gap-4 md:flex-col md:gap-3 text-left md:text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A332F]/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1A332F]/10 transition-all duration-300 flex-shrink-0">
                  <Video className="w-5 h-5 md:w-6 md:h-6 text-[#1A332F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A332F] text-sm md:text-base leading-tight">Digital Diagnostics</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1 hidden md:block">X-Rays done on-site if required.</p>
                </div>
              </div>
              <div className="text-right md:text-center md:mt-3 flex-shrink-0">
                <div className="text-sm md:text-lg font-bold text-[#E97724]">Standard Rates</div>
                <p className="text-[10px] text-gray-400 font-medium md:hidden mt-0.5 uppercase tracking-wide">Lab Fees</p>
              </div>
            </div>

            {/* 3. Knee Replacement (Highlighted) */}
            <div className="flex-1 p-5 md:p-8 flex flex-row md:flex-col items-center justify-between md:justify-center hover:bg-[#E97724]/[0.02] transition-colors duration-300 group cursor-default relative overflow-hidden">
              {/* Highlight Bar: Left on Mobile, Top on Desktop */}
              <div className="absolute left-0 top-0 w-1.5 h-full md:w-full md:h-1.5 bg-[#E97724]"></div>
              
              <div className="flex items-center gap-4 md:flex-col md:gap-3 text-left md:text-center pl-2 md:pl-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E97724]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E97724]/20 transition-all duration-300 flex-shrink-0">
                  <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-[#E97724]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A332F] text-sm md:text-base leading-tight">Knee Replacement</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1 hidden md:block leading-tight px-2">Dependent on implant & approach.</p>
                </div>
              </div>
              <div className="text-right md:text-center md:mt-3 flex-shrink-0">
                <div className="text-base md:text-lg font-black text-[#E97724]">₹1.5L - ₹3.5L</div>
                <p className="text-[10px] text-gray-400 font-medium md:hidden mt-0.5 uppercase tracking-wide">Estimated</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      

      {/* 8. INTEGRATED SERVICES STRIP */}
      <section className="bg-[#1A332F] py-8 px-4 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center gap-6 md:gap-12">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-black mb-2">Everything You Need, Under One Roof</h3>
            <p className="text-sm md:text-base text-white/80 font-medium">
              Post-op physio, digital X-ray, and 360° Motion Mapping — all at the same clinic. No external referrals or running around town.
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 opacity-80 justify-center">
            <div className="flex flex-col items-center gap-2"><HeartPulse className="w-8 h-8"/> <span className="text-xs font-bold uppercase tracking-wider">Physio</span></div>
            <div className="flex flex-col items-center gap-2"><Video className="w-8 h-8"/> <span className="text-xs font-bold uppercase tracking-wider">X-Ray</span></div>
            <div className="flex flex-col items-center gap-2"><Activity className="w-8 h-8"/> <span className="text-xs font-bold uppercase tracking-wider">Motion Map</span></div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (MIXED) */}
      <section className="py-10 md:py-16 px-4 bg-[#FDFCF8] border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Real Patients. Real Relief.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-xl mx-auto">
              Whether you need targeted physio or precise surgery, see how we've helped locals get back to doing what they love.
            </p>
          </div>
          
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div 
              id="testimonial-scroll"
              className="flex overflow-x-auto pb-4 gap-4 md:gap-5 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onMouseEnter={() => window.pauseScroll = true}
              onMouseLeave={() => window.pauseScroll = false}
              onTouchStart={() => window.pauseScroll = true}
              onTouchEnd={() => { setTimeout(() => window.pauseScroll = false, 3000) }}
            >
              {[
                { name: "Rajesh", loc: "Non-Surgical Recovery", text: "Told to undergo knee replacement elsewhere. Visited Dr. Amith for a second opinion. After his guided physio, my pain is down by 90% and I avoided surgery." },
                { name: "Lakshmi", loc: "Surgical Recovery", text: "My arthritis was bone-on-bone. Dr. Amit performed a successful knee replacement. I was walking the next day and my quality of life has completely returned." },
                { name: "Meenakshi", loc: "Second Opinion", text: "Finding an honest clinic nearby can be exhausting. Kneev provided an accurate diagnosis on the spot and didn't force excessive medication or surgery." },
                { name: "Vikram", loc: "Surgical Recovery", text: "Dr. Amith handled my complex joint reconstruction perfectly. The transparency in pricing and direct availability post-surgery made all the difference." },
                { name: "Srinivas", loc: "Diagnostics", text: "The 360° motion mapping changed everything. They found the real reason my knee hurt during morning walks without needing an operation. Highly recommend." }
              ].map((tst, idx) => (
                <div key={idx} className="min-w-[280px] md:min-w-[320px] max-w-[320px] flex-shrink-0 snap-center bg-white p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="mb-3 flex justify-between items-center">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFBF23] fill-current" />)}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed mb-5">"{tst.text}"</p>
                  </div>
                  
                  <div className="flex items-center pt-3 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-[#E97724]/10 text-[#E97724] flex items-center justify-center font-bold text-sm mr-3">
                      {tst.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1A332F] text-sm leading-tight">{tst.name}</div>
                      <div className="text-[#E97724] font-semibold text-[11px] uppercase tracking-wide">{tst.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
{/* 10. ALSO TREATING SUB-SECTION */}
      <section className="py-10 md:py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A332F]">
              Also Specializing In
            </h2>
          </div>

          {/* Compact, Interactive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { 
                title: "Knee Pain", 
                desc: "Understanding causes and when to seek professional help.", 
                icon: Stethoscope 
              },
              { 
                title: "Knee Arthritis", 
                desc: "Osteoarthritis management and treatment options.", 
                icon: Bone 
              },
              { 
                title: "ACL Injury", 
                desc: "Anterior cruciate ligament tears and full recovery.", 
                icon: Activity 
              },
              { 
                title: "PCL Injury", 
                desc: "Posterior cruciate ligament injuries and management.", 
                icon: ShieldCheck 
              },
              { 
                title: "Meniscus Injury", 
                desc: "Advanced repair and tissue healing protocols.", 
                icon: ShieldAlert 
              },
              { 
                title: "Arthroscopy", 
                desc: "Minimally invasive, precision keyhole surgeries.", 
                icon: HeartPulse 
              }
            ].map((condition, idx) => (
              <div 
                key={idx} 
                className="group bg-[#FDFCF8] border border-gray-200 p-3.5 md:p-4 rounded-xl flex items-start gap-3.5 transition-all duration-300 ease-in-out hover:bg-white hover:border-[#E97724]/40 hover:shadow-[0_4px_15px_rgba(233,119,36,0.08)] hover:-translate-y-0.5 cursor-default"
              >
                {/* Icon Container with hover effect */}
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#E97724]/10 group-hover:border-[#E97724]/20">
                  <condition.icon className="w-4 h-4 md:w-5 md:h-5 text-[#E97724]" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 mt-0.5">
                  <h4 className="font-bold text-[#1A332F] text-sm md:text-[15px] leading-tight mb-1 group-hover:text-[#E97724] transition-colors">
                    {condition.title}
                  </h4>
                  <p className="text-[11px] md:text-xs text-gray-500 font-medium leading-snug">
                    {condition.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. INSURANCE & CASHLESS */}
      <section className="py-10 px-4 bg-[#FDFCF8] border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-[#E97724]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Building2 className="w-8 h-8 text-[#E97724]" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-[#1A332F] mb-1">Corporate & Insurance Coverage</h3>
            <p className="text-sm text-gray-600 font-medium">
              We assist with documentation for insurance claims and are in the process of empaneling with major corporate health networks. <strong>Contact our front desk to verify your specific insurance provider.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-12 md:py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
            {[
              { q: "How does the second-opinion process work?", a: "Bring your existing MRI/X-Rays. Dr. Amit will review them, perform a physical exam, and provide an honest assessment of whether you truly need surgery or if conservative care will work." },
              { q: "Will I definitely need surgery for my joint pain?", a: "Absolutely not. Over 80% of our patients recover fully through guided physiotherapy and conservative medication." },
              { q: "Is the ₹600 fee inclusive of diagnostic X-rays?", a: "The ₹600 fee covers the comprehensive clinical evaluation with Dr. Amith. Digital X-Rays or lab diagnostics are charged separately at standard rates." },
              { q: "What is the cost of knee replacement surgery?", a: "Surgery costs vary based on the implant used and whether a robotic or conventional approach is chosen. We provide a fully transparent cost breakdown after your clinical assessment." },
              { q: "Robotic vs. Conventional surgery—which is better?", a: "Robotic surgery offers extreme precision for implant alignment, often leading to a more natural feeling joint and faster recovery. Dr. Amit is certified in both and will recommend the best option for your specific anatomy." },
              { q: "What is the recovery timeline for surgery?", a: "Most patients are walking with support the next day. A full return to normal daily activities usually takes 4 to 6 weeks with dedicated physiotherapy." },
              { q: "Do you offer corporate or insurance coverage?", a: "Yes, our team supports proper claim documentation processing for surgical procedures and major treatments." },
              { q: "What is a 360° Motion Map?", a: "It is an advanced screening we use to identify hidden muscular imbalances and biomechanical faults that standard MRIs often miss." },
              { q: "Can I bring an old MRI report?", a: "Yes, please bring any recent scans. We prefer not to repeat tests unless clinically necessary." },
              { q: "Is physiotherapy done at the same clinic?", a: "Yes! We have an integrated, fully-equipped physiotherapy center right here, so you don't have to travel elsewhere for rehab." }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-gray-200 py-4 cursor-pointer">
                <summary className="font-bold text-[#1A332F] text-sm md:text-base flex justify-between items-center list-none outline-none">
                  <span>Q. {faq.q}</span>
                  <span className="relative flex-shrink-0 ml-4 w-4 h-4 flex items-center justify-center text-[#E97724]">
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
      <section className="py-10 md:py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          
          {/* Information Side */}
          <div className="space-y-5 md:space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
                Conveniently Located in South Bengaluru
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
                Easily accessible from major neighborhoods. Stop living with pain and visit us today.
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
                  <a href="tel:+916366700736" className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors">
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
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-[#E97724] font-bold mt-0.5">Sunday: By appointment only</p>
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
      
      {/* 13. PRE-FOOTER CTA */}
      <section className="py-12 md:py-20 px-4 bg-[#E97724] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Take the First Step Toward a Pain-Free Life.
            </h2>
            <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              You deserve an honest opinion. Secure your complete assessment with Jayanagar's trusted orthopedic specialist today.
            </p>
            
            <ul className="text-white space-y-3 font-bold text-sm md:text-base hidden md:block mt-6">
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Transparent Pricing, No Hidden Costs
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Conservative Care First Approach
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Advanced Diagnostics On-Site
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
            <LeadForm onSubmit={(e) => handleFormSubmit(e, 'Footer Form', setFooterSubmitted)} />
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
        <a 
          href="https://wa.me/916366700736" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a 
          href="tel:+916366700736" 
          aria-label="Call Clinic"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#E97724] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(26,51,47,0.3)] hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}