"use client";

import { ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * "The Kneev Promise" band. `noteHtml` renders an optional callout box.
 * @param {{ headlineLine1: string, headlineLine2: string, copyHtml: string,
 *   noteHtml?: string | null, onBook: (location: string) => void }} props
 */
export default function KneevPromiseSection({ headlineLine1, headlineLine2, copyHtml, noteHtml, onBook }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#1A332F] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-[#E97724] font-bold text-xs uppercase tracking-widest mb-4">
          <ShieldCheck className="w-4 h-4" /> The Kneev Promise
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
          {headlineLine1}<br className="hidden md:block"/>{headlineLine2}
        </h2>
        <p
          className="text-base md:text-lg text-white/75 font-medium leading-relaxed mt-5 max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: copyHtml }}
        />
        {noteHtml && (
          <div className="mt-8 bg-white/5 border border-[#E97724]/30 rounded-2xl p-5 md:p-6 max-w-3xl mx-auto">
            <p
              className="text-sm md:text-base font-semibold text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: noteHtml }}
            />
          </div>
        )}
        <div className="mt-8">
          <button onClick={() => onBook("kneev_promise")} className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all">
            Book Your Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
