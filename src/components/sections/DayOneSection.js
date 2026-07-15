"use client";

import { ArrowRight } from 'lucide-react';

/**
 * "What To Expect On Day One" numbered steps.
 * @param {{ steps: { title: string, desc: string }[],
 *   onBook: (location: string) => void }} props
 */
export default function DayOneSection({ steps, onBook }) {
  return (
    <section className="py-10 md:py-14 px-4 bg-[#F3F6F4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-[#F47C20] font-bold text-xs uppercase tracking-widest">What To Expect On Day One</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1F4D46] mt-2">A Simple, Stress-Free First Visit</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-[#1F4D46]/15" aria-hidden="true"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#1F4D46] text-white font-black text-sm flex items-center justify-center ring-4 ring-[#F3F6F4] shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#1F4D46] mt-3 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button onClick={() => onBook("day_one")} className="inline-flex items-center gap-2 bg-[#1F4D46] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
