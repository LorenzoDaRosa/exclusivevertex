export const WHATSAPP_NUMBER = "555432144112";

/** Builds a WhatsApp link with a personalized, context-aware first message. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Pre-written openings per page section, so every CTA starts a qualified conversation. */
export const waMessages = {
  hero: "Olá, Exclusive Vertex! Vi o site de vocês e quero uma proposta para o site da minha empresa.",
  problem:
    "Olá! Quero entender quanto minha empresa pode estar perdendo hoje por não ter uma presença digital profissional.",
  process: "Olá! Gostaria de conversar sobre o meu projeto de site com a Exclusive Vertex.",
  projects: "Olá! Vi os projetos da Vertex (Serra Seguros / Daros Lunettes) e quero algo nesse nível.",
  finalCta:
    "Olá! Quero receber a análise gratuita da presença digital da minha empresa.",
  form: (d: { nome: string; empresa: string; segmento: string; objetivo: string }) =>
    [
      "Olá, Exclusive Vertex! Quero um site premium para a minha empresa.",
      "",
      `Nome: ${d.nome}`,
      `Empresa: ${d.empresa}`,
      `Segmento: ${d.segmento}`,
      `Objetivo principal: ${d.objetivo}`,
    ].join("\n"),
} as const;
