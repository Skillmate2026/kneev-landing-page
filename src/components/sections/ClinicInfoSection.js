"use client";

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CLINIC } from '@data/clinic';

/**
 * Clinic contact details + embedded map. Contact data is shared (CLINIC);
 * only the heading differs per page.
 * @param {{ heading: string, onCall: (location: string) => void }} props
 */
export default function ClinicInfoSection({ heading, onCall }) {
  return (
    <section className="py-10 md:py-14 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* Information Side */}
        <div className="space-y-5 md:space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              {heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
              No long drives across the city while you&apos;re in pain. We&apos;re on 14th Cross, 2nd Block, easy to reach from across South Bengaluru.
            </p>
          </div>

          <div className="bg-[#FDFCF8] p-5 md:p-6 rounded-2xl border border-gray-100 text-left">
            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {CLINIC.address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
                <a href={CLINIC.phoneHref} onClick={() => onCall("contact_section")} className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors">
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors break-all">
                  {CLINIC.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start pt-1">
                <Clock className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 font-medium leading-snug">
                  <p>{CLINIC.hours.weekdays}</p>
                  <p className="text-[#E97724] font-bold mt-0.5">{CLINIC.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Distance Markers */}
          <div className="space-y-2 pt-2">
            <p className="uppercase text-gray-400 font-bold tracking-wider text-[10px]">Driving Distance:</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
              {CLINIC.distanceMarkers.map((marker, i) => (
                <span key={i} className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">{marker}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Map Side */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[320px] md:h-[420px] w-full relative">
          <iframe
            src={CLINIC.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
