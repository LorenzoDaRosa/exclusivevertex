import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import darosCapa from "@/assets/daros/daros_42.png.asset.json";
import menesegCapa from "@/assets/meneseg/meneseg_capa.png.asset.json";

import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { WordCycle } from "@/components/site/WordCycle";
import { QuickForm } from "@/components/site/QuickForm";
import { CoffeeInvite } from "@/components/site/CoffeeInvite";
import { waLink, waMessages } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex | Posicionamento Digital de Alto Padrão" },
      {
        name: "description",
        content:
          "Transformamos empresas comuns em referências absolutas. Sites premium com design exclusivo, copywriting estratégico e foco total em conversão de alto valor.",
      },
      { property: "og:title", content: "Exclusive Vertex | Posicionamento Digital de Alto Padrão" },
      {
        property: "og:description",
        content:
          "Não entregamos apenas sites. Entregamos autoridade, desejo e resultados mensuráveis para marcas que não aceitam ser apenas mais uma.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <Problem />
      <HowItWorks />
      <Projects />
      <Included />
      <Versus />
      <CoffeeInvite />
      <QuickForm />
      <FinalCTA />
      <StickyCta />
    </>
  );
}

/* ---------------- Hero ---------------- */

const heroWords = ["o Líder do Mercado", "uma Autoridade", "Referência", "Objeto de Desejo", "Premium"] as const;

function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-28 lg:pt-56 lg:pb-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 12%, transparent), transparent)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h1 className="vx-rise font-display text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.6rem] lg:text-[5.2rem]">
          <span className="block">Sua empresa vista como</span>
          <WordCycle words={heroWords} className="mt-2 text-brand" />
        </h1>

        <p
          className="vx-rise mx-auto mt-14 max-w-2xl text-[18px] leading-relaxed text-ink-muted lg:mt-16"
          style={{ animationDelay: "0.35s" }}
        >
          Pare de perder contratos para concorrentes visualmente inferiores. 
          Construímos o ecossistema digital que valida seu preço e acelera sua decisão de venda.
        </p>

        <div
          className="vx-rise mt-16 flex flex-wrap items-center justify-center gap-4 lg:mt-20"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-brand px-10 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(29,99,255,0.3)] active:scale-[0.98]"
          >
            <span className="relative z-10">Quero um posicionamento premium</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <Link
            to="/projetos"
            className="inline-flex items-center rounded-full bg-surface px-10 py-4 text-[16px] font-medium text-ink ring-1 ring-hairline transition-all duration-300 hover:bg-surface-2 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Ver Portfólio de Elite
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Authority strip ---------------- */

const authority = [
  { value: 12, suffix: "+", label: "Empresas Reposicionadas", note: "Marcas que saíram do anonimato para o topo do mercado" },
  { value: 100, suffix: "%", label: "Design Autoral Exclusivo", note: "Sem templates. Cada pixel é planejado para converter" },
  { value: 24, suffix: "h", label: "Suporte Estratégico", note: "Acompanhamento focado em crescimento e escala" },
  { value: 100, suffix: "%", label: "Foco em ROI Real", note: "Não entregamos 'likes', entregamos máquinas de vendas" },
];

function AuthorityStrip() {
  return (
    <section className="border-y border-hairline bg-surface-2 py-4">
      <div className="mx-auto max-w-[1400px] divide-y divide-hairline px-6 lg:px-10">
        {authority.map((a, i) => (
          <Reveal key={a.label} delay={i * 110}>
            <div className="group flex items-baseline gap-5 py-7 transition-all duration-500 hover:pl-2 sm:gap-10">
              <span className="w-[3.2rem] shrink-0 text-[11px] tabular-nums uppercase tracking-[0.22em] text-ink-subtle">
                0{i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-brand sm:text-5xl">
                    <Counter to={a.value} suffix={a.suffix} />
                  </span>
                  <span className="text-[15px] font-medium text-ink sm:text-base">{a.label}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-muted">{a.note}</p>
                <span className="mt-4 block h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


/* ---------------- Problem ---------------- */

const symptoms = [
  "Sem site",
  "Site antigo",
  "Site lento",
  "Site que não converte",
  "Instagram bonito sem estrutura por trás",
];

function Problem() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-10">
        <Reveal className="min-w-0">
          <h2 className="max-w-2xl font-display text-[2.2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            Você está deixando dinheiro na mesa por causa de um site amador?
          </h2>
          <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink-muted">
            No mercado digital, a primeira impressão não é a que fica. É a que <span className="text-ink font-medium">vende</span> ou a que <span className="text-ink font-medium">expulsa</span> seu cliente.
            Empresas premium exigem uma vitrine à altura.
          </p>
          <a
            href={waLink(waMessages.problem)}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:gap-4"
          >
            Quero um diagnóstico gratuito
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-4" aria-hidden="true">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </Reveal>

        <Reveal className="min-w-0">
          <div className="rounded-2xl bg-surface-2 p-8 ring-1 ring-hairline lg:p-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-8">Sinais de alerta</h3>
            <ul className="space-y-6">
              {symptoms.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="size-3">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[17px] font-medium text-ink">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  {
    title: "1. Imersão Estratégica",
    text: "Não somos apenas 'designers'. Entendemos seu modelo de negócio para criar uma narrativa que converte.",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 5v14M5 12h14" />
      </>
    ),
  },
  {
    title: "2. Design de Elite",
    text: "Desenvolvemos uma interface exclusiva, focada em UX e Neuromarketing para guiar o cliente à ação.",
    icon: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="M9 11l2 2 4-4" />
      </>
    ),
  },
  {
    title: "3. Dominação Digital",
    text: "Lançamento do seu novo ecossistema. Sua marca passa a ditar as regras e atrair leads qualificados.",
    icon: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V11M12 19V6M17 19v-5" />
      </>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="border-y border-hairline bg-surface-2 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            Como a Vertex trabalha
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-hairline md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="bg-surface p-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-7 text-brand"
                aria-hidden="true"
              >
                {s.icon}
              </svg>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <a
            href={waLink(waMessages.process)}
            target="_blank"
            rel="noreferrer"
            className="story-link text-[15px] font-medium text-brand"
          >
            Conversar sobre o meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

const showcase = [
  {
    slug: "serra-seguros",
    name: "Serra Seguros e Consórcios",
    kind: "Seguros e consórcios · Caxias do Sul",
    image: serraCapa.url,
  },
  {
    slug: "daros-lunettes",
    name: "Daros Lunettes",
    kind: "Boutique óptica · Caxias do Sul",
    image: darosCapa.url,
  },
  {
    slug: "meneseg",
    name: "MeneSeg Consórcios e Seguros",
    kind: "Consórcios e seguros · Caxias do Sul",
    image: menesegCapa.url,
  },
];


function Projects() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[2.2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            Cases Reais. Resultados Absolutos.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {showcase.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="group overflow-hidden rounded-2xl ring-1 ring-hairline">
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="block">
                  <div className="aspect-[16/9] overflow-hidden bg-surface-2 sm:aspect-[21/9]">
                    <img
                      src={p.image}
                      alt={`Site desenvolvido para ${p.name}`}
                      className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="flex flex-wrap items-end justify-between gap-6 border-t border-hairline p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
                      {p.kind}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {p.name}
                    </h3>
                  </div>
                  <Link
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-ink ring-1 ring-hairline transition-colors duration-300 hover:bg-surface-2"
                  >
                    Ver projeto
                  </Link>
                  <a
                    href={waLink(waMessages.projects)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-hover"
                  >
                    Quero algo nesse nível
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Included ---------------- */

const included = [
  { title: "Design de Elite & Autoral", text: "Projetos únicos que distanciam sua marca da concorrência genérica." },
  { title: "Copywriting de Alta Performance", text: "Textos escritos com técnicas de persuasão e neuromarketing." },
  { title: "Ecossistema de Conversão", text: "Cada elemento é posicionado para transformar o desejo em contato real." },
  { title: "Autoridade Digital Instantânea", text: "SEO e UX otimizados para que você seja visto como a melhor opção." },
  { title: "Mobile-First Experience", text: "Navegação fluida e luxuosa na palma da mão do seu cliente." },
  { title: "Infraestrutura de Classe Mundial", text: "Velocidade extrema, segurança e estabilidade absoluta no ar." },
  { title: "Brand Consistency", text: "Sua identidade visual aplicada com rigor e sofisticação em cada detalhe." },
  { title: "Consultoria Estratégica", text: "Mais que um site, entregamos o caminho para a sua escala digital." },
];

function Included() {
  return (
    <section className="border-y border-hairline bg-surface-2 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-[2.2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            A Engenharia por trás do seu Sucesso
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {[included.slice(0, 4), included.slice(4, 8)].map((group, g) => (
            <div
              key={g}
              className="rounded-2xl bg-surface p-6 ring-1 ring-hairline sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {group.map((c, i) => (
                  <Reveal key={c.title} delay={i * 70}>
                    <div className="h-full rounded-xl bg-surface-2 p-6 ring-1 ring-hairline transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
                      <span className="block h-px w-8 bg-brand" />
                      <h3 className="mt-6 text-[15px] font-semibold text-ink">{c.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- Sem Vertex x Com Vertex ---------------- */

const versus = [
  { without: "Site genérico, igual ao do concorrente", with: "Projeto único, feito para a sua marca" },
  { without: "Cliente desconfia antes de falar com você", with: "Autoridade percebida no primeiro scroll" },
  { without: "Visitante entra, olha e vai embora", with: "Cada seção conduz direto para o WhatsApp" },
  { without: "Lento, quebrado no celular", with: "Rápido e impecável em qualquer tela" },
  { without: "Ninguém encontra sua empresa no Google", with: "SEO local trabalhando todos os dias" },
  { without: "Você depende só do Instagram", with: "Estrutura própria que sustenta a marca" },
];

function Versus() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            Sem Vertex <span className="text-ink-subtle">x</span>{" "}
            <span className="text-brand">Com Vertex</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-surface-2 p-8 ring-1 ring-hairline">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle">Sem Vertex</p>
              <ul className="mt-7 divide-y divide-hairline">
                {versus.map((v) => (
                  <li key={v.without} className="flex items-start gap-4 py-4">
                    <span className="mt-2 block h-px w-4 shrink-0 bg-surface-3" />
                    <span className="text-[15px] leading-relaxed text-ink-muted">{v.without}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-surface p-8 ring-1 ring-brand/25 shadow-premium transition-transform duration-500 hover:-translate-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand">Com Vertex</p>
              <ul className="mt-7 divide-y divide-hairline">
                {versus.map((v) => (
                  <li key={v.with} className="flex items-start gap-4 py-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden="true"
                    >
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                    <span className="text-[15px] leading-relaxed text-ink">{v.with}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <a
            href={waLink(waMessages.problem)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Quero estar do lado Vertex
          </a>
        </Reveal>
      </div>
    </section>
  );
}
/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand py-28 pb-36 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[2.2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-[3.2rem]">
          O próximo nível da sua empresa começa aqui.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-relaxed text-white/90">
          Não deixe sua marca ser ignorada. Garanta agora uma presença digital que impõe respeito e converte visitantes em clientes de alto ticket.
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          <a
            href={waLink(waMessages.finalCta)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-white px-10 py-4.5 text-[17px] font-bold text-brand shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface"
          >
            Garantir meu site premium
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sticky mobile CTA ---------------- */

function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-surface/95 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="flex items-center gap-3">
        <a
          href="#formulario"
          className="flex-1 rounded-full px-4 py-3 text-center text-[14px] font-medium text-ink ring-1 ring-hairline"
        >
          Orçamento rápido
        </a>
        <a
          href={waLink(waMessages.hero)}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-brand px-4 py-3 text-center text-[14px] font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
