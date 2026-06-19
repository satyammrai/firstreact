import React from "react";

function Enterprise() {
  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "500M+", label: "Requests Processed" },
    { value: "180+", label: "Countries" },
    { value: "$2.4B", label: "Value Generated" },
  ];

  const features = [
    "Military-grade security",
    "Dedicated infrastructure",
    "AI-powered intelligence",
    "Global deployment",
    "Enterprise analytics",
    "24/7 priority support",
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-20 top-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]" />
      <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
        {/* Top Badge */}
        <div className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
          <span className="text-sm font-medium text-white/80">
            MONASCOPE ENTERPRISE
          </span>
        </div>

        {/* Hero */}
        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Infrastructure for
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Billion-Dollar Companies
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Build, scale, and operate mission-critical systems with elite-grade
            infrastructure engineered for global enterprises.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-black shadow-2xl transition hover:scale-[1.03]">
              Contact Sales
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10">
              Book Demo
            </button>
          </div>
        </div>

        {/* Massive Glass Panel */}
        <div className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Trusted by global leaders
              </h2>

              <p className="mt-5 text-lg text-white/60">
                Designed for organizations where reliability, performance,
                compliance, and security cannot fail.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <p className="mt-3 text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Row */}
        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {["FORTUNE 500", "ISO 27001", "SOC 2", "GDPR READY"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] py-5 text-center text-sm font-semibold tracking-wider text-white/60"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Enterprise;