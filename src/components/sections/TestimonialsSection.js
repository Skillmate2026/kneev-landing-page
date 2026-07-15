"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';

export default function TestimonialsSection({ heading, subcopy, items, reviewCta }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback((index) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setCurrentIndex(index);
    }
  }, []);

  const scrollBy = useCallback((direction) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    const cardWidth = cards[0]?.getBoundingClientRect().width + 16 || 1;
    const next = currentIndex + direction;
    if (next < 0) {
      scrollTo(items.length - 1);
    } else if (next >= items.length) {
      scrollTo(0);
    } else if (cardWidth) {
      scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }, [currentIndex, items.length, scrollTo]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollPos = el.scrollLeft;
      const cardWidth = el.children[0]?.getBoundingClientRect().width + 16 || 1;
      const idx = Math.round(scrollPos / cardWidth);
      setCurrentIndex(Math.min(idx, items.length - 1));
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [items.length]);

  return (
    <section className="py-14 md:py-20 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] leading-tight">
            {heading}
          </h2>
          {subcopy ? (
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto">
              {subcopy}
            </p>
          ) : (
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto">
              Real Google reviews from your neighbours across South Bengaluru.
            </p>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#1F4D46] hover:text-[#F47C20] hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 gap-5 md:gap-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {items.map((tst, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-[340px] max-w-[340px] flex-shrink-0 snap-center bg-[#F8F8F6] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  {tst.summary && (
                    <p className="text-[#1F4D46] font-bold text-sm md:text-base mb-2">
                      &ldquo;{tst.summary}&rdquo;
                    </p>
                  )}
                  <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-6">&ldquo;{tst.text}&rdquo;</p>
                </div>

                <div className="flex items-center pt-4 border-t border-gray-200/60">
                  <div className="w-9 h-9 rounded-full bg-[#F47C20]/10 text-[#F47C20] flex items-center justify-center font-bold text-sm mr-3">
                    {tst.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1F4D46] text-sm">{tst.name}</div>
                    <div className="text-gray-500 font-medium text-xs">{tst.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBy(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#1F4D46] hover:text-[#F47C20] hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex justify-center gap-2.5 mt-5">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#F47C20] w-6' : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>

        {reviewCta && (
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/CWOD84f7X9pREAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F47C20] font-bold text-sm hover:underline"
            >
              <Star className="w-4 h-4 fill-current" /> {reviewCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
