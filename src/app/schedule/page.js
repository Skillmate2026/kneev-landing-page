import React from 'react';
import Image from 'next/image';

export default function SchedulePage() {
  
  const staticSchedule = [
    { day: 'Monday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Tuesday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Wednesday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Thursday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Friday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Saturday', time: '9:00 AM – 7:00 PM', isSpecial: false },
    { day: 'Sunday', time: 'By appointment', isSpecial: true },
  ];

  const whatsappLink = "https://wa.me/916366700736?text=" + encodeURIComponent("Hi Kneev Orthopaedic Center, I would like to schedule a consultation with Dr. Amith.");

  return (
    <main className="min-h-screen bg-[var(--color-brand-bgCream)] font-sans pb-16 lg:pb-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1b3b31] px-6 py-12 lg:py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10">
          <Image 
            src="/treat-physio.webp" 
            alt="Kneev Physiotherapy" 
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[var(--color-brand-orange)] leading-tight mb-3 tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Review our regular clinic hours below and connect with us directly via WhatsApp or phone to lock in your slot.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Premium Static Calendar */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 p-4 sm:p-6 lg:p-10">
            <div className="mb-6 sm:mb-8 border-b-2 border-[var(--color-brand-bgCream)] pb-4 sm:pb-6 flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-[var(--color-brand-green)] rounded-xl text-[var(--color-brand-orange)] shadow-inner">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h2 className="font-black text-xl sm:text-2xl text-[var(--color-brand-green)] tracking-tight">
                  Operating Hours
                </h2>
                <p className="text-xs sm:text-sm font-bold text-gray-400 mt-1 uppercase tracking-wider">
                  Weekly standard timings
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {staticSchedule.map((item, idx) => (
                <div
                  key={idx}
                  // CRITICAL FIX: Swapped flex for CSS Grid to permanently stop overlapping.
                  // Added 'pr-16' on mobile to push text away from your floating buttons.
                  className={`w-full grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4 p-3 sm:p-4 pr-16 sm:pr-4 rounded-xl border-l-4 transition-all duration-300 ${
                    item.isSpecial 
                      ? 'bg-[var(--color-brand-bgCream)] border-[var(--color-brand-orange)] hover:bg-orange-50/50' 
                      : 'bg-white shadow-sm border-[var(--color-brand-green)] hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* 1. Day Box */}
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-black text-sm sm:text-lg flex-shrink-0 ${
                    item.isSpecial 
                      ? 'bg-white text-[var(--color-brand-orange)] shadow-sm' 
                      : 'bg-[var(--color-brand-bgCream)] text-[var(--color-brand-green)]'
                  }`}>
                    {item.day.substring(0, 3)}
                  </div>

                  {/* 2. Day Text (Uses truncate to gracefully cut off if space runs out) */}
                  <p className={`font-black text-sm sm:text-lg tracking-tight truncate ${item.isSpecial ? 'text-gray-800' : 'text-[var(--color-brand-green)]'}`}>
                    {item.day}
                  </p>

                  {/* 3. Time Badge */}
                  <div className="text-right">
                    <span className={`text-[11px] sm:text-sm font-bold px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block whitespace-nowrap ${
                      item.isSpecial 
                        ? 'bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)]' 
                        : 'bg-[var(--color-brand-green)] text-white shadow-sm'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Doctor Profile & Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Compact Doctor Profile */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-gray-100">
              <div className="flex items-center space-x-5 mb-5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--color-brand-bgCream)] shadow-sm flex-shrink-0">
                  <Image 
                    src="/dr.webp" 
                    alt="Dr. Amith P. Shetty" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[var(--color-brand-green)] tracking-tight">Dr. Amith P. Shetty</h3>
                  <p className="text-[10px] font-bold text-[var(--color-brand-orange)] mt-1 uppercase tracking-wider">
                    Chief Orthopaedic Surgeon
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-medium italic border-l-4 border-[var(--color-brand-orange)] pl-3 py-1 mb-5 bg-[var(--color-brand-bgCream)]/40 rounded-r-lg">
                "Finding the real cause of pain for long-lasting, conservative relief."
              </p>

              <ul className="space-y-2.5 text-sm text-gray-700 font-medium">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3"></span>
                  <strong>MBBS, MS (Orthopaedics)</strong>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3"></span>
                  <strong>Dip SICOT & FIJR (Germany)</strong>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3"></span>
                  17+ Years Experience
                </li>
              </ul>
            </div>

{/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-6 lg:p-8 border border-gray-100">
              <h3 className="text-xl font-black text-gray-800 mb-2">Connect to Book</h3>
              <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed">
                Message our front desk to coordinate your final appointment time.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // FIX 1: Changed to text-sm on mobile, added px-4, and used gap instead of space-x
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:py-4 bg-[var(--color-brand-lightGreen)] hover:bg-[#00a843] text-white rounded-xl text-sm sm:text-base font-bold transition-all shadow-md hover:-translate-y-1 btn-glow"
                >
                  {/* FIX 2: Added flex-shrink-0 to the SVG so it never gets crushed */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  {/* FIX 3: Added text-center and leading-tight for graceful wrapping */}
                  <span className="text-center leading-tight">Continue to WhatsApp</span>
                </a>

                <div className="flex items-center justify-center space-x-4 py-2">
                  <span className="h-px w-full bg-gray-200"></span>
                  <span className="text-xs font-bold text-gray-400 uppercase">OR</span>
                  <span className="h-px w-full bg-gray-200"></span>
                </div>

                <a 
                  href="tel:+916366700736" 
                  // Applied the exact same layout fixes to the Call button so they match perfectly
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:py-4 bg-white border-2 border-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white text-[var(--color-brand-green)] rounded-xl text-sm sm:text-base font-bold transition-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-center leading-tight">Call the Clinic</span>
                </a>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-gray-100 flex items-start space-x-4">
              <div className="p-3 bg-[var(--color-brand-bgCream)] rounded-xl text-[var(--color-brand-orange)] mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="font-black text-[var(--color-brand-green)] mb-1">Kneev in Jayanagar</p>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-3">
                  Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru 560011
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Kneev+Orthopaedic+Center&destination_place_id=ChIJKbA3dsMVrjsRY4Lzf4T72lE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-[var(--color-brand-orange)] hover:underline inline-flex items-center"
                >
                  Get Directions <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}