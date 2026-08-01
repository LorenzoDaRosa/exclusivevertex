import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { waLink } from "@/lib/whatsapp";
import { ADDRESS, MAPS_EMBED_URL, MAPS_LINK } from "@/lib/location";

const WA = waLink(
  "Olá, Exclusive Vertex! Quero marcar o café e entender quanto minha empresa está deixando de faturar hoje.",
);

export const Route = createFileRoute("/cafe")({
  head: () => ({
    meta: [
      { title: "Café com a Vertex · Diagnóstico digital em Caxias do Sul" },
      {
        name: "description",
        content:
          "Um café, 40 minutos de conversa e um diagnóstico honesto de quanto sua empresa deixa de faturar por não ter presença digital à altura. Centro de Caxias do Sul.",
      },
      { property: "og:title", content: "Café com a Vertex · Diagnóstico digital em Caxias do Sul" },
      {
        property: "og:description",
        content:
          "Venha tomar um café com a Exclusive Vertex e descubra, com números, o quanto sua empresa está deixando na mesa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cafe,
});

const pauta = [
  {
    title: "Onde sua empresa está hoje",
    text: "Olhamos juntos seu site, seu Google e seu Instagram do ponto de vista de quem decide comprar.",
  },
  {
    title: "Quanto isso custa por mês",
    text: "Estimamos, com números do seu ticket médio, quantas oportunidades se perdem antes do primeiro contato.",
  },
  {
    title: "O caminho mais curto",
    text: "Saímos do café com uma prioridade clara: o que muda primeiro e qual o impacto esperado.",
  },
];

function Cafe() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="vx-rise text-[11px] uppercase tracking-[0.22em] text-ink-subtle">
            Convite · Centro de Caxias do Sul
          </p>
          <h1 className="vx-rise mt-7 max-w-4xl font-display text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[4rem]">
            Um café, uma conversa honesta e o número que ninguém te mostrou: quanto sua empresa está{" "}
            <span className="text-brand">deixando de faturar</span>.
          </h1>
          <p className="vx-rise mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
            Sem apresentação de vendas e sem compromisso. Quarenta minutos, presencial ou por
            chamada, para colocar na mesa o que a sua presença digital está deixando passar — e o que
            fazer a respeito.
          </p>
          <div className="vx-rise mt-10 flex flex-wrap items-center gap-3">
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
              className="inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium text-ink ring-1 ring-hairline transition-colors duration-300 hover:bg-surface-2"
            >
              Ver o endereço
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-surface-2 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.6rem]">
              A pauta do nosso café
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-hairline md:grid-cols-3">
            {pauta.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="bg-surface p-10">
                <span className="font-display text-sm text-ink-subtle tabular-nums">0{i + 1}</span>
                <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.85fr_1fr] lg:px-10">
          <Reveal className="min-w-0">
            <h2 className="font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-[2.4rem]">
              Onde nos encontramos
            </h2>
            <address className="mt-7 not-italic text-[17px] leading-relaxed text-ink">
              {ADDRESS.street}
              <br />
              {ADDRESS.unit}
              <br />
              {ADDRESS.district} · {ADDRESS.city}
            </address>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Recebemos no escritório, no Centro, ou vamos até a sua empresa. Se preferir, fazemos a
              mesma conversa por vídeo.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-brand-hover"
            >
              Escolher um horário no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <div className="overflow-hidden rounded-2xl ring-1 ring-hairline shadow-premium">
              <iframe
                title="Escritório da Exclusive Vertex — Rua Marechal Floriano 555, sala 804, Caxias do Sul"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
