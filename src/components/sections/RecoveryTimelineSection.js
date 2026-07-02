export default function RecoveryTimelineSection({ heading, phases }) {
  return (
    <section className="py-8 md:py-16 px-4 bg-[#F8F8F6] border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <span className="text-[#F47C20] font-bold text-[10px] md:text-xs uppercase tracking-widest">What to Expect</span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-[#1F4D46] mt-1">{heading}</h2>
        </div>

        <div className="space-y-1.5">
          {phases.map((phase, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-white rounded-lg p-2.5 md:p-3">
              <span className="bg-[#F47C20]/10 text-[#F47C20] font-black text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-md flex-shrink-0 mt-0.5 uppercase tracking-wider">
                {phase.day}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-[#1F4D46] text-xs md:text-base">{phase.title}</h3>
                <p className="text-[11px] md:text-sm text-gray-600 font-medium mt-0.5 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
