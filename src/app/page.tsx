import LeadDemo from "../components/LeadDemo";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "What exactly is an AI agent?",
    a: "An AI agent is a system that can answer questions, capture lead details, route requests, and trigger automations (like booking, follow-ups, and CRM updates) — tailored to your business.",
  },
  {
    q: "How long does it take to build?",
    a: "Most projects ship in 7–14 days depending on complexity and integrations. Simple website chat + lead capture can be live faster.",
  },
  {
    q: "What does it cost?",
    a: "Typically a one-time build + an optional monthly support/optimization plan. After a quick discovery call, you’ll get a clear fixed quote.",
  },
  {
    q: "Do I need technical skills to use it?",
    a: "No. You’ll get a simple handoff: how to review leads, update content, and monitor conversations. I handle the technical side.",
  },
  {
    q: "What if it’s not a fit for my business?",
    a: "On the discovery call we’ll map your bottlenecks and decide quickly. If it’s not a fit, I’ll tell you — no hard sell.",
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
  const email = "hello@example.com"; // TODO: replace with your real email

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-950 antialiased dark:bg-[#05070d] dark:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_10%,rgba(20,184,166,0.18),transparent_60%),radial-gradient(60rem_60rem_at_80%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-[#05070d]" />
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950">
            <span className="text-sm font-bold">🌙</span>
          </div>
          <div>
            <p className="text-sm font-semibold leading-4">Moon Automation</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              AI agents for small businesses
            </p>
          </div>
        </div>
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
                <Badge>Always-on lead capture</Badge>
                <Badge>Instant responses</Badge>
                <Badge>Fewer interruptions</Badge>
              </div>
              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Turn missed inquiries into booked jobs.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
                Moon Automation builds AI agents that answer FAQs, qualify
                leads, and book appointments automatically—so your team can stay
                focused on the work that pays.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={calendlyUrl}>Get a free Loom audit</Button>
                <Button href={`mailto:${email}`} variant="secondary">
                  Email me
                </Button>
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Clear fit check. If it’s not right, I’ll say so.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Example: how it handles a lead
                </p>
                <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Customer:</p>
                    <p>“Do you serve my area? What’s the pricing?”</p>
                  </div>
                  <div className="rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                    <p className="font-medium">AI Agent:</p>
                    <p>
                      “Yes—here’s our service area and typical pricing. What’s
                      the best email and address for a precise quote?”
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/10">
                    <p className="font-medium">Result:</p>
                    <p>
                      Lead captured → follow-up sent → call booked → CRM updated.
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
            title="Small teams lose deals when responses are slow."
            desc="If inquiries sit for hours, customers move on. If your team keeps context-switching, delivery suffers."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Leads go cold"
              desc="Many leads never convert because the first reply comes too late."
              icon={<span>⚡</span>}
            />
            <Feature
              title="Repeat questions drain time"
              desc="Pricing, availability, service area—your team answers the same things all day."
              icon={<span>🔁</span>}
            />
            <Feature
              title="Hiring is expensive"
              desc="You don’t need another headcount—you need a better system."
              icon={<span>💸</span>}
            />
          </div>
        </section>

        {/* Solution */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="The solution"
            title="An agent tailored to your workflow, not a generic bot."
            desc="Answer questions, qualify leads, route requests, and trigger the next step—built around how you actually operate."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Always-on lead capture"
              desc="Instant replies and contact capture so your pipeline keeps moving."
              icon={<span>🌙</span>}
            />
            <Feature
              title="Hours saved weekly"
              desc="Automate repetitive Q&A and admin work so you can focus on delivery."
              icon={<span>⏱️</span>}
            />
            <Feature
              title="Better customer experience"
              desc="Fast, consistent answers and a clean handoff to your team when needed."
              icon={<span>🤝</span>}
            />
          </div>
        </section>

        {/* Interactive proof */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Interactive proof"
            title="Make your website the demo."
            desc="If a prospect can experience the automation on your site, it sells itself. Try the widgets below—they mirror what we install for clients." 
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
            title="A simple, three-step rollout."
            desc="We identify the bottleneck, build the agent, launch fast, then optimize." 
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              n="1"
              title="Discovery call"
              desc="We map your lead flow and choose the highest-leverage automation." 
            />
            <Step
              n="2"
              title="Custom build"
              desc="I build an agent trained on your business context and wired into your tools." 
            />
            <Step
              n="3"
              title="Launch + support"
              desc="Go live, monitor results, and iterate so it keeps improving." 
            />
          </div>
        </section>

        {/* Case studies */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <SectionHeading
            eyebrow="Proof"
            title="Results you can point to."
            desc="Replace these with your own wins when you have them." 
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Case study #1
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Cut response time from <b>4 hours</b> to <b>30 seconds</b> and
                captured after-hours leads with automatic routing.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                “We got bookings while we were closed.”
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Case study #2
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Saved <b>10+ hours/week</b> by answering repetitive questions and
                automating follow-ups.
              </p>
              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                “It’s like adding an assistant without hiring one.”
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
                title="Built by a technical operator, not an agency factory."
                desc="I’m Sam. I build practical automations and AI systems that reduce busywork and drive revenue. If you want outcomes instead of buzzwords, let’s talk." 
              />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  What you’ll get
                </p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>• A clear plan for your highest-leverage automation</li>
                  <li>• A working agent (not a prototype)</li>
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
                  Book a free 15-min call.
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  We’ll identify the best automation and map next steps.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={calendlyUrl}>Book your free call</Button>
                <Button href={`mailto:${email}`} variant="secondary">
                  Email me
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300 sm:flex-row sm:pt-8">
          <p>© {new Date().getFullYear()} Moon Automation</p>
          <div className="flex gap-4">
            <a href={`mailto:${email}`} className="hover:text-zinc-900 dark:hover:text-white">
              {email}
            </a>
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
