import { CheckCircle } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

/**
 * Closing call-to-action with lead form.
 * @param {{ heading: string, copy: string, points: string[],
 *   concernOptions?: string[] }} props
 */
export default function FinalCtaSection({ heading, copy, points, concernOptions }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#E97724] relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {heading}
          </h2>
          <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
            {copy}
          </p>

          <ul className="text-white space-y-3 font-bold text-sm md:text-base hidden md:block mt-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 mr-3 text-white" /> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Connected LeadForm Component */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
          <LeadForm
            mode="book"
            location="final_cta"
            formTitle="Book Your Consultation"
            formSubtitle="Priority slots available for local residents."
            buttonText="Book Your Consultation"
            {...(concernOptions ? { concernOptions } : {})}
          />
        </div>

      </div>
    </section>
  );
}
