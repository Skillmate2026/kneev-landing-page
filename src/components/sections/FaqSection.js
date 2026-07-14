import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ faqs }) {
  return (
    <section className="py-14 md:py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-gray-200 py-4 md:py-5 cursor-pointer">
              <summary className="font-bold text-[#1F4D46] text-sm md:text-base flex justify-between items-center list-none outline-none">
                <span>Q. {faq.q}</span>
                <span className="relative flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center text-[#F47C20]">
                  <Plus className="w-4 h-4 md:w-5 md:h-5 absolute transition-opacity duration-200 group-open:opacity-0" strokeWidth={2.5} />
                  <Minus className="w-4 h-4 md:w-5 md:h-5 absolute transition-opacity duration-200 opacity-0 group-open:opacity-100" strokeWidth={2.5} />
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm md:text-base font-medium leading-relaxed pr-6">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
