"use client";

import { ArrowRight } from 'lucide-react';

/**
 * "Why Choose Kneev" reasons grid.
 * @param {{ heading: string,
 *   boxes: { icon: React.ComponentType<{ className?: string }>, title: string, desc: string }[],
 *   onBook: (location: string) => void }} props
 */
export default function WhyChooseSection({ heading, boxes, onBook }) {
  return (
    <section className="py-10 md:py-16 px-4 bg-[#1F4D46] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {boxes.map((box, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl">
              <box.icon className="w-7 h-7 md:w-8 md:h-8 text-[#F47C20] mb-3" />
              <h3 className="text-base md:text-lg font-bold mb-1.5">{box.title}</h3>
              <p className="text-xs md:text-sm text-white/60 font-medium leading-relaxed">{box.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => onBook("why_choose_kneev")} className="inline-flex items-center gap-2 bg-[#F47C20] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#E56E16] transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
