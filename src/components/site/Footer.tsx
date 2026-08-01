import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="size-8" />
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink">
              Exclusive Vertex
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
            <a
              href="https://wa.me/555432144112"
              target="_blank"
              rel="noreferrer"
              className="story-link transition-colors hover:text-ink"
            >
              WhatsApp (54) 3214-4112
            </a>
            <a
              href="https://instagram.com/exclusive.vertex"
              target="_blank"
              rel="noreferrer"
              className="story-link transition-colors hover:text-ink"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@exclusivevertex.com"
              className="story-link transition-colors hover:text-ink"
            >
              contato@exclusivevertex.com
            </a>
            <span>Caxias do Sul, RS</span>
          </nav>
        </div>

        <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
          © {new Date().getFullYear()} Exclusive Vertex. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
