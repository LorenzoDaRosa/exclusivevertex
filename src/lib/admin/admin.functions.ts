import { createServerFn, createMiddleware } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { modules, schemas } from "./model";
import type { Row } from "./model";
const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const { data, error } = await context.supabase.rpc("is_vertex_admin");
    if (error || !data) throw new Error("Acesso administrativo não autorizado.");
    return next();
  });
const tables = {
  leads: "admin_leads",
  clients: "admin_clients",
  projects: "admin_projects",
  tasks: "admin_tasks",
  finance: "admin_finance",
  settings: "admin_settings",
  profile: "profiles",
} as const;
export const loadAdmin = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const result: Record<string, Row[]> = {};
    for (const mod of modules) {
      const rows: Row[] = [];
      let offset = 0;
      while (true) {
        let q = context.supabase
          .from(tables[mod])
          .select("*")
          .order("id")
          .range(offset, offset + 499);
        if (mod === "profile") q = q.eq("id", context.userId);
        const { data, error } = await q;
        if (error) throw new Error("Não foi possível carregar os registros. Tente novamente.");
        rows.push(...(data as Row[]));
        if (data.length < 500) break;
        offset += 500;
      }
      result[mod] = rows;
    }
    return { records: result, userId: context.userId, email: String(context.claims.email ?? "") };
  });
const saveSchema = z.object({
  module: z.enum(modules),
  id: z.string().uuid().optional(),
  values: z.record(z.unknown()),
  quantity: z.number().int().min(1).max(60).default(1),
});
export const saveAdmin = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((v: unknown) => saveSchema.parse(v))
  .handler(async ({ data, context }) => {
    const values = schemas[data.module].parse(data.values);
    if (data.module === "profile") {
      const { error } = await context.supabase
        .from("profiles")
        .update(values)
        .eq("id", context.userId)
        .select("id")
        .single();
      if (error) throw new Error("Não foi possível salvar o perfil.");
      return { ok: true };
    }
    if (data.module === "finance" && !data.id) {
      if (data.quantity > 1 && "status" in values && values.status !== "Pendente")
        throw new Error("Novas parcelas devem começar pendentes.");
      const { error } = await context.supabase.rpc("create_vertex_installments", {
        payload: values,
        quantity: data.quantity,
      });
      if (error)
        throw new Error("Não foi possível criar as parcelas. Verifique valores e vínculos.");
      return { ok: true };
    }
    // Schemas remove unknown keys; dynamic table names are a fixed allowlist.
    let error: { message: string } | null = null;
    switch (data.module) {
      case "leads": {
        const v = schemas.leads.parse(data.values);
        const value = v;
        const result = data.id
          ? await context.supabase
              .from("admin_leads")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_leads").insert(value).select("id").single();
        error = result.error;
        break;
      }
      case "clients": {
        const v = schemas.clients.parse(data.values);
        const value = v;
        const result = data.id
          ? await context.supabase
              .from("admin_clients")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_clients").insert(value).select("id").single();
        error = result.error;
        break;
      }
      case "projects": {
        const v = schemas.projects.parse(data.values);
        const value = v;
        const result = data.id
          ? await context.supabase
              .from("admin_projects")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_projects").insert(value).select("id").single();
        error = result.error;
        break;
      }
      case "tasks": {
        const v = schemas.tasks.parse(data.values);
        const value = v;
        const result = data.id
          ? await context.supabase
              .from("admin_tasks")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_tasks").insert(value).select("id").single();
        error = result.error;
        break;
      }
      case "finance": {
        const v = schemas.finance.parse(data.values);
        if (!v.due_date) throw new Error("Informe o vencimento.");
        const value = { ...v, due_date: v.due_date };
        const result = data.id
          ? await context.supabase
              .from("admin_finance")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_finance").insert(value).select("id").single();
        error = result.error;
        break;
      }
      case "settings": {
        const v = schemas.settings.parse(data.values);
        const value = v;
        const result = data.id
          ? await context.supabase
              .from("admin_settings")
              .update(value)
              .eq("id", data.id)
              .select("id")
              .single()
          : await context.supabase.from("admin_settings").insert(value).select("id").single();
        error = result.error;
        break;
      }
    }
    if (error) throw new Error("Não foi possível salvar. Verifique os campos e os vínculos.");
    return { ok: true };
  });
export const deleteAdmin = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((v: unknown) =>
    z
      .object({
        module: z.enum(["leads", "clients", "projects", "tasks", "finance"]),
        id: z.string().uuid(),
      })
      .parse(v),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from(tables[data.module]).delete().eq("id", data.id).select("id").single();
    if (error)
      throw new Error(
        "Registro vinculado a outros itens. Remova ou altere os vínculos antes de excluir.",
      );
    return { ok: true };
  });
export const convertLead = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((v: unknown) => z.object({ id: z.string().uuid() }).parse(v))
  .handler(async ({ data, context }) => {
    const { data: id, error } = await context.supabase.rpc("convert_vertex_lead", {
      lead_id: data.id,
    });
    if (error) throw new Error("Não foi possível converter o lead.");
    return { id };
  });
