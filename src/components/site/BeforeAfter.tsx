import { Reveal } from "@/components/site/Reveal";

export type BeforeAfterItem = {
  title: string;
  benefit: string;
  before?: string;
  after: string;
};

export function BeforeAfter({ items }: { items: BeforeAfterItem[] }) {
  return (
    <div className="mt-14 space-y-24">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-end mb-8">
              <h3 className="font-display text-3xl lg:text-4xl text-ink text-balance max-w-[24ch]">
                {item.title}
              </h3>
              <p className="text-ink-muted text-pretty">{item.benefit}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {item.before && (
                <figure className="group">
                  <div className="relative overflow-hidden rounded-xl ring-1 ring-hairline bg-surface-2/40">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-surface/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-ink-subtle ring-1 ring-hairline">
                      Antes
                    </span>
                    <img
                      src={item.before}
                      alt={`${item.title} — antes`}
                      loading="lazy"
                      className="w-full h-auto block opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </figure>
              )}
              <figure className={item.before ? "" : "md:col-span-2"}>
                <div className="relative overflow-hidden rounded-xl ring-1 ring-brand/40 bg-surface-2/40">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-brand text-white px-3 py-1 text-[10px] uppercase tracking-[0.24em] ring-1 ring-brand">
                    Depois · Vertex
                  </span>
                  <img
                    src={item.after}
                    alt={`${item.title} — depois`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              </figure>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
