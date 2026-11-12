import { test, expect } from "bun:test";
import { summary, csvCell, schemas, stages } from "./model";
test("resultado de caixa usa somente pagamentos do período, nunca o valor contratado", () => {
  const r = summary(
    [
      { id: "1", kind: "Receita", amount: 100, status: "Pago", paid_date: "2026-11-01" },
      { id: "2", kind: "Receita", amount: 100, status: "Pendente", due_date: "2026-11-15" },
      { id: "3", kind: "Despesa", amount: 30, status: "Pago", paid_date: "2026-11-02" },
      { id: "4", kind: "Receita", amount: 400, status: "Cancelado" },
    ],
    [],
    [{ id: "p", amount: 10000, status: "Em andamento" }],
    "2026-11-01",
    "2026-11-30",
  );
  expect(r.received).toBe(100);
  expect(r.expenses).toBe(30);
  expect(r.cash).toBe(70);
  expect(r.receivable).toBe(100);
});
test("cada parcela é contada uma vez", () => {
  expect(
    summary(
      [
        {
          id: "1",
          amount: 50,
          kind: "Receita",
          status: "Pago",
          paid_date: "2026-11-01",
          installment: 1,
        },
        {
          id: "2",
          amount: 50,
          kind: "Receita",
          status: "Pago",
          paid_date: "2026-11-01",
          installment: 2,
        },
      ],
      [],
      [],
      "",
      "",
    ).received,
  ).toBe(100);
});
test("CRM contém exatamente as seis etapas solicitadas", () => {
  expect(stages).toEqual(["Novo", "Contato", "Proposta", "Negociação", "Ganho", "Perdido"]);
});
test("conversão usa leads ganhos dentre os criados no período", () => {
  expect(
    summary(
      [],
      [
        { id: "1", stage: "Ganho", created_at: "2026-11-01" },
        { id: "2", stage: "Novo", created_at: "2026-11-01" },
      ],
      [],
      "2026-11-01",
      "2026-11-30",
    ).conversion,
  ).toBe(50);
});
test("CSV neutraliza fórmulas e escapa aspas", () => {
  expect(csvCell(' =HYPERLINK("x")')).toBe('"\' =HYPERLINK(""x"")"');
  expect(csvCell("@SUM(A1)")).toBe('"\'@SUM(A1)"');
});
test("financeiro exige pagamento para pago e recusa negativo", () => {
  const base = {
    title: "Teste",
    kind: "Receita",
    category: "Sites",
    client_id: null,
    project_id: null,
    amount: 100,
    due_date: "2026-11-15",
    paid_date: null,
    status: "Pago",
    notes: "",
  };
  expect(schemas.finance.safeParse(base).success).toBe(false);
  expect(schemas.finance.safeParse({ ...base, status: "Pendente", amount: -1 }).success).toBe(
    false,
  );
});
