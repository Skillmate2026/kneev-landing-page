"use client";

import { ArrowRight } from 'lucide-react';

/**
 * "What To Expect On Day One" numbered steps.
 * @param {{ steps: { title: string, desc: string }[],
 *   onBook: (location: string) => void }} props
 */
export default function DayOneSection({ steps, onBook }) {
  return (
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
            {steps.map((step, idx, arr) => (
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
          <button onClick={() => onBook("day_one")} className="inline-flex items-center gap-2 bg-[#1A332F] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
