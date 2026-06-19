import React from "react";

function Product() {
  const features = [
    {
      title: "AI Intelligence Engine",
      desc: "Predict, automate, and optimize using advanced AI systems.",
    },
    {
      title: "Realtime Infrastructure",
      desc: "Lightning-fast global architecture for enterprise workloads.",
    },
    {
      title: "Enterprise Security",
      desc: "Built with compliance, governance, and security at the core.",
    },
    {
      title: "Scalable Architecture",
      desc: "From 10 users to 10 million without breaking performance.",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#020617] text-white">
      {/* Hero Background */}
      <section className="relative">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[150px]" />
        <div className="absolute right-20 top-24 h-96 w-96 rounded-full bg-purple-500/20 blur-[180px]" />
        <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl">
              MONASCOPE PRODUCT
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              The Future of
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Intelligent Work
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60 md:text-xl">
              One platform to build, automate, analyze, and scale mission-critical operations.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black shadow-2xl transition hover:scale-[1.03]">
                Start Free
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_40px_160px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:p-8">
            <div className="rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-white/50">Performance</p>
                  <h3 className="mt-4 text-5xl font-bold">98%</h3>
                </div>

                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-white/50">Requests</p>
                  <h3 className="mt-4 text-5xl font-bold">1.2B</h3>
                </div>

                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-white/50">Uptime</p>
                  <h3 className="mt-4 text-5xl font-bold">99.99%</h3>
                </div>
              </div>

              <div className="mt-8 h-72 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl md:h-96"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            Built for elite teams
          </h2>
          <p className="mt-4 text-white/50">
            Premium infrastructure. Exceptional performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.05]"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.03] p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold md:text-6xl">
            Ready to scale?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/50">
            Join thousands of companies building the future with Monascope.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-black shadow-xl transition hover:scale-[1.03]">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Product;