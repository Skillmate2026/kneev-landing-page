'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function FormPopup({ show, onClose, title, subtitle, children }) {
  useEffect(() => {
    if (!show) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <h3 className="text-xl md:text-2xl font-bold text-[#1F4D46] mb-1">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-gray-500 text-xs font-medium mb-6">{subtitle}</p>
        )}

        {children}
      </div>
    </div>
  );
}
