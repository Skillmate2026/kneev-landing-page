'use client';
import { useState, useEffect, useCallback } from 'react';

let hasFormBeenOpenedOrInteracted = false;

export function setFormInteracted() {
  hasFormBeenOpenedOrInteracted = true;
}

export function useAppointmentPopup(delayMs = 30000) {
  const [showPopup, setShowPopup] = useState(false);

  const markInteracted = useCallback(() => {
    hasFormBeenOpenedOrInteracted = true;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasFormBeenOpenedOrInteracted) {
        setShowPopup(true);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return { showPopup, setShowPopup, setFormInteracted: markInteracted };
}
