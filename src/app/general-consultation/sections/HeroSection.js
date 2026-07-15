import { Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function HeroSection({ badge, headline, headlineAccent, subcopy, features, ctaPrimary, ctaSecondary, phoneHref, trustBar, onOpenBook, onCall, form }) {
  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">

        {/* LEFT COLUMN — Hero copy */}
        <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center lg:text-left">

          <div className="text-[#E97724] font-bold text-[11px] md:text-xs tracking-[0.18em] uppercase">
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-[#1A332F] leading-[1.1] tracking-tight">
            {headline} <br />
            <span className="font-black text-[#1A332F]">{headlineAccent}</span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
            {features.map((f, i) => {
              const palette = [
                'bg-yellow-100 text-yellow-800 border-yellow-200',
                'bg-red-100 text-red-800 border-red-200',
                'bg-blue-100 text-blue-800 border-blue-200',
              ];
              return (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 font-bold text-xs md:text-sm border px-3.5 py-2 rounded-full ${palette[i]}`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  {f}
                </span>
              );
            })}
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {subcopy}
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 pt-1">
            <button
              onClick={() => onOpenBook?.("hero_primary")}
              className="inline-flex items-center gap-2 bg-[#1A332F] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-[#0f2420] transition-all"
            >
              {ctaPrimary} <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={phoneHref}
              onClick={() => onCall?.("hero_secondary")}
              className="inline-flex items-center gap-2 border-2 border-[#1A332F] text-[#1A332F] font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-[#1A332F]/5 transition-all"
            >
              <Phone className="w-4 h-4" /> {ctaSecondary}
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-[#E97724] font-bold text-xs md:text-sm">
            <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
            {trustBar}
          </div>
        </div>

        {/* RIGHT COLUMN — Appointment form */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto mt-4 lg:mt-0">
          <div className="bg-white p-5 md:p-6 rounded-[1.75rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100">
            <LeadForm
              mode="book"
              location="hero_form"
              formTitle={form.title}
              formSubtitle={form.subtitle}
              buttonText={form.buttonText}
              concernOptions={form.concerns}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
