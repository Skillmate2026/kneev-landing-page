"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Phone, MapPin, Clock, Mail, CheckCircle, Star, 
  Activity, ChevronDown, MessageSquare, 
  Stethoscope, Award, HeartPulse, ShieldCheck, Check, Info, UploadCloud, Banknote
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function KneeReplacementLP() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e, setSubmittedState) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) setSubmittedState(true);
    } catch (err) { console.error("Form submission failed", err); }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-brand-bgCream font-sans overflow-x-hidden text-brand-green">
      
       {/* HEADER */}
      <Header />

      {/* 1. HERO SECTION (SEO Optimized for Second Opinion) */}
      <section className="relative pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 bg-brand-bgCream overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest border border-brand-orange/20">
              Knee Replacement Second Opinion
            </div>
            
            {/* Primary Keyword in H1 visually integrated with screenshot design */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight sm:leading-tight">
              Considering Knee Replacement? <br/>
              <span className="text-brand-green">Get a Second Opinion First.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Consult the <strong className="text-brand-orange font-black">best knee replacement surgeon in Bangalore</strong>. Many knee conditions improve without surgery. Every patient at KNEEV undergoes a structured clinical evaluation before knee replacement is ever recommended.
            </p>

            <p className="text-brand-green font-bold bg-white inline-block px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="inline w-5 h-5 text-brand-orange mr-2 mb-0.5" />
              90% of our early-stage patients avoid surgery completely.
            </p>
          </div>

          {/* 5-Field Lead Form */}
          <div id="booking" className="lg:col-span-5 bg-white p-6 md:p-8 rounded-[32px] shadow-2xl border border-gray-100 relative mt-6 lg:mt-0">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange rounded-t-[32px]"></div>
            
            {heroSubmitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#00c34e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-brand-green">Evaluation Requested!</h3>
                <p className="text-gray-600 font-medium mt-2">Dr. Amith's team will contact you shortly to confirm your MRI review slot.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black mb-2 text-brand-green">Book Your Assessment</h3>
                <p className="text-gray-500 text-sm mb-6 font-medium">Clear, honest advice. Assessment for just ₹600.</p>
                
                <form onSubmit={(e) => handleFormSubmit(e, setHeroSubmitted)} className="space-y-4">
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="Knee Replacement Second Opinion Lead!" />
                  
                  {/* Field 1 & 2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none font-medium text-brand-green" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none font-medium text-brand-green" />
                  </div>
                  
                  {/* Field 3 & 4 */}
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" name="age" placeholder="Patient Age" required min="10" max="100" className="w-full p-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none font-medium text-brand-green" />
                    <select name="has_mri" required className="w-full p-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none font-medium text-brand-green">
                      <option value="" disabled selected>Have MRI Report?</option>
                      <option value="Yes">Yes, I have an MRI</option>
                      <option value="No">No MRI yet</option>
                    </select>
                  </div>

                  {/* Field 5 */}
                  <div>
                    <textarea name="description" rows="2" placeholder="Briefly describe your knee pain..." required className="w-full p-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none font-medium text-brand-green resize-none"></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange text-white py-4 mt-2 rounded-xl font-black text-lg hover:bg-opacity-90 transition uppercase tracking-wider shadow-lg disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Request Second Opinion'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-brand-green py-10 px-4 border-t-4 border-brand-orange">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          <div><div className="text-3xl lg:text-4xl font-black text-brand-orange">17+</div><div className="text-[10px] lg:text-xs uppercase font-bold tracking-widest mt-1">Years Surgical Expertise</div></div>
          <div><div className="text-3xl lg:text-4xl font-black text-brand-orange">2,500+</div><div className="text-[10px] lg:text-xs uppercase font-bold tracking-widest mt-1">Successful Surgeries</div></div>
          <div><div className="text-3xl lg:text-4xl font-black text-brand-orange">4.9/5</div><div className="text-[10px] lg:text-xs uppercase font-bold tracking-widest mt-1">Google Rating</div></div>
          <div><div className="text-3xl lg:text-4xl font-black text-brand-orange">112+</div><div className="text-[10px] lg:text-xs uppercase font-bold tracking-widest mt-1">Verified Reviews</div></div>
        </div>
      </section>

      {/* 3. ORANGE QUOTE BLOCK (Recreated from screenshot) */}
      <section className="py-16 px-4 bg-brand-bgCream">
        <div className="max-w-5xl mx-auto bg-brand-orange text-white p-10 md:p-16 rounded-[40px] text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">"Some Patients Need Surgery. <br/>Many Need Better Evaluation"</h2>
          <p className="text-base md:text-xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
            At KNEEV, treatment starts with identifying the actual cause of pain — not immediately recommending surgery. Many knee conditions improve through rehabilitation, injections, strengthening, weight correction, or movement retraining.
          </p>
        </div>
      </section>

      {/* 4. IS IT THE RIGHT CALL? (Grid matched to screenshot) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">When Surgery May Actually Be Necessary</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            {[
              { t: "Severe arthritis", d: "Bone-on-bone degeneration affecting movement.", color: "bg-brand-orange" },
              { t: "Persistent pain", d: "Pain continues despite rehab and medication.", color: "bg-brand-green" },
              { t: "Loss of mobility", d: "Difficulty walking, climbing stairs, or standing.", color: "bg-brand-green" },
              { t: "Failed conservative care", d: "Physiotherapy and injections no longer helping.", color: "bg-brand-orange" }
            ].map((card, i) => (
              <div key={i} className={`${card.color} text-white p-6 rounded-2xl flex items-start space-x-4 shadow-md`}>
                <CheckCircle className="w-8 h-8 flex-shrink-0 opacity-80" />
                <div>
                  <h4 className="text-xl font-black mb-1">{card.t}</h4>
                  <p className="text-sm font-medium opacity-90">{card.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">When Knee Replacement is <span className="text-red-600 underline decoration-red-200">NOT</span> the Right Call</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { t: "Early Stage Wear", d: "Joint space is still preserved on standing X-rays." },
              { t: "Meniscus Tears", d: "Often manageable with arthroscopic repair or targeted rehab." },
              { t: "Muscle Imbalance", d: "Knee pain caused purely by weak quads or glutes." },
              { t: "Pain Improves with Rest", d: "Symptoms are intermittent, not constant or chronic." }
            ].map((card, i) => (
              <div key={i} className="bg-brand-bgCream border border-gray-200 p-6 rounded-2xl text-center shadow-sm">
                <ShieldCheck className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                <h4 className="text-lg font-black text-brand-green mb-2">{card.t}</h4>
                <p className="text-sm text-gray-600 font-medium">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOCTOR BIO (Surgical Focus) */}
      <section className="py-20 px-4 bg-brand-bgCream border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative border-8 border-white rounded-[40px] overflow-hidden shadow-2xl">
            <Image src="/dr.JPG" alt="Dr. Amith P. Shetty - Knee Replacement Surgeon Bangalore" width={600} height={700} className="w-full object-cover aspect-[4/5]" />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-black text-brand-green">Dr. Amith P. Shetty</h2>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">MBBS, MS Ortho, Dip SICOT, FIJR</p>
              <p className="text-lg font-black text-brand-orange mt-2">Top Knee Replacement Surgeon in Bangalore</p>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed">
              Dr. Amith combines elite surgical precision with strict ethical standards. He holds a Fellowship in Joint Replacement (FIJR) from Germany and has successfully navigated complex, high-volume robotic and conventional total knee replacements. He operates only when clinically undeniable.
            </p>
            
            <ul className="space-y-4 font-bold text-sm text-brand-green bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <li className="flex"><Award className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" /> Over a decade of clinical experience in joint replacement</li>
              <li className="flex"><CheckCircle className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" /> Trained in high-volume settings for complex and revision cases</li>
              <li className="flex"><Activity className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" /> Expert in Partial, Total, and Robotic Knee Replacement surgery</li>
              <li className="flex"><ShieldCheck className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" /> Strict conservative-first evaluation philosophy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. SECOND OPINION PROCESS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Your Second-Opinion Process at KNEEV</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-1 bg-brand-bgCream z-0"></div>
            {[
              { s: "1", t: "Book Slot", d: "Secure your ₹600 evaluation appointment online." },
              { s: "2", t: "Bring MRI", d: "Bring your existing X-rays and MRI reports for review." },
              { s: "3", t: "Clinical Exam", d: "Dr. Amith performs a hands-on physical and biomechanical exam." },
              { s: "4", t: "Honest Plan", d: "Receive a transparent verdict: Rehab, Injection, or Surgery." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl font-black border-4 border-white shadow-xl mb-4">{step.s}</div>
                <h4 className="text-xl font-black text-brand-green mb-2">{step.t}</h4>
                <p className="text-sm font-medium text-gray-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING TRANSPARENCY & INSURANCE */}
      <section className="py-20 px-4 bg-brand-green text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
            <Banknote className="w-12 h-12 text-brand-orange mb-6" />
            <h2 className="text-3xl font-black mb-6">Pricing Transparency</h2>
            <ul className="space-y-4 font-medium">
              <li className="flex justify-between border-b border-white/20 pb-4">
                <span>Expert Consultation & Second Opinion</span>
                <span className="font-black text-brand-orange">₹600</span>
              </li>
              <li className="flex justify-between border-b border-white/20 pb-4">
                <span>Digital X-Ray / Diagnostics</span>
                <span className="font-black">Standard Lab Rates</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Knee Replacement Surgery Cost</span>
                <span className="font-black text-brand-orange">Discussed Post-Exam*</span>
              </li>
            </ul>
            <p className="text-xs text-white/60 mt-4 italic">*Total knee replacement cost in Bangalore varies based on implant choice (Indian vs Imported) and surgical technique (Conventional vs Robotic). Accurate quotes provided only after clinical assessment.</p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-4">Cashless Insurance Accepted</h2>
              <p className="text-white/80 font-medium leading-relaxed">We support complete paperwork and claim processing for major surgical interventions, ensuring a hassle-free admission and discharge process.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white text-brand-green px-4 py-2 rounded-lg font-black text-sm">STAR HEALTH</span>
              <span className="bg-white text-brand-green px-4 py-2 rounded-lg font-black text-sm">HDFC ERGO</span>
              <span className="bg-white text-brand-green px-4 py-2 rounded-lg font-black text-sm">ICICI LOMBARD</span>
              <span className="bg-white text-brand-green px-4 py-2 rounded-lg font-black text-sm">BAJAJ ALLIANZ</span>
              <span className="bg-white text-brand-green px-4 py-2 rounded-lg font-black text-sm">NIVA BUPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTEGRATED SERVICES STRIP */}
      <section className="bg-brand-orange py-10 px-4 text-center text-white">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider">
          Post-Op Physio • Digital X-Ray • 360° Motion Map
        </h3>
        <p className="font-medium mt-2">All at the same clinic. No running around for external referrals.</p>
      </section>

      {/* 9. TESTIMONIALS (Mixed Outcomes) */}
      <section className="py-20 px-4 bg-brand-bgCream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-brand-green mb-16">Real Patient Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Avoided Surgery", name: "Rajesh K.", text: "Another hospital told me to get knee replacement immediately. Dr. Amith reviewed my MRI and put me on targeted physio. 4 months later, my pain is down 90%." },
              { type: "Successful Surgery", name: "Lakshmi M.", text: "My arthritis was bone-on-bone. Dr. Amith performed a total knee replacement. His transparent pricing and post-op care were exceptional. Walking pain-free now." },
              { type: "Honest Opinion", name: "Srinivas R.", text: "I came in for a second opinion on partial knee replacement. Dr. Amith explained exactly why it wasn't the right time yet. Very ethical doctor." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
                <div>
                  <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${t.type === 'Successful Surgery' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-green/10 text-brand-green'}`}>{t.type}</span>
                  <div className="mt-4 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="inline-block w-4 h-4 text-brand-orange fill-current mr-1" />)}</div>
                  <p className="text-gray-700 italic font-medium mb-6">"{t.text}"</p>
                </div>
                <div className="font-black text-brand-green border-t border-gray-100 pt-4">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ALSO TREATING */}
      <section className="py-16 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-black text-brand-green mb-8">Also Specialized In</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span className="flex items-center text-gray-700 font-bold"><Check className="w-5 h-5 text-brand-orange mr-2" /> Arthroscopic Knee Surgery</span>
            <span className="flex items-center text-gray-700 font-bold"><Check className="w-5 h-5 text-brand-orange mr-2" /> ACL Surgery Bangalore</span>
            <span className="flex items-center text-gray-700 font-bold"><Check className="w-5 h-5 text-brand-orange mr-2" /> Meniscus Tear Treatment</span>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 px-4 bg-brand-bgCream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-brand-green mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I know if I need robotic vs. conventional surgery?", a: "Robotic surgery offers sub-millimeter precision for bone cuts, which is excellent for complex deformities. However, conventional surgery by an expert yields identical long-term functional results for most patients. Dr. Amith evaluates your specific anatomy to recommend the best path." },
              { q: "What is the recovery timeline for knee replacement?", a: "Patients typically stand the same day or next day after surgery. You can expect to walk with a walker for 2 weeks, transition to a cane, and resume most normal daily activities within 6 to 8 weeks with diligent physiotherapy." },
              { q: "Does insurance cover the full cost?", a: "Most comprehensive health insurance policies and corporate TPAs cover total knee replacement surgery. We assist with pre-authorization to ensure maximum cashless benefit based on your policy cap." },
              { q: "What is a unilateral vs partial knee replacement?", a: "Unilateral (Total) replaces all three compartments of the knee joint. Partial (Unicompartmental) replaces only the damaged section (usually the inner side), preserving healthy bone and ligaments for a faster recovery." },
              { q: "What should I bring for a second opinion?", a: "Please carry all previous X-rays (especially standing full-leg views if you have them), recent MRI reports, and any prior prescriptions or operative notes." },
              { q: "Will I be forced to book surgery immediately?", a: "Absolutely not. KNEEV operates on a strict conservative-first ethos. We provide the diagnosis and options; the timeline and decision are entirely yours." },
              { q: "Can arthroscopic surgery fix my arthritis?", a: "Arthroscopy is generally for meniscus tears or ACL reconstruction, not for treating bone-on-bone osteoarthritis. " },
              { q: "Is physiotherapy mandatory after surgery?", a: "Yes. The success of a knee replacement is 50% surgical precision and 50% post-operative rehabilitation. We provide complete rehab protocols." },
              { q: "How long do knee implants last?", a: "Modern highly cross-linked polyethylene implants typically last 15 to 20 years, depending on your weight, activity level, and bone quality." },
              { q: "Can I climb stairs after the procedure?", a: "Yes, once fully rehabilitated, patients can comfortably climb stairs, drive, and engage in low-impact activities like walking, swimming, and cycling." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-brand-orange/40 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-black text-brand-green flex justify-between items-center list-none text-lg">
                  {faq.q} <ChevronDown className="w-6 h-6 text-brand-orange group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-gray-700 font-medium leading-relaxed pl-4 border-l-2 border-brand-orange">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="bg-brand-orange py-16 md:py-24 px-4 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
  
  <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 md:space-y-8">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
      Avoid Unnecessary Surgery.
    </h2>
    <p className="text-sm md:text-lg lg:text-xl text-white/90 font-medium max-w-2xl mx-auto px-4">
      Get clarity on your knee pain from a leading specialist today.
    </p>
    
    {footerSubmitted ? (
      <div className="bg-white p-3 md:p-4 rounded-full inline-flex flex-col sm:flex-row items-center w-full max-w-md shadow-2xl justify-center border-4 border-white animate-in zoom-in duration-300">
        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-0 sm:mr-2 mb-1 sm:mb-0" />
        <span className="text-brand-green font-black text-sm md:text-lg">We will contact you shortly.</span>
      </div>
    ) : (
      <form onSubmit={(e) => handleFormSubmit(e, setFooterSubmitted)} className="bg-white p-2 rounded-3xl sm:rounded-full inline-flex flex-col sm:flex-row w-full max-w-xl shadow-2xl items-center">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="tel" name="phone" required placeholder="Enter mobile number" className="w-full px-6 py-4 rounded-full outline-none font-bold text-brand-green text-center sm:text-left text-sm md:text-base" />
        <button type="submit" disabled={isSubmitting} className="bg-brand-green text-white font-black uppercase px-8 py-4 rounded-full w-full sm:w-auto mt-2 sm:mt-0 hover:bg-opacity-90 transition disabled:opacity-70 text-sm md:text-base">
          {isSubmitting ? '...' : 'Get Callback'}
        </button>
      </form>
    )}
  </div>
</section>
    {/* EXACT CONTACT US SECTION & MAP */}
      <section className="py-12 md:py-24 px-4 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-green text-center mb-10 md:mb-16">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-center md:text-left">
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-brand-green">Address</h3>
              <p className="text-gray-700 font-medium leading-loose text-xs md:text-sm max-w-[250px] mx-auto md:mx-0">
                Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011
              </p>
            </div>
            
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-brand-green">Contact</h3>
              <p className="text-gray-700 font-medium text-xs md:text-sm">+91 636 670 0736</p>
              <p className="text-gray-700 font-medium text-xs md:text-sm md:pt-4">kneevorthopaediccenter@gmail.com</p>
            </div>
            
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-brand-green">Opening Hours</h3>
              <div className="flex justify-center md:justify-start items-center space-x-4 text-gray-700 font-medium text-xs md:text-sm">
                <span>Mon – Sat</span>
                <span>9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-gray-100 h-[300px] md:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1779257511913!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
  

      {/* 13. FOOTER */}
      <Footer />

      {/* MOBILE WHATSAPP */}
      <a href="https://wa.me/916366700736" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#00c34e] text-white p-4 rounded-full shadow-2xl z-50 flex items-center">
        <MessageSquare className="w-6 h-6 md:mr-2" />
        <span className="font-black text-xs uppercase hidden sm:inline-block">Ask Dr. Amith</span>
      </a>

    </div>
  );
}