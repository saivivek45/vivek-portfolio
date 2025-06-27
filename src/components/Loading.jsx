"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const phrases = [
    "⚙️ Compiling Awesomeness",
    "🚀 Launching Portfolio.exe",
    "🤯 Refactoring Personality",
    "🧠 Importing Creativity",
    "💾 Saving the Universe",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-[#00ffae] font-mono text-xl">
      <p>
        {phrases[index]}
        <span className="animate-dots">...</span>
      </p>
    </div>
  );
}
