import { z } from "zod";
import { waLink } from "@/lib/whatsapp";
import { services } from "./content";

const projectOptions = [...services.map((service) => service.label), "Quero conversar primeiro"];

export const homeFormSchema = z.object({
  nome: z.string().trim().min(1, "Informe teu nome.").max(80),
  empresa: z.string().trim().min(1, "Informe tua empresa.").max(100),
  projeto: z.string().refine((value) => projectOptions.includes(value), "Seleciona uma opção."),
  detalhes: z.string().trim().max(600),
});

export function homeFormLink(values: z.infer<typeof homeFormSchema>) {
  const data = homeFormSchema.parse(values);
  const lines = [
    "Oi, Vertex! Quero conversar sobre um projeto.",
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    `Projeto: ${data.projeto}`,
  ];
  if (data.detalhes) lines.push(`Detalhes: ${data.detalhes}`);
  return waLink(lines.join("\n"));
}