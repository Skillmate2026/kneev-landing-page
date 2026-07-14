import { CheckCircle } from 'lucide-react';

export default function WhatYouGetSection({ heading, items }) {
  return (
    <section className="py-14 md:py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] text-center leading-tight mb-10">
          {heading}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-5 bg-[#F8F8F6] rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#F47C20]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#F47C20]" />
              </div>
              <span className="text-sm md:text-lg font-bold text-[#1F4D46]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
