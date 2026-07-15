import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function LocationSection({
  heading, subcopy, address, phone, phoneHref, email,
  hours, metro, parking, nearbyHeading, nearbyAreas,
  directionsUrl, ctaPrimary, ctaSecondary, mapEmbedUrl,
  onCall,
}) {
  return (
    <section className="py-12 md:py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

        {/* Information Side */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A332F] tracking-tight">
              {heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-3 leading-relaxed">
              {subcopy}
            </p>
          </div>

          <div className="bg-[#FDFCF8] p-5 md:p-6 rounded-2xl border border-gray-100 text-left space-y-4">

            <div className="space-y-3.5">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-1">Address</p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-1">Phone</p>
                  <a href={phoneHref} onClick={() => onCall?.("location")} className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${email}`} className="text-sm text-gray-700 font-bold hover:text-[#E97724] transition-colors break-all">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-1">Opening Hours</p>
                  <p className="text-sm text-gray-700 font-medium">{hours.weekdays}</p>
                  <p className="text-sm text-[#E97724] font-bold mt-0.5">{hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-[#E97724] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium">{metro}</p>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-[#E97724] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium">{parking}</p>
              </div>
            </div>

          </div>

          {/* Nearby Areas */}
          <div>
            <p className="text-xs font-bold text-[#E97724] uppercase tracking-wide mb-2">{nearbyHeading}</p>
            <div className="flex flex-wrap gap-1.5">
              {nearbyAreas.map((area, i) => (
                <span key={i} className="bg-[#F3F6F4] text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 border border-gray-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E97724] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:bg-[#d66a1d] transition-all"
            >
              <MapPin className="w-4 h-4" /> {ctaPrimary}
            </a>
            <a
              href={phoneHref}
              onClick={() => onCall?.("location_button")}
              className="inline-flex items-center justify-center gap-2 bg-[#1A332F] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all"
            >
              <Phone className="w-4 h-4" /> {ctaSecondary}
            </a>
          </div>
        </div>

        {/* Map Side */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[420px] md:h-[500px] w-full relative">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Kneev Orthopaedic Centre Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
