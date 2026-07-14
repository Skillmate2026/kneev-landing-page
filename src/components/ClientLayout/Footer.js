import Image from 'next/image';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLINIC } from '@data/clinic';

export default function Footer() {
  const whatsappUrl = `https://wa.me/916366700736`;

  return (
    <footer className="bg-[#1F4D46] text-white/80 py-10 border-t-[4px] border-[#F47C20]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="bg-white inline-block p-1.5 rounded-lg mb-2">
            <Image src="/logo.webp" alt="Kneev Logo" width={90} height={32} className="h-8 w-auto" />
          </div>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-3 text-[#F47C20] flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium leading-relaxed">{CLINIC.address}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact</h4>
          <div className="flex items-center group">
            <Phone className="w-4 h-4 mr-3 text-[#F47C20] flex-shrink-0" />
            <a href={CLINIC.phoneHref} className="text-sm font-bold hover:text-[#F47C20] transition-colors">{CLINIC.phoneDisplay}</a>
          </div>
          <div className="flex items-center group">
            <MessageCircle className="w-4 h-4 mr-3 text-[#F47C20] flex-shrink-0" />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-[#F47C20] transition-colors">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Location</h4>
          <div className="rounded-xl overflow-hidden border border-white/10 h-[160px] w-full">
            <iframe src={CLINIC.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Clinic Location"></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 pt-4 border-t border-white/10">
        <p className="text-[11px] text-white/40 font-medium leading-relaxed text-center max-w-4xl mx-auto">
          Disclaimer: The information provided on this website is for educational and informational purposes only and does not constitute medical advice. Results may vary from person to person. Knee surgery involves risks, and you should consult a qualified medical professional for a proper diagnosis and treatment plan tailored to your condition. Neither Kneev Orthopaedic Centre nor Dr. Amith P. Shetty guarantee specific outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-4 pt-4 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/50">
          <p>&copy; {new Date().getFullYear()} KNEEV Orthopaedic Centre. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
