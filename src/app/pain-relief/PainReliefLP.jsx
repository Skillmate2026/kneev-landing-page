"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  CheckCircle, Star, Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, ShieldCheck, MapPin, 
  Phone, Clock, ArrowRight, ActivitySquare, Target, Zap, Bone
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PainReliefLP() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. UTM State
  const [utms, setUtms] = useState({
    source: '', medium: '', campaign: '', term: '', content: ''
  });

  // 2. Capture UTMs on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
      term: params.get('utm_term') || '',
      content: params.get('utm_content') || '',
    });
  }, []);

  // 3. Format Phone for Enhanced Conversions
  const formatPhoneForGoogle = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 ? `+91${cleaned}` : `+${cleaned}`;
  };

  // 4. DataLayer Push Function
  const pushToDataLayer = (formData, formLocation) => {
    const userPhone = formData.get('phone') || '';
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
  };

  // 5. Form Submit Handler
  const handleFormSubmit = async (e, formName, setSubmittedState) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", body: formData 
      });
      if (res.ok) {
        setSubmittedState(true);
        pushToDataLayer(formData, formName);
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
        "medicalSpecialty": "Pain Management"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] selection:bg-[#E97724] selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 px-4 bg-gradient-to-b from-[#FDFCF8] to-[#F3F6F4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center md:text-left">
            
            <div className="inline-flex items-center bg-[#1A332F]/10 text-[#1A332F] px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide border border-[#1A332F]/20">
              <Star className="w-4 h-4 mr-2 text-[#E97724] fill-current" /> Expert Pain Diagnosis
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#1A332F] leading-[1.15] tracking-tight">
              Knee, Back, or Joint Pain? <br className="hidden md:block" />
              {/* FIXED: inline-block prevents text overlap with the form */}
              <span className="text-[#E97724] relative inline-block mt-2 md:mt-0">
                Get Real Relief — Not Just Painkillers.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#E97724]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/></svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              Stop guessing why it hurts. Using our advanced <strong>360° Motion Map</strong>, we find the exact mechanical root cause of your pain. No pushy 10-session therapy packages, and no unnecessary surgeries. 
            </p>

            <div className="inline-block bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 mt-2">
              <div className="flex items-start space-x-3 text-left">
                <CheckCircle className="w-6 h-6 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm md:text-base text-[#1A332F]">Complete clinical assessment with our top specialist for just <span className="bg-[#E97724]/10 px-2 py-0.5 rounded text-[#E97724]">₹600</span>.</span>
              </div>
            </div>
          </div>

          {/* 4-Field Lead Form */}
          <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0 pt-2 lg:pt-0">
            <div className="absolute inset-0 bg-[#E97724] rounded-[2rem] transform rotate-3 scale-105 opacity-10"></div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 relative z-10 flex flex-col h-fit">
              
              {heroSubmitted ? (
                <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500 py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1A332F]">Request Sent!</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium pb-4">Our clinic team will call you shortly to arrange your visit and help you find relief.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-[#1A332F]">Start Your Recovery</h3>
                    <p className="text-gray-500 text-sm font-medium mt-1">Takes less than 60 seconds to secure your slot.</p>
                  </div>
                  
                  <form onSubmit={(e) => handleFormSubmit(e, 'Hero Form', setHeroSubmitted)} className="space-y-4">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <input type="hidden" name="subject" value="Pain Relief Assessment Lead!" />
                    
                    <input type="hidden" name="utm_source" value={utms.source} />
                    <input type="hidden" name="utm_medium" value={utms.medium} />
                    <input type="hidden" name="utm_campaign" value={utms.campaign} />
                    <input type="hidden" name="utm_term" value={utms.term} />

                    <div>
                      <input type="text" name="name" placeholder="Patient's Full Name" required className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E97724] outline-none font-medium text-[#1A332F] transition-all" />
                    </div>
                    <div>
                      <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" title="Please enter a valid 10 digit mobile number" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E97724] outline-none font-medium text-[#1A332F] transition-all" />
                    </div>
                    <div>
                      <select name="pain_location" required defaultValue="" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E97724] outline-none font-medium text-gray-600 transition-all">
                        <option value="" disabled>Where does it hurt?</option>
                        <option value="Knee Pain">Knee Pain</option>
                        <option value="Lower Back Pain">Lower Back / Spine Pain</option>
                        <option value="Shoulder or Neck">Shoulder or Neck Pain</option>
                        <option value="Sports Injury">Recent Sports Injury</option>
                        <option value="Multiple Joints">Multiple Joints Ache</option>
                      </select>
                    </div>
                    <div>
                      <select name="duration" required defaultValue="" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E97724] outline-none font-medium text-gray-600 transition-all">
                        <option value="" disabled>How long have you had this pain?</option>
                        <option value="Less than a week">Less than a week</option>
                        <option value="1 to 4 weeks">1 to 4 weeks</option>
                        <option value="1 to 6 months">1 to 6 months (Chronic)</option>
                        <option value="Over 6 months">Over 6 months (Severe)</option>
                      </select>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#E97724] text-white py-4 mt-2 rounded-xl font-bold text-lg hover:bg-[#d66a1d] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#E97724]/30 disabled:opacity-70 flex items-center justify-center">
                      {isSubmitting ? 'Securing Slot...' : 'Book Assessment (₹600)'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                    </button>
                    <p className="text-[11px] text-center text-gray-400 mt-3 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 mr-1" /> Your information is kept strictly confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-[#1A332F] py-8 md:py-12 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center divide-x-0 lg:divide-x lg:divide-white/10">
          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 flex items-baseline">
              17<span className="text-[#E97724]">+</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-white/70 tracking-wide uppercase">Years Experience</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 flex items-baseline">
              15k<span className="text-[#E97724]">+</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-white/70 tracking-wide uppercase">Patients Treated</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center mb-2 justify-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mr-2">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#E97724] fill-current" />)}
              </div>
            </div>
            <div className="text-xs md:text-sm font-semibold text-white/70 tracking-wide uppercase">Google Rating</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 flex items-baseline">
              112<span className="text-[#E97724]">+</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-white/70 tracking-wide uppercase">5-Star Reviews</div>
          </div>
        </div>
      </section>

      {/* 3. CONDITION SPECIFIC BLOCKS */}
      <section className="py-16 md:py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#1A332F]">
              Targeted Relief for Your Specific Pain
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              We don't offer generic, one-size-fits-all advice. Every joint acts differently, and your treatment plan should reflect the exact mechanics of your body.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-[#E97724]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#E97724] mb-6 shadow-sm"><Bone className="w-6 h-6" /></div>
              <h2 className="text-2xl font-black text-[#1A332F] mb-6">Knee Pain Treatment Bangalore</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">Causes We Diagnose:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Ligament tears, early arthritis, runner's knee, cartilage wear, and meniscal damage.</p>
                </div>
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">How Kneev Treats It:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Digital movement correction, targeted bracing, localized injections, or arthroscopy if strictly required.</p>
                </div>
              </div>
              <button onClick={(e) => smoothScroll(e, 'booking-form')} className="text-[#1A332F] font-bold text-sm flex items-center hover:text-[#E97724] transition-colors">
                Get Knee Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-[#E97724]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#E97724] mb-6 shadow-sm"><Activity className="w-6 h-6" /></div>
              <h2 className="text-2xl font-black text-[#1A332F] mb-6">Back Pain Specialist Near Me</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">Causes We Diagnose:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Sciatica, slipped discs, severe posture-related aches, nerve compression, and chronic muscle spasms.</p>
                </div>
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">How Kneev Treats It:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Non-surgical spine care, AI posture mapping, pain blocks, and structured digital rehab you can do at home.</p>
                </div>
              </div>
              <button onClick={(e) => smoothScroll(e, 'booking-form')} className="text-[#1A332F] font-bold text-sm flex items-center hover:text-[#E97724] transition-colors">
                Get Spine Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-[#E97724]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#E97724] mb-6 shadow-sm"><ActivitySquare className="w-6 h-6" /></div>
              <h2 className="text-2xl font-black text-[#1A332F] mb-6">Joint & Shoulder Pain Doctor</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">Causes We Diagnose:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Frozen shoulder, rotator cuff injuries, bursitis, and general age-related joint stiffness.</p>
                </div>
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">How Kneev Treats It:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Guided joint mobilization, localized injections to rapidly reduce swelling, and targeted physiotherapy.</p>
                </div>
              </div>
              <button onClick={(e) => smoothScroll(e, 'booking-form')} className="text-[#1A332F] font-bold text-sm flex items-center hover:text-[#E97724] transition-colors">
                Get Joint Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-[#E97724]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#E97724] mb-6 shadow-sm"><HeartPulse className="w-6 h-6" /></div>
              <h2 className="text-2xl font-black text-[#1A332F] mb-6">Sports Injury Clinic Bangalore</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">Causes We Diagnose:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Ankle sprains, muscle tears, shin splints, tendonitis, and acute impact trauma from sports.</p>
                </div>
                <div>
                  <span className="font-bold text-[#E97724] text-xs tracking-wider uppercase block mb-1">How Kneev Treats It:</span>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">Rapid diagnostics, protective bracing, fast-track rehabilitation, and a safe return-to-play timeline.</p>
                </div>
              </div>
              <button onClick={(e) => smoothScroll(e, 'booking-form')} className="text-[#1A332F] font-bold text-sm flex items-center hover:text-[#E97724] transition-colors">
                Get Injury Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS 360 MOTION MAP */}
      <section className="py-16 md:py-24 px-4 bg-[#1A332F] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">What is the 360° Motion Map?</h2>
            <p className="text-lg font-medium leading-relaxed text-white/80">
              It's like an X-ray for your movement. We don't just look at static bones—using <strong className="text-[#E97724]">AI-Assisted Posture & Movement Analysis</strong>, we track exactly how you walk, bend, and bear weight on your joints.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <Target className="w-6 h-6 text-[#E97724] mr-4 flex-shrink-0 mt-0.5" /> 
                <span className="font-medium text-white/90">Finds hidden muscle imbalances that ordinary MRIs and X-Rays completely miss.</span>
              </li>
              <li className="flex items-start">
                <ActivitySquare className="w-6 h-6 text-[#E97724] mr-4 flex-shrink-0 mt-0.5" /> 
                <span className="font-medium text-white/90">Interpreted directly by our treating orthopaedic surgeon, not a technician.</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-[#E97724] mr-4 flex-shrink-0 mt-0.5" /> 
                <span className="font-medium text-white/90">You leave with a clear, printed report of exactly what is mechanically wrong.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden group hover:border-[#E97724]/50 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-[#E97724]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <Activity className="w-20 h-20 text-[#E97724] mx-auto mb-6 relative z-10" />
             <h3 className="text-2xl md:text-3xl font-black mb-3 relative z-10">Stop the Guesswork</h3>
             <p className="font-medium text-white/70 text-sm md:text-base leading-relaxed max-w-sm mx-auto relative z-10">See exactly how your body moves so we can fix exactly what hurts.</p>
          </div>
        </div>
      </section>

      {/* 5. SINGLE SESSION PHYSIO CONTRAST */}
      <section className="py-16 md:py-24 px-4 bg-[#E97724] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Zap className="w-12 h-12 md:w-16 md:h-16 mx-auto opacity-90 mb-2" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">We Don't Sell "10-Session Packages"</h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/90">
            Other clinics lock you into expensive, time-consuming therapy packages on day one. <br/><br/>
            We offer <strong>single-session, medically-directed physiotherapy</strong>. We evaluate you, guide you through a digital rehab routine to do at home, and tell you to come back <em>only if it's working</em>.
          </p>
        </div>
      </section>

      {/* 6. DOCTOR BIO */}
      <section id="doctor" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative px-4 sm:px-0">
            <div className="absolute inset-0 bg-[#E97724] transform -rotate-3 rounded-3xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src="/dr.JPG" 
                alt="Dr. Amith P. Shetty - Orthopedic Doctor" 
                width={500} 
                height={600} 
                className="object-cover w-full aspect-[4/5]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A332F] to-transparent p-6 pt-20">
                <h3 className="text-white font-black text-2xl">Dr. Amith P. Shetty</h3>
                <p className="text-white/80 font-medium text-sm">MBBS, MS Ortho, Dip SICOT, FIJR</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A332F] mb-4">Meet Your Specialist</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                "I see too many patients who have been prescribed painkillers for years without anyone actually looking at how their joints function. My goal is to find the mechanical root cause of your pain and treat it conservatively, without rushing to the operating room."
              </p>
            </div>
            
            <div className="bg-[#FDFCF8] rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-4">
              <h4 className="font-bold text-[#1A332F] mb-2 text-lg uppercase tracking-wide flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#E97724]" /> Patients commonly seen:
              </h4>
              <ul className="space-y-4 text-sm md:text-base text-gray-700 font-medium">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E97724] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Adults suffering from chronic joint, knee, or lower back pain.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E97724] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Patients seeking clarity and honesty after conflicting medical opinions.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E97724] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Individuals who want to exhaust all non-surgical options before resorting to procedures.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE KNEEV */}
      <section className="py-16 md:py-24 px-4 bg-[#F3F6F4] relative border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A332F]">Why Patients Choose KNEEV</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              We stand out because your recovery and comfort come before anything else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: "Conservative First", d: "Surgery is strictly recommended only when physical protocols fall short." },
              { t: "Transparent Pricing", d: "No hidden surprise bills or unbundled diagnostic overheads." },
              { t: "All-In-One Lab", d: "Physio, digital X-Rays, and doctor consultation in one convenient zone." },
              { t: "360° Motion Map", d: "Identify the exact muscle imbalances causing your joint wear." },
              { t: "Single-Session Physio", d: "Care routines designed to give you continuous home recovery tracks." },
              { t: "Direct Doctor Access", d: "Interact directly with your primary orthopedician, not just an assistant." }
            ].map((box, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start space-x-4 hover:border-[#E97724]/50 transition-colors duration-300">
                <div className="bg-[#FDFCF8] p-3 rounded-2xl border border-gray-100 flex-shrink-0"><Star className="w-6 h-6 text-[#E97724] fill-current" /></div>
                <div>
                  <h4 className="font-bold text-[#1A332F] mb-2 text-lg">{box.t}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A332F]">Real Pain Relief Outcomes</h2>
            <p className="text-base md:text-lg text-gray-600 mt-4 font-medium max-w-2xl mx-auto">See how we've helped hundreds of locals get back to living pain-free.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-6 md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
            {[
              { name: "Priya D.", loc: "BTM Layout", text: "My lower back pain was unbearable after sitting at my desk. Dr. Amith showed me exactly what was wrong on the 360 motion map. The digital home rehab fixed it in 3 weeks." },
              { name: "Anand M.", loc: "Jayanagar", text: "Chronic knee pain made stairs impossible. Instead of selling me a massive package, they gave me targeted injections and one physio routine. Walking pain-free now." },
              { name: "Suresh R.", loc: "JP Nagar", text: "Had severe shoulder pain from an old sports injury. The conservative approach here is real. No push for surgery, just logical, step-by-step healing." },
              { name: "Lakshmi", loc: "Banashankari", text: "I have been taking painkillers for months for my joint pain. One consultation here and they identified a gait issue. The treatment actually fixed the root problem." },
              { name: "Rahul K.", loc: "Basavanagudi", text: "The honesty at this clinic is refreshing. Dr. Amith told me exactly what to expect with my sciatica recovery, and his timeline was perfectly accurate." },
              { name: "Prakash", loc: "JP Nagar", text: "For almost a year, I struggled with severe back pain and kept depending on painkillers. Dr. Amith explained the actual cause patiently and started a treatment plan that genuinely helped me feel better within weeks." }
            ].map((tst, idx) => (
              <div key={idx} className="min-w-[310px] md:min-w-0 flex-shrink-0 snap-center bg-[#1A332F] p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-[#E97724] flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#E97724] fill-current" />)}
                  </div>
                  <p className="text-lg text-[#FDFCF8] font-medium italic leading-relaxed mb-8">"{tst.text}"</p>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <div className="font-bold text-[#E97724] text-xl">{tst.name}</div>
                  <div className="text-white/80 font-medium text-sm mt-1">{tst.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EXACT CONTACT US SECTION & MAP */}
      <section className="py-16 md:py-24 px-4 bg-[#FDFCF8] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A332F] mb-4">Our Location</h2>
              <p className="text-gray-600 font-medium text-lg">Stop living with pain and visit Bangalore's top-rated pain diagnosis center today.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col gap-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#1A332F] flex items-center justify-center md:justify-start"><MapPin className="w-5 h-5 mr-2 text-[#E97724]" /> Address</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#1A332F] flex items-center justify-center md:justify-start"><Phone className="w-5 h-5 mr-2 text-[#E97724]" /> Contact</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">+91 636 670 0736<br/>kneevorthopaediccenter@gmail.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#1A332F] flex items-center justify-center md:justify-start"><Clock className="w-5 h-5 mr-2 text-[#E97724]" /> Hours</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Monday – Saturday<br/>9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[450px] relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1779257511913!5m2!1sen!2sin" 
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

      {/* 10. FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A332F]">Frequently Asked Questions</h2>
            <p className="text-base text-gray-600 mt-4 font-medium">Clear, honest answers to help you prepare for your pain assessment.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What pain conditions do you specialize in treating?", a: "We diagnose and treat acute and chronic pain in the knees, lower back, neck, shoulders, and hips, as well as sports-related ligament and tendon injuries." },
              { q: "How do you diagnose the exact cause of my pain?", a: "We use a combination of thorough physical examination, digital X-rays (if needed), and our unique AI-assisted 360° Motion Map to find mechanical and structural imbalances." },
              { q: "Will I be forced to book a 10-session physiotherapy package?", a: "No. We do not sell massive therapy packages. We believe in single-session, medically-directed physio combined with a guided home rehab program." },
              { q: "When should I see a specialist instead of just taking painkillers?", a: "If your joint or back pain persists for more than 2 weeks, interferes with your sleep, or prevents you from doing daily activities, you need a proper clinical assessment." },
              { q: "Does chronic joint pain always require surgery?", a: "Absolutely not. Our conservative-first approach means surgery is viewed strictly as a last resort when rehab, bracing, and targeted injections fail to provide relief." },
              { q: "What should I bring to my first appointment?", a: "Please bring any previous X-rays, MRI reports, or prescriptions related to your current pain condition to avoid repeating tests." },
              { q: "Do you offer digital rehabilitation programs?", a: "Yes, we provide therapist-guided home exercise programs with structured follow-ups so you can continue your recovery consistently and affordably at home." },
              { q: "How long does a consultation with the doctor take?", a: "A standard clinical evaluation takes about 20 to 30 minutes, ensuring Dr. Amith has enough time to fully understand your pain history without rushing." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#FDFCF8] rounded-2xl border border-gray-200 p-5 md:p-6 cursor-pointer hover:border-[#E97724]/50 transition-colors">
                <summary className="font-bold text-[#1A332F] flex justify-between items-center list-none text-base md:text-lg">
                  {faq.q}
                  <ChevronDown className="w-6 h-6 text-[#E97724] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-gray-600 text-sm md:text-base font-medium leading-relaxed pl-2 border-l-2 border-[#E97724]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRE-FOOTER CTA */}
      <section className="py-16 md:py-24 px-4 bg-[#E97724] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Stop living with pain.
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4">
            Get a clear, honest diagnosis and a real relief plan today.
          </p>
          
          {footerSubmitted ? (
            <div className="bg-white p-4 rounded-full inline-flex items-center shadow-2xl justify-center border-4 border-green-400 mx-auto animate-in zoom-in duration-300">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-[#1A332F] font-bold text-lg">We've got your number! We'll call you shortly.</span>
            </div>
          ) : (
            <form onSubmit={(e) => handleFormSubmit(e, 'Footer Form', setFooterSubmitted)} className="bg-white p-2 rounded-[2rem] sm:rounded-full flex flex-col sm:flex-row items-center w-full max-w-xl mx-auto shadow-2xl mt-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="Pain Relief Callback Request!" />
              
              <input type="hidden" name="utm_source" value={utms.source} />
              <input type="hidden" name="utm_medium" value={utms.medium} />
              <input type="hidden" name="utm_campaign" value={utms.campaign} />

              <input type="tel" name="phone" required pattern="[0-9]{10}" placeholder="Enter your 10-digit mobile number" className="w-full px-6 py-4 rounded-full border-none focus:ring-0 outline-none font-bold text-base text-[#1A332F] text-center sm:text-left" />
              <button type="submit" disabled={isSubmitting} className="bg-[#1A332F] text-white font-bold px-8 py-4 rounded-full w-full sm:w-auto mt-2 sm:mt-0 hover:bg-[#2c544d] transition-colors disabled:opacity-70 whitespace-nowrap shadow-md">
                {isSubmitting ? 'Sending...' : 'Request Callback'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />

      {/* MOBILE STICKY CTA BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-gray-100 z-50 flex divide-x divide-gray-100 p-2">
        <a href="tel:+916366700736" className="flex-1 flex flex-col items-center justify-center py-2 text-[#1A332F] hover:bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 mb-1 text-[#E97724]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Clinic</span>
        </a>
        <a href="https://wa.me/916366700736" target="_blank" rel="noreferrer" className="flex-1 flex flex-col items-center justify-center py-2 text-[#1A332F] hover:bg-gray-50 rounded-lg">
          <MessageSquare className="w-5 h-5 mb-1 text-green-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
        <button onClick={(e) => smoothScroll(e, 'booking-form')} className="flex-1 bg-[#E97724] text-white flex flex-col items-center justify-center py-2 rounded-xl shadow-md">
          <span className="text-xs font-black uppercase tracking-wider">Book Now</span>
          <span className="text-[9px] font-medium opacity-90">₹600 Only</span>
        </button>
      </div>

      {/* FIXED: Compact Circular Floating WhatsApp Button */}
      <a 
        href="https://wa.me/916366700736" 
        target="_blank" 
        rel="noreferrer" 
        className="hidden md:flex fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 group-hover:animate-bounce" />
      </a>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}