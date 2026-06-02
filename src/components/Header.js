import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Kneev Orthopedic Clinic Logo" width={120} height={40} className="object-contain md:w-[150px] md:h-[50px]" priority />
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="tel:+916366700736" className="hidden md:flex items-center text-brand-orange font-bold">
            <Phone className="w-5 h-5 mr-2" /> +91 636 670 0736
          </a>
          <a href="#booking" className="bg-brand-orange text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-black text-xs md:text-sm shadow-lg hover:scale-105 transition duration-300 uppercase tracking-wide">
            Book Visit
          </a>
        </div>
      </div>
    </header>
  );
}