import Image from 'next/image';
import { Star } from 'lucide-react';

export default function InstantTrustSection({ name, title, rating, reviewCount }) {
  return (
    <section className="py-14 md:py-20 px-4 bg-[#F8F8F6]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-[300px] flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl mx-auto ring-4 ring-white">
              <Image src="/dr.webp" alt={name} fill className="object-cover object-[center_20%]" sizes="(max-width: 768px) 176px, 240px" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] leading-tight">{name}</h2>
            <p className="text-[#F47C20] font-bold text-xs md:text-sm uppercase tracking-widest mt-1">{title}</p>

            <div className="flex items-center justify-center md:justify-start gap-1.5 mt-3">
              <span className="font-black text-[#1F4D46] text-lg">{rating}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />)}
              </div>
              <svg className="w-5 h-5 flex-shrink-0 ml-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm text-gray-500 font-medium">({reviewCount} Google Reviews)</span>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                Dr. Amith P. Shetty is one of the top robotic knee surgeons in India, with 2,500+ successful knee replacements and a 98%+ success rate. Patients travel from across the country for his precision and expertise.
              </p>
              <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                He is brutally honest - he will clearly tell you whether surgery is even needed, and will never recommend a procedure unless it is truly the right option for you.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
