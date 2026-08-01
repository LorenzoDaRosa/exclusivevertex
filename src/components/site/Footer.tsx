import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";
import { ADDRESS, MAPS_EMBED_URL, MAPS_LINK } from "@/lib/location";

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
            <Link to="/cafe" className="story-link transition-colors hover:text-ink">
              Café com a Vertex
            </Link>
          </nav>
        </div>

        <div className="mt-14 grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[0.8fr_1fr] lg:gap-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle">Escritório</p>
            <address className="mt-5 not-italic text-[17px] leading-relaxed text-ink">
              {ADDRESS.street}
              <br />
              {ADDRESS.unit}
              <br />
              {ADDRESS.district} · {ADDRESS.city}
            </address>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="story-link mt-6 inline-block text-[15px] font-medium text-brand"
            >
              Ver rota no Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-hairline">
            <iframe
              title="Localização da Exclusive Vertex em Caxias do Sul"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full border-0"
            />
          </div>
        </div>

        <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
          © {new Date().getFullYear()} Exclusive Vertex. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
