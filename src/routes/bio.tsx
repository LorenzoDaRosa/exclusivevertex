import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Links | Exclusive Vertex" },
      {
        name: "description",
        content:
          "Todos os links da Exclusive Vertex: site institucional, portfólio de projetos e contato direto no WhatsApp.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Links | Exclusive Vertex" },
      {
        property: "og:description",
        content: "Site, portfólio e WhatsApp da Exclusive Vertex em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BioPage,
});

const items = [
  {
    to: "/",
    label: "Site oficial",
    desc: "Conheça a Exclusive Vertex e como trabalhamos.",
    icon: GlobeIcon,
  },
  {
    to: "/projetos",
    label: "Portfólio de projetos",
    desc: "Casos reais de marcas reposicionadas.",
    icon: GridIcon,
  },
] as const;

function BioPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="relative w-full max-w-[520px]">
        <div className="rounded-[28px] border border-hairline bg-surface/70 p-7 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.35)] backdrop-blur-xl sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="vx-rise inline-flex size-20 items-center justify-center rounded-2xl bg-brand/10 ring-1 ring-brand/20">
              <Logo className="size-14" />
            </span>
            <h1 className="vx-rise mt-6 font-display text-4xl text-ink sm:text-5xl">
              Exclusive Vertex
            </h1>
            <p className="vx-rise mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-muted">
              Transformamos empresas em referências digitais na Serra Gaúcha.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3">
            {items.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_18px_40px_-24px_rgba(29,99,255,0.5)]"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:scale-105">
                  <item.icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-semibold text-ink">{item.label}</span>
                  <span className="mt-0.5 block truncate text-[13px] text-ink-muted">
                    {item.desc}
                  </span>
                </span>
                <ArrowIcon />
              </Link>
            ))}

            <a
              href={waLink(
                "Olá, Exclusive Vertex! Vim pelo link da bio e quero saber mais sobre os projetos de vocês.",
              )}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-brand/30 bg-brand/5 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-[0_18px_40px_-24px_rgba(29,99,255,0.5)]"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:scale-105">
                <WhatsIcon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold text-ink">
                  WhatsApp (54) 3214-4112
                </span>
                <span className="mt-0.5 block truncate text-[13px] text-ink-muted">
                  Fale direto com nosso time. Resposta rápida.
                </span>
              </span>
              <ArrowIcon />
            </a>

            <a
              href="https://instagram.com/exclusive.vertex"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center text-[12px] uppercase tracking-[0.22em] text-ink-subtle transition-colors hover:text-ink"
            >
              @exclusive.vertex
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
          © {new Date().getFullYear()} Exclusive Vertex
        </p>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.28 4.86L2 22l5.32-1.34a9.9 9.9 0 0 0 4.72 1.2c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.32-1.94 1.36-.54.04-1.04.24-3.5-.86-2.46-1.1-4-3.72-4.12-3.9-.12-.18-.98-1.4-.94-2.62.04-1.22.7-1.8.94-2.06.24-.26.5-.3.68-.3h.48c.16 0 .38-.02.58.46.2.5.68 1.74.74 1.86.06.12.1.26.02.42-.08.16-.16.28-.32.44-.16.16-.34.36-.24.54.1.18.44.78 1 1.28.72.64 1.32.86 1.5.96.18.1.3.08.42-.06.12-.14.5-.6.64-.8.14-.2.28-.16.46-.1.18.06 1.16.56 1.36.66.2.1.34.16.38.24.04.08.04.5-.2 1.18Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-4 shrink-0 text-ink-subtle transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
