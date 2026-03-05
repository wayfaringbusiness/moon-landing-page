import LeadDemo from "../components/LeadDemo";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "What do you actually build?",
    a: "A custom post-quote pipeline with stages (Ghosted, Deferred, Warm, Hot, Follow up in X months), scheduled follow ups that roll forward automatically, internal notifications when follow ups are due, and a monthly digest showing which quotes to re-contact and the dollar value.",
  },
  {
    q: "Do I need a specific CRM?",
    a: "No. This works alongside whatever you use today (Jobber, LMN, Housecall Pro, ServiceTitan, Aspire, or even just spreadsheets). We plug into your existing flow and add the reactivation layer.",
  },
  {
    q: "How long does it take?",
    a: "Most systems are live in 7 to 14 days. We start with your quote stages and follow up schedule, build the pipeline view and notifications, then iterate until it fits your workflow.",
  },
  {
    q: "What does it cost?",
    a: "Typically a one-time setup fee plus a small monthly for maintenance and support. If the system doesn't pay for itself with one reactivated job, it's not worth doing. You'll get a clear number after a quick fit check.",
  },
  {
    q: "What if we're not a fit?",
    a: "On the call we'll map your current quote flow fast. If you don't have enough quote volume or already have a solid reactivation process, I'll tell you upfront.",
  },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
        {desc}
      </p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
      {children}
    </span>
  );
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={classNames(
          base,
          "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={classNames(
        base,
        "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
      )}
    >
      {children}
    </a>
  );
}

function Feature({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {desc}
      </p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
          {n}
        </div>
        <div>
          <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const calendlyUrl = "#"; // TODO: replace with your Cal.com link

  // Copy note: this page is intentionally positioned around custom automation.
  // It is not generic AI chatbots. The demos are examples of custom workflows.

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-zinc-950 antialiased dark:bg-transparent dark:text-white">
      {/* Background - handled by globals.css, no overlay needed */}

      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-4 sm:px-6 sm:py-6">
        <p className="text-sm font-extrabold tracking-wide text-zinc-700 dark:text-zinc-200 text-[32px] leading-none sm:text-[44px]">
          Offsite Automations
        </p>
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#how-it-works"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            FAQ
          </a>
          <Button href={calendlyUrl}>Book a free call</Button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-2 sm:px-6 sm:pb-14 sm:pt-4">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Post-quote pipeline</Badge>
            <Badge>Automated reactivation</Badge>
            <Badge>Monthly digest</Badge>
          </div>
          <div className="relative mt-5 isolate">
            <div className="pointer-events-none absolute right-[-22%] top-[0.55em] aspect-square w-[240px] z-0 opacity-25 blur-[0.4px] drop-shadow-[0_0_70px_rgba(255,255,255,0.22)] sm:right-[-14%] sm:top-[0.58em] sm:w-[460px]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <defs>
                  <radialGradient id="moonGlow" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#e6f2ff" stopOpacity="0.85" />
                    <stop offset="65%" stopColor="#c8d8ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9fb7ff" stopOpacity="0.2" />
                  </radialGradient>
                  <radialGradient id="moonBody" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#dfe8ff" />
                    <stop offset="100%" stopColor="#9aa7d1" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="94" fill="url(#moonBody)" opacity="0.9" />
                <circle cx="100" cy="100" r="96" fill="url(#moonGlow)" />
                <circle cx="68" cy="86" r="14" fill="#b7c3e6" opacity="0.7" />
                <circle cx="125" cy="120" r="18" fill="#a9b6da" opacity="0.55" />
                <circle cx="90" cy="135" r="11" fill="#bfc9eb" opacity="0.6" />
                <circle cx="130" cy="72" r="9" fill="#c8d2f0" opacity="0.6" />
                <circle cx="155" cy="98" r="6" fill="#c8d2f0" opacity="0.5" />
              </svg>
            </div>

            <h1 className="relative z-10 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="headline-line1 block">Turn dead quotes into revenue.</span>
              <span className="block">Automatically.</span>
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
            Offsite Automations builds custom post-quote pipelines for landscaping and home service businesses.
            We set up real stages (Ghosted, Deferred, Warm, Hot), schedule follow ups that roll forward automatically,
            and send you a monthly digest showing exactly which past quotes to re-contact and the dollar value.
          </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={calendlyUrl}>See the pipeline in 10 minutes</Button>
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Quick fit check. If it won't pay for itself, I'll tell you.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Example: how the system works
                </p>
                <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Quote sent, no response:</p>
                    <p>
                      Prospect ghosts after receiving a $4,200 patio quote.
                      Normally this dies in your CRM.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                    <p className="font-medium">Your pipeline:</p>
                    <p>
                      Quote moves to "Ghosted" stage → follow ups scheduled at 1 month, 6 months, next season → you get notified when each is due.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Monthly digest:</p>
                    <p>
                      "12 quotes to re-contact this month. $47,000 in opportunity. Here's the list."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="The problem"
            title="Your quotes are dying after you send them."
            desc="Most landscaping companies lose revenue not because they can't win jobs, but because quotes get forgotten, prospects ghost, and nobody follows up consistently."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="No post-quote system"
              desc="Quotes sit in your CRM until someone remembers to check. By then, the prospect went with someone else."
              icon={<span>📋</span>}
            />
            <Feature
              title="Follow up is random"
              desc="Maybe you call back once. Maybe you forget. There's no consistent 1 month, 6 month, next season cadence."
              icon={<span>🎲</span>}
            />
            <Feature
              title="No visibility into lost revenue"
              desc="You don't know which quotes are worth re-contacting, why they said no, or what the dollar value sitting in 'didn't close' actually is."
              icon={<span>🔍</span>}
            />
          </div>
        </section>

        {/* Solution */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="The solution"
            title="A custom post-quote pipeline that reactivates dead quotes automatically."
            desc="We build you real stages, scheduled follow ups, notifications, and a monthly digest so you can predictably close more of the quotes you already sent."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Custom pipeline stages"
              desc="Ghosted, Deferred, Warm, Hot, Follow up in X months. Every quote has a clear status and next step."
              icon={<span>📊</span>}
            />
            <Feature
              title="Automated follow ups"
              desc="Schedule follow ups per quote (1 month, 6 months, next season). Due dates roll forward automatically. You or your VA gets notified when it's time."
              icon={<span>🔔</span>}
            />
            <Feature
              title="Monthly decision digest"
              desc="A report showing which quotes to re-contact this month, the dollar value, decline reasons, and notes. No manual filtering."
              icon={<span>📬</span>}
            />
          </div>
        </section>

        {/* Interactive proof */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Interactive proof"
            title="See the pipeline, not a promise."
            desc="Below is a simple demo of a real workflow we build for owners. Your system will be custom to your quoting process and follow up cadence."
          />
          <div className="mt-8">
            <LeadDemo />
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <SectionHeading
            eyebrow="How it works"
            title="Live in 7 to 14 days."
            desc="We map your quote flow, build the pipeline and follow up schedule, and get you a working system fast."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              n="1"
              title="Map your quote flow"
              desc="We look at how you send quotes, where they live, and what happens after. 10 minute call."
            />
            <Step
              n="2"
              title="Build pipeline + follow ups"
              desc="We set up custom stages, schedule follow ups per quote, wire up notifications, and build the monthly digest."
            />
            <Step
              n="3"
              title="Launch + refine"
              desc="System goes live. We tweak stages, timing, and reporting until it fits your workflow perfectly."
            />
          </div>
        </section>

        {/* Proof */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Proof"
            title="Real results from quote reactivation."
            desc="This is what the system looks like in practice. (We'll add specific numbers + testimonials as we collect them.)"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Reactivated a "dead" patio job
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                6 month follow up triggered on a ghosted $5,800 patio quote. Owner called,
                prospect said "actually, we're ready now." Job closed same week.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                "That quote would have been gone forever without the system."
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Monthly digest drives consistent re-engagement
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Owner gets a report every month: 15 quotes to call back, $62,000 in total value,
                sorted by stage and decline reason. No digging through the CRM.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                "I actually look forward to that email now."
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="About"
                title="Built by a technical operator (not an agency factory)."
                desc="I'm Sam. I build custom post-quote pipelines for landscaping and home service businesses. If you want a system that actually reactivates revenue, not a chatbot demo, let's talk." 
              />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  What you'll get
                </p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>• Custom pipeline stages that match your workflow</li>
                  <li>• Automated follow ups with notifications</li>
                  <li>• Monthly digest showing quotes to re-contact + $ value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions you might be asking."
            desc="If you're unsure about fit, the fastest way is a quick call."
          />

          <div className="mx-auto mt-8 max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/80 shadow-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {f.q}
                  </span>
                  <span className="text-zinc-500 transition group-open:rotate-45 dark:text-zinc-300">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-6">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Ready to reactivate dead quotes?
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                  See the pipeline in 10 minutes.
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  We'll map your quote flow and show you what the stages, follow ups, and monthly digest look like.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={calendlyUrl}>Book a quick demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300 sm:flex-row sm:pt-8">
          <p>© {new Date().getFullYear()} Offsite Automations</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
