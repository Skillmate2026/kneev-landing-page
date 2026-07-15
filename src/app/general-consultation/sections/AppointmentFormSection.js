import LeadForm from '@/components/LeadForm';

export default function AppointmentFormSection({ title, subtitle, concerns, buttonText, disclaimer }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#F3F6F4]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
          <LeadForm
            mode="book"
            location="hero_form"
            formTitle={title}
            formSubtitle={subtitle}
            buttonText={buttonText}
            concernOptions={concerns}
          />
          <p className="text-xs text-gray-400 text-center mt-5 leading-relaxed">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
