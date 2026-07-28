import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ContentSection } from "@/components/site/ContentSection";
import { Counter } from "@/components/site/Counter";
import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import serraAntes from "@/assets/serra/home_serra_antes.png.asset.json";
import darosCapa from "@/assets/daros/daros_42.png.asset.json";
import darosAlt from "@/assets/daros/daros_46.png.asset.json";
import vertexVideo from "@/assets/videos/vertex-video-1.mp4.asset.json";

const WHATSAPP = "https://wa.me/5554992894672";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex — Presença digital de alto padrão" },
      {
        name: "description",
        content:
          "Criamos experiências digitais para empresas que precisam transmitir autoridade. Sites premium, estratégia e tecnologia para marcas que querem ser referência.",
      },
      {
        property: "og:title",
        content: "Exclusive Vertex — Presença digital de alto padrão",
      },
      {
        property: "og:description",
        content:
          "Empresas extraordinárias merecem uma presença digital à altura.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <Cases />
      <Transform />
      <Process />
      <Impact />
      <ContentSection />
      <ClosingCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO — vídeo em background                                          */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pt-40 pb-12 lg:px-10 lg:pb-16">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={vertexVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,11,0.86) 0%, rgba(11,11,11,0.74) 40%, rgba(11,11,11,0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="vx-glow pointer-events-none absolute -z-10 left-1/2 top-[38%] h-[560px] w-[860px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 46%, transparent), transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div
          className="vx-line-grow h-px w-20 bg-brand"
          style={{ animationDelay: "100ms" }}
        />

        <h1 className="mt-10 max-w-[17ch] font-display text-[46px] font-semibold leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl lg:text-[104px] xl:text-[120px]">
          <span className="vx-rise block" style={{ animationDelay: "160ms" }}>
            Empresas extraordinárias
          </span>
          <span className="vx-rise block" style={{ animationDelay: "300ms" }}>
            merecem uma presença
          </span>
          <span
            className="vx-rise block text-brand"
            style={{ animationDelay: "440ms" }}
          >
            digital à altura.
          </span>
        </h1>

        <div className="mt-14 flex flex-col gap-10 border-t border-hairline pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p
            className="vx-rise max-w-[44ch] text-base leading-relaxed text-ink-muted lg:text-lg"
            style={{ animationDelay: "600ms" }}
          >
            A primeira impressão da sua empresa começa muito antes da primeira
            conversa.
          </p>

          <div
            className="vx-rise flex flex-wrap gap-3"
            style={{ animationDelay: "720ms" }}
          >
            <Link
              to="/orcamento"
              className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-brand-hover"
            >
              Solicitar orçamento
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-hairline px-8 py-4 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-500 hover:border-ink/40"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* AUTORIDADE — números animados                                       */
/* ------------------------------------------------------------------ */

function Authority() {
  const stats = [
    { to: 12, suffix: "+", label: "Projetos desenvolvidos" },
    { to: 30, suffix: "+", label: "Clientes atendidos" },
    { to: 8, suffix: "", label: "Empresas transformadas" },
    { to: 5, suffix: ".0", label: "Avaliação média" },
  ];

  return (
    <section className="border-y border-hairline bg-surface-2">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-14 px-6 py-24 lg:grid-cols-4 lg:gap-0 lg:px-10 lg:py-32">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 110}>
            <div className="lg:border-l lg:border-hairline lg:pl-10">
              <p className="font-display text-5xl font-semibold leading-none tracking-[-0.05em] text-ink lg:text-7xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.26em] text-ink-subtle">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CASES — cada um ocupa quase uma tela                                */
/* ------------------------------------------------------------------ */

type CaseItem = {
  index: string;
  name: string;
  sector: string;
  line: string;
  cover: string;
  before?: string;
  slug?: string;
  status?: string;
};

const CASES: CaseItem[] = [
  {
    index: "01",
    name: "Serra Seguros",
    sector: "Proteção patrimonial",
    line: "Uma corretora consolidada que finalmente aparenta o tamanho que tem.",
    cover: serraCapa.url,
    before: serraAntes.url,
    slug: "serra-seguros",
  },
  {
    index: "02",
    name: "Daros Lunettes",
    sector: "Boutique de alto padrão",
    line: "A primeira presença digital de uma boutique construída para durar.",
    cover: darosCapa.url,
    before: darosAlt.url,
    slug: "daros-lunettes",
  },
  {
    index: "03",
    name: "Rose Quadros Nutri",
    sector: "Saúde e performance",
    line: "Autoridade clínica traduzida em uma experiência calma e direta.",
    cover: "",
    status: "Em produção",
  },
  {
    index: "04",
    name: "Scooby Auto Premium",
    sector: "Automotivo premium",
    line: "Um showroom digital para quem vende desejo antes de vender carro.",
    cover: "",
    status: "Em produção",
  },
];

function Cases() {
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink lg:text-6xl">
            Marcas que mudaram de patamar.
          </p>
          <Link
            to="/projetos"
            className="story-link shrink-0 text-sm text-ink-muted hover:text-ink"
          >
            Todos os projetos
          </Link>
        </Reveal>
      </div>

      <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-44">
        {CASES.map((c, i) => (
          <CaseBlock key={c.name} item={c} flipped={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function CaseBlock({ item, flipped }: { item: CaseItem; flipped: boolean }) {
  const media = item.cover ? (
    <div className="relative overflow-hidden rounded-[24px] border border-hairline bg-surface-2">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={item.cover}
          alt={`Projeto ${item.name} desenvolvido pela Exclusive Vertex`}
          className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      {item.before ? (
        <img
          src={item.before}
          alt={`Versão anterior do site ${item.name}`}
          className="absolute bottom-5 right-5 hidden w-[26%] rounded-lg border border-hairline object-cover object-top opacity-70 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 sm:block"
          loading="lazy"
        />
      ) : null}
    </div>
  ) : (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[24px] border border-hairline bg-surface-2">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px 300px at 30% 20%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 70%)",
        }}
      />
      <p className="relative font-display text-3xl font-semibold tracking-[-0.04em] text-ink/25 lg:text-5xl">
        {item.name}
      </p>
    </div>
  );

  const body = (
    <div className="min-w-0">
      <p className="font-display text-5xl font-semibold leading-none tracking-[-0.05em] text-brand/25 lg:text-7xl">
        {item.index}
      </p>
      <p className="mt-8 text-[11px] uppercase tracking-[0.26em] text-ink-subtle">
        {item.sector}
      </p>
      <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink transition-colors duration-500 group-hover:text-brand lg:text-5xl">
        {item.name}
      </h3>
      <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-ink-muted">
        {item.line}
      </p>
      <p className="mt-10 inline-flex items-center gap-3 border-t border-hairline pt-6 text-sm text-ink">
        {item.slug ? "Ver projeto" : item.status}
        {item.slug ? (
          <span className="text-brand transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        ) : null}
      </p>
    </div>
  );

  const inner = (
    <div
      className={`mx-auto flex max-w-[1400px] flex-col gap-10 px-6 lg:gap-20 lg:px-10 ${
        flipped ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center`}
    >
      <div className="w-full min-w-0 lg:w-[64%]">{media}</div>
      <div className="w-full min-w-0 lg:w-[36%]">{body}</div>
    </div>
  );

  return (
    <Reveal>
      {item.slug ? (
        <Link
          to="/projetos/$slug"
          params={{ slug: item.slug }}
          className="group block"
        >
          {inner}
        </Link>
      ) : (
        <div className="group block">{inner}</div>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* O QUE TRANSFORMAMOS                                                 */
/* ------------------------------------------------------------------ */

function Transform() {
  const items = [
    {
      title: "Empresas que precisam transmitir autoridade",
      body: "Quando a entrega é séria, mas a percepção ainda não acompanha o tamanho do negócio.",
    },
    {
      title: "Empresas que querem vender mais",
      body: "Jornada desenhada para conduzir o visitante até a conversa comercial, sem ruído.",
    },
    {
      title: "Empresas que precisam de presença profissional",
      body: "Uma base digital estável, rápida e encontrável — não um perfil solto em rede social.",
    },
    {
      title: "Empresas que querem crescer",
      body: "Estrutura pronta para escalar campanhas, conteúdo e novas frentes de receita.",
    },
  ];

  return (
    <section className="border-y border-hairline bg-surface-2 px-6 py-28 lg:px-10 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
              O que transformamos
            </p>
            <p className="mt-8 max-w-[14ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink lg:text-6xl">
              Não vendemos sites. Entregamos resultado.
            </p>
          </Reveal>
        </div>

        <div>
          {items.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="border-t border-hairline py-10 first:border-t-0 first:pt-0 lg:py-12">
                <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink lg:text-3xl">
                  {b.title}
                </p>
                <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-muted">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESSO — timeline horizontal                                      */
/* ------------------------------------------------------------------ */

function Process() {
  const steps = [
    { n: "1", title: "Estratégia", body: "Entendimento do negócio, do público e do que precisa ser provado." },
    { n: "2", title: "Design", body: "Direção visual autoral, hierarquia e ritmo construídos sob medida." },
    { n: "3", title: "Desenvolvimento", body: "Código próprio, performance alta e base técnica preparada para SEO." },
    { n: "4", title: "Entrega", body: "Publicação, testes reais e acompanhamento dos primeiros resultados." },
    { n: "5", title: "Suporte", body: "Evolução contínua, ajustes e presença ativa depois do lançamento." },
  ];

  return (
    <section className="px-6 py-28 lg:px-10 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink lg:text-6xl">
            Um processo, cinco movimentos.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative pt-8">
                <span
                  className="absolute left-0 top-0 h-px w-full origin-left bg-hairline"
                  aria-hidden
                />
                <span
                  className="absolute left-0 top-0 h-px w-full origin-left bg-brand"
                  style={{
                    animation: `vx-track 900ms cubic-bezier(0.22,0.61,0.36,1) ${i * 140}ms both`,
                  }}
                  aria-hidden
                />
                <p className="font-display text-sm font-semibold tabular-nums text-brand">
                  {s.n}
                </p>
                <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {s.title}
                </p>
                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* BLOCO DE IMPACTO                                                    */
/* ------------------------------------------------------------------ */

function Impact() {
  return (
    <section className="relative isolate overflow-hidden border-y border-hairline px-6 py-40 lg:px-10 lg:py-64">
      <div
        aria-hidden
        className="vx-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 32%, transparent), transparent 70%)",
        }}
      />
      <Reveal>
        <p className="mx-auto max-w-[18ch] text-center font-display text-[40px] font-semibold leading-[0.98] tracking-[-0.05em] text-ink text-balance sm:text-7xl lg:text-[104px]">
          Seu concorrente não parece maior por acaso.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FECHAMENTO                                                          */
/* ------------------------------------------------------------------ */

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-48">
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="max-w-[17ch] font-display text-[38px] font-semibold leading-[1.0] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[88px]">
            Vamos criar um site que represente o
            <span className="text-brand"> verdadeiro potencial </span>
            da sua empresa?
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 flex flex-wrap gap-3 border-t border-hairline pt-10">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-brand-hover"
            >
              Agendar reunião
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-hairline px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:border-ink/40"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
