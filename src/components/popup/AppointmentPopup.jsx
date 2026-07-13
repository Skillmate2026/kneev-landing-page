'use client';
import { useAppointmentPopup } from './useAppointmentPopup';
import FormPopup from './FormPopup';
import LeadForm from '../LeadForm';

export default function AppointmentPopup() {
  const { showPopup, setShowPopup } = useAppointmentPopup();

  return (
    <FormPopup
      show={showPopup}
      onClose={() => setShowPopup(false)}
      title="Book Your Consultation"
      subtitle="Priority slots available for local residents."
    >
      <LeadForm
        mode="book"
        location="auto_popup"
        formTitle="Book Your Consultation"
        buttonText="Book Your Consultation"
      />
    </FormPopup>
  );
}
