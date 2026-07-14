import { ArrowRight } from 'lucide-react';

export default function FinalCtaSection({ heading, copy, ctaText, subText, onOpenModal }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-[#1F4D46] to-[#1F4D46]/95 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#F47C20 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
          {heading}
        </h2>
        <p className="text-white/70 text-base md:text-lg font-medium max-w-xl mx-auto mt-4">
          {copy}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={onOpenModal} className="inline-flex items-center gap-2 bg-[#F47C20] text-white font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-xl hover:bg-[#E56E16] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {subText && (
          <p className="text-white/40 text-xs font-medium mt-4">
            {subText}
          </p>
        )}
      </div>
    </section>
  );
}
