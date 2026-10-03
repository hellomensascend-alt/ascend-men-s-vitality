import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  BookOpen,
  Brain,
  Check,
  ClipboardList,
  Clock3,
  Eye,
  Focus,
  Layers3,
  LockKeyhole,
  MoonStar,
  MoveRight,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TimerReset,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTROL_RESET_CHECKOUT_URL } from "@/lib/config";

export const Route = createFileRoute("/reset")({
  head: () => ({
    meta: [
      { title: "The Control Reset — A Practical 30-Day Behavioral System" },
      {
        name: "description",
        content:
          "A practical 30-day educational system for recognizing automatic patterns, interrupting urges, and rebuilding personal choice.",
      },
      { property: "og:title", content: "The Control Reset — No More One Last Time" },
      {
        property: "og:description",
        content:
          "Recognize the pattern, interrupt the urge, and build a system for more deliberate choices with a 120+ page guide, worksheets, and bonuses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ascendman.net/reset" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://ascendman.net/reset" }],
  }),
  component: ControlResetPage,
});

const parts = [
  {
    number: "01",
    title: "The Loop",
    description: 'Why “one last time” keeps happening, and the 8-stage behavioral loop driving it.',
    icon: RefreshCcw,
  },
  {
    number: "02",
    title: "Know Your Pattern",
    description:
      "Mapping personal triggers: time, place, mood, device, and the need underneath the urge.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Break the Loop",
    description:
      "A 6-step urge protocol—Stop, Move, Breathe, Delay, Redirect, Reassess—plus environment and friction design.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "The 30-Day Control Reset",
    description:
      "A structured daily program across 4 phases: Awareness, Environment, Replacement, and Control.",
    icon: TimerReset,
  },
  {
    number: "05",
    title: "Sexual Discipline & Real Life",
    description:
      "Fantasy vs. real intimacy, and rebuilding real-world connection, handled without shame.",
    icon: Focus,
  },
  {
    number: "06",
    title: "When You Slip",
    description:
      'A judgment-free “relapse autopsy” method instead of all-or-nothing streak thinking.',
    icon: RefreshCcw,
  },
  {
    number: "07",
    title: "Build the System",
    description:
      "Personal rules, a 60-day maintenance taper, and a lasting system beyond the 30 days.",
    icon: Layers3,
  },
];

const resetMethod = [
  { title: "Recognize", copy: "Map your triggers before they run you." },
  {
    title: "Interrupt",
    copy: "Use a step-by-step protocol and environment changes that create space between urge and action.",
  },
  {
    title: "Replace",
    copy: "Fill the gap with something that meets the real need underneath it.",
  },
  {
    title: "Rebuild",
    copy: "Reconnect attention, sleep, and real-world relationships.",
  },
  {
    title: "Maintain",
    copy: "Turn the 30 days into rules and a system you keep.",
  },
];

const bonuses = [
  "The 30-Day Control Reset challenge",
  "The Trigger Map workbook",
  "The Urge Emergency Card",
  "The Digital Reset Checklist",
  "The Relapse Autopsy pack",
  "The 7-Day Focus Rebuild",
  "The Personal Rulebook",
];

const faqs = [
  {
    question: "Is this a NoFap program?",
    answer:
      "No—it doesn't require complete abstinence or a streak counter; it's built around recognizing your pattern and restoring choice.",
  },
  {
    question: "Do I have to quit masturbation completely?",
    answer:
      "No—the book doesn't claim it's inherently harmful; the focus is on unwanted, automatic repetition, not the behavior itself.",
  },
  {
    question: "Is this medical treatment?",
    answer:
      "No. It's educational and behavioral, not a substitute for a licensed physician or therapist.",
  },
  {
    question: "What if I relapse during the 30 days?",
    answer:
      "There's a specific tool for that—the Relapse Autopsy. There is no restarting at Day 1 and no shame spiral.",
  },
  {
    question: "Does this guarantee results?",
    answer: "No program can honestly guarantee behavior change, and this one doesn't claim to.",
  },
  {
    question: "Can I do this privately?",
    answer: "Yes—every worksheet is designed for individual, private use.",
  },
  {
    question: "Is the app available now?",
    answer: "No—it's a planned future extension; the ebook is the current, available product.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--reset-gold)]">
      {children}
    </p>
  );
}

function MonitorMotif() {
  return (
    <div
      className="reset-monitor-glow relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-[var(--reset-line)] p-5 shadow-elev md:p-7"
      aria-label="Abstract digital environment showing interrupted, fragmented browsing patterns"
    >
      <div className="absolute inset-x-10 top-7 h-px bg-[var(--reset-gold)]/50" />
      <div className="relative mt-7 rotate-[-2deg] rounded-md border border-[var(--reset-line)] bg-[var(--reset-surface)]/90 p-3 blur-[0.4px]">
        <div className="mb-4 flex gap-1.5"><i className="size-1.5 rounded-full bg-[var(--reset-red)]" /><i className="size-1.5 rounded-full bg-[var(--reset-muted)]/30" /><i className="size-1.5 rounded-full bg-[var(--reset-muted)]/30" /></div>
        <div className="grid grid-cols-3 gap-2">
          {["h-16", "h-24", "h-20", "h-24", "h-16", "h-20"].map((height, index) => (
            <span key={index} className={`${height} rounded-sm bg-gradient-to-br from-[var(--reset-line)] to-[var(--reset-surface-raised)]`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 right-5 w-[72%] rotate-2 rounded-md border border-[var(--reset-red)]/40 bg-[var(--reset-bg)]/95 p-4 shadow-2xl backdrop-blur md:right-8">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--reset-red-strong)]">
          <TimerReset className="size-3.5" /> Interrupt the loop
        </div>
        <div className="space-y-2"><span className="block h-2 w-full rounded bg-[var(--reset-line)]" /><span className="block h-2 w-4/5 rounded bg-[var(--reset-line)]" /><span className="block h-2 w-2/5 rounded bg-[var(--reset-red)]" /></div>
      </div>
    </div>
  );
}

function ControlResetPage() {
  return (
    <div className="reset-theme min-h-screen overflow-hidden font-sans">
      <header className="border-b border-[var(--reset-line)] bg-[var(--reset-bg)]/95">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--reset-ink)]">
            The Control <span className="text-[var(--reset-red-strong)]">Reset</span>
          </a>
          <a href="#offer" className="text-xs font-semibold text-[var(--reset-muted)] transition-colors hover:text-[var(--reset-ink)]">
            See what's inside
          </a>
        </div>
      </header>

      <main id="top">
        <section className="reset-monitor-glow border-b border-[var(--reset-line)]">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <div className="animate-float-in">
              <SectionLabel>30-Day Behavioral System</SectionLabel>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--reset-red-strong)]">
                No more “one last time.”
              </p>
              <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[0.95] tracking-normal text-[var(--reset-ink)] sm:text-6xl lg:text-7xl">
                The Control Reset
              </h1>
              <p className="mt-6 text-xl font-semibold text-[var(--reset-ink)]">Break the Cycle. Reclaim Your Control.</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--reset-muted)] md:text-lg">
                A practical 30-day system to recognize the pattern, interrupt the urge, and rebuild real control—not another promise to yourself.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="reset-red-glow h-12 bg-[var(--reset-red)] px-6 text-[var(--reset-ink)] hover:bg-[var(--reset-red-strong)]">
                  <a href="#offer">See what's inside <ArrowDown /></a>
                </Button>
                <span className="text-sm text-[var(--reset-muted)]">120+ pages · 12 worksheets · 7 bonuses</span>
              </div>
            </div>
            <div className="animate-slide-up"><MonitorMotif /></div>
          </div>
        </section>

        <section className="border-b border-[var(--reset-line)] bg-[var(--reset-bg)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionLabel>The behavioral cycle</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <h2 className="font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">See the whole loop.</h2>
                <p className="mt-5 max-w-lg leading-7 text-[var(--reset-muted)]">
                  The book maps a common pattern without labeling every reader or every pornography user as having an addiction or medical disorder.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Trigger", "Urge", "Search", "Consumption", "Relief", "Regret", "Promise", "Repeat"].map((stage, index) => (
                  <div key={stage} className="relative min-h-24 rounded-md border border-[var(--reset-line)] bg-[var(--reset-surface)] p-4">
                    <span className="text-[10px] font-bold text-[var(--reset-red-strong)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-4 font-semibold text-[var(--reset-ink)]">{stage}</p>
                    {index < 7 && <MoveRight className="absolute -right-3 top-1/2 z-10 hidden size-4 text-[var(--reset-gold)] sm:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--reset-surface)] py-20 md:py-28" id="contents">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Inside the ebook</SectionLabel>
              <h2 className="font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">Seven parts. A complete system.</h2>
              <p className="mt-5 text-base leading-7 text-[var(--reset-muted)] md:text-lg">
                The 120+ page guide moves from understanding the pattern to building a system designed to last beyond the first 30 days.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {parts.map(({ number, title, description, icon: Icon }, index) => (
                <article key={title} className={`rounded-lg border border-[var(--reset-line)] bg-[var(--reset-bg)] p-6 ${index === 6 ? "lg:col-span-3" : ""}`}>
                  <div className="flex items-center justify-between"><Icon className="size-5 text-[var(--reset-red-strong)]" /><span className="text-xs font-bold text-[var(--reset-gold)]">PART {number}</span></div>
                  <h3 className="mt-8 font-sans text-xl font-bold tracking-normal text-[var(--reset-ink)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--reset-muted)]">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-[var(--reset-line)] bg-[var(--reset-bg)] p-6 md:p-8">
                <ClipboardList className="size-6 text-[var(--reset-red-strong)]" />
                <h3 className="mt-5 font-sans text-xl font-bold tracking-normal text-[var(--reset-ink)]">12 printable worksheets</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--reset-muted)]">Trigger Map, Urge Log, Replacement Menu, Relapse Autopsy, Personal Rulebook, and more.</p>
              </div>
              <div className="rounded-lg border border-[var(--reset-line)] bg-[var(--reset-bg)] p-6 md:p-8">
                <Sparkles className="size-6 text-[var(--reset-gold)]" />
                <h3 className="mt-5 font-sans text-xl font-bold tracking-normal text-[var(--reset-ink)]">7 standalone bonuses</h3>
                <ul className="mt-4 grid gap-2 text-sm text-[var(--reset-muted)] sm:grid-cols-2">
                  {bonuses.map((bonus) => <li key={bonus} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-[var(--reset-red-strong)]" />{bonus}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--reset-line)] bg-[var(--reset-bg)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl"><SectionLabel>The Reset approach</SectionLabel><h2 className="font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">From automatic reaction to deliberate choice.</h2></div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[var(--reset-line)] bg-[var(--reset-line)] md:grid-cols-5">
              {resetMethod.map((step, index) => (
                <div key={step.title} className="bg-[var(--reset-surface)] p-6">
                  <span className="text-xs font-bold text-[var(--reset-red-strong)]">0{index + 1}</span>
                  <h3 className="mt-8 font-sans text-lg font-bold tracking-normal text-[var(--reset-ink)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--reset-muted)]">{step.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 border-l-2 border-[var(--reset-gold)] pl-5 text-sm leading-6 text-[var(--reset-muted)]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--reset-gold)]" />
              <p>This educational self-management framework is not professional treatment. Readers experiencing significant distress, or who feel unable to control the behavior despite real effort, should talk to a licensed professional. This can work alongside professional support, not instead of it.</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--reset-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionLabel>Environment design</SectionLabel>
            <h2 className="max-w-3xl font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">What changes when you redesign the environment.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <EnvironmentPanel mode="before" />
              <EnvironmentPanel mode="after" />
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--reset-line)] bg-[var(--reset-bg)] py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-[.8fr_1.2fr] md:items-center md:px-8">
            <div className="rounded-lg border border-dashed border-[var(--reset-line)] bg-[var(--reset-surface)] p-6">
              <div className="mx-auto grid aspect-[4/3] max-w-xs place-items-center rounded-md border border-[var(--reset-line)] bg-[var(--reset-bg)] text-center">
                <div><Smartphone className="mx-auto size-8 text-[var(--reset-muted)]" /><p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--reset-muted)]">Concept only · No screenshots</p></div>
              </div>
            </div>
            <div>
              <span className="inline-flex rounded-sm border border-[var(--reset-gold)]/50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--reset-gold)]">Planned · In development · Not yet available</span>
              <h2 className="mt-5 font-sans text-2xl font-bold tracking-normal text-[var(--reset-ink)] md:text-3xl">A future companion app</h2>
              <p className="mt-4 leading-7 text-[var(--reset-muted)]">Exploratory capabilities may include daily trigger and urge check-ins, habit and streak-free progress tracking, and daily reflections. Optional integration with compatible health data may be explored in the future where technically and legally feasible.</p>
              <p className="mt-4 text-sm font-semibold text-[var(--reset-ink)]">The app is not available or included. The ebook is the current product.</p>
            </div>
          </div>
        </section>

        <section id="offer" className="reset-monitor-glow scroll-mt-8 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="rounded-lg border border-[var(--reset-line)] bg-[var(--reset-bg)] p-7 shadow-elev md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
                <div>
                  <SectionLabel>The current offer</SectionLabel>
                  <h2 className="font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">The Control Reset ebook</h2>
                  <p className="mt-5 max-w-xl leading-7 text-[var(--reset-muted)]">A 120+ page guide with the structured 30-day program, 12 printable worksheets, and 7 standalone bonuses.</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {["7-part guide", "30-day program", "12 worksheets", "7 bonuses"].map((item) => <div key={item} className="flex items-center gap-2 text-sm text-[var(--reset-ink)]"><Check className="size-4 text-[var(--reset-red-strong)]" />{item}</div>)}
                  </div>
                </div>
                <div className="border-t border-[var(--reset-line)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--reset-gold)]">Checkout</p>
                  <p className="mt-3 text-2xl font-bold text-[var(--reset-ink)]">Coming soon</p>
                  <Button disabled size="lg" className="mt-6 h-12 w-full bg-[var(--reset-red)] text-[var(--reset-ink)] opacity-70">Checkout coming soon <LockKeyhole /></Button>
                  <p className="mt-3 text-xs leading-5 text-[var(--reset-muted)]">No purchase link is connected yet.</p>
                  <span className="sr-only">Checkout placeholder: {CONTROL_RESET_CHECKOUT_URL}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--reset-line)] bg-[var(--reset-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <SectionLabel>Questions, answered</SectionLabel>
            <h2 className="font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">FAQ</h2>
            <Accordion type="single" collapsible className="mt-10 border-t border-[var(--reset-line)]">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-[var(--reset-line)]">
                  <AccordionTrigger className="py-5 text-base text-[var(--reset-ink)] hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="pr-8 text-sm leading-6 text-[var(--reset-muted)]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[var(--reset-bg)] py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Target className="mx-auto size-7 text-[var(--reset-red-strong)]" />
            <h2 className="mt-6 font-sans text-3xl font-bold tracking-normal text-[var(--reset-ink)] md:text-5xl">Build a system for more deliberate choices.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--reset-muted)]">The Control Reset brings together the guide, 30-day program, printable worksheets, and standalone bonuses in one practical behavioral system.</p>
            <Button asChild size="lg" className="reset-red-glow mt-8 h-12 bg-[var(--reset-red)] px-7 text-[var(--reset-ink)] hover:bg-[var(--reset-red-strong)]"><a href="#offer">See what's inside <ArrowRight /></a></Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--reset-line)] bg-[var(--reset-bg)] px-5 py-8 text-center text-xs leading-5 text-[var(--reset-muted)]">
        The Control Reset is educational material for behavioral self-management. It is not medical treatment, diagnosis, or a cure.
      </footer>
    </div>
  );
}

function EnvironmentPanel({ mode }: { mode: "before" | "after" }) {
  const structured = mode === "after";
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--reset-line)] bg-[var(--reset-bg)]">
      <div className="relative aspect-[16/9] border-b border-[var(--reset-line)] p-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--reset-surface-raised)] to-[var(--reset-bg)]" />
        <div className="relative flex h-full items-end justify-between">
          <div className="w-[58%]">
            <div className="mb-3 h-20 rounded-sm border border-[var(--reset-line)] bg-[var(--reset-surface)] shadow-[0_0_30px_var(--reset-glow)]" />
            <div className="h-5 rounded-sm bg-[var(--reset-line)]" />
          </div>
          <div className={`grid size-20 place-items-center rounded-md border ${structured ? "border-[var(--reset-gold)]/50 bg-[var(--reset-surface)]" : "rotate-6 border-[var(--reset-red)]/50 bg-[var(--reset-surface-raised)]"}`}>
            {structured ? <MoonStar className="size-7 text-[var(--reset-gold)]" /> : <Smartphone className="size-7 text-[var(--reset-red-strong)]" />}
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-sm border border-dashed border-[var(--reset-muted)]/40 bg-[var(--reset-bg)]/80 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--reset-muted)]">Real lifestyle photo needed</span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--reset-gold)]">{structured ? "Structured environment" : "Unstructured environment"}</p>
        <h3 className="mt-3 font-sans text-xl font-bold tracking-normal text-[var(--reset-ink)]">{structured ? "Create space for a different choice." : "Reduce automatic late-night cues."}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--reset-muted)]">{structured ? "Phone charging elsewhere, a wind-down routine, and a planned replacement activity." : "Phone in bed, late-night access, and no planned replacement activity can reinforce automatic patterns."}</p>
      </div>
    </article>
  );
}