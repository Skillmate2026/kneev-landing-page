import Image from 'next/image';
import { CheckCircle, Award } from 'lucide-react';

function BioBlock({ bio }) {
  const paragraphs = bio.split('\n\n');
  const bullets = paragraphs.filter(p => p.startsWith('*'));
  return (
    <div className="max-w-3xl mx-auto mt-6 md:mt-8 space-y-3 md:space-y-4">
      {paragraphs.map((para, i) => {
        if (para.startsWith('*')) return null;
        const isSubheading = i < paragraphs.length - 1 && paragraphs[i + 1].startsWith('*');
        if (isSubheading) {
          return (
            <div key={i}>
              <p className="text-sm md:text-base font-bold text-[#1F4D46] mb-2 md:mb-3">{para}</p>
              <ul className="space-y-2 md:space-y-3 ml-1">
                {bullets.map((b, j) => {
                  const text = b.replace(/^\*\s*/, '');
                  const colonIdx = text.indexOf(':');
                  const title = text.substring(0, colonIdx);
                  const desc = text.substring(colonIdx + 1).trim();
                  return (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full border-2 border-[#1F4D46] flex-shrink-0 mt-2" />
                      <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        <strong className="text-[#1F4D46]">{title}:</strong> {desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
        return (
          <p key={i} className="text-xs md:text-base text-gray-700 font-medium leading-relaxed">
            {para}
          </p>
        );
      })}
    </div>    
  );
}

export default function DoctorSection({ imageAlt, subtitle, quote, bio, badges, credentials }) {
  const showLegacyBlocks = !bio;

  return (
    <section id="doctor" className="py-8 md:py-14 px-4 bg-white border-b border-gray-100">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-[#1F4D46]">Meet Dr. Amith P. Shetty</h2>
      </div>

      <div className="max-w-5xl mx-auto bg-[#F8F8F6] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/5 relative min-h-[300px] md:min-h-[480px] flex-shrink-0">
          <Image src="/dr.webp" alt={imageAlt} fill className="object-cover object-[center_20%]" sizes="(max-width: 768px) 100vw, 40vw" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1F4D46] via-[#1F4D46]/80 to-transparent p-5 pt-12 md:hidden">
            <h3 className="text-white font-black text-2xl">Dr. Amith P. Shetty</h3>
            <p className="text-[#F47C20] font-bold text-xs uppercase tracking-wider mt-1">{subtitle}</p>
          </div>
        </div>

        <div className="md:w-3/5 p-5 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="hidden md:block">
            <h3 className="text-2xl md:text-3xl font-black text-[#1F4D46] leading-tight">Dr. Amith P. Shetty</h3>
            <p className="text-[#F47C20] font-bold text-xs lg:text-sm uppercase tracking-wider mt-1.5">{subtitle}</p>
          </div>

          {showLegacyBlocks && badges && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 mb-5">
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-[#F47C20]/20 rounded-lg px-3 py-2 shadow-sm">
                  <badge.icon className="w-4 h-4 text-[#F47C20] flex-shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#1F4D46] leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          )}

          {showLegacyBlocks && (
            <div className="space-y-3 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1F4D46] text-sm flex items-center border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                <Award className="w-4 h-4 mr-2 text-[#F47C20]" /> Founder &amp; Chief Orthopaedic Surgeon
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#F47C20] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span><strong>{c.bold}</strong>{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {bio && <BioBlock bio={bio} />}
    </section>
  );
}
