import { Book, Calendar, Stethoscope, CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";

const CHECKOUT = "https://pay.cakto.com.br/rrz5o26_967173";
const GOLD = "#A8874E";
const NAVY = "#0B1F33";

function PriceRow({ label, value, strike }: { label: string; value: string; strike?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-slate-300">{label}</span>
      <span className={`text-sm font-semibold ${strike ? "line-through text-slate-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function BonusCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  value,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,31,51,0.08)] border border-slate-100 p-6 flex flex-col gap-4 hover:shadow-[0_12px_40px_rgba(11,31,51,0.14)] transition-shadow duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "#F6F1E7" }}
      >
        <Icon size={22} color={GOLD} strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>
          {eyebrow}
        </p>
        <h3 className="text-lg font-semibold" style={{ color: NAVY }}>
          {title}
        </h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-xs uppercase tracking-wide text-slate-400">Value</span>
        <span className="text-base font-bold" style={{ color: NAVY }}>
          {value}
        </span>
      </div>
    </div>
  );
}

export function InsideGuideSection() {
  const previews = [
    { src: "/inside-guide-01.png", alt: "Chapter opener — Performance Anxiety, with pull quote" },
    { src: "/inside-guide-02.png", alt: "Myth vs. Fact and evidence-based action steps" },
    { src: "/inside-guide-03.png", alt: "Chapter opener with Science callout box" },
    { src: "/inside-guide-04.png", alt: "Myth vs. Fact and Key Takeaways, lifestyle chapter" },
    { src: "/inside-guide-05.png", alt: "Chapter opener — Self-Esteem and Masculinity, with pull quote" },
    { src: "/inside-guide-06.png", alt: "Myth vs. Fact and Common Pitfalls & Action Steps" },
    { src: "/inside-guide-07.png", alt: "Clinical Insight callout on treatment options" },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>
            A Look Inside
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
            Inside the Guide
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Take a look inside the guide and discover the practical insights waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previews.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow-[0_15px_45px_rgba(11,31,51,0.18)] border border-slate-100"
            >
              <img src={p.src} alt={p.alt} className="w-full h-auto block" loading="lazy" />
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm max-w-xl mx-auto mt-10 leading-relaxed">
          These are just a few pages from the complete guide. The full ebook contains over 40
          professionally designed chapters packed with actionable insights.
        </p>
      </div>
    </section>
  );
}

export function BonusPackageSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>
            More than an ebook
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
            Everything You Get Today
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Everything you need to improve your confidence, understand the science behind men's
            performance, and build healthier long-term habits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <BonusCard
            icon={Book}
            eyebrow="Main Guide"
            title="The Men's Performance Blueprint"
            description="The complete, premium 40-chapter guide — science-based, practical, and built for real results."
            value="$49"
          />
          <BonusCard
            icon={Calendar}
            eyebrow="Bonus #1"
            title="30-Day Performance Action Plan"
            description="A day-by-day plan to build healthier habits, improve circulation, reduce performance anxiety, and grow long-term confidence."
            value="$29"
          />
          <BonusCard
            icon={Stethoscope}
            eyebrow="Bonus #2"
            title="Doctor Consultation Guide"
            description="Walk into your next appointment prepared — organize your symptoms, ask the right questions, and understand your options."
            value="$24"
          />
          <BonusCard
            icon={CheckCircle2}
            eyebrow="Bonus #3"
            title="Wellness Checklist"
            description="A printable weekly checklist covering nutrition, sleep, exercise, stress, hydration, and the habits that affect men's health."
            value="$19"
          />
        </div>

        <div
          className="max-w-xl mx-auto rounded-2xl p-8 text-center shadow-[0_20px_60px_rgba(11,31,51,0.25)]"
          style={{ backgroundColor: NAVY }}
        >
          <div className="max-w-xs mx-auto mb-5">
            <PriceRow label="Total Value" value="$121" strike />
            <PriceRow label="Today's Price" value="Only $39 USD" />
          </div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ backgroundColor: GOLD }}
          >
            <Sparkles size={14} color={NAVY} />
            <span className="text-xs font-bold tracking-wide" style={{ color: NAVY }}>
              SAVE $82 TODAY
            </span>
          </div>

          <h3 className="text-white text-xl font-bold mb-1">Start Your Transformation Today</h3>
          <p className="text-slate-300 text-sm mb-6">
            You're getting a complete performance improvement system — not just an ebook.
          </p>

          <a
            href={CHECKOUT}
            className="inline-block w-full rounded-xl py-3.5 font-bold text-sm tracking-wide uppercase transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Get Instant Access — Only $39
          </a>
        </div>
      </div>
    </section>
  );
}
