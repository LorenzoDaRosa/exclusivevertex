import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="max-w-md text-center">
        <span className="text-[11px] uppercase tracking-[0.28em] text-brand">
          Erro 404
        </span>
        <h1 className="mt-4 font-display text-6xl text-ink">Página não encontrada</h1>
        <p className="mt-4 text-sm text-ink-muted">
          O endereço acessado não existe ou foi movido.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white"
        >
          Voltar para a home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-ink">Algo saiu do previsto</h1>
        <p className="mt-3 text-sm text-ink-muted">
          Tente novamente ou volte para a página inicial.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="rounded-full ring-1 ring-hairline px-5 py-2.5 text-sm text-ink"
          >
            Ir para home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Exclusive Vertex" },
      { name: "theme-color", content: "#0B0F19" },
      { property: "og:site_name", content: "Exclusive Vertex" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Exclusive Vertex — Agência digital premium" },
      { property: "og:title", content: "Exclusive Vertex — Agência digital premium" },
      { name: "twitter:title", content: "Exclusive Vertex — Agência digital premium" },
      { name: "description", content: "Estúdio digital que transforma empresas em referências. Sites, landing pages, redesign e experiências premium com design, estratégia e tecnologia." },
      { property: "og:description", content: "Estúdio digital que transforma empresas em referências. Sites, landing pages, redesign e experiências premium com design, estratégia e tecnologia." },
      { name: "twitter:description", content: "Estúdio digital que transforma empresas em referências. Sites, landing pages, redesign e experiências premium com design, estratégia e tecnologia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/99337010-e42f-4bde-9a44-8ab7d3a239a2/id-preview-f4a7c83f--aa20e2c2-c2fb-4656-8e01-4a517037e1a5.lovable.app-1784727838130.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/99337010-e42f-4bde-9a44-8ab7d3a239a2/id-preview-f4a7c83f--aa20e2c2-c2fb-4656-8e01-4a517037e1a5.lovable.app-1784727838130.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bare = pathname === "/bio" || pathname === "/bio/";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-surface text-ink font-sans">
        {!bare && <Nav />}
        <main>
          <Outlet />
        </main>
        {!bare && <Footer />}
      </div>
    </QueryClientProvider>
  );
}
