import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ContentSection } from "@/components/site/ContentSection";
import { Counter } from "@/components/site/Counter";
import { services } from "@/lib/site-data";
import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import darosCapa from "@/assets/daros/daros_42.png.asset.json";
import vertexVideo from "@/assets/videos/vertex-video-1.mp4.asset.json";

const WHATSAPP = "https://wa.me/5554992894672";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex — Presença digital de alto padrão" },
      {
        name: "description",
        content:
          "Construímos a percepção de valor de empresas que querem ser vistas como referência. Autoridade, credibilidade e crescimento em cada detalhe.",
      },
      {
        property: "og:title",
        content: "Exclusive Vertex — Presença digital de alto padrão",
      },
      {
        property: "og:description",
        content:
          "Construímos a percepção de valor de empresas que querem ser vistas como referência.",
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
      <Manifesto />
      <Numbers />
      <Cases />
      <PullQuote />
      <Positioning />
      <Capabilities />
      <ContentSection />
      <ClosingCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — Abertura                                                       */
/* ------------------------------------------------------------------ */

const CYCLE = ["referência", "autoridade", "confiança", "escolha óbvia"];

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pt-36 pb-10 lg:px-10 lg:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(900px 520px at 78% 12%, var(--brand), transparent 62%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
        <div
          className="vx-line-grow h-px w-24 bg-brand"
          style={{ animationDelay: "120ms" }}
        />

        <h1 className="mt-10 max-w-[15ch] font-display text-[52px] leading-[0.92] text-ink sm:text-7xl lg:text-[112px] xl:text-[128px]">
          <span className="vx-rise block" style={{ animationDelay: "180ms" }}>
            Sua empresa
          </span>
          <span className="vx-rise block" style={{ animationDelay: "300ms" }}>
            vista como
          </span>
          <span
            className="vx-rise relative block h-[1.02em] overflow-hidden italic text-brand"
            style={{ animationDelay: "420ms" }}
          >
            {CYCLE.map((word, i) => (
              <span
                key={word}
                className="absolute inset-x-0 top-0 whitespace-nowrap"
                style={{
                  animation: `vx-word-cycle ${CYCLE.length * 2.8}s cubic-bezier(0.22,0.61,0.36,1) ${i * 2.8}s infinite`,
                  opacity: 0,
                }}
              >
                {word}.
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p
            className="vx-rise max-w-[46ch] text-lg leading-relaxed text-ink-muted lg:text-xl"
            style={{ animationDelay: "620ms" }}
          >
            Antes de comparar preço, o mercado compara percepção. Trabalhamos
            exatamente aí.
          </p>

          <div
            className="vx-rise flex flex-wrap gap-3"
            style={{ animationDelay: "760ms" }}
          >
            <Link
              to="/orcamento"
              className="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-brand-hover"
            >
              Iniciar uma conversa
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center rounded-full px-7 py-4 text-sm font-medium text-ink ring-1 ring-hairline transition-all duration-500 hover:ring-ink/30"
            >
              Ver transformações
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] items-end justify-between gap-6 border-t border-hairline pt-6">
        <p className="max-w-[34ch] text-xs leading-relaxed tracking-[0.02em] text-ink-subtle">
          Estúdio digital dedicado a empresas que já entregam qualidade — e
          precisam que isso seja evidente antes do primeiro contato.
        </p>
        <div className="hidden h-14 w-px overflow-hidden bg-hairline sm:block">
          <span className="vx-cue block h-6 w-px bg-brand" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Bloco escuro com vídeo                                         */
/* ------------------------------------------------------------------ */

function Manifesto() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25"
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
        className="absolute inset-0 bg-ink/70"
        style={{
          backgroundImage:
            "radial-gradient(720px 420px at 20% 100%, color-mix(in oklab, var(--brand) 32%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-40 lg:px-10 lg:py-64">
        <Reveal>
          <p className="max-w-[19ch] font-display text-[40px] leading-[1.04] text-surface sm:text-6xl lg:text-[92px]">
            Empresas sérias perdem contratos por parecerem
            <span className="italic text-brand"> menores do que são</span>.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-14 max-w-[42ch] text-base leading-relaxed text-surface/60 lg:text-lg">
            A decisão de confiar acontece em segundos, muito antes da proposta.
            O que aparece na tela define o valor que sua empresa consegue
            cobrar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Números                                                        */
/* ------------------------------------------------------------------ */

function Numbers() {
  const stats = [
    { to: 100, suffix: "%", caption: "dos projetos desenhados do zero" },
    { to: 95, suffix: "+", caption: "de performance medida no Google" },
    { to: 24, suffix: "h", caption: "de presença ativa, todos os dias" },
    { to: 3, suffix: "x", caption: "mais clareza na jornada de decisão" },
  ];

  return (
    <section className="px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="max-w-[26ch] font-display text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            O que muda quando a percepção acompanha a entrega.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.caption} delay={i * 120}>
              <div className="border-t border-hairline pt-8 pr-8">
                <p className="font-display text-6xl leading-none text-ink lg:text-8xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-6 max-w-[22ch] text-sm leading-relaxed text-ink-muted">
                  {s.caption}
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
/* 04 — Casos                                                          */
/* ------------------------------------------------------------------ */

function Cases() {
  const cases = [
    {
      slug: "serra-seguros",
      index: "01",
      name: "Serra Seguros",
      sector: "Proteção patrimonial",
      line: "Uma corretora consolidada que finalmente aparenta o tamanho que tem.",
      note: "Reposicionamento completo",
      cover: serraCapa.url,
    },
    {
      slug: "daros-lunettes",
      index: "02",
      name: "Daros Lunettes",
      sector: "Boutique de alto padrão",
      line: "A primeira presença digital de uma boutique construída para durar.",
      note: "Marca digital criada do zero",
      cover: darosCapa.url,
    },
  ] as const;

  return (
    <section className="bg-surface-2/60 py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[18ch] font-display text-4xl leading-[1.05] text-ink lg:text-6xl">
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

      <div className="mt-24 space-y-32 lg:space-y-48">
        {cases.map((c, i) => (
          <Reveal key={c.slug}>
            <Link
              to="/projetos/$slug"
              params={{ slug: c.slug }}
              className="group block"
            >
              <div
                className={`mx-auto flex max-w-[1400px] flex-col gap-10 px-6 lg:gap-16 lg:px-10 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } lg:items-center`}
              >
                <div className="relative w-full overflow-hidden rounded-[28px] bg-surface lg:w-[62%]">
                  <div className="aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={c.cover}
                      alt={`Projeto ${c.name} desenvolvido pela Exclusive Vertex`}
                      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-hairline" />
                </div>

                <div className="min-w-0 lg:w-[38%]">
                  <p className="font-display text-5xl leading-none text-brand/25 lg:text-7xl">
                    {c.index}
                  </p>
                  <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-ink-subtle">
                    {c.sector}
                  </p>
                  <h3 className="mt-4 font-display text-4xl text-ink transition-colors duration-500 group-hover:text-brand lg:text-6xl">
                    {c.name}
                  </h3>
                  <p className="mt-6 max-w-[32ch] text-base leading-relaxed text-ink-muted">
                    {c.line}
                  </p>
                  <p className="mt-10 inline-flex items-center gap-3 border-t border-hairline pt-6 text-sm text-ink">
                    {c.note}
                    <span className="text-brand transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Citação                                                        */
/* ------------------------------------------------------------------ */

function PullQuote() {
  return (
    <section className="px-6 py-40 lg:px-10 lg:py-64">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <figure className="text-center">
            <blockquote className="font-display text-3xl leading-[1.12] text-ink text-balance sm:text-5xl lg:text-[64px]">
              “Em menos de uma semana a percepção da marca mudou por completo.
              Hoje o site sustenta a conversa antes mesmo de começarmos a
              falar.”
            </blockquote>
            <figcaption className="mt-14 text-sm text-ink-subtle">
              Serra Seguros e Consórcios
              <span className="mx-3 text-hairline">/</span>
              corretora com mais de 10 anos de mercado
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Posicionamento                                                 */
/* ------------------------------------------------------------------ */

function Positioning() {
  const blocks = [
    {
      title: "Nada aqui é reaproveitado",
      body: "Cada projeto nasce da realidade de uma empresa específica. Nenhum modelo pronto sobrevive a esse processo.",
    },
    {
      title: "Design a serviço da decisão",
      body: "Hierarquia, ritmo e silêncio são usados para conduzir quem visita até a única ação que importa: falar com você.",
    },
    {
      title: "Encontrado por quem procura",
      body: "Estrutura técnica, velocidade e SEO tratados desde a fundação — não como ajuste posterior.",
    },
    {
      title: "Uma relação, não um contrato",
      body: "Acompanhamento próximo depois da entrega, porque presença digital é um ativo que continua trabalhando.",
    },
  ];

  return (
    <section className="border-t border-hairline px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              Por que a Vertex
            </p>
            <p className="mt-8 max-w-[16ch] font-display text-4xl leading-[1.05] text-ink lg:text-6xl">
              Quatro decisões que mudam tudo.
            </p>
          </Reveal>
        </div>

        <div>
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="border-t border-hairline py-12 first:border-t-0 first:pt-0">
                <p className="font-display text-2xl text-ink lg:text-4xl">
                  {b.title}
                </p>
                <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-muted">
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
/* 07 — Capacidades                                                    */
/* ------------------------------------------------------------------ */

function Capabilities() {
  const shown = services.slice(0, 6);

  return (
    <section className="bg-ink px-6 py-32 text-surface lg:px-10 lg:py-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[20ch] font-display text-4xl leading-[1.05] text-surface lg:text-6xl">
            O que colocamos em jogo.
          </p>
          <Link
            to="/servicos"
            className="story-link shrink-0 text-sm text-surface/60 hover:text-surface"
          >
            Ver tudo
          </Link>
        </Reveal>

        <div className="mt-20">
          {shown.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 border-t border-surface/10 py-8 transition-colors duration-500 hover:border-surface/30 lg:gap-12 lg:py-10"
              >
                <span className="text-[11px] tabular-nums text-surface/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-2xl text-surface transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
                    {s.title}
                  </span>
                  <span className="mt-2 block max-w-[60ch] text-sm leading-relaxed text-surface/45 transition-transform duration-500 group-hover:translate-x-2">
                    {s.short}
                  </span>
                </span>
                <span className="text-brand opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-surface/10" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — Fechamento                                                     */
/* ------------------------------------------------------------------ */

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-40 lg:px-10 lg:py-64">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(900px 520px at 50% 110%, var(--brand), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="max-w-[16ch] font-display text-[46px] leading-[0.96] text-ink sm:text-7xl lg:text-[104px]">
            Vamos elevar o que sua empresa
            <span className="italic text-brand"> aparenta ser</span>?
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 grid gap-10 border-t border-hairline pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-[38ch] text-base leading-relaxed text-ink-muted lg:text-lg">
              Você já viu como pensamos. Agora imagine essa mesma atenção
              aplicada ao seu negócio.
            </p>
            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center rounded-full px-8 py-4 text-sm font-medium text-ink ring-1 ring-hairline transition-all duration-500 hover:ring-ink/30"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
