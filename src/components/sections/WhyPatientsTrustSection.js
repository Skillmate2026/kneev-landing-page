export default function WhyPatientsTrustSection({ heading, items }) {
  return (
    <section id="doctor" className="py-14 md:py-20 px-4 bg-[#F8F8F6] border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#1F4D46] text-center leading-tight mb-10">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#F47C20]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-[#F47C20]" />
              </div>
              <div>
                <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
