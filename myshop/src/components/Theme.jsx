import React, { useEffect, useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-12 w-24 items-center rounded-full border border-gray-200 bg-white px-1 shadow-lg transition-all duration-500 dark:border-white/10 dark:bg-slate-900"
    >
      {/* Track Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-100 to-blue-100 opacity-70 dark:from-slate-800 dark:to-purple-900" />

      {/* Knob */}
      <div
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br shadow-xl transition-all duration-500 ${
          dark
            ? "translate-x-12 from-slate-700 to-black text-white"
            : "translate-x-0 from-yellow-300 to-orange-400 text-black"
        }`}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

export default Theme;