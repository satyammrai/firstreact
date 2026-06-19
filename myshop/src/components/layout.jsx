import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Theme from "./Theme";

const navLinks = [
  { name: "Products", path: "/product" },
  { name: "Solutions", path: "/solutions" },
  { name: "Enterprise", path: "/enterprise" },
  { name: "Pricing", path: "/pricing" },
];

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 px-3 pt-3 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-8 dark:border-white/10 dark:bg-slate-900/80">
          <Link to="/">
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
              <Logo />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-slate-600 transition hover:text-black dark:text-slate-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <Theme />

            <Link to="/login">
              <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-white dark:hover:bg-white/10">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-slate-800 dark:bg-white dark:text-black">
                Sign Up Free
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-2xl lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/70 bg-white p-5 shadow-xl lg:hidden dark:border-white/10 dark:bg-slate-900">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-medium text-slate-700 dark:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <button className="w-full rounded-xl border py-3 dark:border-white/20">
                  Login
                </button>
              </Link>

              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <button className="w-full rounded-xl bg-black py-3 text-white dark:bg-white dark:text-black">
                  Sign Up Free
                </button>
              </Link>

              <div className="mt-2">
                <Theme />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Trust Banner */}
      <section className="mx-auto mt-8 max-w-7xl px-4">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 shadow-sm dark:border-white/10 dark:from-slate-900 dark:to-slate-800">
          <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-200">
            Trusted by 10,000+ builders, startups & enterprises worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Logo />

              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Monascope helps teams build intelligent, scalable, and beautiful
                digital products with premium engineering and elite design.
              </p>

              <div className="mt-6 flex gap-3">
                <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm dark:bg-white/10">
                  Secure
                </div>
                <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm dark:bg-white/10">
                  Trusted
                </div>
                <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm dark:bg-white/10">
                  Global
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <p>Features</p>
                <p>Pricing</p>
                <p>Integrations</p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 font-semibold">Stay Updated</h3>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-black dark:border-white/10 dark:bg-slate-900"
              />

              <button className="mt-3 w-full rounded-2xl bg-black py-3 font-medium text-white dark:bg-white dark:text-black">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2026 Monascope. All rights reserved.
            </p>

            <div className="flex gap-5 text-sm text-slate-500 dark:text-slate-400">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
