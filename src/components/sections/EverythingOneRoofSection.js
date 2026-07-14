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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1F4D46]">{heading}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2.5 font-medium max-w-2xl mx-auto">
            {subcopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#F8F8F6] border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#F47C20]/30 transition-colors duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#F47C20]/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#F47C20]" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#1F4D46] mb-1.5">{item.title}</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => onBook("everything_under_one_roof")} className="inline-flex items-center gap-2 bg-[#F47C20] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#E56E16] transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
