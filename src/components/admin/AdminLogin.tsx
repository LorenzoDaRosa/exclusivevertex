import { useState, type FormEvent } from "react";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight, Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function AdminLogin() {
  const navigate = useNavigate();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function login(e: FormEvent) {
    e.preventDefault();
    setError("");
    const v = z
      .object({ email: z.string().trim().email().max(254), password: z.string().min(1).max(128) })
      .safeParse({ email, password });
    if (!v.success) {
      setError("Informe um email válido e sua senha.");
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword(v.data);
      if (error) {
        setError("Email ou senha inválidos, ou conta indisponível.");
        return;
      }
      const { data, error: roleError } = await supabase.rpc("is_vertex_admin");
      if (roleError || !data) {
        await supabase.auth.signOut();
        setError("Esta conta não possui autorização administrativa.");
        return;
      }
      await router.invalidate();
      await navigate({ to: "/admin", replace: true });
    } catch {
      setError("Não foi possível entrar. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="vx-admin admin-login">
      <Link to="/" className="admin-brand">
        <img src="/vertex-favicon.png" alt="Exclusive Vertex" />
        <span>
          EXCLUSIVE
          <br />
          <strong>VERTEX</strong>
        </span>
      </Link>
      <div className="admin-login-body">
        <ShieldCheck className="admin-login-shield" />
        <p className="admin-eyebrow">ÁREA PRIVADA</p>
        <h1>
          Administração
          <br />
          Exclusive Vertex.
        </h1>
        <p className="admin-subtitle">Acesso exclusivo para a gestão da agência.</p>
        <form onSubmit={login}>
          <label htmlFor="admin-email">
            Email
            <Input
              id="admin-email"
              type="email"
              autoComplete="username"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="admin-password">
            Senha
            <div className="admin-password">
              <Input
                id="admin-password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                required
                maxLength={128}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                title={show ? "Ocultar senha" : "Mostrar senha"}
                aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </label>
          {error && (
            <p className="admin-error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" disabled={busy}>
            {busy ? "Entrando…" : "Entrar na administração"}
            <ArrowRight />
          </Button>
        </form>
        <p className="admin-login-note">
          Apenas contas autorizadas pelo proprietário podem acessar.
        </p>
      </div>
      <footer>
        <Link to="/">Voltar ao site</Link>
        <span>Exclusive Vertex © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
