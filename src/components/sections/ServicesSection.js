import { CheckCircle } from 'lucide-react';

/**
 * "What We Treat" services strip.
 * @param {{ heading: string, items: string[] }} props
 */
export default function ServicesSection({ heading, items }) {
  return (
    <section className="py-8 md:py-12 px-4 bg-[#FDFCF8] border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <span className="text-[#E97724] font-bold text-xs uppercase tracking-widest">What We Treat</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A332F] mt-1.5">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 shadow-sm hover:border-[#E97724]/30 transition-colors duration-300">
              <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
              <span className="font-bold text-sm md:text-[15px] text-[#1A332F]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
