import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="size-6" />
              <span className="text-[13px] font-medium tracking-[0.18em] text-ink uppercase">
                Exclusive Vertex
              </span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Estúdio digital dedicado a construir plataformas que representam a
              qualidade das empresas que atendemos.
            </p>
          </div>

          <FooterCol
            title="Navegar"
            items={[
              { to: "/projetos", label: "Projetos" },
              { to: "/servicos", label: "Serviços" },
              { to: "/processo", label: "Processo" },
              { to: "/sobre", label: "Sobre" },
            ]}
          />
          <FooterCol
            title="Conteúdo"
            items={[
              { to: "/blog", label: "Central de conteúdo" },
              { to: "/orcamento", label: "Simulador de projeto" },
              { to: "/contato", label: "Contato" },
            ]}
          />
          <div>
            <h5 className="text-[10px] font-medium uppercase tracking-[0.28em] text-ink-subtle mb-5">
              Conecte-se
            </h5>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>
                <a href="https://wa.me/" className="story-link hover:text-ink transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" className="story-link hover:text-ink transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:contato@exclusivevertex.com" className="story-link hover:text-ink transition-colors">
                  contato@exclusivevertex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
          <span>© {new Date().getFullYear()} Exclusive Vertex</span>
          <span>Desenvolvido com precisão · Brasil</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="text-[10px] font-medium uppercase tracking-[0.28em] text-ink-subtle mb-5">
        {title}
      </h5>
      <ul className="space-y-3 text-sm text-ink-muted">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="story-link hover:text-ink transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
