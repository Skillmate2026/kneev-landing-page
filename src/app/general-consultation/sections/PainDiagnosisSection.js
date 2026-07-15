import { CheckCircle, ArrowRight, Search } from 'lucide-react';

export default function PainDiagnosisSection({ heading, subcopy, intro, bullets, outro, ctaText, onBook }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#1A332F] text-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 text-[#E97724] font-bold text-xs uppercase tracking-widest mb-4">
            <Search className="w-4 h-4" /> Understanding Your Pain
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed mt-5 max-w-3xl mx-auto">
            {subcopy}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10">
          <p className="text-white/80 text-sm md:text-base font-medium mb-5">{intro}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-white/90 font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/80 text-sm md:text-base font-medium">{outro}</p>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onBook?.("pain_diagnosis")}
            className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all"
          >
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
