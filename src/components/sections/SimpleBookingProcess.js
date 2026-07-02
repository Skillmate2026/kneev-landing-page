import { ArrowRight } from 'lucide-react';

export default function SimpleBookingProcess({ heading, steps }) {
  return (
    <section className="py-14 md:py-20 px-4 bg-[#F8F8F6] border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] text-center leading-tight mb-10">
          {heading}
        </h2>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#1F4D46]/10" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-4">
                <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1F4D46] text-white font-black text-lg md:text-xl flex items-center justify-center shadow-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-[#1F4D46]">{step.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-5 w-5 h-5 text-[#F47C20] opacity-50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
