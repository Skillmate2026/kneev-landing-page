import { ShieldCheck } from 'lucide-react';

export default function OurPromiseSection({ text }) {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#F8F8F6] border-t border-gray-100">
      <div className="max-w-3xl mx-auto bg-[#1F4D46] rounded-2xl py-8 md:py-10 px-8 md:px-12 text-center shadow-xl">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F47C20]/20 mb-4">
          <ShieldCheck className="w-6 h-6 text-[#F47C20]" />
        </div>
        <h3 className="text-white font-black text-xl md:text-2xl mb-3">Our Promise</h3>
        <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
          {text}
        </p>
      </div>
    </section>
  );
}
