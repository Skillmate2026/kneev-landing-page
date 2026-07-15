import { ArrowRight, Phone, Star } from 'lucide-react';

export default function FinalCtaSection({ heading, copy, ctaPrimary, ctaSecondary, phoneHref, trustBar, onOpenBook, onCall }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#E97724] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-7 md:space-y-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          {heading}
        </h2>

        <p className="text-white/90 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
          {copy}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenBook?.("final_cta")}
            className="inline-flex items-center gap-2 bg-[#1A332F] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-[#0f2420] transition-all"
          >
            {ctaPrimary} <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={phoneHref}
            onClick={() => onCall?.("final_cta")}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-white/25 transition-all"
          >
            <Phone className="w-4 h-4" /> {ctaSecondary}
          </a>
        </div>

        <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
          <span className="font-black text-white mr-2">4.9</span>
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />)}
          </div>
          <span className="text-xs font-bold text-white/70 uppercase tracking-wide border-l border-white/30 pl-2">{trustBar}</span>
        </div>

      </div>
    </section>
  );
}
