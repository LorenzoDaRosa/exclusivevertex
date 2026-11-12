import { useState, useEffect, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  ListTodo,
  Wallet,
  Settings,
  UserRound,
  LogOut,
  Plus,
  Search,
  Pencil,
  Trash2,
  ArrowUpRight,
  Download,
  RefreshCw,
  ChevronRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { loadAdmin, saveAdmin, deleteAdmin, convertLead } from "@/lib/admin/admin.functions";
import {
  schemas,
  str,
  money,
  summary,
  exportCSV,
  inPeriod,
  type Row,
  type Module,
} from "@/lib/admin/model";
import { fields, singular, defaults } from "@/lib/admin/fields";
const nav = [
  { id: "dashboard", label: "Visão geral", icon: LayoutDashboard },
  { id: "leads", label: "CRM", icon: Users },
  { id: "clients", label: "Clientes", icon: UserRound },
  { id: "projects", label: "Projetos", icon: BriefcaseBusiness },
  { id: "tasks", label: "Tarefas", icon: ListTodo },
  { id: "finance", label: "Financeiro", icon: Wallet },
  { id: "settings", label: "Configurações", icon: Settings },
  { id: "profile", label: "Meu perfil", icon: UserRound },
] as const;
type View = "dashboard" | Module;
const formatDate = (s: string) =>
  s ? new Date(s.slice(0, 10) + "T12:00:00").toLocaleDateString("pt-BR") : "—";
const today = () => new Date().toLocaleDateString("sv-SE");
function bounds(period: string) {
  const d = new Date();
  if (period === "month")
    return [
      new Date(d.getFullYear(), d.getMonth(), 1).toLocaleDateString("sv-SE"),
      new Date(d.getFullYear(), d.getMonth() + 1, 0).toLocaleDateString("sv-SE"),
    ];
  if (period === "year") return [`${d.getFullYear()}-01-01`, `${d.getFullYear()}-12-31`];
  return ["", ""];
}
export function AdminApp() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const fetch = useServerFn(loadAdmin);
  const save = useServerFn(saveAdmin);
  const remove = useServerFn(deleteAdmin);
  const convert = useServerFn(convertLead);
  const q = useQuery({ queryKey: ["vertex-admin"], queryFn: () => fetch(), retry: false });
  const [view, setView] = useState<View>("dashboard");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [category, setCategory] = useState("");
  const [relation, setRelation] = useState("");
  const [period, setPeriod] = useState("month");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [editor, setEditor] = useState<{ module: Module; row?: Row } | null>(null);
  const [deleting, setDeleting] = useState<{ module: Module; row: Row } | null>(null);
  const [busy, setBusy] = useState(false);
  const [converting, setConverting] = useState<string | null>(null);
  const [confirmConvert, setConfirmConvert] = useState<Row | null>(null);
  const [detail, setDetail] = useState<Row | null>(null);
  const records = q.data?.records ?? {};
  const rows = view === "dashboard" ? [] : (records[view] ?? []);
  useEffect(() => {
    const [a, b] = bounds(period);
    setStart(a);
    setEnd(b);
  }, [period]);
  useEffect(() => {
    const profile = q.data?.records.profile?.[0];
    const pref = profile?.preferences;
    if (pref && typeof pref === "object" && "default_period" in pref)
      setPeriod(String(pref.default_period));
  }, [q.data?.userId]);
  function change(v: View) {
    setView(v);
    setSearch("");
    setFilter("");
    setTypeFilter("");
    setCategory("");
    setRelation("");
    setDetail(null);
  }
  async function logout() {
    setBusy(true);
    await qc.cancelQueries();
    qc.clear();
    const { error } = await supabase.auth.signOut();
    setBusy(false);
    if (error) {
      await supabase.auth.signOut({ scope: "local" });
      toast.error("Não foi possível sair. Tente novamente.");
    }
    await navigate({ to: "/admin/login", replace: true });
  }
  async function mutation(fn: () => Promise<unknown>, success: string) {
    setBusy(true);
    try {
      await fn();
      await qc.invalidateQueries({ queryKey: ["vertex-admin"] });
      toast.success(success);
      return true;
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível concluir.");
      return false;
    } finally {
      setBusy(false);
    }
  }
  const filtered = rows.filter((r) => {
    if (
      search &&
      !Object.values(r).some((v) =>
        String(v ?? "")
          .toLocaleLowerCase("pt-BR")
          .includes(search.toLocaleLowerCase("pt-BR")),
      )
    )
      return false;
    const status = str(r, view === "leads" ? "stage" : "status");
    const overdue = view === "finance" && status === "Pendente" && str(r, "due_date") < today();
    if (filter === "Vencido" ? !overdue : filter && status !== filter) return false;
    if (typeFilter && (view === "tasks" ? r.priority !== typeFilter : r.kind !== typeFilter))
      return false;
    if (category && r.category !== category) return false;
    if (relation && r.client_id !== relation && r.project_id !== relation) return false;
    if (view === "finance" && !inPeriod(str(r, "due_date"), start, end)) return false;
    return true;
  });
  const title = nav.find((n) => n.id === view)?.label ?? "";
  const relationName = (row: Row, key: string, mod: string) => {
    const item = records[mod]?.find((r) => r.id === row[key]);
    return item ? str(item, mod === "clients" ? "name" : "title") : "—";
  };
  return (
    <div className="vx-admin admin-layout">
      <Toaster />
      <aside className="admin-sidebar">
        <Link to="/" className="admin-brand">
          <img src="/vertex-favicon.png" alt="Exclusive Vertex" />
          <span>
            EXCLUSIVE
            <br />
            <strong>VERTEX</strong>
          </span>
        </Link>
        <div className="admin-side-label">GESTÃO DA AGÊNCIA</div>
        <nav aria-label="Administração">
          {nav.map((n) => (
            <Button
              key={n.id}
              variant="ghost"
              onClick={() => change(n.id)}
              aria-current={view === n.id ? "page" : undefined}
              className={`admin-nav-item ${view === n.id ? "is-active" : ""}`}
            >
              <n.icon />
              <span>{n.label}</span>
              {view === n.id && <ChevronRight className="ml-auto" />}
            </Button>
          ))}
        </nav>
        <div className="admin-side-bottom">
          <ShieldCheck size={16} />
          <span>Acesso administrativo</span>
        </div>
      </aside>
      <div className="admin-workspace">
        <header className="admin-header">
          <span className="admin-breadcrumb">
            Vertex <ChevronRight size={14} /> <strong>{title}</strong>
          </span>
          <div className="flex items-center gap-2">
            <span className="admin-email">{q.data?.email}</span>
            <Button
              variant="ghost"
              size="icon"
              title="Atualizar registros"
              aria-label="Atualizar registros"
              onClick={() => q.refetch()}
              disabled={q.isFetching}
            >
              <RefreshCw className={q.isFetching ? "animate-spin" : ""} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Sair"
              aria-label="Sair"
              disabled={busy}
              onClick={logout}
            >
              <LogOut />
            </Button>
          </div>
        </header>
        <nav className="admin-mobile-nav" aria-label="Administração mobile">
          {nav.map((n) => (
            <Button
              key={n.id}
              variant="ghost"
              onClick={() => change(n.id)}
              aria-current={view === n.id ? "page" : undefined}
              className={view === n.id ? "is-active" : ""}
            >
              <n.icon />
              {n.label}
            </Button>
          ))}
        </nav>
        <div className="admin-content">
          <div className="admin-page-heading">
            <div>
              <p className="admin-eyebrow">EXCLUSIVE VERTEX / ADMIN</p>
              <h1>{view === "dashboard" ? "Visão geral" : title}</h1>
              <p className="admin-subtitle">
                {view === "dashboard"
                  ? "Sua operação, em perspectiva."
                  : view === "finance"
                    ? "Cada recebimento e despesa, no seu lugar."
                    : view === "leads"
                      ? "Relacionamentos que se tornam oportunidades."
                      : view === "projects"
                        ? "Do primeiro briefing à entrega."
                        : view === "tasks"
                          ? "Prioridades e próximos passos."
                          : view === "clients"
                            ? "As empresas que confiam no seu trabalho."
                            : "Informações da sua administração."}
              </p>
            </div>
            {view !== "dashboard" && view !== "profile" && view !== "settings" && (
              <Button onClick={() => setEditor({ module: view })}>
                <Plus />
                Novo {singular[view]}
              </Button>
            )}
          </div>
          {q.isLoading ? (
            <div className="admin-empty" role="status">
              <RefreshCw className="animate-spin" />
              Carregando sua administração…
            </div>
          ) : q.isError ? (
            <div className="admin-empty" role="alert">
              <h2>Não foi possível carregar</h2>
              <p>{q.error.message}</p>
              <Button onClick={() => q.refetch()}>Tentar novamente</Button>
            </div>
          ) : (
            <>
              {view === "dashboard" ? (
                <Dashboard
                  records={records}
                  start={start}
                  end={end}
                  period={period}
                  setPeriod={setPeriod}
                  setStart={setStart}
                  setEnd={setEnd}
                  change={change}
                  onNew={() => setEditor({ module: "leads" })}
                />
              ) : view === "settings" || view === "profile" ? (
                <section className="admin-settings">
                  <div className="admin-section-title">
                    <h2>{view === "profile" ? "Perfil administrativo" : "Dados da agência"}</h2>
                    <Button
                      variant="outline"
                      onClick={() => setEditor({ module: view, row: rows[0] })}
                    >
                      <Pencil />
                      Editar
                    </Button>
                  </div>
                  {view === "profile" && <p className="admin-muted">{q.data?.email}</p>}
                  {fields[view].map((f) => (
                    <div className="admin-setting-line" key={f.key}>
                      <span>{f.label}</span>
                      <strong>
                        {rows[0] ? str(rows[0], f.key) || "Não informado" : "Não informado"}
                      </strong>
                    </div>
                  ))}
                  {view === "profile" && (
                    <div className="admin-setting-line">
                      <span>Período padrão</span>
                      <strong>
                        {String(
                          (rows[0]?.preferences as Record<string, unknown> | undefined)
                            ?.default_period ?? "month",
                        ) === "month"
                          ? "Mês atual"
                          : String(
                                (rows[0]?.preferences as Record<string, unknown> | undefined)
                                  ?.default_period,
                              ) === "year"
                            ? "Ano atual"
                            : "Todo o período"}
                      </strong>
                    </div>
                  )}
                  {view === "profile" && (
                    <Button variant="outline" className="mt-6" disabled={busy} onClick={logout}>
                      <LogOut />
                      Sair da conta
                    </Button>
                  )}
                </section>
              ) : (
                <>
                  <section className="admin-filters" aria-label="Filtros">
                    <label className="admin-search">
                      <Search size={17} />
                      <Input
                        aria-label="Buscar registros"
                        placeholder="Buscar…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </label>
                    {fields[view].find(
                      (f) => f.key === (view === "leads" ? "stage" : "status"),
                    ) && (
                      <select
                        aria-label="Filtrar status"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      >
                        <option value="">Todas as etapas / status</option>
                        {fields[view]
                          .find((f) => f.key === (view === "leads" ? "stage" : "status"))
                          ?.options?.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        {view === "finance" && <option>Vencido</option>}
                      </select>
                    )}
                    {view === "finance" && (
                      <>
                        <select
                          aria-label="Tipo financeiro"
                          value={typeFilter}
                          onChange={(e) => setTypeFilter(e.target.value)}
                        >
                          <option value="">Receitas e despesas</option>
                          <option>Receita</option>
                          <option>Despesa</option>
                        </select>
                        <select
                          aria-label="Categoria"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Todas as categorias</option>
                          {[...new Set(rows.map((r) => str(r, "category")))].map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                        <Period
                          period={period}
                          setPeriod={setPeriod}
                          start={start}
                          end={end}
                          setStart={setStart}
                          setEnd={setEnd}
                        />
                        <Button
                          variant="outline"
                          disabled={!filtered.length}
                          onClick={() => {
                            const blob = new Blob([exportCSV(filtered)], {
                              type: "text/csv;charset=utf-8;",
                            });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "vertex-financeiro.csv";
                            a.click();
                            URL.revokeObjectURL(url);
                          }}
                        >
                          <Download />
                          CSV
                        </Button>
                      </>
                    )}
                    {["projects", "tasks", "finance"].includes(view) && (
                      <select
                        aria-label="Filtrar vínculo"
                        value={relation}
                        onChange={(e) => setRelation(e.target.value)}
                      >
                        <option value="">Todos os vínculos</option>
                        {(view === "tasks" ? records.projects : records.clients)?.map((r) => (
                          <option key={r.id} value={r.id}>
                            {str(r, view === "tasks" ? "title" : "name")}
                          </option>
                        ))}
                      </select>
                    )}
                    {view === "tasks" && (
                      <select
                        aria-label="Prioridade"
                        value={typeFilter}
                        onChange={(e) => {
                          setTypeFilter(e.target.value);
                        }}
                      >
                        <option value="">Todas as prioridades</option>
                        <option>Alta</option>
                        <option>Média</option>
                        <option>Baixa</option>
                      </select>
                    )}
                  </section>
                  <p className="admin-count">
                    {filtered.length} registro{filtered.length === 1 ? "" : "s"}
                    {view === "finance" ? " • Filtro de período por vencimento" : ""}
                  </p>
                  {!filtered.length ? (
                    <div className="admin-empty">
                      <div className="admin-empty-icon">
                        <Plus />
                      </div>
                      <h2>{rows.length ? "Nenhum resultado" : "Um novo capítulo começa aqui"}</h2>
                      <p>
                        {rows.length
                          ? "Altere os filtros para encontrar seus registros."
                          : `Nenhum ${singular[view]} cadastrado.`}
                      </p>
                      <Button
                        onClick={() =>
                          rows.length
                            ? (setSearch(""),
                              setFilter(""),
                              setTypeFilter(""),
                              setCategory(""),
                              setRelation(""),
                              setPeriod("all"))
                            : setEditor({ module: view })
                        }
                      >
                        {rows.length ? "Limpar filtros" : `Cadastrar ${singular[view]}`}
                      </Button>
                    </div>
                  ) : (
                    <div className="admin-table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              {view === "clients" || view === "leads" ? "Nome / empresa" : "Título"}
                            </th>
                            <th>
                              {view === "leads"
                                ? "Etapa"
                                : view === "clients"
                                  ? "Contato"
                                  : "Status"}
                            </th>
                            <th>
                              {view === "finance"
                                ? "Valor"
                                : view === "leads"
                                  ? "Próximo contato"
                                  : view === "clients"
                                    ? "Projetos"
                                    : "Vínculo"}
                            </th>
                            <th>
                              {view === "finance"
                                ? "Vencimento / parcela"
                                : view === "projects"
                                  ? "Prazo / progresso"
                                  : view === "tasks"
                                    ? "Prazo / prioridade"
                                    : "Email"}
                            </th>
                            <th>
                              <span className="sr-only">Ações</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtered
                            .filter(
                              (r) => view !== "tasks" || !typeFilter || r.priority === typeFilter,
                            )
                            .map((r) => (
                              <tr key={r.id}>
                                <td>
                                  <Button
                                    variant="link"
                                    className="admin-record-name"
                                    onClick={() => setDetail(r)}
                                  >
                                    {str(
                                      r,
                                      view === "clients" || view === "leads" ? "name" : "title",
                                    )}
                                  </Button>
                                  <small>
                                    {str(
                                      r,
                                      view === "finance"
                                        ? "category"
                                        : view === "projects"
                                          ? "service"
                                          : "company",
                                    )}
                                  </small>
                                </td>
                                <td>
                                  {view === "clients" ? (
                                    str(r, "whatsapp") || str(r, "contact") || "—"
                                  ) : (
                                    <span className="admin-status">
                                      {view === "finance" &&
                                      r.status === "Pendente" &&
                                      str(r, "due_date") < today()
                                        ? "Vencido"
                                        : str(r, view === "leads" ? "stage" : "status")}
                                    </span>
                                  )}
                                </td>
                                <td>
                                  {view === "finance"
                                    ? money(Number(r.amount))
                                    : view === "leads"
                                      ? formatDate(str(r, "next_contact"))
                                      : view === "clients"
                                        ? `${records.projects?.filter((p) => p.client_id === r.id).length ?? 0} projetos`
                                        : relationName(
                                            r,
                                            view === "projects" ? "client_id" : "project_id",
                                            view === "projects" ? "clients" : "projects",
                                          )}
                                </td>
                                <td>
                                  {view === "finance" ? (
                                    <>
                                      {formatDate(str(r, "due_date"))}
                                      <small>
                                        {str(r, "installment")}/{str(r, "installments")}
                                      </small>
                                    </>
                                  ) : view === "projects" ? (
                                    <>
                                      {formatDate(str(r, "due_date"))}
                                      <small>{str(r, "progress")}% concluído</small>
                                      <progress
                                        aria-label="Progresso do projeto"
                                        value={Number(r.progress)}
                                        max={100}
                                      />
                                    </>
                                  ) : view === "tasks" ? (
                                    <>
                                      {formatDate(str(r, "due_date"))}
                                      <small>{str(r, "priority")}</small>
                                    </>
                                  ) : (
                                    str(r, "email") || "—"
                                  )}
                                </td>
                                <td>
                                  <div className="admin-actions">
                                    {view === "leads" && (
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        disabled={busy || converting === r.id}
                                        title="Converter em cliente"
                                        aria-label={`Converter ${str(r, "name")} em cliente`}
                                        onClick={() => setConfirmConvert(r)}
                                      >
                                        <ArrowUpRight />
                                      </Button>
                                    )}
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      title="Editar"
                                      aria-label={`Editar ${str(r, "name") || str(r, "title")}`}
                                      onClick={() => setEditor({ module: view, row: r })}
                                    >
                                      <Pencil />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      title="Excluir"
                                      aria-label={`Excluir ${str(r, "name") || str(r, "title")}`}
                                      onClick={() => setDeleting({ module: view, row: r })}
                                    >
                                      <Trash2 />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      {editor && (
        <Editor
          module={editor.module}
          row={editor.row}
          records={records}
          busy={busy}
          close={() => setEditor(null)}
          submit={async (values, quantity) => {
            const ok = await mutation(
              () => save({ data: { module: editor.module, id: editor.row?.id, values, quantity } }),
              "Alterações salvas.",
            );
            if (ok) setEditor(null);
          }}
        />
      )}
      <Dialog open={Boolean(deleting)} onOpenChange={(o) => !o && setDeleting(null)}>
        <DialogContent className="vx-admin admin-dialog">
          <DialogTitle>Excluir registro?</DialogTitle>
          <DialogDescription>
            A exclusão é permanente. Registros com vínculos não podem ser excluídos.
          </DialogDescription>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setDeleting(null)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              disabled={busy}
              onClick={async () => {
                if (
                  deleting &&
                  ["leads", "clients", "projects", "tasks", "finance"].includes(deleting.module)
                ) {
                  const d = deleting;
                  const ok = await mutation(
                    () =>
                      remove({
                        data: {
                          module: d.module as
                            | "leads"
                            | "clients"
                            | "projects"
                            | "tasks"
                            | "finance",
                          id: d.row.id,
                        },
                      }),
                    "Registro excluído.",
                  );
                  if (ok) setDeleting(null);
                }
              }}
            >
              {busy ? "Excluindo…" : "Excluir"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={Boolean(confirmConvert)} onOpenChange={(o) => !o && setConfirmConvert(null)}>
        <DialogContent className="vx-admin admin-dialog">
          <DialogTitle>Converter em cliente</DialogTitle>
          <DialogDescription>
            O lead será marcado como ganho. Conversões repetidas reutilizam o mesmo cliente.
          </DialogDescription>
          <Button
            disabled={busy}
            onClick={async () => {
              if (!confirmConvert) return;
              setConverting(confirmConvert.id);
              const ok = await mutation(
                () => convert({ data: { id: confirmConvert.id } }),
                "Cliente criado ou recuperado sem duplicação.",
              );
              setConverting(null);
              if (ok) {
                setConfirmConvert(null);
                change("clients");
              }
            }}
          >
            Confirmar conversão
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={Boolean(detail)} onOpenChange={(o) => !o && setDetail(null)}>
        <DialogContent className="vx-admin admin-dialog">
          <DialogTitle>{detail ? str(detail, "name") || str(detail, "title") : ""}</DialogTitle>
          <DialogDescription>Informações do registro</DialogDescription>
          {detail &&
            view !== "dashboard" &&
            fields[view].map((f) => (
              <div className="admin-detail" key={f.key}>
                <span>{f.label}</span>
                <p>
                  {f.ref
                    ? relationName(detail, f.key, f.ref)
                    : f.type === "date"
                      ? formatDate(str(detail, f.key))
                      : str(detail, f.key) || "—"}
                </p>
              </div>
            ))}
          {detail && view === "clients" && (
            <div className="admin-detail">
              <span>Projetos relacionados</span>
              {records.projects
                ?.filter((p) => p.client_id === detail.id)
                .map((p) => (
                  <p key={p.id}>
                    {str(p, "title")} · {str(p, "status")}
                  </p>
                ))}
              {!records.projects?.some((p) => p.client_id === detail.id) && (
                <p>Nenhum projeto relacionado.</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
function Period({
  period,
  setPeriod,
  start,
  end,
  setStart,
  setEnd,
}: {
  period: string;
  setPeriod: (v: string) => void;
  start: string;
  end: string;
  setStart: (v: string) => void;
  setEnd: (v: string) => void;
}) {
  return (
    <div className="admin-period">
      <select aria-label="Período" value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option value="month">Mês atual</option>
        <option value="year">Ano atual</option>
        <option value="all">Todo o período</option>
        <option value="custom">Personalizado</option>
      </select>
      {period === "custom" && (
        <>
          <Input
            type="date"
            aria-label="Data inicial"
            value={start}
            max={end || undefined}
            onChange={(e) => setStart(e.target.value)}
          />
          <Input
            type="date"
            aria-label="Data final"
            value={end}
            min={start || undefined}
            onChange={(e) => setEnd(e.target.value)}
          />
        </>
      )}
    </div>
  );
}
function Dashboard({
  records,
  start,
  end,
  period,
  setPeriod,
  setStart,
  setEnd,
  change,
  onNew,
}: {
  records: Record<string, Row[]>;
  start: string;
  end: string;
  period: string;
  setPeriod: (v: string) => void;
  setStart: (v: string) => void;
  setEnd: (v: string) => void;
  change: (v: View) => void;
  onNew: () => void;
}) {
  const finance = records.finance ?? [];
  const leads = records.leads ?? [];
  const projects = records.projects ?? [];
  const s = summary(finance, leads, projects, start, end);
  const cards = [
    ["Receita recebida", money(s.received), "Pagamentos no período"],
    ["Despesas pagas", money(s.expenses), "Saídas no período"],
    ["Resultado de caixa", money(s.cash), "Recebimentos menos despesas pagas"],
    ["Valores a receber", money(s.receivable), "Pendentes com vencimento no período"],
    ["Projetos ativos", s.active, "Planejamento, andamento e pausados"],
    [
      "Leads / conversão",
      `${s.leads} / ${s.conversion.toFixed(1).replace(".", ",")}%`,
      "Ganhos / leads criados no período",
    ],
  ];
  const paid = finance.filter(
    (r) => r.status === "Pago" && inPeriod(str(r, "paid_date"), start, end),
  );
  const months = new Map<string, { name: string; Receitas: number; Despesas: number }>();
  for (const r of paid) {
    const k = str(r, "paid_date").slice(0, 7);
    const m = months.get(k) ?? { name: k, Receitas: 0, Despesas: 0 };
    if (r.kind === "Receita") m.Receitas += Number(r.amount);
    else m.Despesas += Number(r.amount);
    months.set(k, m);
  }
  const chart = [...months.values()].sort((a, b) => a.name.localeCompare(b.name));
  const due = finance
    .filter((r) => r.status === "Pendente")
    .sort((a, b) => str(a, "due_date").localeCompare(str(b, "due_date")))
    .slice(0, 5);
  const tasks = (records.tasks ?? [])
    .filter((r) => r.status !== "Concluída")
    .sort((a, b) => (str(a, "due_date") || "9999").localeCompare(str(b, "due_date") || "9999"))
    .slice(0, 5);
  return (
    <>
      <div className="admin-dashboard-toolbar">
        <span className="admin-muted">
          {start && end ? `${formatDate(start)} — ${formatDate(end)}` : "Todo o histórico"}
        </span>
        <Period {...{ period, setPeriod, start, end, setStart, setEnd }} />
      </div>
      <section className="admin-metrics">
        {cards.map(([label, value, caption]) => (
          <article key={label} className="admin-metric">
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{caption}</small>
          </article>
        ))}
      </section>
      <div className="admin-chart-row">
        <section className="admin-chart">
          <div className="admin-section-title">
            <h2>Fluxo de caixa</h2>
            <span className="admin-muted">Recebido × pago</span>
          </div>
          {chart.length ? (
            <>
              <div className="admin-chart-canvas">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chart}>
                    <CartesianGrid stroke="var(--hairline)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--ink-muted)" />
                    <YAxis stroke="var(--ink-muted)" />
                    <Tooltip
                      formatter={(v) => money(Number(v))}
                      contentStyle={{
                        background: "var(--surface-2)",
                        borderColor: "var(--hairline)",
                        color: "var(--ink)",
                      }}
                    />
                    <Bar dataKey="Receitas" fill="var(--brand)" radius={[3, 3, 0, 0]} />
                    <Bar
                      dataKey="Despesas"
                      fill="var(--admin-chart-expense)"
                      radius={[3, 3, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="admin-muted">
                Receitas: {money(s.received)} · Despesas: {money(s.expenses)}
              </p>
            </>
          ) : (
            <div className="admin-chart-empty">
              <Wallet />
              <p>Nenhum pagamento no período.</p>
              <Button variant="outline" onClick={() => change("finance")}>
                Ir ao financeiro <ArrowUpRight />
              </Button>
            </div>
          )}
        </section>
        <section className="admin-pipeline">
          <div className="admin-section-title">
            <h2>Funil de oportunidades</h2>
          </div>
          {["Novo", "Contato", "Proposta", "Negociação", "Ganho", "Perdido"].map((stage) => {
            const n = leads.filter(
              (r) => r.stage === stage && inPeriod(str(r, "created_at"), start, end),
            ).length;
            return (
              <div className="admin-pipeline-line" key={stage}>
                <span>{stage}</span>
                <progress value={n} max={Math.max(s.leads, 1)} aria-label={stage} />
                <strong>{n}</strong>
              </div>
            );
          })}
          <Button variant="link" onClick={() => change("leads")}>
            Ver CRM <ArrowUpRight />
          </Button>
        </section>
      </div>
      <div className="admin-upcoming">
        <section>
          <div className="admin-section-title">
            <h2>Próximos vencimentos</h2>
            <Button variant="ghost" onClick={() => change("finance")}>
              Ver todos <ArrowUpRight />
            </Button>
          </div>
          {due.length ? (
            due.map((r) => (
              <div className="admin-upcoming-line" key={r.id}>
                <div>
                  <strong>{str(r, "title")}</strong>
                  <small>
                    {str(r, "kind")} · {formatDate(str(r, "due_date"))}{" "}
                    {str(r, "due_date") < today() ? "· Vencido" : ""}
                  </small>
                </div>
                <span>{money(Number(r.amount))}</span>
              </div>
            ))
          ) : (
            <p className="admin-muted">Nenhum vencimento pendente.</p>
          )}
        </section>
        <section>
          <div className="admin-section-title">
            <h2>Próximas tarefas</h2>
            <Button variant="ghost" onClick={() => change("tasks")}>
              Ver todas <ArrowUpRight />
            </Button>
          </div>
          {tasks.length ? (
            tasks.map((r) => (
              <div className="admin-upcoming-line" key={r.id}>
                <div>
                  <strong>{str(r, "title")}</strong>
                  <small>
                    {formatDate(str(r, "due_date"))} · {str(r, "priority")}
                  </small>
                </div>
                <span className="admin-status">{str(r, "status")}</span>
              </div>
            ))
          ) : (
            <p className="admin-muted">Nenhuma tarefa pendente.</p>
          )}
        </section>
      </div>
      {!leads.length && !finance.length && !projects.length && (
        <div className="admin-start">
          <div>
            <h2>Seu espaço está pronto.</h2>
            <p>Comece com uma oportunidade, um cliente ou seu primeiro lançamento.</p>
          </div>
          <Button onClick={onNew}>
            <Plus />
            Cadastrar primeiro lead
          </Button>
        </div>
      )}
    </>
  );
}
function Editor({
  module,
  row,
  records,
  busy,
  close,
  submit,
}: {
  module: Module;
  row?: Row;
  records: Record<string, Row[]>;
  busy: boolean;
  close: () => void;
  submit: (values: Record<string, unknown>, quantity: number) => void;
}) {
  const [values, setValues] = useState<Record<string, unknown>>(() => ({
    ...defaults(module),
    ...row,
    ...(module === "profile"
      ? { preferences: row?.preferences ?? { default_period: "month" } }
      : {}),
  }));
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const normalized = { ...values };
    for (const f of fields[module]) {
      if (f.ref || f.type === "date") normalized[f.key] = normalized[f.key] || null;
    }
    if (module === "finance" && normalized.status !== "Pago") normalized.paid_date = null;
    const result = schemas[module].safeParse(normalized);
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    if (
      module === "finance" &&
      quantity > 1 &&
      result.data &&
      "status" in result.data &&
      result.data.status !== "Pendente"
    ) {
      setErrors({ status: "Novas parcelas devem começar pendentes." });
      return;
    }
    setErrors({});
    submit(result.data, quantity);
  }
  return (
    <Dialog open onOpenChange={(o) => !o && !busy && close()}>
      <DialogContent className="vx-admin admin-dialog">
        <DialogTitle>
          {row ? "Editar" : "Cadastrar"} {singular[module]}
        </DialogTitle>
        <DialogDescription>
          {module === "finance" && !row
            ? "O valor informado é o total, dividido em parcelas mensais."
            : "Preencha os dados do registro."}
        </DialogDescription>
        <form onSubmit={onSubmit} className="admin-form">
          <div className="admin-form-grid">
            {fields[module].map((f) => (
              <label
                key={f.key}
                className={f.type === "textarea" ? "admin-field admin-field-wide" : "admin-field"}
                htmlFor={`field-${f.key}`}
              >
                <span>
                  {f.label}
                  {f.required ? " *" : ""}
                  {module === "finance" && f.key === "amount" && row
                    ? " · valor desta parcela"
                    : ""}
                </span>
                {f.ref || f.options ? (
                  <select
                    id={`field-${f.key}`}
                    required={f.required}
                    value={String(values[f.key] ?? "")}
                    onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                    aria-invalid={Boolean(errors[f.key])}
                    aria-describedby={errors[f.key] ? `error-${f.key}` : undefined}
                  >
                    {f.ref && <option value="">{f.required ? "Selecione…" : "Sem vínculo"}</option>}
                    {f.options?.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                    {f.ref &&
                      records[f.ref]?.map((r) => (
                        <option key={r.id} value={r.id}>
                          {str(r, f.ref === "clients" ? "name" : "title")}
                        </option>
                      ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <Textarea
                    id={`field-${f.key}`}
                    maxLength={f.max}
                    value={String(values[f.key] ?? "")}
                    onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                    aria-invalid={Boolean(errors[f.key])}
                  />
                ) : (
                  <Input
                    id={`field-${f.key}`}
                    type={f.type ?? "text"}
                    required={f.required}
                    maxLength={f.max}
                    min={f.type === "number" ? 0 : undefined}
                    max={f.key === "progress" ? 100 : undefined}
                    step={f.key === "progress" ? 1 : f.type === "number" ? "0.01" : undefined}
                    value={String(values[f.key] ?? "")}
                    onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                    aria-invalid={Boolean(errors[f.key])}
                    aria-describedby={errors[f.key] ? `error-${f.key}` : undefined}
                  />
                )}{" "}
                {errors[f.key] && (
                  <small role="alert" id={`error-${f.key}`} className="admin-error">
                    {errors[f.key]}
                  </small>
                )}
              </label>
            ))}
            {module === "finance" && !row && (
              <label className="admin-field">
                Parcelas
                <Input
                  type="number"
                  aria-label="Quantidade de parcelas"
                  min={1}
                  max={60}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </label>
            )}
            {module === "profile" && (
              <label className="admin-field">
                Período padrão
                <select
                  aria-label="Período padrão"
                  value={String(
                    (values.preferences as Record<string, unknown>)?.default_period ?? "month",
                  )}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, preferences: { default_period: e.target.value } }))
                  }
                >
                  <option value="month">Mês atual</option>
                  <option value="year">Ano atual</option>
                  <option value="all">Todo o período</option>
                </select>
              </label>
            )}
          </div>
          <div className="admin-form-footer">
            <Button variant="outline" type="button" disabled={busy} onClick={close}>
              Cancelar
            </Button>
            <Button type="submit" disabled={busy}>
              <Check />
              {busy ? "Salvando…" : "Salvar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
