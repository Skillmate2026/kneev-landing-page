'use client';
import { useAppointmentPopup } from './useAppointmentPopup';
import FormPopup from './FormPopup';
import LeadForm from '../LeadForm';

export default function AppointmentPopup() {
  const { showPopup, setShowPopup } = useAppointmentPopup(10000);

  return (
    <FormPopup
      show={showPopup}
      onClose={() => setShowPopup(false)}
    >
      <LeadForm
        mode="book"
        location="auto_popup"
        buttonText="Book Your Consultation"
      />
    </FormPopup>
  );
}
