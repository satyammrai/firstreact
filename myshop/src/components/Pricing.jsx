import React, { useState } from "react";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 19,
      yearly: 15,
      description: "Perfect for solo creators and freelancers.",
      features: [
        "1 Workspace",
        "Basic Analytics",
        "Email Support",
        "10 Projects",
      ],
      featured: false,
    },
    {
      name: "Pro",
      monthly: 49,
      yearly: 39,
      description: "For startups and fast-growing teams.",
      features: [
        "Unlimited Workspaces",
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Projects",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      monthly: 149,
      yearly: 119,
      description: "Custom solutions for large organizations.",
      features: [
        "Dedicated Manager",
        "Advanced Security",
        "Custom Integrations",
        "24/7 Support",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            Pricing
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Simple pricing for
            <span className="block bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              serious builders
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Scale with confidence. No hidden charges.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                !yearly ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                yearly ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Yearly (-20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-black bg-black text-white shadow-2xl scale-[1.02]"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p
                className={`mt-3 ${
                  plan.featured ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  ₹{yearly ? plan.yearly : plan.monthly}
                </span>
                <span
                  className={`ml-2 ${
                    plan.featured ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  /month
                </span>
              </div>

              <button
                className={`mt-8 w-full rounded-2xl py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </button>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                        plan.featured
                          ? "bg-white text-black"
                          : "bg-gray-100 text-black"
                      }`}
                    >
                      ✓
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;