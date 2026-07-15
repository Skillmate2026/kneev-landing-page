import { useState } from 'react';
import { ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProblemsSection({ heading, subcopy, items, ctaText, onBook }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-medium mt-3 max-w-3xl mx-auto leading-relaxed">
            {subcopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, idx) => (
            <ProblemCard key={idx} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onBook?.("problems_cta")}
            className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-[#d66a1d] transition-all"
          >
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#FDFCF8] border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-[#E97724]/30 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <div>
          <h3 className="text-base md:text-lg font-bold text-[#1A332F]">{item.title}</h3>
          <p className="text-sm text-gray-600 font-medium mt-1">{item.desc}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#E97724] flex-shrink-0 ml-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5 px-5 md:px-6' : 'max-h-0'}`}>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-3">We assess:</p>
          <ul className="space-y-2">
            {item.assessments.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#E97724] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
