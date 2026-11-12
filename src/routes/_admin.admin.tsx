import { createFileRoute } from "@tanstack/react-router";
import { AdminApp } from "@/components/admin/AdminApp";
import { adminHead } from "@/lib/admin/model";
export const Route = createFileRoute("/_admin/admin")({
  head: () => adminHead("Administração"),
  component: AdminApp,
});
