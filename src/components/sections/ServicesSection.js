export default function ServicesSection({ heading, items }) {
  return (
    <section className="py-8 md:py-14 px-4 bg-[#F8F8F6] border-b border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-black text-[#1F4D46]">{heading}</h2>
        </div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47C20] flex-shrink-0 mt-2" />
              <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
