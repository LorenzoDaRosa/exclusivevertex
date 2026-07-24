import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { services, processSteps } from "@/lib/site-data";
import serraCapa from "@/assets/serra/capa_case_serra.jpeg.asset.json";
import serraHomeDepois from "@/assets/serra/home_serra_depois.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex — Agência digital premium" },
      {
        name: "description",
        content:
          "Sites de alta conversão e estratégias digitais que transformam visitantes em clientes. Design exclusivo, SEO técnico e performance premium.",
      },
      { property: "og:title", content: "Exclusive Vertex — Agência digital premium" },
      {
        property: "og:description",
        content:
          "Sites de alta conversão e estratégias digitais que transformam visitantes em clientes.",
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
      <ResultsStrip />
      <FeaturedProject />
      <Testimonials />
      <ServicesGlimpse />
      <WhyClients />
      <VertexVsOther />
      <Differentials />
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
      <div className="relative mx-auto w-full max-w-[1400px] grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <div className="vx-fade-in mb-8" style={{ animationDelay: "60ms" }}>
            <SectionLabel>Agência digital · Exclusive Vertex</SectionLabel>
          </div>

          <h1
            className="vx-fade-up font-display text-[48px] leading-[0.98] text-ink text-balance sm:text-6xl lg:text-[92px] max-w-[20ch]"
            style={{ animationDelay: "120ms" }}
          >
            Sua empresa pode vender muito mais pela{" "}
            <span className="italic text-brand">internet</span>.
          </h1>

          <p
            className="vx-fade-up mt-8 max-w-[58ch] text-lg text-ink-muted text-pretty lg:text-xl"
            style={{ animationDelay: "260ms" }}
          >
            Criamos sites de alta conversão e estratégias digitais que
            transformam visitantes em clientes — com design exclusivo,
            performance real e SEO desde a fundação.
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
        </div>

        <div
          className="vx-fade-up hidden lg:block"
          style={{ animationDelay: "500ms" }}
        >
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-hairline bg-surface shadow-premium">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-2 border-b border-hairline">
              <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
              <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
              <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
            </div>

            <img
              src={serraHomeDepois.url}
              alt="Exemplo de site criado pela Exclusive Vertex — Serra Seguros"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
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

function ResultsStrip() {
  const items = [
    { label: "Projetos", value: "Exclusivos" },
    { label: "Design", value: "Sob medida" },
    { label: "SEO", value: "Otimizado" },
    { label: "Performance", value: "Máxima" },
  ];
  return (
    <section className="px-6 lg:px-10 py-20 border-b border-hairline">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 60}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-ink-subtle">
                {it.label}
              </p>
              <p className="mt-4 font-display text-3xl lg:text-4xl text-ink">
                {it.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-48 border-t border-hairline">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Projetos que transformaram empresas</SectionLabel>
            <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-7xl max-w-[22ch]">
              Cases reais. Marcas reposicionadas. Resultados construídos com intenção.
            </h2>
          </div>
          <div className="lg:w-1/3 border-t border-hairline pt-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
              Em destaque
            </p>
            <p className="mt-3 text-sm text-ink">Serra Seguros e Consórcios</p>
            <p className="mt-2 text-xs text-ink-subtle leading-relaxed">
              Seguros · Consórcios — reposicionamento digital completo, de uma
              presença institucional a uma plataforma preparada para conversão.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Link
            to="/projetos/$slug"
            params={{ slug: "serra-seguros" }}
            className="group block"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[21/12] w-full overflow-hidden rounded-2xl ring-1 ring-hairline bg-surface-2 shadow-premium hover:shadow-premium-hover">
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

function Testimonials() {
  const quotes = [
    {
      quote:
        "Em menos de uma semana o novo site já começou a gerar contatos qualificados. A percepção da marca mudou completamente.",
      author: "Serra Seguros e Consórcios",
      role: "Corretora · 10+ anos de mercado",
    },
    {
      quote:
        "Atendimento impecável do início ao fim. Cada detalhe foi pensado com estratégia — não é só design bonito, é resultado.",
      author: "Cliente Vertex",
      role: "Segmento premium",
    },
    {
      quote:
        "O resultado final ficou muito acima do que imaginávamos. Hoje temos um site que representa o tamanho real da empresa.",
      author: "Cliente Vertex",
      role: "Serviços especializados",
    },
  ];
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-40 border-t border-hairline">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl">
          <SectionLabel>Prova social</SectionLabel>
          <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-6xl">
            Confiança se constrói com histórias reais.
          </h2>
          <p className="mt-6 text-ink-muted max-w-[52ch]">
            Depoimentos de quem decidiu elevar a presença digital com a Exclusive Vertex.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.author + i} delay={i * 80}>
              <figure className="h-full rounded-2xl ring-1 ring-hairline bg-surface-2/40 p-8 flex flex-col justify-between">
                <div>
                  <div className="text-brand text-sm tracking-widest">★★★★★</div>
                  <blockquote className="mt-5 font-display text-xl text-ink leading-snug text-pretty">
                    “{q.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 pt-6 border-t border-hairline">
                  <p className="text-sm text-ink">{q.author}</p>
                  <p className="text-xs text-ink-subtle mt-1">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-muted">
              Quer estar entre as próximas empresas transformadas?
            </p>
            <div className="flex gap-3">
              <Link
                to="/orcamento"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
              >
                Quero um orçamento
              </Link>
              <a
                href="https://wa.me/5554992894672"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-transparent px-6 py-3 text-sm font-medium text-ink ring-1 ring-hairline transition hover:ring-ink/30"
              >
                Falar no WhatsApp
              </a>
            </div>
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
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
            <Link to="/servicos" className="story-link text-sm text-ink">
              Ver todos os serviços
            </Link>
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Quero um orçamento
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VertexVsOther() {
  const before = [
    "Site lento e desatualizado",
    "Não aparece no Google",
    "Visual amador",
    "Não gera contatos",
    "Ruim no celular",
    "Sem estratégia de conversão",
  ];
  const after = [
    "Site rápido e otimizado",
    "SEO desde a fundação",
    "Aparência premium",
    "Fluxos que geram oportunidade",
    "Mobile first impecável",
    "Cada seção pensada para converter",
  ];
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-40 border-t border-hairline bg-surface-2/30">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 max-w-3xl">
          <SectionLabel>Antes × Depois da Vertex</SectionLabel>
          <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-6xl">
            A diferença entre ter um site e ter um ativo digital.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl ring-1 ring-hairline bg-surface p-8 lg:p-10 h-full">
              <p className="text-[10px] uppercase tracking-[0.28em] text-ink-subtle">
                Antes
              </p>
              <p className="mt-3 font-display text-2xl text-ink">
                Site que atrapalha
              </p>
              <ul className="mt-8 space-y-4">
                {before.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-subtle/10 text-ink-subtle text-[11px]"
                    >
                      ✕
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl ring-1 ring-brand/40 bg-surface p-8 lg:p-10 h-full shadow-[0_40px_120px_-60px_rgba(47,107,255,0.5)]">
              <p className="text-[10px] uppercase tracking-[0.28em] text-brand">
                Depois · Vertex
              </p>
              <p className="mt-3 font-display text-2xl text-ink">
                Site que vende por você
              </p>
              <ul className="mt-8 space-y-4">
                {after.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-ink">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand text-[11px]"
                    >
                      ✓
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    "Design exclusivo",
    "SEO desde o primeiro dia",
    "Carregamento rápido",
    "Mobile first",
    "Copywriting focado em conversão",
    "Integração com WhatsApp",
    "Google Analytics configurado",
    "Google Search Console",
    "Hospedagem gerenciada",
    "Suporte contínuo",
  ];
  return (
    <section className="px-6 lg:px-10 py-32 border-t border-hairline">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 max-w-2xl">
          <SectionLabel>Diferenciais</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-ink text-balance">
            Muito mais do que "criar um site".
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
          {items.map((p, i) => (
            <Reveal key={p} delay={i * 25}>
              <div className="bg-surface p-6 h-full flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand text-[11px]"
                >
                  ✓
                </span>
                <span className="text-sm text-ink leading-snug">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
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

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-muted">
              Vamos conversar sobre o seu projeto?
            </p>
            <div className="flex gap-3">
              <Link
                to="/orcamento"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
              >
                Quero um orçamento
              </Link>
              <a
                href="https://wa.me/5554992894672"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-transparent px-6 py-3 text-sm font-medium text-ink ring-1 ring-hairline transition hover:ring-ink/30"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
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
            Um caminho claro do primeiro contato ao crescimento contínuo.
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
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
            <Link to="/processo" className="story-link text-sm text-ink">
              Explorar processo completo
            </Link>
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface transition hover:brightness-110"
            >
              Solicitar orçamento
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
          <div className="relative overflow-hidden rounded-3xl bg-surface-2 ring-1 ring-hairline px-8 py-24 lg:px-20 lg:py-40 text-center shadow-premium">
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
              <div className="mt-14 flex flex-wrap justify-center gap-3">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
                >
                  Solicitar proposta
                </Link>
                <a
                  href="https://wa.me/5554992894672"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-transparent px-8 py-4 text-sm font-medium text-ink ring-1 ring-hairline transition hover:ring-ink/30"
                >
                  Falar no WhatsApp
                </a>
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

function FirstSalesman() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-hairline bg-surface-2/30">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionLabel>Reflexão</SectionLabel>
          <p className="mt-8 font-display text-3xl leading-[1.15] text-ink text-balance sm:text-4xl lg:text-5xl max-w-[32ch]">
            O site é o primeiro vendedor da sua empresa. Ele trabalha{" "}
            <span className="italic text-brand">24 horas por dia</span>. A
            pergunta é: ele está convencendo seus clientes ou afastando
            oportunidades?
          </p>
          <div className="mt-10">
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface transition hover:brightness-110"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyClients() {
  const problems = [
    "Meu site parece antigo.",
    "Meu site não transmite confiança.",
    "Meu site não gera contatos.",
    "Meu concorrente parece maior.",
    "Meu site não aparece no Google.",
    "Meu atendimento demora.",
    "Meu site não funciona bem no celular.",
    "Meu site não representa minha empresa.",
  ];
  return (
    <section className="px-6 lg:px-10 py-32 lg:py-40 border-t border-hairline">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-3xl">
          <SectionLabel>Por que empresas nos procuram?</SectionLabel>
          <h2 className="mt-6 font-display text-5xl text-ink text-balance lg:text-6xl">
            Os sinais de que o site atual está custando oportunidades.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p} delay={i * 40}>
              <div className="bg-surface p-8 h-full flex flex-col gap-6 min-h-[180px]">
                <span className="text-[11px] tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl text-ink leading-snug text-pretty">
                  {p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-t border-hairline pt-10">
            <p className="font-display text-3xl lg:text-4xl text-ink text-balance max-w-[24ch]">
              É exatamente isso que resolvemos.
            </p>
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
