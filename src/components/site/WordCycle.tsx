import { useEffect, useState } from "react";

export function WordCycle({
  words,
  interval = 2200,
  className = "",
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-bottom ${className}`}>
      <span className="invisible block" aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      {words.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className="absolute inset-0 block whitespace-nowrap text-brand"
          style={{
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "translateY(0)" : "translateY(0.4em)",
            transition:
              "opacity 700ms cubic-bezier(0.22,0.61,0.36,1), transform 700ms cubic-bezier(0.22,0.61,0.36,1)",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
