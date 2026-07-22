import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Sites institucionais, landing pages, UI/UX, SEO, integração com WhatsApp e consultoria digital.",
      },
      { property: "og:title", content: "Serviços — Exclusive Vertex" },
      {
        property: "og:description",
        content: "Nove frentes de trabalho para elevar a presença digital da sua empresa.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Serviços</SectionLabel>
          <h1 className="mt-6 font-display text-6xl lg:text-8xl text-ink max-w-[18ch]">
            Nove frentes de trabalho, um só padrão de excelência.
          </h1>
        </Reveal>

        <div className="mt-24">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-12 items-start gap-6 border-t border-hairline py-10 transition-colors hover:bg-surface-2/40"
              >
                <div className="col-span-2 md:col-span-1 text-xs tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-4 font-display text-2xl lg:text-3xl text-ink group-hover:text-brand transition-colors">
                  {s.title}
                </div>
                <div className="col-span-12 md:col-span-6 text-sm text-ink-muted leading-relaxed max-w-[52ch]">
                  {s.short}
                </div>
                <div className="col-span-12 md:col-span-1 text-right text-ink-muted transition-transform duration-300 group-hover:translate-x-1">
                  →
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </div>
    </div>
  );
}
