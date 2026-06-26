"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from '@formspree/react';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Replace 'YOUR_FORM_ID' with your actual Formspree ID
  const [state, handleSubmit] = useForm("maqlblrb"); 

  const availableTimeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM", 
    "01:00 PM", "02:30 PM", "04:00 PM", 
    "05:30 PM", "06:30 PM"
  ];

  // Hydration Fix
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Success Alert Popup
  useEffect(() => {
    if (state.succeeded) {
      alert("Form Successfully Submitted! Our team will verify the doctor's availability and contact you shortly.");
    }
  }, [state.succeeded]);

  // Helper function to check if a specific time slot has passed today
  const isPastSlot = (timeString, selectedDate) => {
    const now = new Date();
    
    // If the selected date is in the future, none of its slots are in the past
    if (
      selectedDate.getFullYear() !== now.getFullYear() ||
      selectedDate.getMonth() !== now.getMonth() ||
      selectedDate.getDate() !== now.getDate()
    ) {
      return false;
    }

    // Parse the slot time and compare to current time
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10);
    
    if (hours === 12) {
      hours = modifier === 'AM' ? 0 : 12;
    } else if (modifier === 'PM') {
      hours += 12;
    }

    const slotTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, parseInt(minutes, 10));
    return slotTime < now;
  };

  // Clear selected time if the user switches back to today and the chosen time has already passed
  useEffect(() => {
    if (selectedTime && isPastSlot(selectedTime, startDate)) {
      setSelectedTime(null);
    }
  }, [startDate, selectedTime]);

  // Check if any slots are currently disabled to show the explanatory note
  const hasDisabledSlots = availableTimeSlots.some(time => isPastSlot(time, startDate));

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-48 sm:h-64 text-sm sm:text-base text-gray-400 font-bold">
        Loading booking calendar...
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className="p-6 sm:p-8 bg-green-50 border-2 border-[var(--color-brand-lightGreen)] text-[var(--color-brand-green)] rounded-2xl font-bold text-center flex flex-col items-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-brand-lightGreen)] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-base sm:text-lg">Thank you! Your request has been sent.</p>
        <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">Our team will verify the doctor's availability and contact you.</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-50">
        
        {/* Formspree Custom Honeypot - Bots fill this, humans don't see it. Prevents Spam! */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        
        {/* Hidden Inputs for Data */}
        <input type="hidden" name="appointment_date" value={startDate.toDateString()} />
        <input type="hidden" name="appointment_time" value={selectedTime || 'No time selected'} />

        {/* 1. Patient Details */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-[10px] sm:text-[11px] font-bold text-[var(--color-brand-orange)] uppercase tracking-widest border-b pb-1.5 sm:pb-2">1. Patient Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input name="patient_name" type="text" placeholder="Full Name" required className="w-full sm:col-span-2 px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 transition-all pointer-events-auto" />
            <input name="email" type="email" placeholder="Email Address" required className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 transition-all pointer-events-auto" />
            <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 transition-all pointer-events-auto" />
          </div>
        </div>
        
        {/* 2. Date Selection */}
        <div className="space-y-3 sm:space-y-4 flex flex-col">
          <h4 className="text-[10px] sm:text-[11px] font-bold text-[var(--color-brand-orange)] uppercase tracking-widest border-b pb-1.5 sm:pb-2">2. Pick a Date</h4>
          <div className="border border-gray-200 rounded-2xl p-3 sm:p-4 bg-gray-50 shadow-inner flex justify-center w-full sm:inline-block sm:w-auto relative z-50 overflow-hidden">
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              inline 
            />
          </div>
        </div>

        {/* 3. Time Selection */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-[10px] sm:text-[11px] font-bold text-[var(--color-brand-orange)] uppercase tracking-widest border-b pb-1.5 sm:pb-2">3. Select a Time</h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 relative z-50">
            {availableTimeSlots.map((time) => {
              const isDisabled = isPastSlot(time, startDate);
              return (
                <button
                  key={time}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all border-2 flex items-center justify-center pointer-events-auto
                    ${isDisabled 
                      ? 'bg-gray-100 border-gray-100 text-gray-400 opacity-60 cursor-not-allowed' 
                      : selectedTime === time 
                        ? 'bg-[var(--color-brand-green)] border-[var(--color-brand-green)] text-white shadow-md scale-[1.02] cursor-pointer' 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-[var(--color-brand-lightGreen)] hover:text-[var(--color-brand-green)] cursor-pointer'
                    }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
          
          <div className="flex flex-col space-y-1 mt-1 sm:mt-2">
            {/* The UX Note explaining grayed out slots */}
            {hasDisabledSlots && (
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                Some slots are grayed out because that time has already passed today.
              </p>
            )}

            {!selectedTime && (
              <p className="text-[10px] sm:text-xs text-red-500 italic">* Please select an available time slot to continue.</p>
            )}
          </div>
        </div>

        {/* Submit Area */}
        <div className="pt-5 sm:pt-6 border-t mt-6 sm:mt-8 relative z-50">
          <button 
            type="submit" 
            disabled={state.submitting || !selectedTime}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 sm:py-4 bg-[var(--color-brand-lightGreen)] hover:bg-[#00a843] text-white rounded-xl text-sm sm:text-base font-black transition-all shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 pointer-events-auto"
          >
            {state.submitting 
              ? 'Sending Request...' 
              : `Confirm Booking for ${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${selectedTime || '...'}`
            }
          </button>
        </div>
      </form>

      {/* Responsive Global CSS for the DatePicker isolated to this component */}
      <style jsx global>{`
        .react-datepicker {
          font-family: inherit;
          border: none;
          background: transparent;
          width: 100%;
          max-width: 100vw;
        }
        .react-datepicker__month-container { width: 100%; }
        .react-datepicker__header {
          background-color: transparent;
          border-bottom: none;
          padding-top: 0;
        }
        .react-datepicker__current-month {
          color: var(--color-brand-green);
          font-weight: 900;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) { .react-datepicker__current-month { font-size: 1.1rem; } }
        .react-datepicker__day-names { display: flex; justify-content: space-between; margin-bottom: 0.25rem; }
        .react-datepicker__day-name { color: #9ca3af; font-weight: 700; font-size: 0.7rem; width: 1.8rem; }
        @media (min-width: 640px) { .react-datepicker__day-name { font-size: 0.75rem; width: 2rem; } }
        .react-datepicker__week { display: flex; justify-content: space-between; }
        .react-datepicker__day {
          width: 1.8rem;
          height: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.1rem;
          color: #4b5563;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          pointer-events: auto;
          font-size: 0.85rem;
        }
        @media (min-width: 640px) { .react-datepicker__day { width: 2rem; height: 2rem; font-size: 1rem; } }
        .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
          background-color: var(--color-brand-bgCream);
          color: var(--color-brand-green);
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: var(--color-brand-orange) !important;
          color: white !important;
          font-weight: 800;
        }
        .react-datepicker__day--disabled { color: #d1d5db; cursor: not-allowed; }
      `}</style>
    </>
  );
}