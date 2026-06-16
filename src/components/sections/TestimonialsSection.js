"use client";

import { Star } from 'lucide-react';

/**
 * Horizontally-scrolling patient testimonials.
 * @param {{ heading: string, items: { name: string, loc: string, text: string }[] }} props
 */
export default function TestimonialsSection({ heading, items }) {
  return (
    <section className="py-10 md:py-14 px-4 bg-[#FDFCF8] border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
            {heading}
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
            {items.map((tst, idx) => (
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
  );
}
