import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ProjectMock } from "@/components/site/ProjectMock";
import { services, processSteps } from "@/lib/site-data";
import serraCapa from "@/assets/serra/capa_case_serra.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex — Agência digital premium" },
      {
        name: "description",
        content:
          "Estúdio digital que transforma empresas em referências. Sites, landing pages, redesign e experiências premium com design, estratégia e tecnologia.",
      },
      { property: "og:title", content: "Exclusive Vertex — Agência digital premium" },
      {
        property: "og:description",
        content:
          "Estúdio digital que transforma empresas em referências. Sites, landing pages, redesign e experiências premium com design, estratégia e tecnologia.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FirstSalesman />
      <Credibility />
      <FeaturedProject />
      <ServicesGlimpse />
      <WhyClients />
      <ValuePoints />
      <ProcessGlimpse />
      <BigCTA />
      <BlogInvite />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center px-6 lg:px-10 pt-32 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% 20%, #2F6BFF, transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="vx-fade-in mb-8" style={{ animationDelay: "60ms" }}>
          <SectionLabel>Agência digital · Exclusive Vertex</SectionLabel>
        </div>

        <h1
          className="vx-fade-up font-display text-[52px] leading-[0.95] text-ink text-balance sm:text-7xl lg:text-[112px] max-w-[22ch]"
          style={{ animationDelay: "120ms" }}
        >
          Transformamos empresas em{" "}
          <span className="italic text-brand">referências</span> digitais.
        </h1>

        <p
          className="vx-fade-up mt-8 max-w-[62ch] text-lg text-ink-muted text-pretty lg:text-xl"
          style={{ animationDelay: "260ms" }}
        >
          Sites estratégicos que fortalecem sua marca, aumentam sua
          credibilidade e geram mais oportunidades de negócio.
        </p>

        <p
          className="vx-fade-up mt-4 max-w-[60ch] text-sm text-ink-subtle text-pretty"
          style={{ animationDelay: "320ms" }}
        >
          Desenvolvemos experiências digitais para empresas que querem crescer.
        </p>

        <div
          className="vx-fade-up mt-12 flex flex-wrap gap-3"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            to="/orcamento"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
          >
            Solicitar orçamento
          </Link>
          <Link
            to="/projetos"
            className="inline-flex items-center rounded-full bg-transparent px-6 py-3 text-sm font-medium text-ink ring-1 ring-hairline transition-all duration-300 hover:ring-ink/30"
          >
            Ver projetos
          </Link>
        </div>

        <div
          className="vx-fade-up absolute right-6 bottom-4 lg:right-10 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-subtle"
          style={{ animationDelay: "600ms" }}
        >
          <span>Role para explorar</span>
          <span className="h-px w-10 bg-ink-subtle" />
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    "Design Estratégico",
    "Desenvolvimento Sob Medida",
    "Performance Web",
    "SEO Técnico",
    "Experiência Premium",
  ];
  return (
    <div className="border-y border-hairline overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6">
        <div className="flex items-center gap-6 whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-10 vx-marquee shrink-0">
            {[...items, ...items].map((it, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-ink-subtle"
              >
                {it}
                <span className="h-1 w-1 rounded-full bg-ink-subtle/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Projeto em destaque</SectionLabel>
            <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-7xl max-w-[20ch]">
              Serra Seguros e Consórcios
            </h2>
          </div>
          <div className="lg:w-1/3 border-t border-hairline pt-6">
            <p className="text-sm text-ink-muted">Reforma completa da presença digital</p>
            <p className="mt-2 text-xs text-ink-subtle leading-relaxed">
              Reposicionamento de uma corretora tradicional em uma plataforma
              digital à altura da qualidade do atendimento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Link
            to="/projetos/$slug"
            params={{ slug: "serra-seguros" }}
            className="group block"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[21/12] w-full overflow-hidden rounded-2xl ring-1 ring-hairline bg-black">
              <img
                src={serraCapa.url}
                alt="Capa do case Serra Seguros e Consórcios — Exclusive Vertex"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-surface/70 via-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 text-sm text-ink opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Ver case completo
                <span>→</span>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/projetos/$slug"
              params={{ slug: "serra-seguros" }}
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface transition hover:brightness-110"
            >
              Ver case completo
            </Link>
            <Link to="/projetos" className="story-link text-sm text-ink-muted hover:text-ink">
              Todos os projetos →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesGlimpse() {
  const shown = services.slice(0, 6);
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-48 border-t border-hairline bg-surface-2/30">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-6xl">
            Não vendemos entregáveis. Vendemos o resultado que eles geram.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group block"
              >
                <div className="h-8 w-px bg-brand mb-8 origin-top scale-y-100 transition-transform duration-500 group-hover:scale-y-150" />
                <h3 className="text-lg font-medium text-ink group-hover:text-brand transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-[46ch] text-pretty">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-ink-subtle group-hover:text-ink transition-colors">
                  Detalhes
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16">
            <Link to="/servicos" className="story-link text-sm text-ink">
              Ver todos os serviços
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuePoints() {
  const points = [
    "Projetos personalizados",
    "Atendimento individual",
    "Design exclusivo",
    "SEO estruturado",
    "Integração WhatsApp",
    "Código otimizado",
    "Performance premium",
    "Responsividade completa",
  ];
  return (
    <section className="px-6 lg:px-10 py-32 border-t border-hairline">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 max-w-2xl">
          <SectionLabel>Padrão de trabalho</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-ink text-balance">
            O que está incluído em todo projeto Exclusive Vertex.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
          {points.map((p, i) => (
            <Reveal key={p} delay={i * 30}>
              <div className="bg-surface p-8 h-full flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand text-[11px]"
                >
                  ✓
                </span>
                <span className="text-sm text-ink">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessGlimpse() {
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl">
          <SectionLabel>Processo</SectionLabel>
          <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-6xl">
            Sete etapas construídas para gerar previsibilidade e excelência.
          </h2>
        </Reveal>

        <div>
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 40}>
              <div className="grid grid-cols-12 gap-6 border-t border-hairline py-7 items-start">
                <div className="col-span-2 md:col-span-1 text-xs font-medium text-brand tabular-nums">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-4 text-sm font-medium uppercase tracking-[0.18em] text-ink">
                  {s.title}
                </div>
                <div className="col-span-12 md:col-span-7 text-sm text-ink-muted leading-relaxed">
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>

        <Reveal delay={200}>
          <div className="mt-16">
            <Link to="/processo" className="story-link text-sm text-ink">
              Explorar processo completo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="px-6 lg:px-10 py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#05070d] ring-1 ring-hairline px-8 py-24 lg:px-20 lg:py-40 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                background:
                  "radial-gradient(900px 500px at 50% 0%, #2F6BFF, transparent 60%)",
              }}
            />
            <div className="relative">
              <SectionLabel>Vamos conversar</SectionLabel>
              <h2 className="mt-8 font-display text-5xl leading-[1] text-ink text-balance sm:text-7xl lg:text-[104px] max-w-[18ch] mx-auto">
                Sua empresa merece um site{" "}
                <span className="italic text-brand">à altura</span>.
              </h2>
              <div className="mt-14">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
                >
                  Solicitar proposta
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BlogInvite() {
  return (
    <section className="px-6 lg:px-10 py-24 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-3xl bg-surface-2 ring-1 ring-hairline p-10 lg:p-20">
          <div className="max-w-[52ch]">
            <SectionLabel>Central de Conteúdo</SectionLabel>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-ink text-balance">
              Conteúdo direto para empresários que levam o digital a sério.
            </h2>
            <p className="mt-6 text-ink-muted">
              Materiais objetivos sobre sites, SEO, design, marketing e decisões
              digitais que impactam o crescimento do negócio.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group"
            >
              Acessar central de conteúdo
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
