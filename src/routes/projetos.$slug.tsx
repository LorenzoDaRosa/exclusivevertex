import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ProjectMock } from "@/components/site/ProjectMock";
import { BeforeAfter, type BeforeAfterItem } from "@/components/site/BeforeAfter";
import { projects, type Project } from "@/lib/site-data";
import serraLogo from "@/assets/serra-seguros-logo.png.asset.json";
import serraHomeAntes from "@/assets/serra/home_serra_antes.png.asset.json";
import serraAntes from "@/assets/serra/serra_antes.png.asset.json";
import serraCaminhoAntes from "@/assets/serra/caminho_serra_antes.png.asset.json";
import serraRodapeAntes from "@/assets/serra/rodape_serra_antes.png.asset.json";
import serraHomeDepois from "@/assets/serra/serra_v2_62.png.asset.json";
import serraJogoDepois from "@/assets/serra/serra_v2_63.png.asset.json";
import serraAreasDepois from "@/assets/serra/serra_v2_64.png.asset.json";
import serraComoFuncionaDepois from "@/assets/serra/serra_v2_65.png.asset.json";
import serraAvaliacoesDepois from "@/assets/serra/serra_v2_66.png.asset.json";
import serraPorqueDepois from "@/assets/serra/serra_v2_67.png.asset.json";
import serraConteudoDepois from "@/assets/serra/serra_v2_68.png.asset.json";
import serraCtaDepois from "@/assets/serra/serra_v2_69.png.asset.json";
import serraRodapeDepois from "@/assets/serra/serra_v2_70.png.asset.json";
import serraPrincipiosDepois from "@/assets/serra/serra_v2_71.png.asset.json";

import darosLogo from "@/assets/daros/daros-logo.png.asset.json";
import darosHero from "@/assets/daros/daros_42.png.asset.json";
import darosQuemSomos from "@/assets/daros/daros_43.png.asset.json";
import darosNumeros from "@/assets/daros/daros_44.png.asset.json";
import darosMarcas from "@/assets/daros/daros_45.png.asset.json";
import darosOculos from "@/assets/daros/daros_46.png.asset.json";
import darosQuiz1 from "@/assets/daros/daros_47.png.asset.json";
import darosQuiz2 from "@/assets/daros/daros_48.png.asset.json";
import darosConsultoria from "@/assets/daros/daros_49.png.asset.json";
import darosMotivos from "@/assets/daros/daros_50.png.asset.json";
import darosComparativo from "@/assets/daros/daros_51.png.asset.json";
import darosProvaSocial from "@/assets/daros/daros_52.png.asset.json";
import darosBastidores from "@/assets/daros/daros_53.png.asset.json";
import darosFooter from "@/assets/daros/daros_54.png.asset.json";
import darosFundadora from "@/assets/daros/daros_55.png.asset.json";
import darosFamilia from "@/assets/daros/daros_56.png.asset.json";
import darosConteudo from "@/assets/daros/daros_57.png.asset.json";
import darosContato from "@/assets/daros/daros_58.png.asset.json";
import darosForm from "@/assets/daros/daros_59.png.asset.json";
import darosFaq from "@/assets/daros/daros_60.png.asset.json";

const projectLogos: Record<string, string> = {
  "serra-seguros": serraLogo.url,
  "daros-lunettes": darosLogo.url,
};

const projectHeroImages: Record<string, string> = {
  "serra-seguros": serraHomeDepois.url,
  "daros-lunettes": darosHero.url,
};

const projectBeforeAfter: Record<string, BeforeAfterItem[]> = {
  "serra-seguros": [
    {
      title: "Hero que comunica valor em 3 segundos.",
      benefit:
        "Antes, uma frase institucional sem contexto. Depois, um posicionamento claro em tipografia editorial, com CTAs diretos para cotação e simulação de consórcio.",
      before: serraHomeAntes.url,
      after: serraHomeDepois.url,
    },
    {
      title: "Prova social e diferenciais em destaque.",
      benefit:
        "Números que sustentam a marca — desde 2012, 5.000+ clientes, 50+ seguradoras, 5.0 de avaliação — combinados com uma grade clara dos motivos para escolher a Serra.",
      before: serraAntes.url,
      after: serraDepois.url,
    },
    {
      title: "Navegação orientada por objetivo do cliente.",
      benefit:
        "Trocamos as abas de produto genéricas por três frentes editoriais — Seguros, Consórcios e Empresarial — cada uma com imagem, número e propósito.",
      before: serraCaminhoAntes.url,
      after: serraCaminhoDepois.url,
    },
    {
      title: "Central de Conteúdo pensada para SEO e autoridade.",
      benefit:
        "Uma nova arquitetura de conteúdo, com busca e categorias visuais, que transforma dúvidas de clientes em tráfego orgânico qualificado.",
      after: serraCentralDepois.url,
    },
    {
      title: "Página de Avaliações que constrói confiança.",
      benefit:
        "Depoimentos reais organizados em tipografia editorial, com nota consolidada de Google e Instagram — a prova social virou seção estratégica.",
      after: serraAvaliacoesDepois.url,
    },
    {
      title: "Rodapé institucional, com endereço, mapa e contato.",
      benefit:
        "Do rodapé denso em azul para um encerramento leve, com frase de marca, navegação completa, canais oficiais e mapa da matriz — reforçando presença física.",
      before: serraRodapeAntes.url,
      after: serraRodapeDepois.url,
    },
    {
      title: "Página institucional que conta uma história.",
      benefit:
        "Reestruturamos a página Empresa com narrativa editorial (\"Muito além de assinar um contrato\") e uma faixa de números — +5.000 clientes, +50 seguradoras, 5,0★, PF & PJ — transformando o \"quem somos\" em prova de autoridade.",
      after: serraEmpresaDepois.url,
    },
    {
      title: "Diferenciais, missão e visão em hierarquia clara.",
      benefit:
        "Substituímos parágrafos densos por uma lista tipográfica dos diferenciais reais da Serra, combinada com missão e visão bem separadas — leitura rápida, tom institucional e posicionamento inconfundível.",
      after: serraDiferenciaisDepois.url,
    },
    {
      title: "Valores da marca e CTA de conversão.",
      benefit:
        "Fechamos a página com uma seção escura de princípios (Confiança, Comprometimento, Excelência, Ética, Atendimento humano) seguida de um CTA editorial — \"Uma conversa vale mais que uma proposta impressa\" — que direciona ao consultor.",
      after: serraPrincipiosDepois.url,
    },
  ],
  "daros-lunettes": [
    {
      title: "Hero cinemático que traduz o clima da boutique.",
      benefit:
        "Antes não havia site. Agora, a home abre com um vídeo real da loja e a frase de marca em tipografia serifada — \"Veja a vida com bons olhos\" — posicionando a Daros como boutique premium desde o primeiro segundo.",
      after: darosHero.url,
    },
    {
      title: "\"Quem somos\" em tom editorial, não corporativo.",
      benefit:
        "A abertura institucional troca o clichê \"sobre nós\" por uma frase editorial — \"Uma Óptica dedicada a quem entende que um par de óculos é assinatura pessoal\" — que já filtra o público certo.",
      after: darosQuemSomos.url,
    },
    {
      title: "Rose Quadros — a fundadora como parte da narrativa.",
      benefit:
        "Apresentamos a Rose como personagem central da marca, com foto profissional, biografia e citação. Boutique premium precisa de rosto — e agora tem.",
      after: darosFundadora.url,
    },
    {
      title: "Um negócio de família, contado com verdade.",
      benefit:
        "A seção \"A Daros é feita com quem a Rose ama\" humaniza a marca sem cair no sentimental — mostra o time real e o cuidado que define o atendimento na loja.",
      after: darosFamilia.url,
    },
    {
      title: "Daros em números — autoridade tipográfica.",
      benefit:
        "Uma faixa escura editorial com 20+ marcas, 5,0★ no Google, 4 anos de mercado e 100% de atendimento personalizado. A prova de solidez ganhou hierarquia de página institucional.",
      after: darosNumeros.url,
    },
    {
      title: "Curadoria internacional em destaque.",
      benefit:
        "MaxMara, Missoni, Levi's, Ray-Ban, Oakley, Tom Ford — a grade de marcas foi tratada como galeria editorial, transformando portfólio em argumento de venda.",
      after: darosMarcas.url,
    },
    {
      title: "Óculos de Grau e de Sol — dois territórios, uma experiência.",
      benefit:
        "Cada linha ganhou sua própria porta de entrada, com foto editorial, copy dedicada e CTA para explorar modelos — separando o que antes era só \"produto\".",
      after: darosOculos.url,
    },
    {
      title: "Consultoria Daros — atendimento presencial traduzido para tela.",
      benefit:
        "Cinco pilares — formato do rosto, estilo pessoal, conforto, rotina, medidas técnicas — apresentados com ícones e um único CTA claro. Antes de comprar, o cliente entende que existe método.",
      after: darosConsultoria.url,
    },
    {
      title: "Seis motivos para vir até aqui.",
      benefit:
        "Consultoria de imagem, garantia de adaptação, atendimento personalizado, ajuste técnico, grandes marcas e conforto visual — numerados em grade editorial. Diferencial vira lista memorável.",
      after: darosMotivos.url,
    },
    {
      title: "Óptica tradicional vs Daros Lunettes.",
      benefit:
        "Um comparativo direto que reposiciona a marca no mercado: contra o atendimento padronizado, o cuidado consultivo; contra o volume, o tempo dedicado. É posicionamento em uma única tela.",
      after: darosComparativo.url,
    },
    {
      title: "Quiz \"Encontre seu óculos em 2 minutos\".",
      benefit:
        "Cinco perguntas rápidas em modo escuro cinematográfico — para quem, grau ou sol, estilo, rotina, orçamento — que traduzem a consultoria da loja em interação digital.",
      after: darosQuiz1.url,
    },
    {
      title: "Perguntas do quiz com hierarquia clara.",
      benefit:
        "Cada etapa apresenta uma pergunta editorial com opções em cards escuros — barra de progresso, botão voltar, contador. A experiência guiada substitui o formulário genérico de contato.",
      after: darosQuiz2.url,
    },
    {
      title: "Prova social com nota 5,0★ do Google em destaque.",
      benefit:
        "Depoimentos reais em cards editoriais, carrossel horizontal e CTA direto para \"Ver todas as avaliações no Google\" — a reputação da loja finalmente aparece online.",
      after: darosProvaSocial.url,
    },
    {
      title: "Bastidores do Instagram integrados à home.",
      benefit:
        "A seção \"Nossos bastidores\" traz os posts reais do @daroslunettes em destaque, criando uma ponte entre o site e a rede social — sem depender de embed genérico.",
      after: darosBastidores.url,
    },
    {
      title: "Central de conteúdo pensada para SEO.",
      benefit:
        "\"Leituras sobre olhar, estilo e visão\" — uma central com categorias claras (Grau, Sol, Saúde Visual, Tendências, Marcas, Cuidados, Consultoria) preparada para atrair tráfego orgânico.",
      after: darosConteudo.url,
    },
    {
      title: "FAQ editorial que responde antes da dúvida chegar.",
      benefit:
        "Dúvidas comuns organizadas em acordeão tipográfico — receita, ajustes, prazos, garantia, troca de lentes. Reduz fricção no atendimento e ainda ajuda no SEO.",
      after: darosFaq.url,
    },
    {
      title: "Atendimento personalizado com envio direto ao WhatsApp.",
      benefit:
        "Um único formulário editorial com nome, WhatsApp, cidade, produto, receita e preferência de atendimento presencial — a lead chega qualificada, sem passar por caixa de entrada.",
      after: darosForm.url,
    },
    {
      title: "Contato completo, sem esconder informações.",
      benefit:
        "Endereço, horários, e-mail, WhatsApp, Instagram e Facebook em hierarquia clara, com botão fixo para conversar agora. Presença física e digital finalmente conectadas.",
      after: darosContato.url,
    },
    {
      title: "Rodapé escuro, silencioso, elegante.",
      benefit:
        "Fecha o site com a assinatura da marca — \"Veja a vida com bons olhos\" — navegação completa, endereço da boutique e canais sociais em fundo escuro editorial.",
      after: darosFooter.url,
    },
  ],
};

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto — Exclusive Vertex" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — Exclusive Vertex` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projetos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 pt-40 pb-32 text-center">
      <p className="text-sm text-ink-muted">Projeto não encontrado.</p>
      <Link to="/projetos" className="mt-6 inline-block story-link text-ink">
        Ver todos os projetos
      </Link>
    </div>
  ),
  component: ProjetoDetail,
});

function ProjetoDetail() {
  const project = Route.useLoaderData() as Project;
  const logoUrl = projectLogos[project.slug];
  const heroImage = projectHeroImages[project.slug];
  const beforeAfter = projectBeforeAfter[project.slug];
  const isFromScratch = project.slug === "daros-lunettes";

  return (
    <article className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Case · {project.category} · {project.year}</SectionLabel>
          <h1 className="mt-6 font-display text-5xl lg:text-8xl text-ink text-balance max-w-[22ch]">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-8 max-w-[64ch] font-display text-2xl lg:text-3xl text-ink-muted text-pretty">
              {project.tagline}
            </p>
          )}
          <p className="mt-6 max-w-[64ch] text-base text-ink-muted text-pretty">
            {project.summary}
          </p>
        </Reveal>

        {logoUrl && (
          <Reveal delay={80}>
            <div className="mt-14 flex items-center gap-6 border-y border-hairline py-8">
              <div className="flex h-20 w-32 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-hairline">
                <img src={logoUrl} alt={`${project.title} — logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="text-sm text-ink-muted max-w-[52ch]">
                {isFromScratch
                  ? "Cliente atendido pela Exclusive Vertex na construção da primeira presença digital — do posicionamento editorial à estrutura de atendimento."
                  : "Cliente atendido pela Exclusive Vertex em reposicionamento digital completo — do design institucional à estrutura de conversão."}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={120}>
          <div className="mt-16 overflow-hidden rounded-2xl ring-1 ring-hairline bg-surface-2/40">
            {heroImage ? (
              <img
                src={heroImage}
                alt={`${project.title} — home`}
                className="w-full h-auto block"
              />
            ) : (
              <div className="aspect-[21/10] w-full">
                <ProjectMock label={project.title} variant="site" />
              </div>
            )}
          </div>
        </Reveal>

        {project.metrics && project.metrics.length > 0 && (
          <Reveal delay={160}>
            <div className="mt-16 grid grid-cols-2 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden md:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-surface p-8">
                  <div className="font-display text-4xl lg:text-5xl text-ink">
                    {m.value}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-32 grid gap-16 lg:grid-cols-3">
          <Reveal>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                O desafio
              </h3>
              <p className="text-ink-muted text-pretty leading-relaxed">
                {project.context}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                Problemas identificados
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.problems.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-ink-subtle" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                Soluções implementadas
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.solutions.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {(project.before || project.after) && (
          <div className="mt-32">
            <Reveal>
              <SectionLabel>
                {isFromScratch ? "A construção do site" : "Antes & Depois"}
              </SectionLabel>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl text-ink text-balance max-w-[24ch]">
                {isFromScratch
                  ? "A primeira presença digital da marca, construída do zero."
                  : "A reconstrução completa da presença digital."}
              </h2>
              <p className="mt-6 max-w-[64ch] text-ink-muted text-pretty">
                {isFromScratch
                  ? "Cada tela abaixo mostra uma decisão editorial do projeto — construída pela Exclusive Vertex a partir da identidade da boutique, com foco em posicionamento, cuidado e conversão."
                  : "Cada tela abaixo mostra o mesmo ponto do site — o antes, herdado de um template genérico, e o depois construído pela Exclusive Vertex com foco em posicionamento, credibilidade e conversão."}
              </p>
            </Reveal>

            {beforeAfter && beforeAfter.length > 0 && (
              <BeforeAfter items={beforeAfter} />
            )}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {project.before && (
                <Reveal delay={80}>
                  <div className="rounded-2xl bg-surface-2/40 ring-1 ring-hairline p-8 lg:p-10 h-full">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-ink-subtle mb-6">
                      Antes
                    </p>
                    <ul className="space-y-3 text-sm text-ink-muted">
                      {project.before.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-ink-subtle">✕</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {project.after && (
                <Reveal delay={160}>
                  <div className="rounded-2xl bg-brand/[0.06] ring-1 ring-brand/40 p-8 lg:p-10 h-full">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
                      Depois
                    </p>
                    <ul className="space-y-3 text-sm text-ink">
                      {project.after.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-brand">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        )}

        {project.quotationForms && project.quotationForms.length > 0 && (
          <div className="mt-32">
            <Reveal>
              <SectionLabel>Sistema de cotação inteligente</SectionLabel>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl text-ink text-balance max-w-[26ch]">
                Cada serviço com o seu próprio fluxo — direto para o WhatsApp.
              </h2>
              <p className="mt-6 max-w-[60ch] text-ink-muted">
                Antes, o visitante precisava entrar em contato sem fornecer
                informações relevantes. Agora, cada linha de produto conta com
                um formulário exclusivo, projetado para qualificar o lead e
                acelerar o atendimento comercial.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.quotationForms.map((f, i) => (
                <Reveal key={f.name} delay={i * 60}>
                  <div className="rounded-2xl bg-surface-2/40 ring-1 ring-hairline p-6 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs tabular-nums text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl text-ink">{f.name}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-ink-muted">
                      {f.fields.map((field) => (
                        <li key={field} className="flex gap-2">
                          <span className="text-brand">✔</span>
                          <span>{field}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ink-subtle">
                      <span>Envio automático</span>
                      <span>→</span>
                      <span className="text-ink">WhatsApp</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {project.conversionGoals && project.conversionGoals.length > 0 && (
          <div className="mt-32 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionLabel>Conversão</SectionLabel>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-ink text-balance">
                Cada página com um objetivo claro.
              </h2>
              <p className="mt-6 text-ink-muted max-w-[46ch]">
                Antes, o visitante apenas navegava. Agora, é conduzido
                naturalmente até uma ação.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.conversionGoals.map((g, i) => (
                  <div
                    key={g}
                    className="rounded-xl bg-surface ring-1 ring-hairline px-5 py-4 text-sm text-ink flex items-center justify-between"
                  >
                    <span>{g}</span>
                    <span className="text-brand text-xs tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {project.contentCategories && project.contentCategories.length > 0 && (
          <div className="mt-32 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionLabel>Central de conteúdo</SectionLabel>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-ink text-balance">
                Conteúdo organizado por categoria, preparado para SEO.
              </h2>
              <p className="mt-6 text-ink-muted max-w-[46ch]">
                Uma central estruturada que informa clientes e fortalece o
                posicionamento orgânico da empresa.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex flex-wrap gap-2">
                {project.contentCategories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full ring-1 ring-hairline px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}


        {/* Stack + outcomes */}
        <div className="mt-32 grid gap-16 lg:grid-cols-2 border-t border-hairline pt-16">
          <Reveal>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full ring-1 ring-hairline px-4 py-1.5 text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
                Resultados
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.outcomes.map((o: string) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 rounded-3xl bg-surface-2 ring-1 ring-hairline p-12 lg:p-20">
            <p className="text-[11px] uppercase tracking-[0.28em] text-ink-subtle">
              Resultado
            </p>
            <p className="mt-6 font-display text-2xl lg:text-3xl text-ink max-w-[60ch] text-pretty">
              {isFromScratch
                ? "Mais do que um novo site, a Daros passou a contar com uma plataforma editorial preparada para representar a experiência da boutique e apoiar seu processo de atendimento — com foco em posicionamento, cuidado, conversão e escalabilidade."
                : "Mais do que um novo site, a Serra passou a contar com uma plataforma preparada para representar a qualidade da empresa e apoiar seu processo comercial — com foco em experiência, credibilidade, conversão e escalabilidade."}
            </p>
          </div>
        </Reveal>

        <div className="mt-24 flex justify-between border-t border-hairline pt-8 text-sm">
          <Link to="/projetos" className="story-link text-ink-muted hover:text-ink">
            ← Todos os projetos
          </Link>
          <Link to="/orcamento" className="story-link text-ink">
            Solicitar um projeto como este
          </Link>
        </div>
      </div>
    </article>
  );
}
