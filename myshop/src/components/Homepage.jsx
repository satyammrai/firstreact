import React from "react";

function Homepage() {
  const models = [
    ["DeepSeek V2.5", "DeepSeek", "Connected"],
    ["Claude 3.5 Sonnet", "Anthropic", "Connected"],
    ["Gemini 1.5 Pro", "Google", "Connected"],
    ["GPT-4o", "OpenAI", "Connected"],
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-slate-900">
            AI Comparative Research Hub
          </h1>

          <div className="flex gap-3">
            <div className="rounded-xl border bg-white px-4 py-3 shadow-sm">
              <span className="text-green-600">●</span> API Status: Connected
            </div>

            <button className="rounded-xl bg-black px-5 py-3 font-semibold text-white shadow-lg">
              Manage APIs
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* LEFT */}
          <div className="space-y-6 lg:col-span-3">
            {/* Prompt Section */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold">
                1. Enter Prompt (Send to All Connected Models)
              </h2>

              <textarea
                rows={6}
                placeholder="Enter prompt..."
                className="w-full rounded-2xl border p-4 outline-none focus:border-blue-500"
              />

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-500">0 / 4000</span>

                <div className="flex gap-3">
                  <button className="rounded-xl border px-5 py-2">
                    Clear
                  </button>

                  <button className="rounded-xl bg-blue-700 px-5 py-2 text-white">
                    Send to All Models
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold">
                2. Test Results Overview
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b">
                    <tr>
                      <th className="py-3">#</th>
                      <th>Model</th>
                      <th>Provider</th>
                      <th>Response Preview</th>
                    </tr>
                  </thead>

                  <tbody>
                    {models.map((model, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-4">{i + 1}</td>
                        <td>{model[0]}</td>
                        <td>{model[1]}</td>
                        <td className="text-slate-500">
                          AI response preview...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* API Table */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold">
                3. API / Model Management
              </h2>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">OpenAI</div>
                <div className="rounded-2xl bg-slate-50 p-4">Anthropic</div>
                <div className="rounded-2xl bg-slate-50 p-4">Google</div>
                <div className="rounded-2xl bg-slate-50 p-4">Meta</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold">Quick Summary</h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Connected Models</div>
                  <div className="text-3xl font-bold">4</div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Average Response</div>
                  <div className="text-3xl font-bold">2.7s</div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Success Rate</div>
                  <div className="text-3xl font-bold">98%</div>
                </div>
              </div>
            </div>

            {/* Modal Mock */}
            <div className="rounded-3xl border bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-bold">Manage APIs</h3>

              <input
                placeholder="Model Name"
                className="mb-3 w-full rounded-xl border p-3"
              />
              <input
                placeholder="Provider Name"
                className="mb-3 w-full rounded-xl border p-3"
              />
              <input
                placeholder="API Key"
                className="mb-3 w-full rounded-xl border p-3"
              />

              <button className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white">
                Add Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;