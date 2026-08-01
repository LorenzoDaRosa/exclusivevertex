import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { waLink, waMessages } from "@/lib/whatsapp";

const schema = z.object({
  nome: z.string().trim().min(2, { message: "Informe seu nome" }).max(80),
  empresa: z.string().trim().min(2, { message: "Informe o nome da empresa" }).max(100),
  segmento: z.string().trim().min(2, { message: "Informe o segmento" }).max(100),
  objetivo: z.string().trim().min(1, { message: "Escolha um objetivo" }).max(120),
});

const objetivos = [
  "Ter um site profissional pela primeira vez",
  "Substituir um site antigo",
  "Gerar mais contatos e orçamentos",
  "Transmitir mais autoridade no digital",
];

export function QuickForm() {
  const [values, setValues] = useState({ nome: "", empresa: "", segmento: "", objetivo: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof values) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    window.open(waLink(waMessages.form(parsed.data)), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="formulario" className="border-y border-hairline bg-surface-2 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.9fr_1fr] lg:gap-20 lg:px-10">
        <Reveal className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
            Diagnóstico gratuito
          </p>
          <h2 className="mt-5 font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-[2.6rem]">
            Em 30 segundos você já está falando com a gente.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-muted">
            Responda quatro campos rápidos. Sua mensagem chega no nosso WhatsApp já organizada, e
            respondemos com uma análise da presença digital da sua empresa.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-muted">
            {["Resposta no mesmo dia útil", "Sem compromisso e sem cobrança", "Atendimento direto com quem desenvolve"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-brand" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={90} className="min-w-0">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-surface p-7 ring-1 ring-hairline shadow-premium sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Seu nome" error={errors["nome"]}>
                <input
                  value={values.nome}
                  onChange={(e) => set("nome")(e.target.value)}
                  maxLength={80}
                  placeholder="Ex.: Ana Souza"
                  className="w-full rounded-xl bg-surface-2 px-4 py-3 text-[15px] text-ink outline-none ring-1 ring-hairline transition focus:ring-brand"
                />
              </Field>
              <Field label="Empresa" error={errors["empresa"]}>
                <input
                  value={values.empresa}
                  onChange={(e) => set("empresa")(e.target.value)}
                  maxLength={100}
                  placeholder="Ex.: Serra Seguros"
                  className="w-full rounded-xl bg-surface-2 px-4 py-3 text-[15px] text-ink outline-none ring-1 ring-hairline transition focus:ring-brand"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Segmento" error={errors["segmento"]}>
                <input
                  value={values.segmento}
                  onChange={(e) => set("segmento")(e.target.value)}
                  maxLength={100}
                  placeholder="Ex.: seguros, óptica, indústria"
                  className="w-full rounded-xl bg-surface-2 px-4 py-3 text-[15px] text-ink outline-none ring-1 ring-hairline transition focus:ring-brand"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Objetivo principal" error={errors["objetivo"]}>
                <div className="flex flex-wrap gap-2.5">
                  {objetivos.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => set("objetivo")(o)}
                      className={`rounded-full px-4 py-2 text-[13px] transition-colors duration-300 ${
                        values.objetivo === o
                          ? "bg-brand text-white ring-1 ring-brand"
                          : "text-ink-muted ring-1 ring-hairline hover:text-ink"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-brand-hover"
            >
              Enviar e falar no WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-ink-subtle">
              Abrimos o WhatsApp com sua mensagem pronta. Nada é publicado.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-brand">{error}</span> : null}
    </label>
  );
}
