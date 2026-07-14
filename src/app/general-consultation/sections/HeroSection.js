import { Star, CheckCircle } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function HeroSection({ badge, headline, headlineAccent, subcopy, trustChips, concernOptions }) {
  return (
    <section
      className="relative pt-10 pb-12 md:pt-16 md:pb-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-knee.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1A332F] via-[#1A332F]/90 to-[#1A332F]/40 z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">

        <div className="lg:col-span-7 space-y-5 text-center md:text-left">
          <div className="inline-flex items-center text-[#E97724] font-bold text-[11px] md:text-sm tracking-wide uppercase bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-white leading-[1.12] tracking-tight">
            {headline} <br className="hidden lg:block"/>
            <span className="text-[#E97724]">{headlineAccent}</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
            {subcopy}
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mt-2 shadow-lg">
            <span className="font-black text-white mr-2">4.9</span>
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />)}
            </div>
            <span className="text-xs font-bold text-white/70 uppercase tracking-wide border-l border-white/30 pl-2">Google Reviews</span>
          </div>
        </div>

        <div id="booking-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto mt-6 lg:mt-0">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
            <LeadForm
              mode="book"
              location="hero_form"
              formTitle="Book Your Consultation"
              formSubtitle="Priority slots available for local residents."
              buttonText="Book Your Consultation"
              {...(concernOptions ? { concernOptions } : {})}
            />
          </div>
        </div>

        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 w-full">
          {trustChips.map((badge, i) => (
            <div key={i} className="flex items-center space-x-2 text-left bg-white/5 p-3 rounded-lg border border-white/10 shadow-sm">
              <CheckCircle className="w-5 h-5 text-[#E97724] flex-shrink-0" />
              <span className="font-bold text-sm text-white/95">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
