import { z } from "zod";
export const modules = [
  "leads",
  "clients",
  "projects",
  "tasks",
  "finance",
  "settings",
  "profile",
] as const;
export type Module = (typeof modules)[number];
export type Row = {
  id: string;
  created_at?: string;
  [key: string]: string | number | boolean | null | undefined | Record<string, string>;
};
const text = (max = 150) => z.string().trim().max(max);
const required = (max = 150) => text(max).min(1, "Campo obrigatório");
const email = text(254).refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Email inválido");
const phone = text(25).refine((v) => !v || /^[+\d\s().-]{8,25}$/.test(v), "WhatsApp inválido");
const date = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((v) => {
    const d = new Date(`${v}T12:00:00Z`);
    return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v;
  }, "Data inválida")
  .nullable();
const ref = z.string().uuid().nullable();
export const stages = ["Novo", "Contato", "Proposta", "Negociação", "Ganho", "Perdido"];
export const schemas = {
  leads: z.object({
    name: required(100),
    company: text(),
    whatsapp: phone,
    email,
    source: text(),
    stage: z.enum(["Novo", "Contato", "Proposta", "Negociação", "Ganho", "Perdido"]),
    notes: text(5000),
    next_contact: date,
  }),
  clients: z.object({
    name: required(100),
    company: text(),
    contact: text(100),
    whatsapp: phone,
    email,
    notes: text(5000),
  }),
  projects: z
    .object({
      client_id: z.string().uuid("Selecione um cliente"),
      title: required(),
      service: text(),
      amount: z.coerce.number().finite().min(0).max(999999999999),
      start_date: date,
      due_date: date,
      status: z.enum(["Planejamento", "Em andamento", "Pausado", "Concluído", "Cancelado"]),
      briefing: text(10000),
      url: text(2048)
        .refine((v) => !v || /^https?:\/\//i.test(v), "Use uma URL http ou https")
        .refine((v) => {
          try {
            return !v || Boolean(new URL(v).hostname);
          } catch {
            return false;
          }
        }, "URL inválida"),
      progress: z.coerce.number().int().min(0).max(100),
    })
    .refine((v) => !v.start_date || !v.due_date || v.due_date >= v.start_date, {
      message: "Prazo anterior ao início",
      path: ["due_date"],
    }),
  tasks: z.object({
    project_id: ref,
    title: required(),
    notes: text(5000),
    priority: z.enum(["Baixa", "Média", "Alta"]),
    due_date: date,
    status: z.enum(["Pendente", "Em andamento", "Concluída"]),
  }),
  finance: z
    .object({
      title: required(),
      kind: z.enum(["Receita", "Despesa"]),
      category: required(100),
      client_id: ref,
      project_id: ref,
      amount: z.coerce
        .number()
        .finite()
        .positive("Valor deve ser positivo")
        .max(999999999999)
        .refine(
          (v) => Math.abs(v * 100 - Math.round(v * 100)) < 0.001,
          "Use até duas casas decimais",
        ),
      due_date: date.refine((v) => v !== null, "Vencimento obrigatório"),
      paid_date: date,
      status: z.enum(["Pendente", "Pago", "Cancelado"]),
      notes: text(5000),
    })
    .refine((v) => (v.status === "Pago") === Boolean(v.paid_date), {
      message: "Informe pagamento apenas para registros pagos",
      path: ["paid_date"],
    }),
  settings: z.object({ agency_name: required(), contact_email: email, whatsapp: phone }),
  profile: z.object({
    name: required(100),
    preferences: z.object({ default_period: z.enum(["month", "year", "all"]) }),
  }),
};
export const money = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
export const str = (row: Row, key: string) => String(row[key] ?? "");
export function inPeriod(value: string, start: string, end: string) {
  return (
    Boolean(value) && (!start || value.slice(0, 10) >= start) && (!end || value.slice(0, 10) <= end)
  );
}
export function summary(finance: Row[], leads: Row[], projects: Row[], start: string, end: string) {
  const paid = finance.filter(
    (r) => r.status === "Pago" && inPeriod(str(r, "paid_date"), start, end),
  );
  const received = paid
    .filter((r) => r.kind === "Receita")
    .reduce((n, r) => n + Number(r.amount), 0);
  const expenses = paid
    .filter((r) => r.kind === "Despesa")
    .reduce((n, r) => n + Number(r.amount), 0);
  const selected = leads.filter((r) => inPeriod(str(r, "created_at"), start, end));
  const won = selected.filter((r) => r.stage === "Ganho").length;
  return {
    received,
    expenses,
    cash: received - expenses,
    receivable: finance
      .filter(
        (r) =>
          r.kind === "Receita" &&
          r.status === "Pendente" &&
          inPeriod(str(r, "due_date"), start, end),
      )
      .reduce((n, r) => n + Number(r.amount), 0),
    leads: selected.length,
    conversion: selected.length ? (won / selected.length) * 100 : 0,
    active: projects.filter((r) =>
      ["Planejamento", "Em andamento", "Pausado"].includes(str(r, "status")),
    ).length,
  };
}
export function csvCell(value: unknown) {
  let s = String(value ?? "");
  if (/^[\s]*[=+\-@\t\r\n]/.test(s)) s = "'" + s;
  return '"' + s.replace(/"/g, '""') + '"';
}
export function exportCSV(rows: Row[]) {
  const keys = [
    "title",
    "kind",
    "category",
    "amount",
    "due_date",
    "paid_date",
    "status",
    "installment",
    "installments",
    "notes",
  ];
  const labels = [
    "Descrição",
    "Tipo",
    "Categoria",
    "Valor",
    "Vencimento",
    "Pagamento",
    "Status",
    "Parcela",
    "Total de parcelas",
    "Observações",
  ];
  return (
    "\uFEFF" +
    [
      labels.map(csvCell).join(";"),
      ...rows.map((r) => keys.map((k) => csvCell(r[k])).join(";")),
    ].join("\r\n")
  );
}
export const adminHead = (title: string) => ({
  meta: [
    { title: `${title} | Exclusive Vertex Admin` },
    { name: "description", content: `${title} da administração privada da Exclusive Vertex.` },
    { property: "og:title", content: `${title} | Exclusive Vertex Admin` },
    { property: "og:description", content: "Área administrativa privada da Exclusive Vertex." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ],
});
