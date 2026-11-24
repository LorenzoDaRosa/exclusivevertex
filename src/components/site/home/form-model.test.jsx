import { describe, expect, test } from "bun:test";
import { homeFormLink, homeFormSchema } from "./form-model";

describe("home WhatsApp draft", () => {
  test("each of the five services opens the official WhatsApp with visitor data", () => {
    for (const projeto of ["Sites", "Landing pages", "Redesign de site", "Páginas de venda", "Vídeos motion"]) {
      const url = new URL(homeFormLink({ nome: "Ana Silva", empresa: "Empresa Teste", projeto, detalhes: "Quero revisar a oferta" }));
      expect(url.origin + url.pathname).toBe("https://wa.me/555432144112");
      expect(url.searchParams.get("text")).toBe(`Oi, Vertex! Quero conversar sobre um projeto.\nNome: Ana Silva\nEmpresa: Empresa Teste\nProjeto: ${projeto}\nDetalhes: Quero revisar a oferta`);
    }
  });
  test("rejects blank names and services outside the approved options", () => {
    expect(homeFormSchema.safeParse({ nome: "   ", empresa: "Empresa", projeto: "Sites", detalhes: "" }).success).toBe(false);
    expect(homeFormSchema.safeParse({ nome: "Ana", empresa: "Empresa", projeto: "Outro", detalhes: "" }).success).toBe(false);
  });
  test("optional details are omitted and unsafe delimiters removed from the draft", () => {
    const url = new URL(homeFormLink({ nome: "<Ana>", empresa: "Empresa", projeto: "Quero conversar primeiro", detalhes: "" }));
    expect(url.searchParams.get("text")).toBe("Oi, Vertex! Quero conversar sobre um projeto.\nNome: Ana\nEmpresa: Empresa\nProjeto: Quero conversar primeiro");
  });
});