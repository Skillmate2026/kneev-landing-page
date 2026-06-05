'use client';
import React, { useState, useEffect } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: ''
  });
  
  const [trackingData, setTrackingData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    keyword: '',
    full_url: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setTrackingData({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        keyword: params.get('keyword') || params.get('utm_term') || '',
        full_url: window.location.href
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Combine form data, tracking data, and Web3Forms access key
    const payload = { 
      access_key: "4071003a-214f-4434-9a2f-679f34013733",
      subject: "New Consultation Request - Kneev",
      ...formData, 
      ...trackingData 
    };

    // Push to Google Tag Manager / DataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submission',
      form_data: payload
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your appointment request has been received.");
        setFormData({ name: '', phone: '', concern: '' }); // Reset the form
      } else {
        console.error("Web3Forms API Error:", result);
        alert(`Submission error: ${result.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl md:text-2xl font-bold text-[#1A332F] mb-6 text-left">
        Book a Consultation
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="utm_source" value={trackingData.utm_source} />
        <input type="hidden" name="utm_medium" value={trackingData.utm_medium} />
        <input type="hidden" name="utm_campaign" value={trackingData.utm_campaign} />
        <input type="hidden" name="keyword" value={trackingData.keyword} />
        <input type="hidden" name="full_url" value={trackingData.full_url} />

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
            id="phone" 
            name="phone"
            placeholder="Mobile number" 
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
            <option value="Knee Pain">Knee Pain</option>
            <option value="Joint Replacement">Joint Replacement</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Spine/Back Pain">Spine/Back Pain</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-[#E97724] text-white py-3.5 mt-2 rounded-md font-bold text-[15px] transition-all flex items-center justify-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#d66a1d]'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Request Appointment'}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Your information is secure and confidential.
        </p>
      </form>
    </div>
  );
}