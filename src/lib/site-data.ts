export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  deliverables: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "sites-institucionais",
    title: "Sites Institucionais",
    short: "Transmita autoridade e gere confiança desde o primeiro acesso.",
    intro:
      "Sites institucionais desenvolvidos como um ativo estratégico da marca — estruturados para transmitir confiança, gerar oportunidades e sustentar posicionamento premium.",
    deliverables: [
      "Arquitetura de informação sob medida",
      "Design de interface exclusivo",
      "Desenvolvimento responsivo de alta performance",
      "Estrutura SEO técnica",
    ],
    outcomes: [
      "Percepção de autoridade no mercado",
      "Consistência de marca em todos os pontos de contato",
      "Base pronta para escalar campanhas",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    short: "Transforme campanhas em oportunidades reais de venda.",
    intro:
      "Landing pages construídas com arquitetura de persuasão, foco em copy estratégico e componentes projetados para maximizar conversão.",
    deliverables: [
      "Copywriting orientado à conversão",
      "Design focado no CTA",
      "Integração com CRM e pixels",
      "Testes de performance",
    ],
    outcomes: [
      "Maior taxa de conversão por visitante",
      "Custo por aquisição reduzido",
      "Rastreamento completo do funil",
    ],
  },
  {
    slug: "redesign-de-sites",
    title: "Redesign de Sites",
    short: "Modernize sua presença digital sem perder autoridade.",
    intro:
      "Auditamos o site atual, preservamos o que gera resultado e reconstruímos o restante com um padrão visual, técnico e estratégico superior.",
    deliverables: [
      "Auditoria completa (UX, SEO, performance)",
      "Migração sem perda de rankings",
      "Nova identidade visual digital",
      "Componentes escaláveis",
    ],
    outcomes: [
      "Percepção de marca elevada",
      "Melhor experiência em todos os dispositivos",
      "Redução de fricção no fluxo comercial",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    short: "Interfaces claras, fluidas e memoráveis.",
    intro:
      "Design de interface e experiência baseado em pesquisa, arquitetura de conteúdo e princípios de usabilidade aplicados por profissionais dedicados.",
    deliverables: [
      "Wireframes e protótipos interativos",
      "Design system próprio",
      "Design responsivo mobile-first",
      "Handoff técnico completo",
    ],
    outcomes: [
      "Fluxos mais objetivos",
      "Redução de erros e retrabalho",
      "Base sólida para evolução do produto",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Seja encontrado por quem realmente procura seus serviços.",
    intro:
      "SEO técnico e estratégico integrado ao desenvolvimento do site, garantindo indexação, semântica correta e autoridade sustentável.",
    deliverables: [
      "SEO técnico on-page",
      "Estrutura semântica e schema",
      "Otimização de Core Web Vitals",
      "Sitemap e robots configurados",
    ],
    outcomes: [
      "Melhor posicionamento em buscas",
      "Tráfego orgânico qualificado",
      "Fundação escalável para conteúdo",
    ],
  },
  {
    slug: "integracao-whatsapp",
    title: "Integração com WhatsApp",
    short: "Converta interesse em conversa no exato momento da decisão.",
    intro:
      "Implementação estratégica de WhatsApp com mensagens automáticas, deep links contextuais e rastreamento de conversas para converter interesse em conversa.",
    deliverables: [
      "Botão contextual em cada página",
      "Mensagens automáticas por origem",
      "Rastreamento por evento",
      "Multi-atendimento (quando aplicável)",
    ],
    outcomes: [
      "Redução do tempo de resposta",
      "Maior conversão em contato direto",
      "Registro completo da origem do lead",
    ],
  },
  {
    slug: "formularios-inteligentes",
    title: "Formulários Inteligentes",
    short: "Coleta de leads que respeita o usuário.",
    intro:
      "Formulários com validação em tempo real, campos condicionais, salvamento parcial e integração direta com e-mail, CRM ou WhatsApp.",
    deliverables: [
      "Validação e segurança",
      "Anti-spam sem captcha invasivo",
      "Integração com destino escolhido",
      "Confirmação e follow-up",
    ],
    outcomes: [
      "Maior taxa de preenchimento",
      "Leads mais qualificados",
      "Menos fricção na jornada",
    ],
  },
  {
    slug: "consultoria-digital",
    title: "Consultoria Digital",
    short: "Direcionamento estratégico para decisões digitais.",
    intro:
      "Sessões estratégicas para orientar decisões de branding digital, arquitetura de produto, tecnologia e priorização.",
    deliverables: [
      "Diagnóstico completo",
      "Roadmap priorizado",
      "Recomendações técnicas",
      "Acompanhamento executivo",
    ],
    outcomes: [
      "Clareza de próximos passos",
      "Alinhamento entre marketing e produto",
      "Investimento mais assertivo",
    ],
  },
  {
    slug: "otimizacao-performance",
    title: "Otimização de Performance",
    short: "Sites rápidos, leves e preparados para escala.",
    intro:
      "Auditoria e refino técnico para reduzir tempo de carregamento, melhorar Core Web Vitals e sustentar picos de tráfego.",
    deliverables: [
      "Auditoria Lighthouse & Web Vitals",
      "Otimização de imagens e fontes",
      "Cache, CDN e lazy loading",
      "Refatoração pontual de código",
    ],
    outcomes: [
      "Carregamento próximo do instantâneo",
      "Melhor ranqueamento no Google",
      "Mais conversão em conexões lentas",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  context: string;
  problems: string[];
  solutions: string[];
  gallery: string[];
  stack: string[];
  outcomes: string[];
  status: "case" | "in-progress" | "coming-soon";
  logo?: string;
  tagline?: string;
  metrics?: { label: string; value: string }[];
  before?: string[];
  after?: string[];
  quotationForms?: { name: string; fields: string[] }[];
  contentCategories?: string[];
  conversionGoals?: string[];
};

export const projects: Project[] = [
  {
    slug: "serra-seguros",
    title: "Serra Seguros e Consórcios",
    category: "Seguros · Consórcios",
    year: "2025",
    tagline:
      "Transformando uma presença digital institucional em uma plataforma de conversão.",
    summary:
      "Reposicionamento digital de uma corretora tradicional em plataforma de referência para seguros e consórcios — focada em confiança, atendimento e geração de oportunidades.",
    context:
      "A Serra Seguros já possuía uma reputação sólida no mercado: mais de 5.000 clientes segurados, avaliação 5,0 estrelas, atendimento altamente elogiado e anos de experiência com diversas seguradoras parceiras. A presença digital, no entanto, não refletia essa credibilidade — cumpria a função institucional, mas deixava oportunidades importantes de relacionamento e geração de leads.",
    metrics: [
      { label: "Clientes segurados", value: "5.000+" },
      { label: "Avaliação Google", value: "5,0★" },
      { label: "Anos de mercado", value: "10+" },
      { label: "Seguradoras parceiras", value: "12+" },
    ],
    before: [
      "Layout simples e pouco marcante",
      "Pouca hierarquia visual",
      "Navegação limitada",
      "Informações espalhadas",
      "Botões sem objetivo claro",
      "Experiência pouco intuitiva",
      "Ausência de formulários inteligentes",
      "Baixa estratégia de conversão",
      "Pouca preparação para SEO",
      "Conteúdo limitado",
      "Integrações reduzidas",
      "Não aproveitava o potencial da marca",
    ],
    after: [
      "Nova identidade digital",
      "Layout premium",
      "Navegação reorganizada",
      "Arquitetura moderna",
      "Experiência muito mais intuitiva",
      "Integração completa com WhatsApp",
      "Google Maps incorporado",
      "Blog estruturado para SEO",
      "Páginas individuais para cada serviço",
      "Formulários personalizados",
      "Responsividade total",
      "Melhor percepção de autoridade",
    ],
    problems: [
      "Presença digital pouco alinhada ao posicionamento da empresa",
      "Ausência de estrutura clara para diferentes tipos de seguro",
      "Baixa geração de contato qualificado pelo site",
      "Falta de arquitetura preparada para SEO",
    ],
    solutions: [
      "Nova arquitetura de informação por linha de produto",
      "Design institucional premium, com identidade consistente",
      "Fluxos diretos para cotação e contato via WhatsApp",
      "Estrutura técnica preparada para indexação e escala",
    ],
    quotationForms: [
      {
        name: "Seguro Auto",
        fields: ["Nome", "Cidade", "Veículo", "Ano", "Seguro atual", "Observações"],
      },
      {
        name: "Seguro Residencial",
        fields: ["Nome", "Cidade", "Tipo de imóvel", "Metragem", "Ocupação", "Observações"],
      },
      {
        name: "Seguro Empresarial",
        fields: ["Empresa", "CNPJ", "Segmento", "Faturamento", "Localização", "Observações"],
      },
      {
        name: "Seguro de Vida",
        fields: ["Nome", "Idade", "Profissão", "Cobertura desejada", "Beneficiários", "Observações"],
      },
      {
        name: "Consórcio Automóvel",
        fields: ["Nome", "Cidade", "Valor da carta", "Prazo desejado", "Observações"],
      },
      {
        name: "Consórcio Imóvel",
        fields: ["Nome", "Cidade", "Valor da carta", "Prazo desejado", "Finalidade"],
      },
      {
        name: "Consórcio Linha Pesada",
        fields: ["Empresa", "Tipo de veículo", "Valor da carta", "Prazo", "Observações"],
      },
    ],
    contentCategories: [
      "Seguro Auto",
      "Seguro Residencial",
      "Seguro Empresarial",
      "Seguro de Vida",
      "Consórcios",
      "Dicas Financeiras",
      "Sinistros",
      "Perguntas Frequentes",
    ],
    conversionGoals: [
      "Solicitar cotação",
      "Conhecer serviços",
      "Entrar em contato",
      "Ler conteúdos",
      "Falar pelo WhatsApp",
    ],
    gallery: ["Home", "Página de Seguros", "Consórcios", "Contato"],
    stack: [
      "Next-gen React",
      "Design System próprio",
      "SEO técnico",
      "WhatsApp API",
      "Google Maps",
    ],
    outcomes: [
      "Percepção de marca elevada",
      "Contato direto simplificado",
      "Base pronta para novos serviços",
      "Plataforma preparada para escala",
    ],
    status: "case",
  },
  {
    slug: "daros-lunettes",
    title: "Daros Lunettes",
    category: "Óptica · Boutique premium",
    year: "2026",
    tagline:
      "A construção da primeira presença digital de uma boutique óptica que já era referência fora da tela.",
    summary:
      "A Daros Lunettes é uma óptica boutique no centro de Caxias do Sul, especializada em óculos premium de marcas internacionais. Não tinha site — apenas Instagram e o boca a boca. Construímos, do zero, uma plataforma editorial à altura da experiência oferecida na loja: hierarquia tipográfica clássica, curadoria de marcas em destaque, quiz de recomendação, consultoria personalizada e integração completa com WhatsApp.",
    context:
      "A Daros já era reconhecida em Caxias do Sul pelo atendimento consultivo, pela curadoria de marcas internacionais e pela experiência acolhedora dentro da boutique. O problema não era reputação — era ausência: fora do Instagram, a marca simplesmente não existia digitalmente. Clientes novos chegavam por indicação, mas não tinham um endereço próprio para conhecer o portfólio, a fundadora, a história e os diferenciais antes de agendar. O projeto nasceu para preencher exatamente esse vazio.",
    metrics: [
      { label: "Marcas internacionais", value: "20+" },
      { label: "Avaliação média Google", value: "5,0★" },
      { label: "Anos cuidando do olhar", value: "4" },
      { label: "Atendimento personalizado", value: "100%" },
    ],
    after: [
      "Identidade editorial premium, com serifada clássica e paleta clara e dourada",
      "Hero cinemático com vídeo da boutique em background",
      "Página institucional com a história de Rose Quadros, fundadora",
      "Seção \"Um negócio de família\" que humaniza a marca",
      "Grade de marcas internacionais com curadoria visual",
      "Páginas dedicadas para óculos de grau e óculos de sol",
      "Consultoria Daros em destaque, com 5 pilares e CTA próprio",
      "Quiz interativo \"Encontre seu óculos em 2 minutos\" com 5 perguntas",
      "Comparativo \"Óptica tradicional vs Daros Lunettes\"",
      "Prova social com depoimentos reais e nota 5,0 do Google",
      "Central de conteúdo categorizada e preparada para SEO",
      "Bastidores do Instagram integrados à home",
      "Formulário de atendimento personalizado com envio direto ao WhatsApp",
      "FAQ editorial respondendo às dúvidas reais dos clientes",
      "Rodapé escuro, elegante, com endereço, horários e canais",
      "Integração completa com WhatsApp, Instagram e Facebook",
    ],
    problems: [
      "Ausência total de presença digital fora do Instagram",
      "Novos clientes chegavam apenas por indicação, sem canal de descoberta",
      "Nenhum caminho estruturado para agendar atendimento ou tirar dúvidas",
      "Curadoria de marcas internacionais invisível para quem ainda não conhecia a boutique",
    ],
    solutions: [
      "Construção editorial completa do site — do posicionamento à arquitetura",
      "Design tipográfico premium alinhado à experiência da boutique",
      "Quiz consultivo que aproxima o atendimento online do presencial",
      "Fluxos diretos para WhatsApp em cada seção estratégica",
      "Central de conteúdo pensada para atrair tráfego orgânico qualificado",
    ],
    quotationForms: [
      {
        name: "Atendimento personalizado",
        fields: ["Nome", "WhatsApp", "Cidade", "Produto procurado", "Possui receita?", "Atendimento presencial?", "Observações"],
      },
    ],
    contentCategories: [
      "Óculos de Grau",
      "Óculos de Sol",
      "Saúde Visual",
      "Tendências",
      "Marcas",
      "Cuidados",
      "Consultoria",
    ],
    conversionGoals: [
      "Falar pelo WhatsApp",
      "Fazer o quiz de indicação",
      "Agendar consultoria",
      "Explorar marcas",
      "Conhecer a boutique",
    ],
    gallery: ["Home", "A Daros", "Óculos", "Marcas", "Consultoria", "Blog", "Contato"],
    stack: [
      "React de última geração",
      "Design System editorial próprio",
      "Tipografia serifada clássica",
      "SEO técnico completo",
      "Integração WhatsApp",
      "Quiz interativo",
    ],
    outcomes: [
      "Primeira presença digital à altura da experiência da boutique",
      "Canal próprio de descoberta para clientes novos",
      "Fluxo estruturado do primeiro contato ao atendimento",
      "Base editorial pronta para conteúdo e SEO",
    ],
    status: "case",
  },
  {
    slug: "meneseg",
    title: "MeneSeg Consórcios e Seguros",
    category: "Consórcios · Seguros",
    year: "2026",
    tagline:
      "A primeira presença digital de uma corretora que sempre trabalhou com números na mesa.",
    summary:
      "A MeneSeg atua com consórcios e seguros em Caxias do Sul e região, com um atendimento consultivo baseado em transparência e planejamento financeiro. Não existia site — todo o contato acontecia por indicação e WhatsApp. Construímos do zero uma plataforma institucional sóbria e didática: comparativo honesto entre consórcio e financiamento, áreas de atuação, processo de contratação, prova social e formulário que envia a simulação direto para o consultor.",
    context:
      "A confiança da MeneSeg foi construída no boca a boca: clientes que voltavam para o segundo, terceiro e quarto objetivo. O que faltava era um endereço próprio capaz de explicar, antes da conversa, por que consórcio costuma custar menos que financiamento e como funciona cada etapa da contratação. Sem site, cada explicação começava do zero no WhatsApp — e muitos leads qualificados nunca chegavam a perguntar.",
    metrics: [
      { label: "Clientes atendidos na serra", value: "+900" },
      { label: "Voltam ou indicam", value: "98%" },
      { label: "Nota média de atendimento", value: "4,9" },
      { label: "Anos de mercado", value: "9" },
    ],
    after: [
      "Identidade digital sóbria, em azul-marinho institucional com detalhes em dourado",
      "Hero direto ao ponto: \"Consórcio constrói. O seguro protege.\"",
      "Seção \"Sobre a MeneSeg\" com posicionamento honesto e CTA para falar com o consultor",
      "Bloco de planejamento, transparência e acompanhamento em cada etapa",
      "Áreas de atuação em cards com CTA individual de simulação e cotação",
      "Comparativo lado a lado Consórcio x Financiamento em 7 critérios",
      "Processo de contratação em 4 etapas explicadas",
      "Grade com 10 motivos para escolher a MeneSeg",
      "Prova social com depoimentos reais e faixa de números",
      "Vitrine de administradoras e seguradoras parceiras em carrossel",
      "Formulário de simulação com envio direto ao WhatsApp",
      "FAQ respondendo as objeções mais comuns sobre consórcio e seguro",
    ],
    problems: [
      "Nenhuma presença digital própria — apenas indicação e WhatsApp",
      "A vantagem do consórcio sobre o financiamento precisava ser explicada manualmente a cada contato",
      "Ausência de caminho estruturado para solicitar simulação ou cotação",
      "Autoridade construída em 9 anos de mercado invisível para quem ainda não conhecia a corretora",
    ],
    solutions: [
      "Construção completa do site institucional, do posicionamento à arquitetura",
      "Comparativo editorial que educa o cliente antes da conversa comercial",
      "Cards de produto com CTA próprio para cada tipo de consórcio e seguro",
      "Formulário de simulação que abre a conversa já qualificada no WhatsApp",
      "Prova social e parceiros em destaque para sustentar credibilidade",
    ],
    quotationForms: [
      {
        name: "Solicitar simulação",
        fields: ["Nome", "WhatsApp", "Interesse", "Objetivo"],
      },
    ],
    contentCategories: [
      "Consórcio Auto",
      "Consórcio Imóvel",
      "Consórcio de Investimento",
      "Seguro Auto",
      "Seguros empresariais",
      "Planejamento financeiro",
    ],
    conversionGoals: [
      "Simular próxima conquista",
      "Solicitar cotação de seguro",
      "Falar com o consultor no WhatsApp",
      "Comparar consórcio x financiamento",
      "Entender o processo de contratação",
    ],
    gallery: ["Home", "Sobre", "Áreas de atuação", "Comparativo", "Processo", "Contato"],
    stack: [
      "React de última geração",
      "Design System institucional próprio",
      "SEO técnico completo",
      "Integração WhatsApp",
      "Formulário de simulação",
    ],
    outcomes: [
      "Primeira presença digital própria da corretora",
      "Cliente chega à conversa já entendendo consórcio x financiamento",
      "Caminho claro do interesse à simulação",
      "Autoridade de 9 anos finalmente visível",
    ],
    status: "case",
  },
];


export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const blogCategories: Category[] = [
  { slug: "sites", name: "Sites", description: "Arquitetura, design e estratégia de sites institucionais." },
  { slug: "seo", name: "SEO", description: "Fundamentos técnicos e estratégicos para tráfego orgânico." },
  { slug: "marketing", name: "Marketing", description: "Aquisição, posicionamento e conversão." },
  { slug: "design", name: "Design", description: "Referências, princípios e sistemas visuais." },
  { slug: "ux", name: "UX", description: "Fluxos, comportamento e experiência do usuário." },
  { slug: "empreendedorismo", name: "Empreendedorismo", description: "Decisões de negócio e crescimento." },
  { slug: "tecnologia", name: "Tecnologia", description: "Ferramentas, stacks e infraestrutura moderna." },
  { slug: "ia", name: "IA", description: "Inteligência artificial aplicada ao digital." },
  { slug: "vendas", name: "Vendas", description: "Estratégia comercial no ambiente digital." },
];

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
  intro: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "quanto-custa-um-site-profissional",
    title: "Quanto custa um site profissional?",
    excerpt:
      "O que realmente define o preço de um site — e por que o mais barato costuma sair mais caro.",
    category: "sites",
    readMinutes: 6,
    date: "2025-04-02",
    intro:
      "Não existe uma tabela universal de preço para sites. Existe escopo. O valor de um projeto é definido pela profundidade da estratégia, pela quantidade de páginas e fluxos, pelo nível de design autoral e pelo grau de exigência técnica envolvido.",
    sections: [
      {
        heading: "O que realmente compõe o preço",
        paragraphs: [
          "Um site profissional é a soma de etapas que acontecem antes de qualquer linha de código: diagnóstico do negócio, definição de posicionamento, arquitetura de informação, redação orientada a conversão, design exclusivo, desenvolvimento, testes e publicação.",
          "Quando um orçamento é muito baixo, alguma dessas etapas foi removida. Normalmente as invisíveis — estratégia, copy e performance — que são justamente as que geram resultado comercial.",
        ],
        bullets: [
          "Escopo: número de páginas, seções e integrações",
          "Design: template pronto ou projeto autoral",
          "Conteúdo: textos entregues pelo cliente ou escritos pela agência",
          "Técnica: performance, SEO estrutural, acessibilidade e responsividade",
          "Continuidade: suporte, evolução e manutenção após a publicação",
        ],
      },
      {
        heading: "Por que o mais barato costuma sair mais caro",
        paragraphs: [
          "Um site genérico não é neutro: ele comunica algo sobre a empresa. Quando a percepção fica abaixo do valor real do serviço prestado, o custo aparece na negociação — em desconto pedido, em proposta ignorada, em lead que escolhe o concorrente.",
          "Refazer um projeto mal executado normalmente custa mais do que fazer certo na primeira vez, porque envolve retrabalho de marca, conteúdo, estrutura e histórico de indexação.",
        ],
      },
      {
        heading: "Como avaliar uma proposta",
        paragraphs: [
          "Compare processos, não apenas números. Pergunte quem escreve os textos, se o design é criado do zero, como a performance será medida e o que acontece depois da publicação.",
          "Um bom projeto se paga com posicionamento: quando o site sustenta o preço que a empresa quer cobrar, ele deixa de ser despesa e passa a ser ativo.",
        ],
      },
    ],
  },
  {
    slug: "vale-a-pena-investir-em-seo",
    title: "Vale a pena investir em SEO?",
    excerpt:
      "Quando faz sentido investir em SEO, qual o retorno esperado e o que muda a partir do 6º mês.",
    category: "seo",
    readMinutes: 7,
    date: "2025-03-22",
    intro:
      "SEO é aquisição composta. Diferente de anúncios, o investimento não desaparece quando você para de pagar — ele acumula. Em troca, exige consistência e paciência nos primeiros meses.",
    sections: [
      {
        heading: "Quando faz sentido",
        paragraphs: [
          "SEO funciona bem quando existe demanda ativa pelo que a empresa vende: alguém já digita no Google o problema que você resolve. Se a busca existe, o trabalho é ocupar espaço nela.",
          "Faz menos sentido quando o produto é totalmente novo, sem vocabulário de busca estabelecido. Nesse cenário, mídia paga e conteúdo de demanda latente vêm primeiro.",
        ],
      },
      {
        heading: "A linha do tempo realista",
        paragraphs: [
          "Os primeiros meses são de fundação: estrutura técnica, semântica, velocidade, indexação e conteúdo inicial. Resultados de tráfego relevantes aparecem tipicamente entre o terceiro e o sexto mês.",
          "A partir do sexto mês, a curva muda de comportamento: páginas antigas ganham autoridade, novas indexam mais rápido e o custo por lead orgânico cai mês a mês.",
        ],
        bullets: [
          "Mês 1–2: correções técnicas, arquitetura e páginas essenciais",
          "Mês 3–4: conteúdo por intenção de busca e ganho de impressões",
          "Mês 5–6: primeiras posições consistentes e leads orgânicos",
          "Mês 7+: acúmulo de autoridade e redução do custo de aquisição",
        ],
      },
      {
        heading: "O erro mais comum",
        paragraphs: [
          "Tratar SEO como uma lista de tarefas isolada do site. Estrutura ruim, páginas lentas e conteúdo raso não são compensados por otimizações superficiais.",
          "SEO começa na fundação do projeto: hierarquia de títulos, URLs limpas, performance, dados estruturados e conteúdo que responde melhor que o concorrente.",
        ],
      },
    ],
  },
  {
    slug: "instagram-substitui-um-site",
    title: "Instagram substitui um site?",
    excerpt:
      "Por que redes sociais são canais — e por que sua empresa ainda precisa de um endereço próprio.",
    category: "marketing",
    readMinutes: 5,
    date: "2025-03-10",
    intro:
      "Rede social é canal alugado. Site é território próprio. Os dois trabalham juntos, mas cumprem funções diferentes na decisão de compra.",
    sections: [
      {
        heading: "O que o Instagram faz bem",
        paragraphs: [
          "Gerar atenção, criar familiaridade e manter a marca presente no cotidiano de quem já conhece a empresa. É excelente para topo de relacionamento.",
          "O que ele não faz bem é sustentar uma decisão racional de compra: não organiza informação, não é indexado pelo Google e não responde dúvidas de forma navegável.",
        ],
      },
      {
        heading: "O que só o site entrega",
        paragraphs: [
          "Controle total da narrativa, profundidade de informação, presença em buscas orgânicas, credibilidade institucional e fluxos de conversão desenhados para o seu processo comercial.",
          "Além disso, um perfil pode ser restringido, hackeado ou perder alcance por mudança de algoritmo. O endereço próprio permanece.",
        ],
        bullets: [
          "Aparecer no Google quando alguém busca sua solução",
          "Apresentar portfólio, cases e provas de forma estruturada",
          "Qualificar leads antes do primeiro contato comercial",
          "Sustentar preço com percepção de marca consistente",
        ],
      },
      {
        heading: "A combinação correta",
        paragraphs: [
          "Use as redes para gerar atenção e o site para converter essa atenção em oportunidade. O link da bio existe justamente para transferir tráfego emprestado para território próprio.",
        ],
      },
    ],
  },
  {
    slug: "10-sinais-de-que-sua-empresa-precisa-renovar-o-site",
    title: "10 sinais de que sua empresa precisa renovar o site",
    excerpt:
      "Um checklist honesto para reconhecer quando o site virou um obstáculo à percepção da marca.",
    category: "sites",
    readMinutes: 6,
    date: "2025-02-28",
    intro:
      "Um site desatualizado raramente avisa. Ele apenas deixa de gerar oportunidades — e a empresa atribui isso ao mercado. Estes são os sinais mais frequentes.",
    sections: [
      {
        heading: "Os dez sinais",
        paragraphs: [
          "Se três ou mais itens abaixo descrevem o seu site hoje, o problema já não é estético: é comercial.",
        ],
        bullets: [
          "A empresa evita enviar o link do site para clientes importantes",
          "O visual não corresponde ao nível do serviço prestado",
          "A experiência no celular é pior que no computador",
          "O carregamento é lento em conexões móveis",
          "Não existe caminho claro para contato ou orçamento",
          "O conteúdo está desatualizado ou incompleto",
          "O site não aparece no Google para os termos do negócio",
          "Não há cases, provas ou resultados apresentados",
          "Nenhuma métrica de visitas ou conversão é acompanhada",
          "Qualquer alteração depende de terceiros e demora semanas",
        ],
      },
      {
        heading: "O custo invisível de esperar",
        paragraphs: [
          "Cada mês com um site defasado é um mês de leads perdidos silenciosamente. Não existe registro dos visitantes que saíram sem entrar em contato.",
          "A renovação começa por diagnóstico: entender o que o site precisa comunicar, para quem, e qual decisão ele deve provocar.",
        ],
      },
    ],
  },
  {
    slug: "como-um-bom-site-aumenta-a-confianca-do-cliente",
    title: "Como um bom site aumenta a confiança do cliente",
    excerpt:
      "Os sinais visuais e estruturais que fazem um visitante decidir se vale a pena continuar.",
    category: "design",
    readMinutes: 5,
    date: "2025-02-14",
    intro:
      "A decisão de confiar acontece antes da leitura. Em poucos segundos, o visitante avalia coerência visual, clareza e cuidado — e usa isso como proxy da qualidade do seu serviço.",
    sections: [
      {
        heading: "Os sinais que geram confiança",
        paragraphs: [
          "Confiança digital é construída por consistência: tipografia legível, espaçamento generoso, hierarquia clara e ausência de ruído.",
        ],
        bullets: [
          "Identidade visual coerente em todas as páginas",
          "Textos objetivos, sem promessas vagas",
          "Provas reais: cases, números verificáveis e depoimentos",
          "Informação de contato, endereço e canais visíveis",
          "Velocidade de carregamento e navegação previsível",
        ],
      },
      {
        heading: "O que destrói confiança",
        paragraphs: [
          "Imagens genéricas de banco, textos inflados, elementos desalinhados, formulários longos e qualquer sinal de improviso técnico.",
          "Cada atrito reduz a disposição do visitante em continuar — e ele raramente avisa que desistiu.",
        ],
      },
      {
        heading: "Design como argumento comercial",
        paragraphs: [
          "Quando a experiência transmite domínio e cuidado, o preço deixa de ser o primeiro assunto da conversa. O site passa a defender o valor da marca antes do vendedor.",
        ],
      },
    ],
  },
  {
    slug: "o-site-como-ativo-estrategico",
    title: "O site como ativo estratégico da empresa",
    excerpt:
      "Um site bem construído deixa de ser custo e passa a ser um dos ativos mais valiosos da operação comercial.",
    category: "sites",
    readMinutes: 6,
    date: "2025-01-30",
    intro:
      "Existe uma diferença contábil e prática entre despesa e ativo. Despesa se consome; ativo produz ao longo do tempo. Um site bem projetado pertence à segunda categoria.",
    sections: [
      {
        heading: "Por que é um ativo",
        paragraphs: [
          "Ele trabalha continuamente: recebe buscas orgânicas, apresenta a empresa, qualifica interessados e sustenta o posicionamento de preço sem custo marginal por visita.",
          "Com o tempo, o histórico de indexação e a autoridade acumulada tornam esse ativo mais difícil de replicar por concorrentes.",
        ],
        bullets: [
          "Aquisição orgânica com custo decrescente",
          "Percepção de marca que sustenta margem",
          "Qualificação de leads antes do contato humano",
          "Dados de comportamento para decisões comerciais",
        ],
      },
      {
        heading: "Como medir o retorno",
        paragraphs: [
          "Acompanhe visitas qualificadas, taxa de contato, origem dos leads e valor médio dos negócios fechados a partir do canal digital.",
          "Sem medição, o site volta a ser tratado como despesa — porque ninguém consegue provar o que ele produziu.",
        ],
      },
      {
        heading: "A decisão estratégica",
        paragraphs: [
          "Empresas que tratam o site como ativo investem em fundação: estratégia, design autoral, performance e evolução contínua. Empresas que tratam como despesa compram o mais barato a cada três anos.",
        ],
      },
    ],
  },
  {
    slug: "branding-alto-padrao",
    title: "Branding para empresas de alto padrão",
    excerpt:
      "Como uma empresa sai de uma imagem genérica para um posicionamento premium — na prática, com decisões visuais, editoriais e comerciais.",
    category: "design",
    readMinutes: 8,
    date: "2025-04-18",
    intro:
      "Posicionamento premium não é resultado de um logotipo novo. É a consequência de coerência: o que a marca mostra, como escreve, o que escolhe não fazer e o quanto disso se sustenta em cada ponto de contato digital.",
    sections: [
      {
        heading: "O que separa uma marca genérica de uma marca de alto padrão",
        paragraphs: [
          "Marcas genéricas comunicam categoria — dizem o que fazem. Marcas de alto padrão comunicam critério: mostram como fazem, para quem, e por que isso custa o que custa.",
          "Na prática, a diferença aparece em três camadas: autoridade visual, tom editorial e valor percebido. Quando uma delas destoa, a percepção cai para o nível do elo mais fraco.",
        ],
      },
      {
        heading: "Autoridade visual",
        paragraphs: [
          "Autoridade visual vem de disciplina, não de ornamento. Menos elementos, mais intenção: um sistema tipográfico definido, uma paleta curta, espaçamento generoso e uso consistente de imagens próprias.",
          "Fotografia genérica de banco de imagens é o sinal mais rápido de queda de percepção. Registro real da operação, dos produtos e da equipe vale mais do que qualquer render impecável.",
        ],
        bullets: [
          "Uma tipografia de destaque e uma de leitura — nada além disso",
          "Paleta reduzida, com um único acento de marca",
          "Espaço em branco tratado como recurso, não como sobra",
          "Imagens autorais e padronizadas em enquadramento e tratamento",
          "Consistência entre site, propostas, redes e materiais impressos",
        ],
      },
      {
        heading: "Tom editorial",
        paragraphs: [
          "Marcas premium escrevem com precisão e economia. Adjetivos superlativos sem prova reduzem credibilidade; números, processos e critérios aumentam.",
          "Troque promessas vagas por afirmações verificáveis. 'Atendimento excepcional' não convence; 'resposta em até quatro horas úteis, com um responsável nomeado por projeto' convence.",
        ],
      },
      {
        heading: "Valor percebido",
        paragraphs: [
          "Valor percebido é construído por evidência acumulada: cases com contexto e resultado, transparência de processo, clareza de escopo e ausência de atrito na experiência digital.",
          "Empresas que sustentam preço acima da média normalmente explicam melhor o próprio método. O cliente não paga apenas pelo entregável — paga pela previsibilidade de como chegar até ele.",
        ],
        bullets: [
          "Cases estruturados: situação, decisão, execução, resultado",
          "Processo publicado, com etapas e prazos",
          "Escopo explícito, incluindo o que não está incluído",
          "Prova social específica, com nome, empresa e contexto",
        ],
      },
      {
        heading: "Como conduzir a transição",
        paragraphs: [
          "A migração de imagem genérica para posicionamento premium funciona melhor em ordem: primeiro definir o critério e o público, depois o sistema visual, em seguida o conteúdo e por último os canais.",
          "Inverter essa ordem produz o erro mais comum do mercado: um visual bonito sobre uma proposta indefinida. O design amplifica o que já existe — inclusive a falta de clareza.",
        ],
      },
      {
        heading: "Erros que derrubam a percepção",
        paragraphs: [
          "Alguns detalhes custam mais caro do que parecem, porque contradizem o discurso de excelência exatamente no momento da avaliação.",
        ],
        bullets: [
          "Site lento ou instável no celular",
          "Materiais com identidades visuais diferentes entre si",
          "Descontos frequentes, que ensinam o mercado a esperar promoção",
          "Textos escritos para agradar todos os públicos ao mesmo tempo",
          "Ausência de qualquer prova concreta de resultado",
        ],
      },
    ],
  },
];


export const processSteps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos o seu negócio, o público, a operação atual e o objetivo do projeto." },
  { n: "02", title: "Estratégia", desc: "Planejamos a melhor solução — posicionamento, prioridades e caminhos de conversão." },
  { n: "03", title: "Arquitetura", desc: "Organizamos toda a estrutura do site: páginas, fluxos e hierarquia de informação." },
  { n: "04", title: "UX/UI", desc: "Criamos uma experiência premium, com design exclusivo, tipografia impecável e interações refinadas." },
  { n: "05", title: "Desenvolvimento", desc: "Transformamos o projeto em realidade — código limpo, performance e SEO desde a fundação." },
  { n: "06", title: "Testes", desc: "Garantimos qualidade, responsividade e desempenho em todos os dispositivos e cenários." },
  { n: "07", title: "Publicação", desc: "Seu novo site entra no ar com domínio, SSL, analytics e monitoramento configurados." },
  { n: "08", title: "Suporte", desc: "Acompanhamos a evolução do projeto com melhorias contínuas e ajustes planejados." },
];

export const differentiators = [
  { title: "Estratégia antes do design", desc: "Toda decisão visual nasce de uma decisão estratégica." },
  { title: "Design exclusivo", desc: "Nunca usamos templates. Cada projeto é desenhado do zero." },
  { title: "Alta performance", desc: "Sites leves, rápidos e otimizados para conversão real." },
  { title: "SEO desde a estrutura", desc: "Semântica, arquitetura e Core Web Vitals na fundação." },
  { title: "Foco em conversão", desc: "Cada seção é pensada para gerar oportunidade comercial." },
  { title: "Responsividade completa", desc: "Experiência impecável de desktop a celular." },
  { title: "Código limpo", desc: "Base técnica organizada, escalável e fácil de evoluir." },
  { title: "Experiência premium", desc: "Detalhes, microinterações e transições cuidadosamente construídas." },
];

/**
 * Casos reais associados a cada serviço.
 * Usado nas páginas /servicos/$slug para provar entrega com projetos publicados.
 */
export const serviceCases: Record<string, string[]> = {
  "sites-institucionais": ["serra-seguros", "meneseg", "daros-lunettes"],
  "landing-pages": ["meneseg", "serra-seguros"],
  "redesign-de-sites": ["serra-seguros"],
  "ui-ux-design": ["daros-lunettes", "serra-seguros"],
  seo: ["serra-seguros", "daros-lunettes"],
  "integracao-whatsapp": ["meneseg", "daros-lunettes", "serra-seguros"],
  "formularios-inteligentes": ["meneseg", "daros-lunettes"],
  "consultoria-digital": ["daros-lunettes", "meneseg"],
  "otimizacao-performance": ["serra-seguros"],
};

export function getServiceCases(serviceSlug: string) {
  const slugs = serviceCases[serviceSlug] ?? [];
  return slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p) && p!.status === "case");
}
