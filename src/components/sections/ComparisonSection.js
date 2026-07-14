export default function ComparisonSection({ heading, rows }) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#F3F6F4] border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#F47C20] font-bold text-xs uppercase tracking-widest">See the Difference</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1F4D46] mt-2">{heading}</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200">
          <table className="w-full text-left border-collapse min-w-[480px]">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 p-3 md:p-5 bg-[#1F4D46] text-white font-bold text-xs md:text-base uppercase tracking-wide w-[30%]">Feature</th>
                <th className="p-3 md:p-5 bg-[#1F4D46]/80 text-white/60 font-bold text-xs md:text-base uppercase tracking-wide w-[35%]">Traditional</th>
                <th className="p-3 md:p-5 bg-[#F47C20] text-white font-bold text-xs md:text-base uppercase tracking-wide w-[35%]">Robotic</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F6]'}>
                  <td className="sticky left-0 z-10 p-3 md:p-5 font-bold text-[#1F4D46] text-xs md:text-base border-b border-gray-100 bg-inherit">{row.feature}</td>
                  <td className="p-3 md:p-5 text-gray-500 text-xs md:text-base border-b border-gray-100">{row.traditional}</td>
                  <td className="p-3 md:p-5 text-[#1F4D46] font-bold text-xs md:text-base border-b border-gray-100">{row.robotic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
