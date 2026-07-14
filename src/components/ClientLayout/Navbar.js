import Image from 'next/image';


/**
 * @param {{ hideBookCta?: boolean }} props
 */
export default function Navbar({ hideBookCta = false }) {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-2.5 md:py-3 relative flex items-center justify-center">
        <Image src="/logo.webp" alt="Kneev Orthopedic Clinic Logo" width={100} height={34} className="object-contain md:w-[150px] md:h-[50px]" priority />

      </div>
    </header>
  );
}