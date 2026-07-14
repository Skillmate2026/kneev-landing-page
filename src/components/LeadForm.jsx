'use client';
import { useState } from 'react';

import { submitLead } from '../lib/leads';

const DEFAULT_CONCERNS = [
  "Knee Pain",
  "Knee Arthritis",
  "Sports Knee Injury",
  "Avoiding Knee Replacement",
  "Knee Second Opinion",
];

export default function LeadForm({
  mode = "book",                 // "book" stays on-site, "whatsapp" redirects to chat
  location = "",                 // cta_location for attribution
  formTitle = "Book Your Consultation",
  formSubtitle = "",
  buttonText = "Book Your Consultation",
  concernOptions = DEFAULT_CONCERNS,  // dropdown values (per-page)
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    submitLead({
      mode,
      location,
      name: formData.name,
      phone: formData.phone,
      concern: formData.concern,
    });
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-[#1F4D46]">
          {formTitle}
        </h3>
        {formSubtitle ? (
          <p className="text-gray-500 text-xs mt-1.5 font-medium leading-relaxed">
            {formSubtitle}
          </p>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-[#1F4D46]">
            Full Name <span className="text-[#F47C20]">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#F47C20]/50 focus:border-[#F47C20] outline-none transition text-gray-800 placeholder-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-[#1F4D46]">
            Mobile Number <span className="text-[#F47C20]">*</span>
          </label>
          <input
            required
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            id="phone"
            name="phone"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#F47C20]/50 focus:border-[#F47C20] outline-none transition text-gray-800 placeholder-gray-400"
          />
        </div>

        {mode !== "whatsapp" && (
          <div className="space-y-1.5">
            <label htmlFor="concern" className="block text-sm font-medium text-[#1F4D46]">
              Your Concern <span className="text-[#F47C20]">*</span>
            </label>
            <select
              required
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#F47C20]/50 focus:border-[#F47C20] outline-none transition text-gray-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_16px_center]"
            >
              <option value="" disabled>Select your concern</option>
              {concernOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 mt-2 rounded-md font-bold text-[15px] transition-all flex items-center justify-center gap-2 disabled:opacity-70 ${
            mode === "whatsapp"
              ? "bg-[#25D366] text-white hover:bg-[#1DA851]"
              : "bg-[#F47C20] text-white hover:bg-[#E56E16]"
          }`}
        >
          {isSubmitting ? "Submitting…" : (
            <>
              {mode === "whatsapp" && (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              )}
              {buttonText}
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 font-medium text-center mt-3 leading-relaxed">
          By submitting, you consent to Kneev Orthopaedic Centre contacting you regarding your consultation. We respect your privacy and will not share your information.
        </p>

      </form>
    </div>
  );
}
