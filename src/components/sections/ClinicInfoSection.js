"use client";

import { MapPin, Phone, Mail, Clock, Navigation, Train, Car } from 'lucide-react';
import { CLINIC } from '@data/clinic';

export default function ClinicInfoSection({ heading, onCall }) {
  return (
    <section className="py-8 md:py-14 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="space-y-5 md:space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-[#1F4D46] tracking-tight">
              {heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
              No long drives across the city while you&apos;re in pain. We&apos;re on 14th Cross, 2nd Block, Jayanagar.
            </p>
          </div>

          <div className="bg-[#F8F8F6] p-5 md:p-6 rounded-2xl border border-gray-100 text-left">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#F47C20] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{CLINIC.address}</p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#F47C20] flex-shrink-0" />
                <a href={CLINIC.phoneHref} onClick={() => onCall("contact_section")} className="text-sm text-gray-700 font-bold hover:text-[#F47C20] transition-colors">{CLINIC.phoneDisplay}</a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#F47C20] flex-shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="text-sm text-gray-700 font-bold hover:text-[#F47C20] transition-colors break-all">{CLINIC.email}</a>
              </div>

              <div className="flex items-start pt-1">
                <Clock className="w-5 h-5 mr-3 text-[#F47C20] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 font-medium leading-snug">
                  <p>{CLINIC.hours.weekdays}</p>
                  <p className="text-[#F47C20] font-bold mt-0.5">{CLINIC.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#F3F6F4] rounded-xl p-3 text-center border border-gray-200">
              <Car className="w-5 h-5 text-[#F47C20] mx-auto mb-1" />
              <p className="text-xs font-bold text-[#1F4D46]">Parking Available</p>
              <p className="text-[10px] text-gray-500">Free on-site parking</p>
            </div>
            <div className="bg-[#F3F6F4] rounded-xl p-3 text-center border border-gray-200">
              <Train className="w-5 h-5 text-[#F47C20] mx-auto mb-1" />
              <p className="text-xs font-bold text-[#1F4D46]">Nearby Metro</p>
              <p className="text-[10px] text-gray-500">Jayanagar Metro: 5 min</p>
            </div>
            <div className="bg-[#F3F6F4] rounded-xl p-3 text-center border border-gray-200">
              <Navigation className="w-5 h-5 text-[#F47C20] mx-auto mb-1" />
              <a href="https://maps.google.com/?daddr=12.9373797,77.5821029" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#F47C20] hover:underline">Get Directions</a>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <p className="uppercase text-gray-400 font-bold tracking-wider text-[10px]">Distance from nearby areas:</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
              {CLINIC.distanceMarkers.map((marker, i) => (
                <span key={i} className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">{marker}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[320px] md:h-[420px] w-full relative">
          <iframe src={CLINIC.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Clinic Location"></iframe>
        </div>
      </div>
    </section>
  );
}
