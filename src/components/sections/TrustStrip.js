export default function TrustStrip() {
  return (
    <>
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Exclusive Tie-up</p>
          <div className="flex items-center justify-center gap-x-6">
            <img src="/apollo-logo.svg" alt="Apollo Hospitals" className="h-16 md:h-20 w-auto" />
            <span className="text-[#F47C20] font-black text-lg">&amp;</span>
            <img src="/manipal-logo.gif" alt="Manipal Hospitals" className="h-8 md:h-10 w-auto" />
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">17+ Years Experience</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">2,500+ Surgeries</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Patients Across India</span>
        </div>
      </section>
    </>
  );
}
