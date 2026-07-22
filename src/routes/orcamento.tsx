import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Simulador de Projeto — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Monte o seu projeto em minutos e receba uma proposta personalizada da Exclusive Vertex.",
      },
      { property: "og:title", content: "Simulador de Projeto — Exclusive Vertex" },
      { property: "og:description", content: "Solicite orçamento personalizado para o seu projeto." },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
  component: SimuladorPage,
});

const SEGMENTS = [
  "Serviços",
  "Comércio / Varejo",
  "Indústria",
  "Saúde",
  "Educação",
  "Tecnologia",
  "Imobiliário",
  "Outro",
] as const;

const HAS_SITE = ["Ainda não tenho", "Tenho, mas quero renovar", "Tenho e funciona bem"] as const;

const OBJECTIVES = [
  "Gerar mais leads e vendas",
  "Fortalecer autoridade da marca",
  "Modernizar imagem digital",
  "Melhorar posicionamento no Google",
  "Facilitar o atendimento",
] as const;

const PROJECT_TYPES = [
  "Site Institucional",
  "Landing Page",
  "Loja Virtual",
  "Redesign",
] as const;

const FEATURES = [
  "Blog",
  "SEO",
  "Google Maps",
  "WhatsApp",
  "Área Administrativa",
  "Integrações",
  "Sistema de Agendamento",
  "Formulários Inteligentes",
  "Área do Cliente",
  "Painel",
  "Hospedagem",
  "Domínio",
] as const;

const DEADLINES = ["Urgente (até 30 dias)", "1 a 2 meses", "2 a 3 meses", "Flexível"] as const;

const BUDGETS = [
  "Até R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "R$ 6.000 – R$ 12.000",
  "Acima de R$ 12.000",
  "Preciso de orientação",
] as const;

const WHATSAPP_NUMBER = "5554992894672";

const STEPS = [
  "Segmento",
  "Situação",
  "Objetivo",
  "Projeto",
  "Recursos",
  "Prazo & investimento",
  "Contato",
  "Resumo",
] as const;

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

function SimuladorPage() {
  return <Simulator />;
}

function Simulator() {
  const [step, setStep] = useState<Step>(0);
  const [segment, setSegment] = useState<string | null>(null);
  const [hasSite, setHasSite] = useState<string | null>(null);
  const [objective, setObjective] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [deadline, setDeadline] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [contact, setContact] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    city: "",
  });

  const canNext: Record<Step, boolean> = {
    0: !!segment,
    1: !!hasSite,
    2: !!objective,
    3: !!projectType,
    4: true,
    5: !!deadline && !!budget,
    6:
      contact.name.trim().length > 1 &&
      contact.whatsapp.trim().length > 5 &&
      /.+@.+\..+/.test(contact.email),
    7: true,
  };

  const message = useMemo(() => {
    const lines = [
      "Olá! Solicitação de proposta via simulador Exclusive Vertex.",
      "",
      `Nome: ${contact.name}`,
      `Empresa: ${contact.company}`,
      `WhatsApp: ${contact.whatsapp}`,
      `E-mail: ${contact.email}`,
      `Cidade: ${contact.city}`,
      "",
      `Segmento: ${segment ?? "-"}`,
      `Situação atual: ${hasSite ?? "-"}`,
      `Objetivo principal: ${objective ?? "-"}`,
      `Tipo de projeto: ${projectType ?? "-"}`,
      `Recursos desejados: ${features.length ? features.join(", ") : "-"}`,
      `Prazo: ${deadline ?? "-"}`,
      `Investimento previsto: ${budget ?? "-"}`,
    ];
    return lines.join("\n");
  }, [contact, segment, hasSite, objective, projectType, features, deadline, budget]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  function toggleFeature(f: string) {
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel>Simulador de projeto</SectionLabel>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl text-ink text-balance max-w-[20ch]">
            Monte o seu projeto e receba uma proposta personalizada.
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <StepIndicator step={step} />
        </Reveal>

        <div className="mt-16 rounded-3xl bg-surface-2 ring-1 ring-hairline p-8 lg:p-14">
          {step === 0 && (
            <StepBlock title="Qual é o segmento da sua empresa?">
              <OptionGrid options={SEGMENTS as unknown as string[]} value={segment} onSelect={setSegment} />
            </StepBlock>
          )}

          {step === 1 && (
            <StepBlock title="Sua empresa já possui site?">
              <OptionGrid options={HAS_SITE as unknown as string[]} value={hasSite} onSelect={setHasSite} columns={3} />
            </StepBlock>
          )}

          {step === 2 && (
            <StepBlock title="Qual o principal objetivo do projeto?">
              <OptionGrid options={OBJECTIVES as unknown as string[]} value={objective} onSelect={setObjective} />
            </StepBlock>
          )}

          {step === 3 && (
            <StepBlock title="Qual tipo de projeto deseja?">
              <div className="grid gap-4 md:grid-cols-2">
                {PROJECT_TYPES.map((t) => {
                  const active = projectType === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setProjectType(t)}
                      className={[
                        "text-left rounded-2xl p-6 ring-1 transition-all duration-300",
                        active
                          ? "bg-brand/10 ring-brand text-ink"
                          : "bg-surface ring-hairline text-ink-muted hover:text-ink hover:ring-ink/20",
                      ].join(" ")}
                    >
                      <span className="text-[11px] uppercase tracking-[0.24em] text-brand block mb-3">
                        Projeto
                      </span>
                      <span className="font-display text-2xl">{t}</span>
                    </button>
                  );
                })}
              </div>
            </StepBlock>
          )}

          {step === 4 && (
            <StepBlock title="Quais recursos deseja?">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map((f) => {
                  const active = features.includes(f);
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFeature(f)}
                      className={[
                        "text-left rounded-xl px-5 py-4 ring-1 transition-all duration-300 flex items-center justify-between",
                        active
                          ? "bg-brand/10 ring-brand text-ink"
                          : "bg-surface ring-hairline text-ink-muted hover:text-ink hover:ring-ink/20",
                      ].join(" ")}
                    >
                      <span className="text-sm">{f}</span>
                      <span
                        className={`h-4 w-4 rounded-full border ${
                          active ? "bg-brand border-brand" : "border-hairline"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </StepBlock>
          )}

          {step === 5 && (
            <StepBlock title="Prazo e investimento previsto">
              <div className="space-y-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-ink-subtle mb-4">
                    Prazo desejado
                  </p>
                  <OptionGrid
                    options={DEADLINES as unknown as string[]}
                    value={deadline}
                    onSelect={setDeadline}
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-ink-subtle mb-4">
                    Faixa de investimento
                  </p>
                  <OptionGrid
                    options={BUDGETS as unknown as string[]}
                    value={budget}
                    onSelect={setBudget}
                  />
                </div>
              </div>
            </StepBlock>
          )}

          {step === 6 && (
            <StepBlock title="Como podemos te chamar?">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nome" value={contact.name} onChange={(v) => setContact({ ...contact, name: v })} />
                <Field label="Empresa" value={contact.company} onChange={(v) => setContact({ ...contact, company: v })} />
                <Field label="WhatsApp" value={contact.whatsapp} onChange={(v) => setContact({ ...contact, whatsapp: v })} />
                <Field label="E-mail" type="email" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} />
                <Field label="Cidade" value={contact.city} onChange={(v) => setContact({ ...contact, city: v })} />
              </div>
            </StepBlock>
          )}

          {step === 7 && (
            <StepBlock title="Resumo do seu projeto">
              <div className="grid gap-6">
                <SummaryRow label="Cliente" value={contact.name} />
                <SummaryRow label="Empresa" value={contact.company || "—"} />
                <SummaryRow label="Contato" value={`${contact.whatsapp} · ${contact.email}`} />
                <SummaryRow label="Cidade" value={contact.city || "—"} />
                <SummaryRow label="Segmento" value={segment ?? "—"} />
                <SummaryRow label="Situação atual" value={hasSite ?? "—"} />
                <SummaryRow label="Objetivo" value={objective ?? "—"} highlighted />
                <SummaryRow label="Tipo de projeto" value={projectType ?? "—"} highlighted />
                <SummaryRow label="Recursos" value={features.length ? features.join(", ") : "—"} />
                <SummaryRow label="Prazo" value={deadline ?? "—"} />
                <SummaryRow label="Investimento" value={budget ?? "—"} />
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
              >
                Enviar tudo pelo WhatsApp
              </a>
              <p className="mt-3 text-xs text-ink-subtle">
                Abriremos o WhatsApp com o resumo preenchido automaticamente.
              </p>
            </StepBlock>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-hairline pt-6">
            <button
              type="button"
              onClick={() => setStep((s) => (Math.max(0, s - 1) as Step))}
              disabled={step === 0}
              className="text-sm text-ink-muted disabled:opacity-40 hover:text-ink"
            >
              ← Voltar
            </button>
            {step < 7 && (
              <button
                type="button"
                onClick={() => setStep((s) => ((s + 1) as Step))}
                disabled={!canNext[step]}
                className="inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-surface disabled:opacity-40 transition"
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onSelect,
  columns = 2,
}: {
  options: string[];
  value: string | null;
  onSelect: (v: string) => void;
  columns?: 2 | 3;
}) {
  const grid = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid gap-3 ${grid}`}>
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onSelect(o)}
            className={[
              "text-left rounded-xl px-5 py-4 ring-1 transition-all duration-300",
              active
                ? "bg-brand/10 ring-brand text-ink"
                : "bg-surface ring-hairline text-ink-muted hover:text-ink hover:ring-ink/20",
            ].join(" ")}
          >
            <span className="text-sm">{o}</span>
          </button>
        );
      })}
    </div>
  );
}

function StepBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">Etapa</p>
      <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">{title}</h2>
      {children}
    </div>
  );
}

function StepIndicator({ step }: { step: Step }) {
  return (
    <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-3">
      {STEPS.map((l, i) => (
        <div key={l} className="flex flex-col gap-2">
          <div
            className={`h-px w-full transition-colors duration-500 ${
              i <= step ? "bg-brand" : "bg-hairline"
            }`}
          />
          <span
            className={`text-[10px] uppercase tracking-[0.24em] truncate ${
              i <= step ? "text-ink" : "text-ink-subtle"
            }`}
          >
            0{i + 1} · {l}
          </span>
        </div>
      ))}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlighted,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 border-t border-hairline pt-5 first:border-t-0 first:pt-0">
      <div className="col-span-4 md:col-span-3 text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
        {label}
      </div>
      <div
        className={`col-span-8 md:col-span-9 ${
          highlighted ? "font-display text-2xl text-ink" : "text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.24em] text-ink-subtle mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={120}
        className="w-full rounded-xl bg-surface ring-1 ring-hairline p-4 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-brand transition"
      />
    </label>
  );
}
