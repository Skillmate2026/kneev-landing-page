"use client";

import { ArrowRight } from 'lucide-react';

/**
 * "Everything Under One Roof" feature grid.
 * @param {{ heading: string, subcopy: string,
 *   items: { icon: React.ComponentType<{ className?: string }>, title: string, desc: string }[],
 *   onBook: (location: string) => void }} props
 */
export default function EverythingOneRoofSection({ heading, subcopy, items, onBook }) {
  return (
    <section className="py-10 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F]">{heading}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2.5 font-medium max-w-2xl mx-auto">
            {subcopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#FDFCF8] border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#E97724]/30 transition-colors duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#E97724]/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#E97724]" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#1A332F] mb-1.5">{item.title}</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => onBook("everything_under_one_roof")} className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
