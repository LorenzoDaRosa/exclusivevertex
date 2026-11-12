import type { Module } from "./model";
export type Field = {
  key: string;
  label: string;
  type?: string;
  options?: string[];
  ref?: "clients" | "projects";
  required?: boolean;
  max?: number;
};
const name: Field = { key: "name", label: "Nome", required: true, max: 100 };
const company: Field = { key: "company", label: "Empresa", max: 150 };
const whatsapp: Field = { key: "whatsapp", label: "WhatsApp", type: "tel", max: 25 };
const email: Field = { key: "email", label: "Email", type: "email", max: 254 };
const notes: Field = { key: "notes", label: "Observações / notas", type: "textarea", max: 5000 };
const title: Field = { key: "title", label: "Título", required: true, max: 150 };
const client: Field = { key: "client_id", label: "Cliente", ref: "clients" };
const project: Field = { key: "project_id", label: "Projeto", ref: "projects" };
export const fields: Record<Module, Field[]> = {
  leads: [
    name,
    company,
    whatsapp,
    email,
    { key: "source", label: "Origem", max: 150 },
    {
      key: "stage",
      label: "Etapa",
      options: ["Novo", "Contato", "Proposta", "Negociação", "Ganho", "Perdido"],
    },
    { key: "next_contact", label: "Próximo contato", type: "date" },
    notes,
  ],
  clients: [
    name,
    company,
    { key: "contact", label: "Pessoa de contato", max: 100 },
    whatsapp,
    email,
    notes,
  ],
  projects: [
    { ...client, required: true },
    title,
    { key: "service", label: "Serviço", max: 150 },
    { key: "amount", label: "Valor (R$)", type: "number" },
    { key: "start_date", label: "Data de início", type: "date" },
    { key: "due_date", label: "Prazo", type: "date" },
    {
      key: "status",
      label: "Status",
      options: ["Planejamento", "Em andamento", "Pausado", "Concluído", "Cancelado"],
    },
    { key: "progress", label: "Progresso (%)", type: "number" },
    { key: "url", label: "URL do site", type: "url", max: 2048 },
    { key: "briefing", label: "Briefing", type: "textarea", max: 10000 },
  ],
  tasks: [
    title,
    project,
    { key: "priority", label: "Prioridade", options: ["Baixa", "Média", "Alta"] },
    { key: "due_date", label: "Prazo", type: "date" },
    { key: "status", label: "Status", options: ["Pendente", "Em andamento", "Concluída"] },
    notes,
  ],
  finance: [
    title,
    { key: "kind", label: "Tipo", options: ["Receita", "Despesa"] },
    { key: "category", label: "Categoria", required: true, max: 100 },
    client,
    project,
    { key: "amount", label: "Valor (R$)", type: "number", required: true },
    { key: "due_date", label: "Vencimento", type: "date", required: true },
    { key: "status", label: "Status", options: ["Pendente", "Pago", "Cancelado"] },
    { key: "paid_date", label: "Data de pagamento", type: "date" },
    notes,
  ],
  settings: [
    { key: "agency_name", label: "Nome da agência", required: true, max: 150 },
    { ...email, key: "contact_email" },
    whatsapp,
  ],
  profile: [name],
};
export const labels: Record<Module, string> = {
  leads: "CRM",
  clients: "Clientes",
  projects: "Projetos",
  tasks: "Tarefas",
  finance: "Financeiro",
  settings: "Configurações",
  profile: "Meu perfil",
};
export const singular: Record<Module, string> = {
  leads: "lead",
  clients: "cliente",
  projects: "projeto",
  tasks: "tarefa",
  finance: "lançamento",
  settings: "configurações",
  profile: "perfil",
};
export function defaults(module: Module) {
  return Object.fromEntries(
    fields[module].map((f) => [
      f.key,
      f.options ? (f.key === "priority" ? "Média" : f.options[0]) : f.type === "number" ? 0 : "",
    ]),
  );
}
