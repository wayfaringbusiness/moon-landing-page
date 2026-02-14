import LeadDemo from "../components/LeadDemo";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "What do you actually build?",
    a: "Custom automations that remove manual busywork (quoting, intake, follow-up, scheduling, internal handoffs). Sometimes that includes AI, sometimes it is just smart workflow automation. The goal is always the same: free up the owner's time and protect revenue.",
  },
  {
    q: "Is this just a chat bot?",
    a: "No. Chat is one interface. The real value is the system behind it: transcription, structured data extraction, routing, CRM updates, quote drafts, and follow up sequences. It is built around your actual workflow.",
  },
  {
    q: "How long does it take?",
    a: "Most MVPs ship in 7-14 days. Complex integrations can take longer. We start with one high-leverage workflow, ship it, then iterate.",
  },
  {
    q: "What does it cost?",
    a: "Typically a one-time build plus optional ongoing support/optimization. After a quick fit check, you’ll get a clear scope + fixed quote.",
  },
  {
    q: "What if we’re not a fit?",
    a: "On the call we’ll map your bottleneck fast. If automation won’t move the needle, I’ll tell you upfront.",
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
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_10%,rgba(20,184,166,0.18),transparent_60%),radial-gradient(60rem_60rem_at_80%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-[#05070d]" />
      </div>

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
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Custom automation</Badge>
            <Badge>Less busywork</Badge>
            <Badge>More owner focus</Badge>
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
              <span className="headline-line1 block">Stop doing admin work.</span>
              <span className="block">Build systems that scale revenue.</span>
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
            Offsite Automations builds custom automations for landscaping and home service businesses.
            We handle quoting, intake, follow up, scheduling, and CRM updates so owners
            spend less time on admin and more time closing jobs.
          </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={calendlyUrl}>Get a free automation audit</Button>
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Clear fit check. If it’s not right, I’ll say so.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Example: what a custom automation looks like
                </p>
                <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Owner (voice note on-site):</p>
                    <p>
                      “Front yard: 2 mulch beds, about 30ft by 4ft each… remove
                      weeds… add black mulch… 3 shrubs to remove… edging.”
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                    <p className="font-medium">Automation:</p>
                    <p>
                      “Drafted scope + line items → created a draft quote in your
                      CRM → notified you for review.”
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Result:</p>
                    <p>
                      Less manual admin → faster turnaround → more jobs closed.
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
            title="Landscaping owners get stuck doing admin between jobs."
            desc="Quotes, follow ups, scheduling, CRM updates, and internal handoffs do not grow revenue. They still have to happen." 
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Admin eats your day"
              desc="You end up doing low-leverage tasks between jobs, at night, or on weekends."
              icon={<span>🧱</span>}
            />
            <Feature
              title="Work falls through cracks"
              desc="Notes get lost, follow-ups are inconsistent, and leads go cold while you’re busy."
              icon={<span>🕳️</span>}
            />
            <Feature
              title="The bottleneck is the owner"
              desc="If everything depends on you, growth slows down, even if demand is there."
              icon={<span>⛓️</span>}
            />
          </div>
        </section>

        {/* Solution */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="The solution"
            title="Automation systems built for landscaping (and other home services)."
            desc="We find where your process leaks time and revenue, then we install an automation that runs reliably in the background." 
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Find the bottleneck"
              desc="We map your workflow and pick the highest-leverage automation to ship first."
              icon={<span>🧭</span>}
            />
            <Feature
              title="Build the system"
              desc="Transcription, structured data, routing, follow up, CRM updates, and whatever else your process needs."
              icon={<span>🛠️</span>}
            />
            <Feature
              title="Ship + iterate"
              desc="Launch fast, measure, and refine until it’s saving hours and protecting revenue."
              icon={<span>📈</span>}
            />
          </div>
        </section>

        {/* Interactive proof */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Interactive proof"
            title="See an automation, not a promise."
            desc="Below is a simple demo of a real workflow we build for owners. It is only an example. Your system will be custom to your business." 
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
            title="A simple rollout that actually ships."
            desc="We pick one workflow, build it end-to-end, launch it, and then iterate." 
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              n="1"
              title="Automation audit"
              desc="We identify where manual effort is costing you time and revenue and pick one workflow to automate first." 
            />
            <Step
              n="2"
              title="Build + integrate"
              desc="We implement the workflow end-to-end (inputs → logic → CRM/tools → outputs) and keep it simple to run." 
            />
            <Step
              n="3"
              title="Deploy + iterate"
              desc="We launch, measure results, and refine until it’s reliably saving hours and protecting revenue." 
            />
          </div>
        </section>

        {/* Proof */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Proof"
            title="Real work, not a generic bot."
            desc="This is what custom automation looks like in the real world. (We’ll add specific numbers + testimonials as we collect them.)" 
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Voice → draft scope → CRM quote
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Owner records a quick voice note on-site. The automation converts it
                into structured line items and drafts a quote inside their CRM, ready
                to review and send.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                “Less admin at night. Faster turnaround.”
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Follow-up + routing that prevents drop-offs
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Missed calls and web inquiries trigger a consistent follow-up flow,
                route the request to the right place, and log it automatically so
                nothing falls through the cracks.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                “We stopped losing leads when we got busy.”
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
                desc="I'm Sam. I build custom automations for landscaping and home service businesses that remove busywork and protect revenue. If you want implementation, not buzzwords, let's talk." 
              />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  What you’ll get
                </p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>• A clear plan for your highest-leverage workflow</li>
                  <li>• A working automation system (not a prototype)</li>
                  <li>• Simple handoff + optional ongoing optimization</li>
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
            desc="If you’re unsure about fit, the fastest way is a quick call." 
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
                  Ready to get time back?
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                  Get a free automation audit.
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  We’ll identify the highest-leverage workflow to automate and map a clear build plan.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={calendlyUrl}>Get your free audit</Button>
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
