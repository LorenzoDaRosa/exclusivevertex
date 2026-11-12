import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { adminHead } from "@/lib/admin/model";
export const Route = createFileRoute("/admin_/login")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;
    const role = await supabase.rpc("is_vertex_admin");
    if (!role.error && role.data) throw redirect({ to: "/admin" });
  },
  head: () => adminHead("Login administrativo"),
  component: AdminLogin,
});
