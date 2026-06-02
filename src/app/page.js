"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Phone, MapPin, Clock, CheckCircle, Star, 
  Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, Bone, ShieldCheck, 
  UserCheck, ThumbsUp, ArrowRight, Video,Mail,Plus,Minus
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';

export default function LandingPage() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [utms, setUtms] = useState({
    source: '', medium: '', campaign: '', term: '', content: ''
  });

  // Safely parse UTM parameters on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        source: params.get('utm_source') || '',
        medium: params.get('utm_medium') || '',
        campaign: params.get('utm_campaign') || '',
        term: params.get('utm_term') || '',
        content: params.get('utm_content') || '',
      });
    }
  }, []);

  const formatPhoneForGoogle = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 ? `+91${cleaned}` : `+${cleaned}`;
  };

  const pushToDataLayer = (formData, formLocation) => {
    const userPhone = formData.get('phone') || '';
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission_success',
        form_location: formLocation,
        enhanced_conversion_data: {
          phone_number: formatPhoneForGoogle(userPhone),
        },
        utm_source: utms.source,
        utm_medium: utms.medium,
        utm_campaign: utms.campaign,
      });
    }
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
      <section className="relative pt-6 pb-12 md:pt-12 md:pb-16 px-4 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-knee.png')" }}>
        
        {/* Brand Color Shading Overlay */}
        {/* Fades from solid white/off-white on the left to a semi-transparent brand teal on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/90 to-[#1A332F]/40 z-0"></div>
        
        {/* Secondary subtle orange tint to warm up the image */}
        <div className="absolute inset-0 bg-[#E97724]/5 mix-blend-multiply z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#1A332F] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide border border-[#1A332F]/10 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-[#E97724] fill-current" />
              Trusted by 2,500+ Patients in Bengaluru
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A332F] leading-[1.15] tracking-tight">
              Trusted Orthopedic Clinic in <span className="text-[#E97724] relative whitespace-nowrap">
                Jayanagar, Bangalore
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#E97724]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/></svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              We know how exhausting constant knee or back pain can be. At Kneev, Dr. Amith takes the time to find the real root cause of your pain. Get a thorough, honest clinical assessment for just <span className="font-black text-[#E97724] text-lg bg-[#E97724]/10 px-1.5 rounded">₹600</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 justify-center md:justify-start">
              <div className="flex items-start space-x-2.5 text-left bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-white/50">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm md:text-base text-[#1A332F] leading-tight">Conservative Care First:<br/><span className="text-gray-600 font-medium text-xs md:text-sm">Surgery is a last resort.</span></span>
              </div>
              <div className="flex items-start space-x-2.5 text-left bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-white/50">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm md:text-base text-[#1A332F] leading-tight">We Actually Listen:<br/><span className="text-gray-600 font-medium text-xs md:text-sm">No rushed 5-min appointments.</span></span>
              </div>
            </div>
          </div>

          {/* Connected LeadForm Component */}
          <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto mt-6 lg:mt-0">
            {/* <div className="absolute inset-0 bg-[#E97724] rounded-[2rem] transform rotate-3 scale-105 opacity-20"></div> */}
            
            {/* The wrapper that gives the form its card appearance */}
            <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white relative z-10 flex flex-col justify-center">
              
              <div className="mb-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-black text-[#1A332F]">Book Your Assessment</h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Priority slots available for local residents.</p>
              </div>

              {/* Your custom form component */}
              <LeadForm />

            </div>
          </div>
          
        </div>
      </section>

      {/* 2. TRUST STRIP */}
<section className="bg-[#1A332F] py-6 md:py-8 px-4 relative overflow-hidden">
  {/* Subtle gradient overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A524B,transparent_70%)] opacity-50" />
  
  <div className="max-w-7xl mx-auto relative z-10 border border-white/5 bg-white/[0.02] rounded-2xl p-2 md:p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
    {/* Mobile: Horizontal scroll (requires hide-scrollbar CSS) | Desktop: grid with custom dividers */}
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
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">
                {item.metric}
              </span>
              <div className="flex mt-1 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#E97724] fill-current" />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 flex items-baseline tracking-tight leading-none">
              {item.metric}
              <span className="text-[#E97724] text-xl md:text-2xl font-bold ml-0.5">+</span>
            </div>
          )}
          
          <div className="w-8 h-px bg-white/10 mb-2 mt-1" />
          
          <div className="text-[10px] md:text-xs font-medium text-white/70 tracking-widest uppercase">
            {item.label}
          </div>
        </div>
      ))}
      
    </div>
  </div>
</section>
{/* 3. SERVICES & FEATURES */}
<section id="services" className="py-10 md:py-14 px-4 bg-white relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-8 space-y-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#1A332F]">
        Everything You Need, Under One Roof
      </h2>
      <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium">
        When you're in pain, you shouldn't have to travel between clinics and labs. We handle your entire recovery journey right here.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: "Expert Consultation", desc: "Hands-on clinical evaluation. We look at you, not just reports.", icon: Stethoscope },
        { title: "Targeted Physiotherapy", desc: "Personalized rehab to safely restore your joint mobility.", icon: HeartPulse },
        { title: "Digital X-Ray On-Site", desc: "Immediate high-resolution imaging for same-day diagnosis.", icon: Video },
        { title: "360° Motion Map", desc: "Advanced screening to identify hidden muscular imbalances.", icon: Activity },
        { title: "Knee Replacement", desc: "Precise robotic and conventional joint alignment options.", icon: UserCheck },
        { title: "Arthroscopic Surgery", desc: "Minimally invasive, keyhole procedures for faster recovery.", icon: Bone }
      ].map((s, i) => (
        <div key={i} className="p-4 md:p-5 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#E97724]/50 hover:shadow-md transition-all duration-300 flex items-start space-x-4 group">
          <div className="w-10 h-10 flex-shrink-0 bg-white rounded-xl flex items-center justify-center text-[#E97724] shadow-sm group-hover:scale-110 transition-transform duration-300 mt-0.5">
            <s.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold mb-1 text-[#1A332F] leading-tight">{s.title}</h3>
            <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. WHAT HAPPENS IN YOUR FIRST VISIT */}
      <section className="py-10 md:py-14 px-4 bg-[#F3F6F4] relative border-y border-gray-100">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-8 md:mb-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
        What to Expect on Day One
      </h2>
      <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
        A transparent, stress-free path to your relief.
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Desktop connecting line */}
      <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#E97724]/40 to-transparent z-0"></div>
      
      {/* Mobile connecting line */}
      <div className="md:hidden absolute top-4 bottom-4 left-[19px] w-[2px] bg-[#E97724]/20 z-0"></div>

      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 relative z-10">
        {[
          { step: "1", title: "Book Appointment", desc: "Pick a convenient time slot online to minimize your wait." },
          { step: "2", title: "Arrive at Clinic", desc: "Walk into our modern facility. Our staff will assist you." },
          { step: "3", title: "Consult Dr. Amith", desc: "Detailed manual check to find the root cause of the pain." },
          { step: "4", title: "Plan & Diagnostics", desc: "Leave with a transparent diagnosis and actionable steps." }
        ].map((item, idx) => (
          <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center group relative w-full">
            
            {/* Number Node */}
            <div className="flex-shrink-0 w-10 h-10 md:w-10 md:h-10 rounded-full bg-white border-2 border-[#E97724] text-[#E97724] flex items-center justify-center font-black text-base shadow-[0_0_15px_rgba(233,119,36,0.1)] group-hover:bg-[#E97724] group-hover:text-white transition-all duration-300 z-10 mb-0 md:mb-3 mr-4 md:mr-0 group-hover:scale-110">
              {item.step}
            </div>

            {/* Text Content - No Cards, just clean typography */}
            <div className="flex-1 mt-0.5 md:mt-0 px-0 md:px-2">
              <h4 className="font-bold text-base md:text-lg text-[#1A332F] leading-tight mb-1">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 5. DOCTOR BIO SECTION */}
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

      {/* 6. WHY CHOOSE KNEEV */}
<section className="py-10 md:py-14 px-4 bg-[#1A332F] text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 md:mb-10 space-y-2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
        Why Choose Kneev
      </h2>
      <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto font-medium">
        Your recovery and comfort always come first.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {[
        { title: "Conservative Care First", icon: ShieldCheck, desc: "Surgery is our absolute last resort, not the first option." },
        { title: "Transparent Pricing", icon: ThumbsUp, desc: "No hidden costs for consults, scans, or treatments." },
        { title: "Everything Under One Roof", icon: MapPin, desc: "Consult, X-rays, and rehabilitation all in one location." },
        { title: "360° Motion Map", icon: Activity, desc: "We analyze your body mechanics to fix the root cause." },
        { title: "Single-Session Physio", icon: HeartPulse, desc: "Experience noticeable relief right after your first visit." },
        { title: "Direct Doctor Access", icon: MessageSquare, desc: "Stay connected with our medical team after you go home." }
      ].map((box, idx) => (
        <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors flex items-center group">
          <div className="flex-shrink-0 w-12 h-12 bg-[#E97724]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#E97724]/20 group-hover:scale-105 transition-all duration-300">
            <box.icon className="w-6 h-6 text-[#E97724]" />
          </div>
          <div>
            <h3 className="text-base font-bold mb-0.5 text-white leading-tight">{box.title}</h3>
            <p className="text-xs text-white/60 leading-snug font-medium">{box.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 7. LOCATION & MAPS */}
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

{/* 8. TESTIMONIALS */}
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

      {/* 9. FAQ SECTION (Two Column & Minimalist) */}
      <section className="py-12 md:py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
            {[
              { q: "What should I bring to my first appointment?", a: "Please bring recent X-rays, MRI scans, previous prescriptions, and a list of current medications to avoid repeating tests." },
              { q: "Is the ₹600 fee inclusive of diagnostic X-rays?", a: "The ₹600 fee covers the comprehensive clinical evaluation with Dr. Amith. Digital X-Rays or lab diagnostics are charged separately at standard rates." },
              { q: "Do you offer corporate or insurance coverage?", a: "Yes, our team supports proper claim documentation processing for surgical procedures and major treatments." },
              { q: "Will I definitely need surgery for my joint pain?", a: "Absolutely not. Over 80% of our patients recover fully through guided physiotherapy and conservative medication." },
              { q: "How long does the first consultation usually take?", a: "Initial assessments typically take 20-30 minutes, allowing enough time for a thorough manual check and discussion of your symptoms." },
              { q: "Can I get a second opinion here?", a: "Yes, many patients visit us for this exact reason. Bring your reports, and Dr. Amith will give you an honest, unbiased assessment." },
              { q: "Do I need an appointment, or can I walk in?", a: "While walk-ins are accepted, we strongly recommend booking an appointment to secure your slot and minimize wait times." },
              { q: "Is physiotherapy done at the same clinic?", a: "Yes! We have an integrated, fully-equipped physiotherapy center right here, so you don't have to travel elsewhere for rehab." }
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
      
      
      {/* 10. PRE-FOOTER CTA */}
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

    </div>
  );

}