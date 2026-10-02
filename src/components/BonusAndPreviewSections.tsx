
const GOLD = "#A8874E";
const NAVY = "#0B1F33";

export function InsideGuideSection() {
  const previews = [
    { src: "/inside-guide-01.png", alt: "Chapter opener — Performance Confidence, with pull quote" },
    { src: "/inside-guide-02.png", alt: "Myth vs. Fact page with action steps" },
    { src: "/inside-guide-03.png", alt: "Chapter opener with a callout box" },
    { src: "/inside-guide-04.png", alt: "Myth vs. Fact and Key Takeaways, lifestyle chapter" },
    { src: "/inside-guide-05.png", alt: "Chapter opener — Self-Esteem and Masculinity, with pull quote" },
    { src: "/inside-guide-06.png", alt: "Myth vs. Fact with Common Pitfalls & Action Steps" },
    { src: "/inside-guide-07.png", alt: "Practical insight callout with key takeaways" },
  ];
  const unavailable = [
    "Cover", "Table of contents", "30-Day Performance Challenge", "Morning Performance Routine",
    "Performance Habit Tracker", "Confidence Building Workbook", "Foods for All-Day Energy", "Blueprint Master Class Notes",
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>
            Real Pages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
            See What's Inside
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Actual pages from the main guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previews.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow-[0_15px_45px_rgba(11,31,51,0.18)] border border-slate-100"
            >
              <img src={p.src} alt={p.alt} className="w-full h-auto block" loading="lazy" />
              <p className="px-4 py-3 text-sm text-slate-600">{p.alt}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {unavailable.map((u) => (
            <div key={u} className="rounded-xl border border-dashed border-slate-300 p-4 text-center">
              <p className="text-sm font-semibold" style={{ color: NAVY }}>{u}</p>
              <p className="text-xs text-slate-500 mt-1">Page capture unavailable</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

