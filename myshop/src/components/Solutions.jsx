import React from "react";

function Solutions() {
  const solutions = [
    {
      title: "AI Automation",
      desc: "Automate repetitive workflows and scale operations with intelligent systems.",
      badge: "AI",
    },
    {
      title: "Enterprise Analytics",
      desc: "Transform raw data into actionable insights for faster decision-making.",
      badge: "DATA",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Deploy globally with resilient, high-performance cloud architecture.",
      badge: "CLOUD",
    },
    {
      title: "Security & Compliance",
      desc: "Protect sensitive data with enterprise-grade security and governance.",
      badge: "SECURE",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
      {/* Background Blur */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Solutions
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Solutions built for
            <span className="block bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
              modern organizations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            From startups to global enterprises, Monascope helps teams solve
            complex challenges with intelligent technology.
          </p>
        </div>

        {/* Hero Panel */}
        <div className="mt-16 rounded-[40px] border border-white bg-white/80 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl font-bold md:text-5xl">
                Solve bigger problems
                <span className="block text-slate-400">
                  with smarter systems
                </span>
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                Monascope combines engineering, AI, and enterprise design to
                help organizations scale faster, reduce operational friction,
                and unlock growth.
              </p>

              <button className="mt-8 rounded-2xl bg-black px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-slate-800">
                Explore Solutions
              </button>
            </div>

            {/* Right Side */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-widest text-white/60">
                Impact
              </p>

              <h4 className="mt-4 text-5xl font-bold">87%</h4>
              <p className="mt-2 text-white/70">
                Faster operational efficiency after deploying Monascope systems.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold">4x</p>
                  <p className="text-sm text-white/60">Faster Delivery</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-sm text-white/60">Reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-bold tracking-wider text-slate-700">
                {item.badge}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;