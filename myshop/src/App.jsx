import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Product from "./components/Product";
import Solutions from "./components/Solutions";
import Enterprise from "./components/Enterprise";
import Pricing from "./components/Pricing";
import Homepage from "./components/Homepage";

/* ---------------- HOME PAGE ---------------- */
function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="text-center">
          <div className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            Welcome to Monascope
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-black dark:text-white md:text-7xl lg:text-8xl">
            Build the Future with
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Monascope
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
            Premium AI-powered enterprise platform for intelligent teams,
            futuristic products, and billion-dollar businesses.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black">
              Get Started
            </button>

            <button className="rounded-2xl border px-7 py-4 font-semibold dark:border-white/20 dark:text-white">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------- Layout Wrapper -------- */
function AppShell({ children }) {
  return <Layout>{children}</Layout>;
}

/* -------- 404 Page -------- */
function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-black dark:text-white">
          404
        </h1>
        <p className="mt-4 text-gray-500">Page not found.</p>
      </div>
    </div>
  );
}

/* ---------------- APP ---------------- */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH ROUTES (NO LAYOUT) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN ROUTES (WITH LAYOUT) */}
        <Route
          path="/"
          element={
            <AppShell>
              <Homepage />
            </AppShell>
          }
        />

        <Route
          path="/product"
          element={
            <AppShell>
              <Product />
            </AppShell>
          }
        />

        <Route
          path="/solutions"
          element={
            <AppShell>
              <Solutions />
            </AppShell>
          }
        />

        <Route
          path="/enterprise"
          element={
            <AppShell>
              <Enterprise />
            </AppShell>
          }
        />

        <Route
          path="/pricing"
          element={
            <AppShell>
              <Pricing />
            </AppShell>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;