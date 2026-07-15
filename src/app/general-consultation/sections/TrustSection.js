import { Star } from 'lucide-react';

function GoogleIcon() {
  return (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

function KneevLogo() {
  return (
    <img src="/logo.webp" alt="Kneev" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
  );
}

function PlatformBadge({ icon, name, stars, starColor, subtitle }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-[#1A332F] text-sm md:text-lg">{name}</div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="flex gap-0.5">
            {[...Array(stars)].map((_, j) => (
              <Star key={j} className={`w-3 h-3 md:w-4 md:h-4 ${starColor}`} />
            ))}
          </div>
          <span className="text-xs md:text-sm text-gray-500 font-medium">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export default function TrustSection({ heading, platforms, patientStats }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#F8F8F6]">
      <div className="max-w-5xl mx-auto">

        {/* Desktop: separate cards + stats box */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-5 mb-8">
            {platforms.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {p.iconType === 'google' ? <GoogleIcon /> : <KneevLogo />}
                </div>
                <div>
                  <div className="font-bold text-[#1A332F] text-lg">{p.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(p.stars)].map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${p.starColor || 'text-[#FFC107] fill-[#FFC107]'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{p.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#EBF5FB] rounded-2xl p-8 text-center">
            <div className="text-red-500 text-xl mr-1 inline">❤️</div>
            <span className="font-bold text-[#1A332F] text-lg">What our patients say:</span>
            <div className="flex justify-center gap-12 mt-4">
              {patientStats.map((stat, i) => (
                <div key={i}>
                  <div className="font-bold text-[#1A332F] text-2xl">{stat.value}</div>
                  <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: single combined card */}
        <div className="md:hidden">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            {/* Platforms */}
            <div className="space-y-4">
              {platforms.map((p, i) => (
                <PlatformBadge
                  key={i}
                  icon={p.iconType === 'google' ? <GoogleIcon /> : <KneevLogo />}
                  name={p.name}
                  stars={p.stars}
                  starColor={p.starColor || 'text-[#FFC107] fill-[#FFC107]'}
                  subtitle={p.subtitle}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-4"></div>

            {/* Stats */}
            <div className="text-center">
              <div className="text-red-500 text-base mr-1 inline">❤️</div>
              <span className="font-bold text-[#1A332F] text-sm">What our patients say:</span>
              <div className="flex justify-center gap-8 mt-3">
                {patientStats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-bold text-[#1A332F] text-lg">{stat.value}</div>
                    <div className="text-gray-600 font-medium text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
