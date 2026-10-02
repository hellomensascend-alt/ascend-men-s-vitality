import { createFileRoute } from "@tanstack/react-router";
import {
  Download, Shield, Lock, Star, ChevronDown, ArrowRight,
  FileText, Smartphone, Tablet, Laptop, Check, BookOpen,
  Sunrise, Utensils, Brain, Moon, Dumbbell, HeartPulse, Flame,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroEbook from "@/assets/hero-ebook.jpg";
import ebookOpen from "@/assets/ebook-open.jpg";
import bonusesImg from "@/assets/bonuses.jpg";
import lifeWalk from "@/assets/lifestyle-walk.jpg";
import lifeKitchen from "@/assets/lifestyle-kitchen.jpg";
import lifeRead from "@/assets/lifestyle-read.jpg";
import { InsideGuideSection } from "@/components/BonusAndPreviewSections";
import { STRIPE_CHECKOUT_URL } from "@/lib/config";
import { trackInitiateCheckout, trackViewContent } from "@/lib/meta-pixel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEN ASCEND — The Man You Were Meant to Be" },
      { name: "description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "MEN ASCEND — The Man You Were Meant to Be" },
      { property: "og:description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ascendman.net/" },
      { property: "og:image", content: "https://ascendman.net/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MEN ASCEND — The Man You Were Meant to Be" },
      { name: "twitter:description", content: "MEN ASCEND is a practical guide for men who want to build greater confidence, energy, discipline and personal performance at every stage of life." },
      { name: "twitter:image", content: "https://ascendman.net/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://ascendman.net/" },
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
      onClick={trackInitiateCheckout}
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
        <a href={CHECKOUT} onClick={trackInitiateCheckout} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/90 transition-colors">
          <Download className="w-4 h-4" /> Get the Blueprint
        </a>
      </div>
    </header>
  );
}

function Index() {
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.96_0.03_148)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-16 pb-12 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 text-xs font-semibold text-secondary uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> Digital Guide · 30-Day Blueprint
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Men Ascend</p>
            <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-secondary">
              The Men's <em className="not-italic text-primary">Performance</em> Blueprint
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              A practical educational guide for men who want to build a more consistent routine of energy, focus, movement, sleep, nutrition and confidence through structured daily habits.
            </p>
            <p className="mt-4 text-sm md:text-base font-semibold text-secondary">
              120+ pages + practical tools + 30-day challenge · <span className="text-primary">$39 USD</span>
            </p>

            <div className="mt-7 md:mt-8">
              <CTA>GET THE 30-DAY BLUEPRINT — $39</CTA>
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Secure checkout · Digital access after purchase
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
            { icon: Download, t: "Digital Download" },
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

      {/* PROBLEM: MOTIVATION -> STRUCTURE */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">Why a Blueprint</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">
            Most people don't need another burst of motivation. They need a structure they can actually follow.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-4 font-serif text-xl md:text-3xl font-semibold">
            <span className="text-muted-foreground line-through decoration-primary/60">MOTIVATION</span>
            <ArrowRight className="w-6 h-6 text-primary" />
            <span className="text-secondary">STRUCTURE</span>
          </div>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Men Ascend turns core lifestyle fundamentals into a practical daily framework covering mornings, nutrition, movement, stress, sleep, confidence and connection.
          </p>
        </div>
      </section>

      {/* INSIDE THE EBOOK */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <img
              src={ebookOpen}
              alt="Open pages of the Men Ascend Performance Blueprint ebook showing the Energy Systems and Daily Discipline chapters"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full rounded-3xl shadow-elev"
            />
          </div>
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Inside the Blueprint</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight">
              120+ pages of clear, actionable frameworks.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Six core modules, each focused on one area of your daily routine.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Sunrise, t: "The Morning Framework", d: "How to design a consistent first hour of the day." },
                { icon: Utensils, t: "Nutrition Fundamentals", d: "Everyday food choices organized into simple, repeatable habits." },
                { icon: Dumbbell, t: "Movement That Compounds", d: "Simple movement patterns you can fit into a regular week." },
                { icon: Brain, t: "Stress & Mental Clarity", d: "Practical habits for managing daily stress and staying focused." },
                { icon: Moon, t: "The Sleep Protocol", d: "A structured evening routine to support consistent rest." },
                { icon: HeartPulse, t: "Confidence & Connection", d: "Daily habits around self-trust, relationships and intimacy." },
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

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">The Method</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            How the 30-Day Blueprint Works
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {[
              { n: "01", t: "Build Your Morning", d: "Establish a consistent starting routine." },
              { n: "02", t: "Strengthen the Fundamentals", d: "Work through nutrition, movement, sleep and stress-management habits." },
              { n: "03", t: "Track the Habits", d: "Use the included trackers and practical worksheets." },
              { n: "04", t: "Complete the 30-Day Challenge", d: "Turn the framework into a repeatable daily routine." },
            ].map(({ n, t, d }) => (
              <div key={n} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="font-serif text-2xl font-semibold text-primary mb-3">{n}</p>
                <h3 className="font-serif text-lg font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">What You Get</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              The Men's Performance Blueprint
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">120+ page digital guide — plus six bonus resources:</p>
          </div>
          <div className="mt-10 rounded-3xl overflow-hidden bg-muted/40 border border-border">
            <img src={bonusesImg} alt="Illustrative mockup of the six bonus covers (not actual page captures)" loading="lazy" width={1536} height={1024} className="w-full h-auto" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "30-Day Performance Challenge", d: "A structured daily framework to help organize the habits covered in the blueprint." },
              { t: "Foods for All-Day Energy", d: "An educational reference of everyday foods to use when planning meals." },
              { t: "Morning Performance Routine", d: "A step-by-step outline to follow when setting up your mornings." },
              { t: "Performance Habit Tracker", d: "Use the tracker to keep your daily habits visible and consistent." },
              { t: "Confidence Building Workbook", d: "Written exercises to reflect on and plan your confidence habits." },
              { t: "Blueprint Master Class Notes", d: "A condensed summary of the core lessons for quick review." },
            ].map(({ t, d }, i) => (
              <div key={t} className="p-6 rounded-2xl bg-white border border-border shadow-soft hover:shadow-elev hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 grid place-items-center text-primary mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Bonus 0{i + 1}</p>
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


      {/* OFFER */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">The Complete Package</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-secondary leading-tight">One blueprint. Everything included.</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border bg-white shadow-elev">
            <div className="bg-secondary text-white text-center py-3 font-semibold text-sm tracking-wide uppercase">
              The Men's Performance Blueprint
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src={heroEbook} alt="Complete package" loading="lazy" width={1536} height={1024} className="w-full h-auto" />
                </div>
                <div>
                  <div className=" flex items-baseline gap-2">
                    <span className="font-serif text-5xl md:text-6xl font-semibold text-secondary">$39</span>
                    <span className="text-lg text-muted-foreground">USD</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">One-time purchase</p>
                  <ul className="mt-6 space-y-2.5">
                    {[
                      "120+ pages",
                      "Practical tools",
                      "30-day challenge",
                      "6 bonuses",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm md:text-base text-secondary/90">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <CTA>GET THE BLUEPRINT</CTA>
                    <p className="mt-3 text-xs text-muted-foreground">Digital access after purchase.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-5 rounded-2xl bg-accent/40 border border-primary/20 flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="font-serif text-lg font-semibold text-secondary">30-Day Guarantee</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Take 30 days to review the material. If it isn't right for you, request a refund according to our refund policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS MEN ASCEND FOR */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Purpose</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-secondary">Who Is Men Ascend For?</h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            Men Ascend is an educational project created for men aged 45–60 who want a clear, structured way to organize everyday lifestyle habits — mornings, nutrition, movement, stress, sleep, confidence and connection. It is not medical advice and does not replace a healthcare professional.
          </p>
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
              { q: "What exactly do I receive?", a: "The Men's Performance Blueprint (a 120+ page digital guide) plus six bonus resources: the 30-Day Performance Challenge, Foods for All-Day Energy, Morning Performance Routine, Performance Habit Tracker, Confidence Building Workbook and Blueprint Master Class Notes." },
              { q: "Is this a physical book?", a: "No. Everything is digital. Nothing is shipped to your home." },
              { q: "How do I access the blueprint?", a: "After checkout you are taken to an access page. Once your payment is confirmed, it gives you the link to the digital files, which you can open on phone, tablet or computer." },
              { q: "How many pages does it include?", a: "The main guide has more than 120 pages. The six bonuses are separate files." },
              { q: "What are the bonuses?", a: "30-Day Performance Challenge, Foods for All-Day Energy, Morning Performance Routine, Performance Habit Tracker, Confidence Building Workbook and Blueprint Master Class Notes." },
              { q: "Is this medical advice?", a: "No. This is an educational guide for informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease." },
              { q: "What is the refund policy?", a: "You have 30 days to review the material. If it isn't right for you, you can request a refund according to our refund policy." },
            ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,_transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Ready to build a more <em className="not-italic text-primary">consistent daily routine?</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl mx-auto">
            You get access to the digital blueprint and its complementary materials for a one-time $39.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA>GET THE 30-DAY BLUEPRINT — $39</CTA>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> Digital Access</span>
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
                Educational lifestyle guides for men who want a more structured everyday routine.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                <li>Owner / responsible party: [PENDENTE — a ser fornecido pelo proprietário]</li>
                <li>Support email: [PENDENTE — a ser fornecido pelo proprietário]</li>
                <li>Refund policy · Terms · Privacy: [PENDENTE — a ser fornecido pelo proprietário]</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Product Details</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Digital Product</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Digital Access</li>
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
          onClick={trackInitiateCheckout}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold text-base px-4 py-3.5 rounded-full shadow-cta active:scale-[0.98] transition-transform"
        >
          <Download className="w-5 h-5" /> Get the 30-Day Blueprint — $39
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
