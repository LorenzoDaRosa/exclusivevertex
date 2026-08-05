import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import lockup from "@/assets/vertex-lockup.png.asset.json";

const links = [
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/processo", label: "Processo" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vx-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vx-theme", "light");
    }
  };

  return (
    <>
      <nav
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 backdrop-blur-xl",
          scrolled
            ? "bg-surface/85 border-b border-hairline"
            : "bg-surface/40 border-b border-transparent",
        ].join(" ")}
      >
        <div className="relative mx-auto flex max-w-[1400px] items-center justify-center px-6 py-6 lg:px-10 lg:py-8">
          <Link to="/" aria-label="Exclusive Vertex" className="inline-flex">
            <img
              src={lockup.url}
              alt="Exclusive Vertex Lockup"
              className={`h-10 w-auto object-contain sm:h-12 lg:h-14 transition-all duration-500 ${theme === 'dark' ? 'invert brightness-200' : ''}`}
              width="200"
              height="56"
              loading="eager"
              decoding="async"
            />
          </Link>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 lg:right-10">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-surface-2 text-ink"
            >
              {theme === "light" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            <button
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center gap-[3px] rounded-full transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="size-[3px] rounded-full bg-ink" />
              <span className="size-[3px] rounded-full bg-ink" />
              <span className="size-[3px] rounded-full bg-ink" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={[
          "fixed inset-0 z-[60] bg-surface transition-all duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-6 lg:px-10 lg:py-8">
          <img
            src={lockup.url}
            alt="Exclusive Vertex"
            className={`h-10 w-auto object-contain sm:h-12 transition-all duration-500 ${theme === 'dark' ? 'invert brightness-200' : ''}`}
          />
          <button
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-hairline transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-ink" />
              <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-ink" />
            </span>
          </button>
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-col px-6 pt-10 lg:px-10 lg:pt-20">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group border-b border-hairline py-5 font-display text-3xl font-semibold tracking-[-0.03em] text-ink transition-all duration-500 hover:pl-3 hover:text-brand sm:text-4xl lg:py-7 lg:text-5xl"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 600ms cubic-bezier(0.22,0.61,0.36,1) ${80 + i * 60}ms, transform 600ms cubic-bezier(0.22,0.61,0.36,1) ${80 + i * 60}ms, padding 400ms, color 300ms`,
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/orcamento"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit items-center rounded-full bg-brand px-6 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-brand-hover"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </>
  );
}
