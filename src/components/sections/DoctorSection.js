import Image from 'next/image';
import { CheckCircle, Award, ArrowRight } from 'lucide-react';

export default function DoctorSection({
  heading,
  name,
  imageAlt,
  subtitle,
  intro,
  aimsHeading,
  aims,
  quote,
  credentialsHeading,
  credentials,
  ctaText,
  onBook,
}) {
  return (
    <section id="doctor" className="py-10 md:py-16 lg:py-20 px-4 bg-white border-b border-gray-100">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F]">
          {heading || 'Meet Dr. Amith P. Shetty'}
        </h2>
      </div>

      <div className="max-w-5xl lg:max-w-6xl mx-auto bg-[#FDFCF8] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">

        <div className="md:w-2/5 lg:w-[48%] relative flex-shrink-0 bg-[#F3F6F4]">
          <div className="h-[450px] md:h-full overflow-hidden">
            <Image
              src="/dr.webp"
              alt={imageAlt}
              fill
              className="object-cover object-top lg:object-contain lg:object-center"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A332F] via-[#1A332F]/80 to-transparent p-5 pt-12 md:hidden">
            <h3 className="text-white font-black text-2xl">{name || 'Dr. Amith P. Shetty'}</h3>
            <p className="text-[#E97724] font-bold text-xs uppercase tracking-wider mt-1">{subtitle}</p>
          </div>
        </div>

        <div className="md:w-3/5 lg:w-[52%] p-6 lg:p-10 xl:p-14 flex flex-col justify-center">

          <div className="hidden md:block mb-5 lg:mb-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] leading-tight">
              {name || 'Dr. Amith P. Shetty'}
            </h3>
            <p className="text-[#E97724] font-bold text-xs lg:text-sm uppercase tracking-wider mt-1.5">
              {subtitle}
            </p>
          </div>

          {intro && (
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed mb-5">
              {intro}
            </p>
          )}

          {aims && aims.length > 0 && (
            <div className="mb-5">
              {aimsHeading && (
                <p className="text-sm font-bold text-[#1A332F] mb-3">{aimsHeading}</p>
              )}
              <ul className="space-y-2">
                {aims.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#E97724] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <blockquote className="border-l-4 border-[#E97724] pl-4 my-2 md:mb-6 lg:mb-8">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium italic leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>

          <div className="mt-6 md:mt-0 space-y-3 bg-white p-4 lg:p-6 rounded-xl border border-gray-100 shadow-sm">
            {credentialsHeading ? (
              <h4 className="font-bold text-[#1A332F] text-sm flex items-center border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                <Award className="w-4 h-4 mr-2 text-[#E97724]" /> {credentialsHeading}
              </h4>
            ) : (
              <h4 className="font-bold text-[#1A332F] text-sm flex items-center border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                <Award className="w-4 h-4 mr-2 text-[#E97724]" /> Founder &amp; Chief Orthopaedic Surgeon
              </h4>
            )}
            <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#E97724] mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>{c.bold}</strong>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {ctaText && (
            <div className="mt-6 text-center md:text-left">
              <button
                onClick={() => onBook?.("doctor_cta")}
                className="inline-flex items-center gap-2 bg-[#E97724] text-white font-bold text-sm md:text-base px-7 py-3 rounded-full shadow-md hover:bg-[#d66a1d] transition-all"
              >
                {ctaText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
