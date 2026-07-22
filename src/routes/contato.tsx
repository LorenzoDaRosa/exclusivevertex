import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Fale com a Exclusive Vertex por WhatsApp, e-mail ou formulário. Estamos prontos para conversar sobre o seu projeto.",
      },
      { property: "og:title", content: "Contato — Exclusive Vertex" },
      { property: "og:description", content: "Vamos conversar sobre o seu próximo projeto." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Contato</SectionLabel>
          <h1 className="mt-6 font-display text-6xl lg:text-8xl text-ink text-balance max-w-[16ch]">
            Vamos conversar sobre o seu projeto.
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <Reveal>
            <div className="space-y-10">
              <ContactRow
                label="WhatsApp"
                value="+55 54 99289-4672"
                href="https://wa.me/5554992894672"
              />
              <ContactRow
                label="E-mail"
                value="contato@exclusivevertex.com"
                href="mailto:contato@exclusivevertex.com"
              />
              <ContactRow
                label="Instagram"
                value="@exclusive.vertex"
                href="https://instagram.com/exclusive.vertex"
              />
              <ContactRow label="Localização" value="Brasil · Atendimento nacional" />

              <div className="mt-8 aspect-[4/3] rounded-2xl bg-surface-2 ring-1 ring-hairline overflow-hidden">
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps?q=Brasil&output=embed"
                  className="h-full w-full opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl bg-surface-2 ring-1 ring-hairline p-8 lg:p-12"
            >
              <h3 className="font-display text-3xl text-ink">Fale com a equipe</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Retornamos em até um dia útil.
              </p>

              <div className="mt-8 space-y-6">
                <Field
                  label="Nome"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                  maxLength={80}
                />
                <Field
                  label="E-mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                  maxLength={120}
                />
                <Field
                  label="Mensagem"
                  as="textarea"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  required
                  maxLength={1000}
                />
                <button
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110 disabled:opacity-60"
                >
                  {sent ? "Mensagem registrada" : "Enviar mensagem"}
                </button>
                {sent && (
                  <p className="text-xs text-ink-muted">
                    Recebido. Retornaremos em breve.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="border-t border-hairline pt-6">
      <p className="text-[11px] uppercase tracking-[0.28em] text-ink-subtle">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl text-ink group-hover:text-brand transition-colors">
        {value}
      </p>
    </div>
  );
  return href ? (
    <a href={href} className="group block">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  as = "input",
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.24em] text-ink-subtle mb-2">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          maxLength={maxLength}
          rows={5}
          className="w-full rounded-xl bg-surface ring-1 ring-hairline p-4 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-brand transition"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          maxLength={maxLength}
          className="w-full rounded-xl bg-surface ring-1 ring-hairline p-4 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-brand transition"
        />
      )}
    </label>
  );
}
