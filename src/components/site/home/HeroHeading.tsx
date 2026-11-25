import { useEffect, useRef, useState } from "react";
import { heroWords } from "./content";

export function HeroHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const heading = ref.current;
    if (!heading) return;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const fit = () => {
      if (!context) return;
      const style = getComputedStyle(heading);
      context.font = `${style.fontWeight} 100px ${style.fontFamily}`;
      const width = Math.max(...["Sua empresa vista", ...heroWords].map((line) => context.measureText(line).width));
      const cap = window.innerWidth <= 680 ? 40 : window.innerWidth <= 1000 ? 64 : 84;
      const size = Math.min(cap, heading.clientWidth * 100 / (width + 8));
      heading.style.setProperty("--hero-size", `${size}px`);
    };
    const observer = new ResizeObserver(fit);
    observer.observe(heading);
    fit();
    void document.fonts.ready.then(() => { if (heading.isConnected) fit(); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let current = 0;
    const cycle = () => {
      timer = setTimeout(() => {
        setPhase("exit");
        timer = setTimeout(() => {
          current = (current + 1) % heroWords.length;
          setActive(current);
          setPhase("enter");
          timer = setTimeout(() => { setPhase("visible"); cycle(); }, 300);
        }, 280);
      }, 2500);
    };
    const configure = () => {
      clearTimeout(timer);
      current = 0;
      setActive(0);
      setPhase("visible");
      if (!preference.matches) cycle();
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { clearTimeout(timer); preference.removeEventListener("change", configure); };
  }, []);

  return (
    <h1 ref={ref} aria-label="Sites premium em Caxias do Sul que posicionam sua empresa como líder de mercado">
      <span className="home-hero-prefix" aria-hidden="true">Sua empresa vista</span>
      <span className="home-hero-line" aria-hidden="true">como</span>
      <span className="home-hero-cycle" aria-hidden="true"><span className="home-hero-word" data-phase={phase}>{heroWords[active]}</span></span>
    </h1>
  );
}