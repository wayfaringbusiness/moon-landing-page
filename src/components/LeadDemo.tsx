"use client";

import { useMemo, useState } from "react";

type Tab = "demo" | "calculator" | "audit";

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
      className={[
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
          : "border border-zinc-200 bg-white/70 text-zinc-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10",
      ].join(" ")}
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

export default function LeadDemo() {
  const [tab, setTab] = useState<Tab>("demo");

  // Demo tab state
  const [service, setService] = useState<"landscaping" | "plumbing" | "roofing">(
    "landscaping",
  );
  const [afterHours, setAfterHours] = useState(true);
  const [simulated, setSimulated] = useState(false);

  // Calculator tab state
  const [monthlyLeads, setMonthlyLeads] = useState(30);
  const [missedPct, setMissedPct] = useState(25);
  const [closeRatePct, setCloseRatePct] = useState(25);
  const [avgJobValue, setAvgJobValue] = useState(1200);

  // Audit tab state
  const [bizName, setBizName] = useState("Your Business");
  const [bizWebsite, setBizWebsite] = useState("https://example.com");
  const [bizCity, setBizCity] = useState("Minneapolis");
  const [bizEmail, setBizEmail] = useState("you@company.com");
  const [auditGoal, setAuditGoal] = useState(
    "Get more estimate requests without more ad spend",
  );

  const demoCopy = useMemo(() => {
    const serviceLabel =
      service === "landscaping"
        ? "landscaping"
        : service === "plumbing"
          ? "plumbing"
          : "roofing";

    const intro = afterHours
      ? "Missed call after hours"
      : "Missed call during business hours";

    const sms1 = `Hey — sorry we missed your call. Want a quick ${serviceLabel} estimate? Reply 1=YES, 2=NO`;
    const sms2 = "Great — what’s your address and what kind of job is it?";
    const sms3 = "Thanks. Upload a photo if you can. We’ll text you a time window for a quote.";

    return {
      intro,
      sms1,
      sms2,
      sms3,
    };
  }, [service, afterHours]);

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
        detail: "You get a clean summary (text/email/Slack).",
      },
      {
        t: "00:12",
        label: "Follow-up scheduled",
        detail: "If they don’t respond, it nudges them automatically.",
      },
      {
        t: "00:15",
        label: "CRM updated",
        detail: "Lead is logged so nothing falls through the cracks.",
      },
    ];
  }, [simulated]);

  const calc = useMemo(() => {
    const leads = clampNumber(monthlyLeads, 0, 10000);
    const missed = clampNumber(missedPct, 0, 100) / 100;
    const close = clampNumber(closeRatePct, 0, 100) / 100;
    const value = clampNumber(avgJobValue, 0, 1_000_000);

    const missedLeads = leads * missed;
    const recoveredJobs = missedLeads * close;
    const recoveredRevenue = recoveredJobs * value;

    return {
      missedLeads,
      recoveredJobs,
      recoveredRevenue,
    };
  }, [monthlyLeads, missedPct, closeRatePct, avgJobValue]);

  const auditOutput = useMemo(() => {
    const subject = `Quick Loom teardown for ${bizName}`;

    const body = [
      `Hey ${bizName} — I’m Sam with Moon Automation.`,
      "",
      `I took a quick look at your site (${bizWebsite}) and your Google presence in ${bizCity}.`,
      "",
      "Here are 2–3 quick fixes + 1 automation that usually increases booked estimates:",
      "1) Add a frictionless ‘Request Estimate’ flow on mobile",
      "2) Instant text-back for missed calls + short intake",
      "3) Follow-up sequence so leads don’t go cold",
      "",
      `Goal: ${auditGoal}.`,
      "",
      "If you want, reply YES and I’ll send a 3–5 minute Loom personalized to your business.",
      "",
      "— Sam",
    ].join("\n");

    const checklist = [
      "Audit checklist (what we look for)",
      "- Mobile CTA above the fold",
      "- Click-to-call working",
      "- Fast estimate form (short)",
      "- After-hours lead capture",
      "- Follow-up automation",
      "- Reviews + trust elements",
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(bizEmail)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    return { subject, body, checklist, mailto };
  }, [bizName, bizWebsite, bizCity, bizEmail, auditGoal]);

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Card
          title="Try the automation (interactive demo)"
          desc="This is what we build for clients. Your site itself becomes the proof."
        >
          <div className="flex flex-wrap gap-2">
            <Pill active={tab === "demo"} onClick={() => setTab("demo")}>
              Missed-call demo
            </Pill>
            <Pill
              active={tab === "calculator"}
              onClick={() => setTab("calculator")}
            >
              ROI calculator
            </Pill>
            <Pill active={tab === "audit"} onClick={() => setTab("audit")}>
              Audit generator
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
                  No backend here yet—just a front-end demo. In real deployments,
                  this connects to SMS + a CRM + follow-ups.
                </p>
              </div>
            </div>
          ) : null}

          {tab === "calculator" ? (
            <div className="mt-4 grid gap-4">
              <div className="grid gap-3">
                <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  Monthly leads
                  <input
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    type="number"
                    min={0}
                    className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    % leads missed
                    <input
                      value={missedPct}
                      onChange={(e) => setMissedPct(Number(e.target.value))}
                      type="number"
                      min={0}
                      max={100}
                      className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    Close rate on recovered leads
                    <input
                      value={closeRatePct}
                      onChange={(e) => setCloseRatePct(Number(e.target.value))}
                      type="number"
                      min={0}
                      max={100}
                      className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </label>
                </div>

                <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  Average job value ($)
                  <input
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    type="number"
                    min={0}
                    className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </label>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-4 text-sm text-zinc-800 dark:bg-white/10 dark:text-zinc-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Missed leads / month</span>
                  <span>{calc.missedLeads.toFixed(1)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold">Recovered jobs / month</span>
                  <span>{calc.recoveredJobs.toFixed(1)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold">Recovered revenue / month</span>
                  <span>{formatUsd(calc.recoveredRevenue)}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                This is conservative. The main win is speed + consistency.
              </p>
            </div>
          ) : null}

          {tab === "audit" ? (
            <div className="mt-4 grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  Business name
                  <input
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  City
                  <input
                    value={bizCity}
                    onChange={(e) => setBizCity(e.target.value)}
                    className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </label>
              </div>

              <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Website
                <input
                  value={bizWebsite}
                  onChange={(e) => setBizWebsite(e.target.value)}
                  className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>

              <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Best email to send the Loom to
                <input
                  value={bizEmail}
                  onChange={(e) => setBizEmail(e.target.value)}
                  className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>

              <label className="grid gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                What they want (goal)
                <input
                  value={auditGoal}
                  onChange={(e) => setAuditGoal(e.target.value)}
                  className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>

              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Ready-to-send email
                    </p>
                    <p className="mt-1 font-semibold">{auditOutput.subject}</p>
                  </div>
                  <div className="flex gap-2">
                    <CopyButton
                      text={`Subject: ${auditOutput.subject}\n\n${auditOutput.body}`}
                    />
                    <a
                      className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      href={auditOutput.mailto}
                    >
                      Open email
                    </a>
                  </div>
                </div>

                <pre className="mt-3 whitespace-pre-wrap text-xs leading-5 text-zinc-700 dark:text-zinc-200">
{auditOutput.body}
                </pre>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                    Audit checklist
                  </p>
                  <CopyButton text={auditOutput.checklist} />
                </div>
                <pre className="mt-2 whitespace-pre-wrap text-xs leading-5 text-zinc-700 dark:text-zinc-200">
{auditOutput.checklist}
                </pre>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                This is a “micro automation” on your site: a visitor can play
                with it and immediately see how you systemize outreach + lead
                capture.
              </p>
            </div>
          ) : null}
        </Card>
      </div>

      <div className="lg:col-span-7">
        <Card
          title="What the client sees (and what happens behind the scenes)"
          desc="A simple example flow you can show prospects."
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
                  Prospects can *feel* the system working. Your website becomes
                  the demo.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
