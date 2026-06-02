"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Phone, MapPin, Clock, CheckCircle, Star, 
  Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, Bone, ShieldCheck, 
  ThumbsUp, ArrowRight, Video, Zap,Plus,Minus,Mail
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
        "medicalSpecialty": "Orthopedic"
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
  className="relative pt-10 pb-12 md:pt-16 md:pb-20 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/hero-knee.png')" }}
>
  {/* Premium Brand-Aligned Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1A332F] via-[#1A332F]/90 to-[#1A332F]/40 z-0"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
    
    {/* Left Content */}
    <div className="lg:col-span-7 space-y-5 text-center md:text-left">
      <div className="inline-flex items-center text-[#E97724] font-bold text-xs md:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
        Knee Pain Treatment in Jayanagar
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight">
        Expert Care for <br className="hidden md:block"/>
        <span className="text-[#E97724]">Knee Pain & Joint Problems</span>
      </h1>
      
      <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
        Consult experienced orthopaedic specialists for knee pain, arthritis, ligament injuries, stiffness, swelling, and mobility issues.
      </p>

      {/* Trust Badges - Updated for dark background */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto md:mx-0">
        {[
          "Experienced Orthopaedic Specialists",
          "Advanced Diagnostics",
          "Personalized Treatment Plans",
          "Thousands of Happy Patients"
        ].map((badge, i) => (
          <div key={i} className="flex items-center space-x-2 text-left bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-lg border border-white/10 md:border-none shadow-sm md:shadow-none">
            <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
            <span className="font-bold text-sm text-white/95">{badge}</span>
          </div>
        ))}
      </div>

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

{/* 3. PREMIUM DOCTOR PROFILE SECTION */}
      <section id="doctor" className="py-8 md:py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Premium Contained Card */}
          <div className="bg-[#FDFCF8] rounded-[2rem] shadow-lg border border-gray-100 p-5 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center relative overflow-hidden">
            
            {/* Subtle decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E97724] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

            {/* Image Column */}
            <div className="relative w-full max-w-[240px] md:max-w-[300px] mx-auto md:w-2/5 shrink-0 z-10">
              {/* Offset accent border */}
              <div className="absolute inset-0 bg-[#1A332F] rounded-[2rem] transform -rotate-3 scale-105 opacity-5"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-md border-4 border-white bg-white">
                <Image 
                  src="/dr.JPG" 
                  alt="Dr. Amith P. Shetty - Orthopaedic Surgeon" 
                  width={400} 
                  height={500} 
                  priority 
                  className="object-cover w-full aspect-[4/5]" 
                />
              </div>
            </div>
            
            {/* Text Column */}
            <div className="w-full md:w-3/5 z-10 text-center md:text-left flex flex-col justify-center">
              
              {/* Header / Name */}
              <div className="mb-5 md:mb-6">
                <span className="inline-block px-3 py-1 bg-[#E97724]/10 text-[#E97724] text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full mb-3">
                  Knee, Hip & Spine Specialist
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1A332F] leading-tight">
                  Dr. Amith P. Shetty
                </h2>
                <p className="text-gray-500 text-xs md:text-sm font-bold mt-1.5">
                  MBBS, MS Orthopaedics, Dip SICOT (Belgium), FIJR (Germany)
                </p>
              </div>

              {/* Experience Points - Scannable List */}
              <div className="space-y-3 md:space-y-4 pt-4 border-t border-gray-200 text-left">
                {[
                  { 
                    icon: Award, 
                    text: "Over a decade of clinical experience in joint replacement and trauma surgery." 
                  },
                  { 
                    icon: Stethoscope, 
                    text: "Trained across high-volume hospital settings with exposure to complex and revision cases." 
                  },
                  { 
                    icon: ShieldCheck, 
                    text: "Conservative-first philosophy — surgery is recommended only when non-operative care is insufficient." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start bg-white md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-none">
                    <div className="bg-[#F3F6F4] md:bg-transparent p-1.5 md:p-0 rounded-lg mr-3 flex-shrink-0 mt-0.5 md:mt-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#E97724]" />
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-10 md:py-16 px-4 bg-[#1A332F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black">Why Choose Kneev</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Conservative First", icon: ShieldCheck, desc: "Surgery is our absolute last resort." },
              { title: "Transparent Cost", icon: ThumbsUp, desc: "No hidden fees for scans or consults." },
              { title: "One-Stop Clinic", icon: MapPin, desc: "X-ray, physio & consult under one roof." },
              { title: "Expert Diagnosis", icon: Stethoscope, desc: "Thorough clinical manual assessments." }
            ].map((box, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <box.icon className="w-6 h-6 md:w-8 md:h-8 text-[#E97724] mb-3" />
                <h3 className="text-base md:text-lg font-bold mb-1">{box.title}</h3>
                <p className="text-xs text-white/60 font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KNEE CONDITIONS TREATED */}
{/* 5. KNEE CONDITIONS TREATED */}
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A332F]">Knee Conditions Treated</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">Comprehensive care for all forms of joint distress.</p>
          </div>
        </div>
        
        {/* Scrollable Container - Bleeds to the edge on mobile for better UX */}
        <div className="max-w-6xl mx-auto pl-4 md:px-4">
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar pr-4 md:pr-0">
            {[
              { 
                title: "Meniscus Tear", 
                desc: "A tear in the cushioning cartilage of the knee that leads to pain, swelling, and instability during movement.", 
                img: "/cond-meniscus.png" 
              },
              { 
                title: "ACL, PCL & MCL Injuries", 
                desc: "Damage to the major stabilizing ligaments of the knee that affects balance, strength, and joint control.", 
                img: "/cond-acl.png" 
              },
              { 
                title: "Osteoarthritis", 
                desc: "Gradual wear and tear of joint cartilage causing deep aching pain, stiffness, and reduced mobility over time.", 
                img: "/cond-arthritis.png" 
              },
              { 
                title: "Runner's Knee", 
                desc: "Dull aching pain around or behind the kneecap, often caused by overuse, repetitive stress, or muscle imbalances.", 
                img: "/cond-knee.png" 
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[280px] w-[85vw] md:w-[320px] flex-shrink-0 snap-start bg-[#FDFCF8] rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 overflow-hidden flex flex-col group hover:border-[#E97724]/30 transition-colors duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-48 md:h-56 bg-gray-100 overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A332F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TREATMENT OPTIONS */}
{/* 6. TREATMENT OPTIONS */}
      <section className="py-10 md:py-16 bg-[#F3F6F4] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A332F]">Treatment Options</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">Personalized care plans focusing on conservative treatments first.</p>
          </div>
        </div>
        
        {/* Scrollable Container - Bleeds to the edge on mobile */}
        <div className="max-w-6xl mx-auto pl-4 md:px-4">
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar pr-4 md:pr-0">
            {[
              { 
                title: "Targeted Physiotherapy", 
                desc: "Custom rehab programs to restore mobility and strengthen support muscles around the joint.", 
                img: "/treat-physio.png" 
              },
              { 
                title: "Medication & Injections", 
                desc: "Advanced pain management and joint lubrication therapies to delay or entirely avoid surgery.", 
                img: "/treat-injection.jpg" 
              },
              { 
                title: "Bracing & Support", 
                desc: "Custom-fitted offloading braces designed to relieve joint pressure and stabilize movement during recovery.", 
                img: "/treat-brace.JPG" 
              },
              { 
                title: "Surgical Intervention", 
                desc: "Minimally invasive arthroscopic procedures and joint replacements when conservative care is fully exhausted.", 
                img: "/treat-surg.jpg" // Fallback image name for the 4th card
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[280px] w-[85vw] md:w-[320px] flex-shrink-0 snap-start bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 overflow-hidden flex flex-col group hover:border-[#E97724]/30 transition-colors duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-48 md:h-56 bg-gray-200 overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A332F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      
      <section className="py-10 md:py-14 px-4 bg-[#FDFCF8] border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              Real Patients. Real Relief.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-xl mx-auto">
              See how we've helped hundreds of locals get back to doing what they love.
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
                { name: "Rajesh", loc: "JP Nagar", text: "Told to undergo knee replacement elsewhere. Visited Dr. Amith for a second opinion. After his guided physio, my pain is down by 90%." },
                { name: "Meenakshi", loc: "Jayanagar", text: "Finding an honest clinic nearby can be exhausting. Kneev provided an accurate diagnosis on the spot and didn't force excessive medication." },
                { name: "Vikram", loc: "Banashankari", text: "The transparent pricing and direct doctor availability makes this the best clinic. I finally have relief from my chronic sciatica." },
                { name: "Anitha", loc: "BTM Layout", text: "Dr. Amith took the time to explain my MRI step-by-step. I've never had a doctor be so patient. The treatment plan worked wonderfully." },
                { name: "Srinivas", loc: "Basavanagudi", text: "The 360° motion mapping changed everything. They found the real reason my knee hurt during morning walks. Highly recommend this team." }
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
                    <p className="text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed mb-5">"{tst.text}"</p>
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

      {/* 8. FAQ SECTION (Two Column & Minimalist) */}
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
                q: "Why does my knee make a cracking or popping sound?", 
                a: "If it's painless, it's usually harmless gas bubbles in the joint. However, if the cracking is accompanied by pain, stiffness, or swelling, it could indicate cartilage wear (osteoarthritis) or a meniscus tear that needs an expert evaluation." 
              },
              { 
                q: "I have knee pain mainly when climbing stairs. What could it be?", 
                a: "Pain specific to stairs or squatting is often associated with 'Runner's Knee' (Patellofemoral Pain Syndrome) or early cartilage wear behind the kneecap. We can identify the exact muscular imbalance causing this during your clinical assessment." 
              },
              { 
                q: "If I have severe osteoarthritis, is knee replacement my only option?", 
                a: "Definitely not. Dr. Amith strongly believes in a conservative-first approach. We exhaust all non-surgical options—such as targeted physiotherapy, offloading braces, and joint lubrication injections—before even discussing surgery." 
              },
              { 
                q: "How do I know if my knee injury requires immediate attention?", 
                a: "You should see a specialist immediately if you experience sudden swelling, cannot bear weight on the leg, feel the knee 'giving way' or buckling, or cannot fully straighten your leg after an injury." 
              },
              { 
                q: "Can physiotherapy actually fix my chronic knee pain?", 
                a: "Yes. Many chronic knee issues stem from weak stabilizing muscles around the joint. Our targeted physiotherapy programs strengthen these specific muscles, reducing the load on your knee and providing long-term relief." 
              },
              { 
                q: "Do I need to get an MRI before my first consultation?", 
                a: "No, please don't get an MRI before seeing us. A thorough physical examination by Dr. Amith is often enough to diagnose the root cause. We will only recommend an MRI if it is clinically necessary for your treatment." 
              },
              { 
                q: "Is the ₹600 fee inclusive of diagnostic X-rays?", 
                a: "The ₹600 fee covers the comprehensive clinical evaluation and one-on-one consultation with Dr. Amith. If digital X-Rays are needed, they are done on-site and charged separately at standard, transparent rates." 
              },
              { 
                q: "Are all treatments and rehab done at the same clinic?", 
                a: "Yes! We have an integrated facility including digital X-rays and a fully-equipped physiotherapy center right here, so your entire recovery journey happens conveniently under one roof." 
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

      {/* 9. CLINIC INFORMATION + MAP */}
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

      {/* 10. CTA SECTION */}
<section className="py-12 md:py-20 px-4 bg-[#E97724] relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Take the First Step Toward a Pain-Free Life.
            </h2>
            <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              You deserve to walk, work, and sleep comfortably. Secure your complete assessment with Jayanagar's trusted orthopedic specialist today.
            </p>
            
            <ul className="text-white space-y-3 font-bold text-sm md:text-base hidden md:block mt-6">
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Transparent Pricing, No Hidden Costs
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Conservative Care First Approach
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> Relief from Day One
              </li>
            </ul>
          </div>

          {/* Connected LeadForm Component */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
            <LeadForm formTitle="Request a Callback" />
          </div>

        </div>
      </section>

      <Footer />

      {/* FLOATING ACTION BUTTONS (Replaces old mobile sticky bar) */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
        
        {/* WhatsApp Button */}
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

        {/* Phone Button */}
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

    
    </main>
  );
}