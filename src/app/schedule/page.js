import React from 'react';
import Image from 'next/image';
import BookingForm from './BookingForm'; // Importing our separated logic

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

  return (
    <main className="min-h-screen bg-[var(--color-brand-bgCream)] font-sans pb-16 lg:pb-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1b3b31] px-4 sm:px-6 py-12 lg:py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <Image 
            src="/treat-physio.webp" 
            alt="Kneev Physiotherapy" 
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--color-brand-orange)] leading-tight mb-3 tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto px-2">
            Select a date and time that works for you, and lock in your appointment with our specialists.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* LEFT COLUMN: Doctor Profile, Location, and Static Schedule */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* FULL Doctor Profile (Highly Responsive) */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-[var(--color-brand-bgCream)] shadow-sm flex-shrink-0">
                  <Image 
                    src="/dr.webp" 
                    alt="Dr. Amith P. Shetty" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[var(--color-brand-green)] tracking-tight">Dr. Amith P. Shetty</h3>
                  <p className="text-[10px] font-bold text-[var(--color-brand-orange)] mt-1 uppercase tracking-wider">
                    Chief Orthopaedic Surgeon
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 font-medium italic border-l-4 border-[var(--color-brand-orange)] pl-3 py-1 mb-5 bg-[var(--color-brand-bgCream)]/40 rounded-r-lg">
                "Finding the real cause of pain for long-lasting, conservative relief."
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                <li className="flex items-start sm:items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3 mt-1.5 sm:mt-0 flex-shrink-0"></span>
                  <strong>MBBS, MS (Orthopaedics)</strong>
                </li>
                <li className="flex items-start sm:items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3 mt-1.5 sm:mt-0 flex-shrink-0"></span>
                  <strong>Dip SICOT & FIJR (Germany)</strong>
                </li>
                <li className="flex items-start sm:items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lightGreen)] mr-3 mt-1.5 sm:mt-0 flex-shrink-0"></span>
                  17+ Years Experience
                </li>
              </ul>
            </div>

            {/* Location Info (Highly Responsive) */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-6 border border-gray-100 flex items-start space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-[var(--color-brand-bgCream)] rounded-xl text-[var(--color-brand-orange)] mt-1 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-base sm:text-lg font-black text-[var(--color-brand-green)] mb-1">Kneev in Jayanagar</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed mb-3">
                  Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru 560011
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Kneev+Orthopaedic+Center&destination_place_id=ChIJKbA3dsMVrjsRY4Lzf4T72lE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs sm:text-sm font-bold text-[var(--color-brand-orange)] hover:underline inline-flex items-center"
                >
                  Get Directions <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* Premium Static Calendar Hours */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 p-5 sm:p-6">
              <div className="mb-4 sm:mb-5 border-b-2 border-[var(--color-brand-bgCream)] pb-3 sm:pb-4 flex items-center space-x-3">
                <div className="p-2 bg-[var(--color-brand-green)] rounded-xl text-[var(--color-brand-orange)] shadow-inner flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h2 className="font-black text-lg sm:text-xl text-[var(--color-brand-green)] tracking-tight">Operating Hours</h2>
                </div>
              </div>

              <div className="space-y-2">
                {staticSchedule.map((item, idx) => (
                  <div key={idx} className={`w-full flex justify-between items-center p-2.5 sm:p-3 rounded-xl border-l-4 text-xs sm:text-sm ${item.isSpecial ? 'bg-[var(--color-brand-bgCream)] border-[var(--color-brand-orange)]' : 'bg-gray-50 border-[var(--color-brand-green)]'}`}>
                    <span className={`font-black tracking-tight ${item.isSpecial ? 'text-gray-800' : 'text-[var(--color-brand-green)]'}`}>{item.day}</span>
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-lg ${item.isSpecial ? 'text-[var(--color-brand-orange)]' : 'bg-white text-gray-600 shadow-sm'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive Booking Form Component */}
          <div className="lg:col-span-7 relative z-50 pointer-events-auto">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 sm:p-8 border border-gray-100">
              
              <div className="mb-6 sm:mb-8 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 tracking-tight">Request an Appointment</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-2">Choose your preferred slot. We will confirm via email shortly.</p>
              </div>
              
              {/* Load the isolated interactive form */}
              <BookingForm />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}