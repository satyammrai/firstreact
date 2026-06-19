import React from "react";

function Logo({ size = "md", showText = true, className = "" }) {
  const sizes = {
    sm: {
      box: "w-9 h-9",
      text: "text-lg",
      outer: "w-5 h-5",
      inner: "w-2 h-2",
    },
    md: {
      box: "w-11 h-11",
      text: "text-xl",
      outer: "w-6 h-6",
      inner: "w-2.5 h-2.5",
    },
    lg: {
      box: "w-14 h-14",
      text: "text-2xl",
      outer: "w-8 h-8",
      inner: "w-3 h-3",
    },
  };

  const current = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <div
        className={`
          ${current.box}
          relative
          flex
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-gray-900
          to-black
          shadow-lg
        `}
      >
        {/* Outer Ring */}
        <div
          className={`
            ${current.outer}
            rounded-full
            border-2
            border-white/80
            flex
            items-center
            justify-center
          `}
        >
          {/* Inner Dot */}
          <div
            className={`
              ${current.inner}
              rounded-full
              bg-white
            `}
          />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex items-center">
          <span
            className={`${current.text} font-semibold tracking-tight text-gray-900`}
          >
            Mona
          </span>
          <span
            className={`${current.text} font-semibold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent`}
          >
            scope
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;