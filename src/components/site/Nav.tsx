import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/processo", label: "Processo" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/cafe", label: "Café" },
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

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        "backdrop-blur-xl",
        scrolled
          ? "bg-surface/85 border-b border-hairline"
          : "bg-surface/40 border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <Logo className="size-11" />
          <span className="hidden sm:inline text-[13px] font-medium tracking-[0.18em] text-ink uppercase">
            Exclusive Vertex
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-medium text-ink-muted transition-colors duration-300 hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/orcamento"
            className="hidden md:inline-flex items-center rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-white ring-1 ring-brand transition-all duration-300 hover:brightness-110"
          >
            Solicitar orçamento
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-hairline"
          >
            <span className="relative block h-[10px] w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-surface/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-ink-muted hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit items-center rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-white"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
