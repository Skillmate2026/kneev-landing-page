'use client';
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
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
  formTitle = "Book Your Assessment",
  formSubtitle = "",
  buttonText = "Book Your ₹600 Knee Assessment",
  concernOptions = DEFAULT_CONCERNS,  // dropdown values (per-page)
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // submitLead pushes GTM + POSTs the webhook. For WhatsApp it redirects (this page
    // unloads); for "book" it returns and we show the thank-you state below.
    submitLead({
      mode,
      location,
      name: formData.name,
      phone: formData.phone,
      concern: formData.concern,
    });

    if (mode === "book") {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="w-full text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#E97724]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#E97724]" />
        </div>
        <h3 className="text-xl font-bold text-[#1A332F]">Request received!</h3>
        <p className="text-sm text-gray-600 font-medium mt-2 leading-relaxed">
          Thank you, {formData.name || "there"}. Our team will call you shortly to confirm your
          priority slot. For anything urgent, call us at{" "}
          <a href="tel:+916366700736" className="text-[#E97724] font-bold">+91 636 670 0736</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-[#1A332F]">
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
          <label htmlFor="name" className="block text-sm font-medium text-[#1A332F]">
            Full Name <span className="text-[#E97724]">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E97724]/50 focus:border-[#E97724] outline-none transition text-gray-800 placeholder-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-[#1A332F]">
            Mobile Number <span className="text-[#E97724]">*</span>
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
            className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E97724]/50 focus:border-[#E97724] outline-none transition text-gray-800 placeholder-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="concern" className="block text-sm font-medium text-[#1A332F]">
            Your Concern <span className="text-[#E97724]">*</span>
          </label>
          <select
            required
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E97724]/50 focus:border-[#E97724] outline-none transition text-gray-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_16px_center]"
          >
            <option value="" disabled>Select your concern</option>
            {concernOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#E97724] text-white py-3.5 mt-2 rounded-md font-bold text-[15px] hover:bg-[#d66a1d] transition-all flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? "Submitting…" : buttonText}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Your information is secure and confidential.
        </p>
      </form>
    </div>
  );
}
