import { CheckCircle2, XCircle } from 'lucide-react';

export default function CandidateSection({ heading, yesItems, noItems }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#F3F6F4] border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#F47C20] font-bold text-xs uppercase tracking-widest">Are You a Candidate?</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1F4D46] mt-2">{heading}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white border border-green-200 rounded-2xl p-6 md:p-7 shadow-sm">
            <h3 className="font-bold text-lg text-[#1F4D46] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              You May Be a Candidate If:
            </h3>
            <ul className="space-y-3">
              {yesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm">
            <h3 className="font-bold text-lg text-[#1F4D46] mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-gray-400" />
              You May Want to Wait If:
            </h3>
            <ul className="space-y-3">
              {noItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                Not sure? <a href="#booking-form" className="text-[#F47C20] font-bold hover:underline">Book a consultation</a> and Dr. Amith will give you an honest assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
