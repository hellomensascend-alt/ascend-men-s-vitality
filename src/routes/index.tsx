import { createFileRoute } from "@tanstack/react-router";
import {
  Download, Shield, Lock, Star, ChevronDown, ArrowRight,
  FileText, Smartphone, Tablet, Laptop, Check, BookOpen,
  Sunrise, Utensils, Brain, Moon, Dumbbell, HeartPulse,
} from "lucide-react";
import { useState } from "react";
import heroEbook from "@/assets/hero-ebook.jpg";
import ebookOpen from "@/assets/ebook-open.jpg";
import bonusesImg from "@/assets/bonuses.jpg";
import lifeWalk from "@/assets/lifestyle-walk.jpg";
import lifeKitchen from "@/assets/lifestyle-kitchen.jpg";
import lifeRead from "@/assets/lifestyle-read.jpg";
import { InsideGuideSection, BonusPackageSection } from "@/components/BonusAndPreviewSections";
import { STRIPE_CHECKOUT_URL } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEN ASCEND — The Man You Were Meant to Be" },
      { name: "description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "MEN ASCEND — The Man You Were Meant to Be" },
      { property: "og:description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://peak-man-flow.lovable.app/" },
      { property: "og:image", content: "https://peak-man-flow.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MEN ASCEND — The Man You Were Meant to Be" },
      { name: "twitter:description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { name: "twitter:image", content: "https://peak-man-flow.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://peak-man-flow.lovable.app/" },
    ],
  }),
  component: Index,
});

const CHECKOUT = STRIPE_CHECKOUT_URL;

function CTA({ children = "Download Instantly", size = "lg", className = "" }: { children?: React.ReactNode; size?: "lg" | "md"; className?: string }) {
  const sizes = size === "lg"
    ? "px-6 md:px-8 py-4 md:py-5 text-base md:text-lg"
    : "px-5 py-3 text-sm md:text-base";
  return (
    <a
      href={CHECKOUT}
      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all ${sizes} ${className}`}
    >
      <Download className="w-5 h-5" />
      {children}
      <ArrowRight className="w-4 h-4 opacity-70" />
    </a>
  );
}

function Nav() {
  return (
    <header className="border-b border-border/60 bg-white/80 backdrop-blur sticky top-9 sm:top-10 z-40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary grid place-items-center text-primary-foreground font-serif font-bold">M</div>
          <span className="font-serif text-lg font-semibold tracking-tight text-secondary">Men Ascend</span>
        </a>
        <a href={CHECKOUT} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/90 transition-colors">
          <Download className="w-4 h-4" /> Get the Ebook
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.96_0.03_148)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-16 pb-12 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 text-xs font-semibold text-secondary uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> Premium Digital Ebook
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-secondary">
              The Men's <em className="not-italic text-primary">Performance</em> Blueprint
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              A modern educational guide for men 35–60 who want to build lasting energy, focus, and confidence — through the daily habits that actually work.
            </p>
            <div className="mt-7 md:mt-8">
              <CTA>Download Now — Only $39</CTA>
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Secure checkout · Instant PDF delivery
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary/80">
              {[
                { icon: Smartphone, t: "Mobile" },
                { icon: Tablet, t: "Tablet" },
                { icon: Laptop, t: "Desktop" },
              ].map(({ icon: I, t }) => (
                <span key={t} className="flex items-center gap-1.5"><I className="w-4 h-4 text-primary" />{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={heroEbook}
              alt="The Men's Performance Blueprint ebook shown on hardcover, tablet, phone and laptop"
              width={1536}
              height={1024}
              className="w-full h-auto animate-gentle-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            { icon: Download, t: "Instant Download" },
            { icon: Lock, t: "Secure Checkout" },
            { icon: FileText, t: "PDF Included" },
            { icon: Tablet, t: "Any Device" },
            { icon: Star, t: "Premium Guide" },
          ].map(({ icon: I, t }) => (
            <div key={t} className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-secondary/80">
              <I className="w-4 h-4 text-primary" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">Who It's For</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">
            For the man who's ready to feel like himself again.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Between 35 and 60, life stacks up. Work, stress, sleep debt, and inconsistent habits quietly drain the energy, focus, and confidence that used to feel automatic. This guide gives you a clear framework to get them back — one intentional day at a time.
          </p>
        </div>
      </section>

      {/* INSIDE THE EBOOK */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <img
              src={ebookOpen}
              alt="Open pages of the Men's Performance Blueprint ebook"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full rounded-3xl shadow-elev"
            />
          </div>
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Inside the Ebook</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight">
              120+ pages of clear, actionable frameworks.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Written and edited to the standard of a premium American wellness publication. No fluff — just the habits, protocols, and mindsets shaping modern men's health.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Sunrise, t: "The Morning Framework", d: "How to design a first hour that sets the tone for energy and focus." },
                { icon: Utensils, t: "Nutrition Fundamentals", d: "Foods that fuel circulation and steady, natural energy levels." },
                { icon: Dumbbell, t: "Movement That Compounds", d: "Simple training patterns proven to build strength after 35." },
                { icon: Brain, t: "Stress & Mental Clarity", d: "Evidence-based tools to calm the nervous system and sharpen decision-making." },
                { icon: Moon, t: "The Sleep Protocol", d: "The bedtime routine used by high-performers for deep, restorative rest." },
                { icon: HeartPulse, t: "Confidence & Connection", d: "Daily habits that rebuild self-trust and intimacy in your relationships." },
              ].map(({ icon: I, t, d }) => (
                <div key={t} className="flex gap-4 group">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-border grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-soft">
                    <I className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-semibold text-lg text-secondary">{t}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE EDITORIAL */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">The Blueprint in Practice</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              A quieter, stronger version of your day.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { img: lifeWalk, t: "Move First", d: "Ten minutes outside before your phone. Sunlight, breath, motion." },
              { img: lifeKitchen, t: "Eat Deliberately", d: "Simple meals built around whole foods, protein, and color." },
              { img: lifeRead, t: "Read, Then Rest", d: "Wind down with intention. Screens off. Deeper sleep, sharper mornings." },
            ].map(({ img, t, d }) => (
              <article key={t} className="rounded-3xl overflow-hidden bg-white shadow-soft border border-border">
                <img src={img} alt={t} loading="lazy" width={1280} height={1024} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-secondary">{t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm md:text-base">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">What Readers Are Saying</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            "The most practical wellness guide I've read in a decade."
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5 text-left">
            {[
              { n: "Reader feedback", t: "I stopped chasing hacks. The morning framework is simple enough to actually follow." },
              { n: "Reader feedback", t: "It reads like a well-designed magazine and hits like a coach." },
              { n: "Reader feedback", t: "Clear, honest, and beautifully made. It's the guide I wish someone had handed me earlier." },
            ].map(({ n, t }) => (
              <blockquote key={t} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-white/90 text-sm md:text-base italic leading-relaxed">"{t}"</p>
                <footer className="mt-4 text-xs font-semibold text-primary tracking-wide">{n}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>


      {/* BONUSES */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Included Bonus PDFs</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              Five additional guides. All digital. All yours.
            </h2>
          </div>
          <div className="mt-10 rounded-3xl overflow-hidden bg-muted/40 border border-border">
            <img src={bonusesImg} alt="Five bonus ebook covers" loading="lazy" width={1536} height={1024} className="w-full h-auto" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "The 30-Day Performance Challenge", d: "A day-by-day plan to reset your energy and focus." },
              { t: "Foods That Improve Blood Flow", d: "A pocket guide to the foods proven to support circulation." },
              { t: "The Morning Performance Routine", d: "A 20-minute ritual that primes body and mind." },
              { t: "The Performance Habit Tracker", d: "A printable tracker to keep your streak visible." },
              { t: "The Confidence Building Workbook", d: "Guided exercises to rebuild self-trust week by week." },
              { t: "The Blueprint Master Class Notes", d: "Distilled notes from the core lessons — read in 15 minutes." },
            ].map(({ t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-white border border-border shadow-soft hover:shadow-elev hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 grid place-items-center text-primary mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-secondary">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                <p className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> PDF Download
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE THE GUIDE + BONUS PACKAGE */}
      <InsideGuideSection />
      <BonusPackageSection />


      {/* OFFER */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">The Complete Package</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">One download. Everything included.</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border bg-white shadow-elev">
            <div className="bg-secondary text-white text-center py-3 font-semibold text-sm tracking-wide uppercase">
              Launch Offer — 68% Off
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src={heroEbook} alt="Complete package" loading="lazy" width={1536} height={1024} className="w-full h-auto" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground line-through">Total value $121</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-5xl md:text-6xl font-semibold text-secondary">$39</span>
                    <span className="text-lg text-muted-foreground">USD</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">One-time payment · Lifetime access</p>
                  <ul className="mt-6 space-y-2.5">
                    {[
                      "The Men's Performance Blueprint (120+ page PDF)",
                      "5 Bonus PDF guides & workbooks",
                      "Optimized for mobile, tablet & desktop",
                      "Lifetime updates included",
                      "Instant delivery — no waiting",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm md:text-base text-secondary/90">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <CTA>Get Instant Access — Only $39</CTA>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-5 rounded-2xl bg-accent/40 border border-primary/20 flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="font-serif text-lg font-semibold text-secondary">30-Day Satisfaction Guarantee</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Read the entire guide. If it doesn't deliver the clarity and value you expected, email us for a full refund — no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Frequently Asked</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary">Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is this a physical product?", a: "No. Men Ascend is a 100% digital educational guide. You receive an instant PDF download after checkout — nothing ships to your home." },
              { q: "What format is the ebook?", a: "A high-quality PDF designed for comfortable reading on smartphone, tablet, laptop, or desktop. You can also print it if you prefer." },
              { q: "How quickly do I get access?", a: "Immediately. As soon as your payment is confirmed, your download links are delivered to your email." },
              { q: "Who is this guide for?", a: "It's written specifically for men between 35 and 60 who want a clear, sustainable framework for wellness, energy, and confidence." },
              { q: "Is this a medical treatment?", a: "No. This is an educational guide for informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease." },
              { q: "What if I don't find it useful?", a: "You're covered by our 30-day satisfaction guarantee. Email support within 30 days for a full refund." },
              { q: "Can I read it on my phone?", a: "Yes. The PDF is optimized for mobile, tablet, and desktop." },
            ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,_transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Your next chapter starts <em className="not-italic text-primary">with one download.</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl mx-auto">
            Join thousands of men rebuilding their energy, focus, and confidence — one intentional day at a time.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA>Get Access — Only $39</CTA>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> Instant Digital Download</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 30-Day Guarantee</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border pb-24 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-10 pb-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-secondary grid place-items-center text-white font-serif font-bold">M</div>
                <span className="font-serif text-lg font-semibold text-secondary">Men Ascend</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                Modern, editorial-quality wellness guides for men who want to build a stronger everyday life.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Product Details</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Digital Product</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Instant Access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Educational Guide</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Not a Physical Product</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Disclaimer</p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                This product is a digital educational guide intended for informational purposes only. It is not a medical treatment and is not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed healthcare professional for personal medical advice.
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Men Ascend. All rights reserved.</p>
            <p>Made for men who want more from the everyday.</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.15)]">
        <a
          href={CHECKOUT}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold text-base px-4 py-3.5 rounded-full shadow-cta active:scale-[0.98] transition-transform"
        >
          <Download className="w-5 h-5" /> Get It Now — $39
          <ArrowRight className="w-4 h-4 opacity-80" />
        </a>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-border overflow-hidden shadow-soft">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-5 text-left"
      >
        <span className="font-serif font-semibold text-secondary text-base md:text-lg">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground animate-float-in leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
