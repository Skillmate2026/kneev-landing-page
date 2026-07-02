import { ArrowRight } from 'lucide-react';

export default function HeroSection({ headline, headlineAccent, subcopy, ctaPrimary, ctaSecondary, onOpenModal }) {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-24 px-4 overflow-hidden bg-[#162126]"
      style={{ backgroundImage: 'url(/hero-section-robotic.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#162126]/90 via-[#162126]/75 to-[#162126]/50 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl space-y-7 text-center md:text-left">

          <h1 className="text-[1.8rem] sm:text-4xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight">
            {headline}<br/>
            {headlineAccent}
          </h1>

          <p className="text-sm md:text-lg text-[#E8E8E8] leading-relaxed max-w-xl font-medium">
            {subcopy}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
            <button onClick={onOpenModal} className="inline-flex items-center justify-center gap-2 bg-[#F47C20] text-white font-bold text-sm md:text-base px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-xl hover:bg-[#E56E16] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
              {ctaPrimary || `Book Consultation`} <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenModal} className="inline-flex items-center justify-center gap-2 bg-white text-[#1F4D46] font-bold text-sm md:text-base px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-lg border-2 border-[#F47C20] hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              {ctaSecondary || `Get a Second Opinion`}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
