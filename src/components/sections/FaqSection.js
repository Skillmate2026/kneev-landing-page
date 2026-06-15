import { Plus, Minus } from 'lucide-react';

/**
 * Two-column FAQ accordion (native <details>).
 * @param {{ faqs: { q: string, a: string }[] }} props
 */
export default function FaqSection({ faqs }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-gray-200 py-4 cursor-pointer">
              <summary className="font-bold text-[#1A332F] text-sm md:text-base flex justify-between items-center list-none outline-none">
                <span>Q. {faq.q}</span>
                <span className="relative flex-shrink-0 ml-4 w-4 h-4 flex items-center justify-center text-[#E97724]">
                  {/* The plus icon hides when open, minus shows when open */}
                  <Plus className="w-5 h-5 absolute transition-opacity duration-200 group-open:opacity-0" strokeWidth={2.5} />
                  <Minus className="w-5 h-5 absolute transition-opacity duration-200 opacity-0 group-open:opacity-100" strokeWidth={2.5} />
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm font-medium leading-relaxed pr-8">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
