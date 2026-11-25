import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Moon, MoreHorizontal, Sun } from "lucide-react";
import lockup from "@/assets/vertex-lockup.png.asset.json";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useSiteTheme } from "@/hooks/use-site-theme";

export function FloatingHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState("auto");
  const ref = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useSiteTheme();
  const destination = (id: string) => home ? `#${id}` : `/#${id}`;

  useEffect(() => {
    const header = ref.current;
    if (!header) return;
    const observer = new MutationObserver(() => setTone(header.dataset['sectionTone'] ?? "auto"));
    observer.observe(header, { attributes: true, attributeFilter: ["data-section-tone"] });
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="floating-header home-header" data-section-tone="auto">
      <nav className="floating-nav" aria-label="Principal">
        <a className="floating-brand" href={destination("inicio")} aria-label="Exclusive Vertex — Início" onClick={() => setOpen(false)}>
          <img src={lockup.url} width={1347} height={470} alt="Exclusive Vertex" loading="eager" decoding="async" />
        </a>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="floating-menu-button" aria-label="Abrir menu" title="Menu" aria-expanded={open}>
              <MoreHorizontal aria-hidden="true" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="vertex-menu" align="end" sideOffset={16} collisionPadding={16} data-tone={tone} aria-label="Menu da Exclusive Vertex">
            <nav aria-label="Navegação">
              <a href={destination("inicio")} onClick={() => setOpen(false)}>Início</a>
              <a href={destination("processo")} onClick={() => setOpen(false)}>Como funciona</a>
              <a href={destination("services")} onClick={() => setOpen(false)}>Nossos serviços</a>
              <a href={destination("projetos")} onClick={() => setOpen(false)}>Projetos entregues</a>
              <Link to="/sobre" onClick={() => setOpen(false)}>Sobre a Vertex</Link>
              <a href={destination("contato")} onClick={() => setOpen(false)}>Falar com a Vertex</a>
            </nav>
            <Button variant="ghost" className="vertex-theme-toggle" onClick={toggleTheme} aria-label="Tema escuro" aria-pressed={theme === "dark"}>
              {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
              <span>{theme === "dark" ? "Tema escuro" : "Tema claro"}</span>
              <span className="vertex-theme-track" aria-hidden="true"><span /></span>
            </Button>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
}