import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import serraAntes from "@/assets/serra/home_serra_antes.png.asset.json";
import darosCapa from "@/assets/daros/daros_42.png.asset.json";
import menesegCapa from "@/assets/meneseg/meneseg_capa.png.asset.json";

import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Typewriter } from "@/components/site/Typewriter";
import { QuickForm } from "@/components/site/QuickForm";
import { CoffeeInvite } from "@/components/site/CoffeeInvite";
import { waLink, waMessages } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Vertex · Sites premium para empresas da Serra Gaúcha" },
      {
        name: "description",
        content:
          "Criamos sites premium que geram autoridade, aumentam a percepção de valor e transformam visitantes em clientes. Atendimento personalizado na Serra Gaúcha.",
      },
      { property: "og:title", content: "Exclusive Vertex · Sites premium para empresas da Serra Gaúcha" },
      {
        property: "og:description",
        content:
          "Sites estratégicos, personalizados e focados em conversão para empresas que querem ser referência no digital.",
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
      <BeforeAfterSection />
      <Testimonials />
      <QuickForm />
      <CoffeeInvite />
      <FinalCTA />
      <StickyCta />
    </>
  );
}

/* ---------------- Hero ---------------- */

const heroWords = ["referência", "autoridade", "confiança", "premium", "líder do mercado"] as const;

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
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h1 className="vx-rise font-display text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.6rem] lg:text-[4.6rem]">
          <span className="block">Sua empresa vista como</span>
          <WordCycle words={heroWords} className="mt-2" />
        </h1>

        <p
          className="vx-rise mx-auto mt-14 max-w-xl text-[17px] leading-relaxed text-ink-muted lg:mt-16"
          style={{ animationDelay: "0.35s" }}
        >
          Criamos sites e landing pages que aumentam a percepção de valor da sua empresa
          e transformam visitantes em clientes.
        </p>

        <div
          className="vx-rise mt-16 flex flex-wrap items-center justify-center gap-3 lg:mt-20"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(29,99,255,0.28)] active:scale-[0.98]"
          >
            <span className="relative z-10">Solicitar proposta no WhatsApp</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <Link
            to="/projetos"
            className="inline-flex items-center rounded-full bg-surface px-7 py-3.5 text-[15px] font-medium text-ink ring-1 ring-hairline transition-all duration-300 hover:bg-surface-2 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Authority strip ---------------- */

const authority = [
  { value: 12, suffix: "+", label: "Projetos desenvolvidos", note: "Marcas construídas do zero ao posicionamento" },
  { value: 100, suffix: "%", label: "Atendimento personalizado", note: "Sem esteira, sem template, sem terceirização" },
  { value: 100, suffix: "%", label: "Sites premium", note: "Design autoral com padrão internacional" },
  { value: 100, suffix: "%", label: "Foco em conversão", note: "Cada seção pensada para gerar contato" },
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
          <h2 className="max-w-2xl font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            O problema da sua empresa provavelmente não é a falta de clientes.
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-muted">
            A maioria das empresas perde oportunidades todos os dias porque transmite pouca
            confiança no digital.
          </p>
          <a
            href={waLink(waMessages.problem)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-brand-hover"
          >
            Quero descobrir quanto estou perdendo
          </a>
        </Reveal>

        <Reveal className="min-w-0">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {symptoms.map((s, i) => (
              <li key={s} className="flex items-baseline gap-5 py-5">
                <span className="font-display text-sm text-ink-subtle tabular-nums">
                  0{i + 1}
                </span>
                <span className="text-[17px] text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  {
    title: "Diagnóstico",
    text: "Analisamos sua empresa, seu mercado e seu posicionamento.",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 5v14M5 12h14" />
      </>
    ),
  },
  {
    title: "Desenvolvimento",
    text: "Criamos um site estratégico totalmente personalizado.",
    icon: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="M9 11l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Resultado",
    text: "Sua empresa passa a transmitir mais autoridade e gerar novos contatos todos os dias.",
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
          <h2 className="max-w-2xl font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            Projetos
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
  { title: "Site institucional premium", text: "Estrutura, design e narrativa à altura da sua empresa." },
  { title: "Landing page de alta conversão", text: "Uma página com um objetivo claro: gerar contato." },
  { title: "Integração com WhatsApp", text: "Cada seção conduz o visitante direto para a conversa." },
  { title: "SEO local", text: "Sua empresa encontrável por quem busca na sua região." },
  { title: "Responsivo", text: "Experiência impecável no celular, tablet e desktop." },
  { title: "Performance otimizada", text: "Carregamento rápido, sem travar a decisão do cliente." },
  { title: "Identidade visual consistente", text: "Cores, tipografia e imagens falando a mesma língua." },
  { title: "Publicação completa", text: "Domínio, hospedagem e site no ar, tudo por nossa conta." },
];

function Included() {
  return (
    <section className="border-y border-hairline bg-surface-2 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            O que está incluso
          </h2>
        </Reveal>

        <div className="scrollbar-none -mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {included.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 4) * 70}
              className="min-w-[78%] shrink-0 snap-start sm:min-w-[46%] lg:min-w-0"
            >
              <div className="h-full rounded-2xl bg-surface p-7 ring-1 ring-hairline transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
                <span className="block h-px w-8 bg-brand transition-all duration-500 group-hover:w-14" />
                <h3 className="mt-6 text-[15px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-subtle lg:hidden">
          Arraste para o lado →
        </p>
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


/* ---------------- Before / After ---------------- */

function BeforeAfterSection() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2rem] leading-[1.14] font-semibold tracking-[-0.03em] text-ink sm:text-[2.7rem]">
            O impacto de um posicionamento digital profissional
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <figure>
              <figcaption className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
                <span className="size-1.5 rounded-full bg-surface-3" /> Antes
              </figcaption>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline">
                <img
                  src={serraAntes.url}
                  alt="Site da Serra Seguros antes do trabalho da Exclusive Vertex"
                  className="h-full w-full object-contain object-top opacity-80 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <figure>
              <figcaption className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-brand">
                <span className="size-1.5 rounded-full bg-brand" /> Depois
              </figcaption>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline shadow-premium">
                <img
                  src={serraCapa.url}
                  alt="Site da Serra Seguros depois do trabalho da Exclusive Vertex"
                  className="h-full w-full object-contain object-top"
                  loading="lazy"
                />
              </div>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <Link
            to="/projetos/$slug"
            params={{ slug: "serra-seguros" }}
            className="story-link text-[15px] font-medium text-brand"
          >
            Ver a transformação completa
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const testimonials = [
  {
    quote:
      "O site novo mudou a forma como o cliente enxerga a corretora. As pessoas chegam para conversar já confiando no nosso trabalho.",
    name: "Serra Seguros e Consórcios",
    company: "Corretora de seguros",
    city: "Caxias do Sul",
    initials: "SS",
  },
  {
    quote:
      "Era exatamente o que faltava para a boutique. Quem descobre a marca pela internet entende na hora o nível do atendimento.",
    name: "Rose Quadros",
    company: "Daros Lunettes",
    city: "Caxias do Sul",
    initials: "RQ",
  },
  {
    quote:
      "Processo tranquilo e direto. Eles entenderam o posicionamento antes de desenhar qualquer tela, e isso apareceu no resultado.",
    name: "Direção comercial",
    company: "Serra Seguros",
    city: "Serra Gaúcha",
    initials: "DC",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((v) => (v + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-y border-hairline bg-surface-2 py-28 lg:py-36">
      <div
        className="mx-auto max-w-3xl px-6 text-center lg:px-10"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.name + t.company} className="w-full shrink-0 px-2">
                <blockquote className="font-display text-[1.5rem] leading-[1.35] font-medium tracking-[-0.02em] text-ink sm:text-[1.9rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-10 flex flex-col items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                    {t.initials}
                  </span>
                  <span className="text-[15px] font-medium text-ink">{t.name}</span>
                  <span className="text-sm text-ink-muted">
                    {t.company} · {t.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2.5">
          {testimonials.map((t, i) => (
            <button
              key={t.initials}
              aria-label={`Depoimento ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-brand" : "w-3 bg-surface-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand py-28 pb-36 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[2rem] leading-[1.14] font-semibold tracking-[-0.03em] text-white sm:text-[2.8rem]">
          Sua empresa parece do tamanho que ela realmente é?
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-white/80">
          Receba uma análise gratuita da presença digital da sua empresa e descubra como um site
          premium pode aumentar sua autoridade e gerar mais clientes.
        </p>
        <a
          href={waLink(waMessages.finalCta)}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center rounded-full bg-surface px-10 py-4.5 text-[16px] font-semibold text-brand transition-transform duration-300 hover:-translate-y-0.5"
        >
          Falar no WhatsApp
        </a>
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
