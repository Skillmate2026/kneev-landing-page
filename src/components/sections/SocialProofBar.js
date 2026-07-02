/**
 * Dark stats bar shown directly under the hero.
 * @param {{ stats: { stat: string, label: string }[] }} props
 */
export default function SocialProofBar({ stats }) {
  return (
    <section className="bg-[#1F4D46] text-white py-6 md:py-7 px-4 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-y-5 gap-x-4 md:flex md:justify-center md:gap-x-10 text-center">
        {stats.map((item, i) => (
          <div key={i} className="px-2">
            <div className="text-2xl md:text-3xl font-black text-[#F47C20] leading-none">{item.stat}</div>
            <div className="text-[11px] md:text-sm font-semibold text-white/70 uppercase tracking-wide mt-1.5">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
