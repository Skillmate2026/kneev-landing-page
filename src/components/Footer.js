import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A332F] text-white/80 py-10 border-t-[4px] border-[#E97724]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo & Address */}
        <div className="space-y-4">
          <div className="bg-white inline-block p-1.5 rounded-lg mb-2">
             <img src="/logo.png" alt="Kneev Logo" className="h-8 w-auto" />
          </div>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium leading-relaxed">
              Ground floor, 334/28, 14th Cross Rd,<br />
              2nd Block, Jayanagar, Bengaluru,<br />
              Karnataka 560011
            </p>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact Us</h4>
          
          <div className="flex items-center group">
            <Phone className="w-4 h-4 mr-3 text-[#E97724] flex-shrink-0" />
            <a href="tel:+916366700736" className="text-sm font-bold hover:text-[#E97724] transition-colors">
              +91 636 670 0736
            </a>
          </div>
          
          <div className="flex items-center group">
            <Mail className="w-4 h-4 mr-3 text-[#E97724] flex-shrink-0" />
            <a href="mailto:kneevorthopaediccenter@gmail.com" className="text-sm font-bold hover:text-[#E97724] transition-colors break-all">
              kneevorthopaediccenter@gmail.com
            </a>
          </div>
        </div>

        {/* Column 3: Hours & Socials */}
        <div className="space-y-5">
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Clinic Hours</h4>
            <div className="flex items-start">
              <Clock className="w-4 h-4 mr-3 text-[#E97724] flex-shrink-0 mt-0.5" />
              <div className="text-sm font-medium space-y-1">
                <p>Mon - Sat: <span className="text-white">9:00 AM - 7:00 PM</span></p>
                <p>Sunday: <span className="text-[#E97724] font-bold">By appointment</span></p>
              </div>
            </div>
          </div>

          {/* Social Icons (Inline SVGs replace Lucide imports) */}
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E97724] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E97724] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E97724] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-white/10 text-center">
        <p className="text-xs font-medium text-white/50">
          © {new Date().getFullYear()} KNEEV Orthopaedic Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}