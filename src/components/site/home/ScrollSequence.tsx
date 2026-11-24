import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type SequencePanel = { label: string; content: ReactNode };

export function ScrollSequence({ id, className, title, panels }: {
  id: string;
  className: string;
  title: ReactNode;
  panels: readonly SequencePanel[];
}) {
  return (
    <section id={id} className={`home-sequence ${className}`} data-home-sequence aria-labelledby={`${id}-title`}>
      <div className="home-sequence-stage">
        <div className="home-wrap home-sequence-layout">
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
            <ol className="home-sequence-index" aria-label="Etapas">
              {panels.map((panel, index) => (
                <li key={panel.label}>
                  <Button variant="ghost" className="home-step" type="button" data-home-step aria-controls={`${id}-${index}`}>
                    {panel.label}
                  </Button>
                </li>
              ))}
            </ol>
          </div>
          <div className="home-panels">
            {panels.map((panel, index) => (
              <article key={panel.label} id={`${id}-${index}`} className="home-panel" data-home-panel data-active={index === 0 ? "" : undefined}>
                {panel.content}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}