"use client";

import { useMemo, useState } from "react";

type Tab = "demo" | "plan";

type Service = "landscaping" | "plumbing" | "roofing" | "general";

type DemoEvent = {
  t: string;
  label: string;
  detail: string;
};

function formatUsd(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function clampNumber(v: number, min: number, max: number) {
  if (!Number.isFinite(v)) return min;
  return Math.max(min, Math.min(max, v));
}

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-6">
      <div>
        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
          {title}
        </p>
        {desc ? (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            {desc}
          </p>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
          : "border border-zinc-200 bg-white/70 text-zinc-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10",
      )}
    >
      {children}
    </button>
  );
}

function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1200);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
    >
      {status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy"}
    </button>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function LeadDemo() {
  const [tab, setTab] = useState<Tab>("demo");

  // Demo tab state
  const [service, setService] = useState<Service>("landscaping");
  const [afterHours, setAfterHours] = useState(true);
  const [simulated, setSimulated] = useState(false);

  // Plan tab state
  const [bizType, setBizType] = useState<Service>("landscaping");
  const [leadSource, setLeadSource] = useState<
    "google" | "facebook" | "referrals" | "mix"
  >("google");
  const [biggestLeak, setBiggestLeak] = useState<
    "missed-calls" | "slow-replies" | "no-followup" | "messy-intake"
  >("missed-calls");
  const [handoffTo, setHandoffTo] = useState<"text" | "email" | "crm">("text");
  const [monthlyLeads, setMonthlyLeads] = useState(30);
  const [avgJobValue, setAvgJobValue] = useState(1200);

  const serviceLabel = useMemo(() => {
    switch (service) {
      case "landscaping":
        return "landscaping";
      case "plumbing":
        return "plumbing";
      case "roofing":
        return "roofing";
      default:
        return "home services";
    }
  }, [service]);

  const demoCopy = useMemo(() => {
    const intro = afterHours
      ? "Missed call after hours"
      : "Missed call during business hours";

    const sms1 = `Hey — sorry we missed your call. Want a quick ${serviceLabel} estimate? Reply 1=YES, 2=NO`;
    const sms2 = "Great — what’s your address and what kind of job is it?";
    const sms3 =
      "Thanks. Upload a photo if you can. We’ll text you a time window for a quote.";

    return { intro, sms1, sms2, sms3 };
  }, [afterHours, serviceLabel]);

  const demoEvents = useMemo<DemoEvent[]>(() => {
    if (!simulated) return [];

    return [
      {
        t: "00:00",
        label: "Auto-reply sent",
        detail: "Instant SMS goes out when a call is missed.",
      },
      {
        t: "00:07",
        label: "Lead captured",
        detail: "Job type + address collected via text.",
      },
      {
        t: "00:10",
        label: "Owner notified",
        detail: "You get a clean summary in the channel you prefer.",
      },
      {
        t: "00:12",
        label: "Follow-up scheduled",
        detail: "If they don’t respond, it nudges them automatically.",
      },
      {
        t: "00:15",
        label: "Logged",
        detail: "The lead is stored so nothing falls through the cracks.",
      },
    ];
  }, [simulated]);

  const plan = useMemo(() => {
    const leads = clampNumber(monthlyLeads, 0, 10000);
    const value = clampNumber(avgJobValue, 0, 1_000_000);

    // Simple heuristics; not trying to be “smart”, just clear.
    const recoveryPct = biggestLeak === "missed-calls" ? 0.2 : 0.12;
    const closeRate = 0.25;

    const recoveredRevenue = leads * recoveryPct * closeRate * value;

    const bizLabel =
      bizType === "landscaping"
        ? "Landscaping"
        : bizType === "plumbing"
          ? "Plumbing"
          : bizType === "roofing"
            ? "Roofing"
            : "Home Services";

    const sourceLabel =
      leadSource === "google"
        ? "Google (Maps/Search)"
        : leadSource === "facebook"
          ? "Facebook/Instagram"
          : leadSource === "referrals"
            ? "Referrals"
            : "Mixed";

    const leakLabel =
      biggestLeak === "missed-calls"
        ? "Missed calls"
        : biggestLeak === "slow-replies"
          ? "Slow replies"
          : biggestLeak === "no-followup"
            ? "No follow-up"
            : "Messy intake";

    const handoffLabel =
      handoffTo === "text" ? "Text" : handoffTo === "email" ? "Email" : "CRM";

    const core =
      biggestLeak === "missed-calls"
        ? "Missed-call text-back + estimate intake"
        : biggestLeak === "slow-replies"
          ? "Instant web/SMS response + FAQs + intake"
          : biggestLeak === "no-followup"
            ? "Follow-up sequence + reminders"
            : "Short intake form + routing + clean handoff";

    const steps = [
      "1) Capture: missed call / web form / DM triggers an instant response",
      "2) Qualify: collect address, job type, timeline, photos (if relevant)",
      `3) Handoff: notify owner via ${handoffLabel} with a clean summary`,
      "4) Follow-up: nudges if they don’t respond (no manual chasing)",
      "5) Log: store lead in a simple pipeline (sheet/CRM) so nothing disappears",
    ];

    const sms =
      bizType === "landscaping"
        ? "Hey — sorry we missed you. Want a landscaping estimate? Reply 1=YES, 2=NO"
        : bizType === "plumbing"
          ? "Hey — sorry we missed you. Is this an urgent plumbing issue? Reply 1=urgent, 2=non-urgent"
          : bizType === "roofing"
            ? "Hey — sorry we missed you. Is this roof repair or a full replacement? Reply 1=repair, 2=replacement"
            : "Hey — sorry we missed you. Want a quick estimate? Reply 1=YES, 2=NO";

    const outputText = [
      `Automation Plan (preview)`,
      `Business: ${bizLabel}`,
      `Lead source: ${sourceLabel}`,
      `Biggest leak: ${leakLabel}`,
      "",
      `Recommended build: ${core}`,
      "",
      "What we install:",
      ...steps.map((s) => `- ${s}`),
      "",
      "Example auto-text:",
      sms,
      "",
      "Next step:",
      "Reply with your website + service area and we’ll record a free Loom audit.",
    ].join("\n");

    return {
      bizLabel,
      sourceLabel,
      leakLabel,
      core,
      steps,
      sms,
      recoveredRevenue,
      outputText,
    };
  }, [bizType, leadSource, biggestLeak, handoffTo, monthlyLeads, avgJobValue]);

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Card
          title="Try the automation"
          desc="Two simple demos. The goal is clarity, not complexity."
        >
          <div className="flex flex-wrap gap-2">
            <Pill active={tab === "demo"} onClick={() => setTab("demo")}>
              Missed-call simulator
            </Pill>
            <Pill active={tab === "plan"} onClick={() => setTab("plan")}>
              Build my automation plan
            </Pill>
          </div>

          {tab === "demo" ? (
            <div className="mt-4">
              <div className="grid gap-3">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    Service type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        { key: "landscaping", label: "Landscaping" },
                        { key: "plumbing", label: "Plumbing" },
                        { key: "roofing", label: "Roofing" },
                      ] as const
                    ).map((s) => (
                      <Pill
                        key={s.key}
                        active={service === s.key}
                        onClick={() => {
                          setService(s.key);
                          setSimulated(false);
                        }}
                      >
                        {s.label}
                      </Pill>
                    ))}
                  </div>
                </div>

                <label className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  <span>
                    After-hours scenario
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                      Most missed leads happen when you’re busy or closed.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={afterHours}
                    onChange={(e) => {
                      setAfterHours(e.target.checked);
                      setSimulated(false);
                    }}
                    className="h-5 w-5 accent-teal-600"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setSimulated(true)}
                  className="inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Simulate a missed call
                </button>

                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Front-end demo only. Real deployments connect to SMS + a CRM +
                  follow-ups.
                </p>
              </div>
            </div>
          ) : null}

          {tab === "plan" ? (
            <div className="mt-4 grid gap-4">
              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Select
                    label="Business type"
                    value={bizType}
                    onChange={(v) => setBizType(v as Service)}
                    options={[
                      { value: "landscaping", label: "Landscaping" },
                      { value: "plumbing", label: "Plumbing" },
                      { value: "roofing", label: "Roofing" },
                      { value: "general", label: "Other home services" },
                    ]}
                  />

                  <Select
                    label="Main lead source"
                    value={leadSource}
                    onChange={(v) =>
                      setLeadSource(v as "google" | "facebook" | "referrals" | "mix")
                    }
                    options={[
                      { value: "google", label: "Google (Maps/Search)" },
                      { value: "facebook", label: "Facebook/Instagram" },
                      { value: "referrals", label: "Referrals" },
                      { value: "mix", label: "Mixed" },
                    ]}
                  />
                </div>

                <Select
                  label="Biggest leak"
                  value={biggestLeak}
                  onChange={(v) =>
                    setBiggestLeak(
                      v as "missed-calls" | "slow-replies" | "no-followup" | "messy-intake",
                    )
                  }
                  options={[
                    { value: "missed-calls", label: "Missed calls" },
                    { value: "slow-replies", label: "Slow replies" },
                    { value: "no-followup", label: "No follow-up" },
                    { value: "messy-intake", label: "Messy intake" },
                  ]}
                />

                <Select
                  label="Preferred handoff"
                  value={handoffTo}
                  onChange={(v) => setHandoffTo(v as "text" | "email" | "crm")}
                  options={[
                    { value: "text", label: "Text me (fastest)" },
                    { value: "email", label: "Email me" },
                    { value: "crm", label: "Log it to a CRM/sheet" },
                  ]}
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    Monthly leads (rough)
                    <input
                      value={monthlyLeads}
                      onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                      type="number"
                      min={0}
                      className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </label>

                  <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    Avg job value ($)
                    <input
                      value={avgJobValue}
                      onChange={(e) => setAvgJobValue(Number(e.target.value))}
                      type="number"
                      min={0}
                      className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Your plan (copy/paste)
                    </p>
                    <p className="mt-1 font-semibold">{plan.core}</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Estimated upside (conservative): {formatUsd(plan.recoveredRevenue)}/month
                    </p>
                  </div>
                  <CopyButton text={plan.outputText} />
                </div>

                <pre className="mt-3 whitespace-pre-wrap text-xs leading-5 text-zinc-700 dark:text-zinc-200">
{plan.outputText}
                </pre>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                This is designed to feel obvious: pick your situation → get a
                concrete system.
              </p>
            </div>
          ) : null}
        </Card>
      </div>

      <div className="lg:col-span-7">
        <Card
          title="What the customer sees"
          desc="A simple flow you can show prospects."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {demoCopy.intro}
              </p>
              <div className="mt-3 space-y-3 text-sm">
                <div className="max-w-[90%] rounded-2xl bg-zinc-100 p-4 text-zinc-800 dark:bg-white/10 dark:text-zinc-200">
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                    Customer
                  </p>
                  <p className="mt-1">“Hey—can I get an estimate?”</p>
                </div>

                <div className="ml-auto max-w-[90%] rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                  <p className="text-xs font-semibold opacity-80">Auto-text</p>
                  <p className="mt-1">{demoCopy.sms1}</p>
                </div>

                <div className="ml-auto max-w-[90%] rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                  <p className="text-xs font-semibold opacity-80">Auto-text</p>
                  <p className="mt-1">{demoCopy.sms2}</p>
                </div>

                <div className="ml-auto max-w-[90%] rounded-2xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
                  <p className="text-xs font-semibold opacity-80">Auto-text</p>
                  <p className="mt-1">{demoCopy.sms3}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Behind the scenes
              </p>

              {!simulated ? (
                <div className="mt-3 rounded-2xl bg-zinc-100 p-4 text-sm text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Click “Simulate a missed call” to populate the timeline.
                </div>
              ) : (
                <ol className="mt-3 space-y-3">
                  {demoEvents.map((e) => (
                    <li
                      key={e.label}
                      className="rounded-2xl border border-zinc-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                          {e.label}
                        </p>
                        <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                          {e.t}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                        {e.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              )}

              <div className="mt-4 rounded-2xl bg-teal-500/10 p-4 text-sm text-teal-900 dark:text-teal-200">
                <p className="font-semibold">Why this sells</p>
                <p className="mt-1">
                  It turns the pitch into a product: prospects can interact with
                  the exact system you install.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
