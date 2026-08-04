import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 34,
  startDelay = 250,
  className = "",
  caretClassName = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  caretClassName?: string;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    let interval = 0 as unknown as ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.06em] bg-brand align-middle ${
          done ? "vx-caret-blink" : ""
        } ${caretClassName}`}
      />
    </span>
  );
}
