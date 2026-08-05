import { Reveal } from "@/components/site/Reveal";
import { waLink } from "@/lib/whatsapp";
import { ADDRESS, MAPS_EMBED_URL, MAPS_LINK } from "@/lib/location";

const WA = waLink(
  "Olá, Exclusive Vertex! Quero marcar o café e entender quanto minha empresa está deixando de faturar hoje.",
);

export function CoffeeInvite() {
  return (
    <section className="border-t border-hairline bg-surface-2 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
              Convite · Centro de Caxias do Sul
            </p>
            <h2 className="mt-6 font-display text-[2rem] leading-[1.06] font-semibold tracking-[-0.03em] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
              Vamos descobrir o quanto sua empresa está <span className="text-brand">deixando de faturar</span> hoje?
            </h2>
            <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink-muted">
              Aceite um café no centro de Caxias do Sul para uma conversa estratégica. Vamos analisar seu posicionamento atual e traçar o caminho para transformar sua marca em uma referência digital de alto ticket.
            </p>
            <address className="mt-8 not-italic text-[15px] leading-relaxed text-ink">
              {ADDRESS.street} · {ADDRESS.unit}
              <br />
              {ADDRESS.district} · {ADDRESS.city}
            </address>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-brand-hover"
              >
                Quero marcar o café
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium text-ink ring-1 ring-hairline transition-colors duration-300 hover:bg-surface"
              >
                Ver no Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-hairline">
              <iframe
                src={MAPS_EMBED_URL}
                title="Localização da Exclusive Vertex em Caxias do Sul"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0 lg:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
