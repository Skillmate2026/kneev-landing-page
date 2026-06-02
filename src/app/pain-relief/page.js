"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Phone, MapPin, Clock, CheckCircle, Star, 
  Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, Bone, ShieldCheck, 
  ThumbsUp, ArrowRight, Video, Zap, Plus, Minus, Mail,
  ScanSearch, ClipboardList, ShieldAlert, PersonStanding
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';

export default function KneePainLandingPage() {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        "medicalSpecialty": "Orthopedic, Pain Management, Physiotherapy"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <section 
        className="relative pt-8 pb-12 md:pt-16 md:pb-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-knee.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1A332F] via-[#1A332F]/95 to-[#1A332F]/60 z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center md:text-left">
            <div className="inline-flex items-center text-[#E97724] font-bold text-xs md:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
              <ScanSearch className="w-4 h-4 mr-2" />
              Advanced Pain Diagnosis
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Knee, Back, or Joint Pain?<br />
              <span className="text-[#E97724]">Get Real Relief — Not Just Painkillers.</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              Pinpoint the exact cause of your pain with our advanced <strong className="text-white">360° Motion Map</strong>. No blind treatments, no unnecessary surgeries, and absolutely <strong className="text-[#E97724] bg-[#E97724]/10 px-1.5 rounded">no forced 10-session packages</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto md:mx-0">
              {["Find the root cause, not the symptom", "Conservative-first treatment", "Single-session focused physio", "Same-day digital diagnostics"].map((badge, i) => (
                <div key={i} className="flex items-center space-x-2.5 text-left bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
                  <span className="font-bold text-sm text-white/95">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto mt-4 lg:mt-0">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 relative z-10">
              <div className="mb-5 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-black text-[#1A332F]">Book Your Assessment</h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium">Tell us where it hurts. We'll handle the rest.</p>
              </div>
              {/* NOTE: Ensure LeadForm.jsx is updated to show 4 fields: Name, Phone, Where does it hurt?, How long? */}
              <LeadForm source="Pain Hero Section" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 gap-6 lg:gap-0 divide-x-0 lg:divide-x lg:divide-gray-200">
            {[
              { metric: "17+", label: "Years Experience" },
              { metric: "5,000+", label: "Patients Treated" },
              { metric: "4.9", label: "Google Rating", isStars: true },
              { metric: "150+", label: "Pain-Free Reviews" },
            ].map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[55%] sm:w-[40%] lg:w-full flex flex-col items-center justify-center text-center px-4">
                {item.isStars ? (
                  <div className="flex flex-col items-center mb-1">
                    <span className="text-3xl font-black text-[#1A332F]">{item.metric}</span>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#E97724] fill-current" />)}
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl font-black text-[#1A332F] mb-1">{item.metric}</div>
                )}
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONDITION-SPECIFIC BLOCKS (Treatment Depth) */}
      <section id="conditions" className="py-12 md:py-20 px-4 bg-[#F9FACA]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A332F] tracking-tight mb-3">
              Targeted Relief For Your Specific Pain
            </h2>
            <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
              We don't use a "one-size-fits-all" approach. Every joint requires specific diagnostics and tailored conservative care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {[
              {
                title: "Knee Pain & Stiffness",
                icon: Bone,
                causes: "Osteoarthritis, Meniscus tears, Runner's knee, Ligament sprains.",
                treatment: "360° biomechanical mapping, joint lubrication injections, targeted quadriceps strengthening, and offloading braces."
              },
              {
                title: "Chronic Back & Spine Pain",
                icon: PersonStanding,
                causes: "Sciatica, slipped discs, postural strain, muscle spasms.",
                treatment: "Postural correction mapping, core stabilization physio, targeted manual therapy to release nerve compression."
              },
              {
                title: "Shoulder & Neck Pain",
                icon: Activity,
                causes: "Rotator cuff tears, frozen shoulder, cervical spondylosis.",
                treatment: "Scapular mobility training, anti-inflammatory protocols, and single-session frozen shoulder release techniques."
              },
              {
                title: "Sports Injuries",
                icon: HeartPulse,
                causes: "ACL/PCL tears, ankle sprains, tennis elbow, tendonitis.",
                treatment: "Accelerated athletic rehab, localized tissue healing therapies, and advanced return-to-sport testing."
              }
            ].map((cond, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#E97724]/30 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F6F4] flex items-center justify-center group-hover:bg-[#E97724]/10 transition-colors">
                    <cond.icon className="w-6 h-6 text-[#1A332F] group-hover:text-[#E97724]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#1A332F]">{cond.title}</h3>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Causes We Diagnose:</h4>
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{cond.causes}</p>
                  </div>
                  <div className="w-full h-px bg-gray-50"></div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">How Kneev Treats It:</h4>
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{cond.treatment}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50">
                  <a href="#booking-form" onClick={(e) => smoothScroll(e, 'booking-form')} className="inline-flex items-center text-[#E97724] font-bold text-sm hover:text-[#c46019] transition-colors">
                    Book Assessment <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT IS 360° MOTION MAP */}
      <section className="py-12 md:py-20 px-4 bg-[#1A332F] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E97724] rounded-full blur-[120px] opacity-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[#E97724] text-xs font-bold uppercase tracking-widest">
              <ScanSearch className="w-4 h-4 mr-2" /> Our Unique Diagnostic Tool
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Stop Guessing. <br />Start Fixing with the <span className="text-[#E97724]">360° Motion Map</span>.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
              Standard X-rays only show bones. They completely miss the muscular imbalances, tightness, and postural habits that actually cause 80% of joint pain. 
            </p>
            <ul className="space-y-4 pt-2">
              {[
                { title: "What it measures:", desc: "Joint mobility, muscle weakness, and gait (how you walk/stand)." },
                { title: "Why it matters:", desc: "Allows us to treat the root cause, not just numb the symptom." },
                { title: "What you get:", desc: "A printed, easy-to-understand report showing exactly what's wrong." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <ShieldAlert className="w-5 h-5 text-[#E97724] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{item.title}</span>
                    <span className="text-sm text-white/70 font-medium">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Representation */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A1A18] aspect-square md:aspect-[4/3] flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-[url('/hero-knee.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
              {/* Abstract representation of 360 mapping */}
              <div className="relative z-10 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-[#E97724] flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <PersonStanding className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white tracking-widest">BIOMECHANICAL ANALYSIS</h3>
                <p className="text-xs text-[#E97724] uppercase font-bold tracking-widest">Included in Initial ₹600 Consult</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SINGLE-SESSION PHYSIO CONTRAST */}
      {/* 6. SINGLE-SESSION PHYSIO CONTRAST */}
      <section className="py-8 md:py-10 px-4 bg-[#E97724] relative overflow-hidden">
        {/* Subtle Background Accents */}
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#1A332F]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-10 relative z-10 shadow-lg">
          
          {/* Left Side: The Bold Hook */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
              <span className="text-white/60 line-through decoration-[#1A332F]/60 decoration-4">Other clinics sell 10 sessions.</span><br />
              <span className="bg-white text-[#E97724] px-3 py-1.5 rounded-xl shadow-sm inline-block mt-2">
                We sell exactly <span className="text-[#1A332F]">ONE</span>.
              </span>
            </h2>
          </div>

          {/* Right Side: The Explanation */}
          <div className="w-full md:w-1/2 text-center md:text-left border-t md:border-t-0 md:border-l border-white/20 pt-5 md:pt-0 md:pl-8">
            <p className="text-white/95 text-sm md:text-base font-medium leading-relaxed">
              We don't hold you hostage to endless, repetitive appointments. We teach you targeted rehab exercises in a <strong className="text-[#1A332F] bg-white/90 px-1.5 py-0.5 rounded">single, highly-focused session</strong>. Do them at home. Come back only if you need to.
            </p>
          </div>

        </div>
      </section>

      {/* 7. DR AMIT BIO */}
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
                <Award className="w-4 h-4 mr-2 text-[#E97724]" /> Credentials & Trust
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
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* 8. WHY CHOOSE KNEEV (Icon Grid) */}
      <section className="py-12 md:py-16 px-4 bg-[#F3F6F4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">Why Choose Kneev</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Conservative Care First", icon: ShieldCheck, desc: "We focus on rehab and healing before ever mentioning surgery." },
              { title: "Transparent Pricing", icon: ThumbsUp, desc: "Clear ₹600 consult fee. No hidden diagnostic charges." },
              { title: "Everything Under One Roof", icon: MapPin, desc: "Consult, X-rays, and rehab happen in one location." },
              { title: "360° Motion Map", icon: ScanSearch, desc: "We analyze your body mechanics to fix the root cause." },
              { title: "Single-Session Physio", icon: HeartPulse, desc: "Learn your specific exercises once, do them at home." },
              { title: "Direct Doctor Access", icon: MessageSquare, desc: "Stay connected with our medical team after you leave." }
            ].map((box, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl hover:border-[#E97724]/40 transition-colors flex items-center group shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDFCF8] border border-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#E97724]/10 transition-colors">
                  <box.icon className="w-6 h-6 text-[#E97724]" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-0.5 text-[#1A332F] leading-tight">{box.title}</h3>
                  <p className="text-xs text-gray-500 leading-snug font-medium">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Pain Relief Focused) */}
      <section className="py-12 md:py-16 px-4 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Real Relief. Zero Exaggeration.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-xl mx-auto">
              Hear from locals who finally solved their chronic pain puzzles.
            </p>
          </div>
          
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div 
              id="testimonial-scroll"
              className="flex overflow-x-auto pb-4 gap-4 md:gap-5 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {[
                { name: "Suresh M.", loc: "Chronic Back Pain", text: "I thought I'd have back pain forever. The 360° map showed my posture was loading my lower spine. One physio session to learn the core exercises, and 3 weeks later, I'm completely pain-free." },
                { name: "Anitha V.", loc: "Severe Knee Pain", text: "I was popping painkillers daily to climb stairs. Dr. Amith found a tracking issue with my kneecap that X-Rays missed. The targeted approach works immediately." },
                { name: "Vikram S.", loc: "Sports Injury", text: "The single session approach blew my mind. Instead of selling me a ₹15,000 package, they taught me exactly how to rehab my shoulder tear at home. Truly ethical clinic." },
                { name: "Meenakshi R.", loc: "Joint Stiffness", text: "Finding an honest doctor nearby is exhausting. Dr. Amit spent 30 minutes just listening and examining my joints manually. I finally have my mobility back." },
                { name: "Rajesh K.", loc: "Sciatica Relief", text: "I was struggling to sit at my desk for more than an hour. The manual therapy and specific stretches they provided gave me relief from day one." }
              ].map((tst, idx) => (
                <div key={idx} className="min-w-[280px] md:min-w-[320px] max-w-[320px] flex-shrink-0 snap-center bg-[#FDFCF8] p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFBF23] fill-current" />)}
                    </div>
                    <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed mb-6">"{tst.text}"</p>
                  </div>
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#1A332F]/5 text-[#1A332F] flex items-center justify-center font-bold text-sm mr-3">
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

      {/* 10. LOCATION & MAP */}
      <section className="py-12 md:py-16 px-4 bg-[#F3F6F4] border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
                Conveniently Located in South Bengaluru
              </h2>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-left">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                    Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru 560011
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
                  <a href="tel:+916366700736" className="text-sm md:text-base text-gray-700 font-bold hover:text-[#E97724] transition-colors">
                    +91 636 670 0736
                  </a>
                </div>
                <div className="flex items-start pt-2 border-t border-gray-50">
                  <Clock className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                  <div className="text-sm md:text-base text-gray-700 font-medium leading-snug">
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-[#E97724] font-bold mt-1">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <p className="uppercase text-gray-400 font-bold tracking-wider text-[10px]">Driving Distance:</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Jayanagar (0m)", "JP Nagar (5m)", "Basavanagudi (7m)", "Banashankari (8m)", "BTM Layout (10m)"].map(loc => (
                  <span key={loc} className="bg-white text-xs font-bold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">{loc}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[320px] md:h-[450px] w-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1780162330680!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-12 md:py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
            {[
              { q: "What exactly is the 360° Motion Map?", a: "It's a specialized clinical assessment where we evaluate your posture, joint alignment, muscle tightness, and walking gait. It helps us find the mechanical cause of your pain rather than just treating the symptom." },
              { q: "Do I need to bring an MRI or X-Ray?", a: "If you already have them, please bring them. If you don't, do not get one before visiting. We prefer to do a physical assessment first—many conditions do not require expensive scans." },
              { q: "What does the single-session physio mean?", a: "Instead of making you come to the clinic 10-15 times, we teach you specific, targeted exercises during your visit. You perform these at home, saving you time and money." },
              { q: "Will I definitely need surgery for my joint pain?", a: "Absolutely not. Over 80% of our patients recover fully through guided physiotherapy and conservative medication. Surgery is always a last resort." },
              { q: "What types of pain do you treat?", a: "We specialize in all musculoskeletal pain—including knee pain, chronic back/spine pain, shoulder stiffness, sports injuries, and general arthritis." },
              { q: "How much does a consultation cost?", a: "Our comprehensive initial assessment, which includes the manual diagnostic check by Dr. Amit, is a flat ₹600. There are no hidden fees." },
              { q: "When should I see a specialist instead of waiting?", a: "Don't wait if your pain wakes you up at night, prevents you from bearing weight, causes visible swelling, or hasn't improved after a week of rest." },
              { q: "Do you offer corporate or insurance coverage?", a: "Yes, we assist with documentation for insurance claims for major procedures. Please contact our front desk to verify your specific provider." }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-gray-200 py-4 cursor-pointer">
                <summary className="font-bold text-[#1A332F] text-sm md:text-base flex justify-between items-center list-none outline-none">
                  <span className="pr-4">Q. {faq.q}</span>
                  <span className="relative flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#E97724] bg-[#FDFCF8] rounded-full">
                    <Plus className="w-4 h-4 absolute transition-opacity duration-200 group-open:opacity-0" strokeWidth={3} />
                    <Minus className="w-4 h-4 absolute transition-opacity duration-200 opacity-0 group-open:opacity-100" strokeWidth={3} />
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

      {/* 12. PRE-FOOTER CTA */}
      {/* 12. PRE-FOOTER CTA */}
      <section className="py-10 md:py-12 px-4 bg-[#1A332F] relative overflow-hidden">
        {/* Soft, premium light flares to replace heavy gradients */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#E97724]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2A524B,transparent_60%)] opacity-40 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          
          {/* Left Content Block: Text and Compact Feature Chips */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Stop Ignoring The Pain. <br />
              <span className="text-[#E97724]">Start Healing Today.</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Get an honest diagnosis and a personalized recovery plan from Jayanagar's trusted specialist.
            </p>
            
            {/* Highly compact, ultra-scannable badges that work perfectly across all devices */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {[
                "360° Motion Map",
                "Single-Session Plans",
                "Transparent ₹600 Fee"
              ].map((badge, i) => (
                <div 
                  key={i} 
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-bold text-white/90"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#E97724]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Block: Form Wrapper Card */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto flex-shrink-0">
            <div className="bg-white p-5 md:p-6 rounded-3xl shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.01]">
              <LeadForm source="Footer CTA" />
            </div>
          </div>

        </div>
      </section>
      {/* 13. FOOTER */}
      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
        <a href="https://wa.me/916366700736" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <a href="tel:+916366700736" aria-label="Call Clinic" className="w-12 h-12 md:w-14 md:h-14 bg-[#E97724] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        </a>
      </div>
    </main>
  );
}