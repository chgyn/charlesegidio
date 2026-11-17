/**
 * CHARLES EGIDIO — PORTFOLIO & LANDING PAGE LOGIC
 * Senior Software Engineer · Tech Lead · Full Stack Architect
 */

// ==========================================================================
// 1. PROJECTS DATA STORE (ACCURATE TO RESUME & PDF PORTFOLIO)
// ==========================================================================
const PROJECTS_DATA = {
  'ekko-ai': {
    id: 'ekko-ai',
    title: 'EkkoAI – Atendente de IA para WhatsApp & E-commerce',
    subtitle: 'Workflows de Agentes Autônomos com LangGraph & Integração a WooCommerce e Shopify',
    category: 'ai',
    categoryLabel: 'Inteligência Artificial & Workflows Multi-Agente',
    role: 'Tech Lead / Arquiteto de Software & Engenharia de IA',
    period: '2026 – Presente',
    url: 'https://ekkoai.com.br/',
    stack: ['Python', 'LangGraph (Multi-Agent)', 'OpenAI ChatGPT API', 'FastAPI', 'WhatsApp Cloud API', 'Redis Checkpointing', 'WooCommerce API', 'Shopify API', 'Docker'],
    summary: 'Atendente inteligente de IA orquestrado por workflows de agentes com LangGraph que atua no WhatsApp 24h: gerencia estados conversacionais cíclicos, roteia intenções, consulta estoque dinâmico, monta o carrinho em tempo real e registra o pedido diretamente na loja virtual (WooCommerce ou Shopify).',
    challenge: 'Modelar e orquestrar fluxos conversacionais complexos e não-lineares no WhatsApp, coordenando múltiplos nós de agentes especializados (classificação de intenção, busca semântica em catálogo, validação de regras de negócio, carrinho e checkout) com controle estrito de estado, memória contextual e resiliência a falhas.',
    solutionHighlights: [
      'Workflow multi-agente implementado com LangGraph (StateGraph), dividindo a jornada de vendas em agentes especializados: Roteador de Intenções, Especialista de Catálogo/Produtos, Agente de Carrinho & Frete e Agente de Fechamento de Pedidos.',
      'Controle de estado transacional e persistência com checkpoints no Redis, permitindo que a conversa retome exatamente do ponto onde o usuário parou sem perda de contexto no WhatsApp.',
      'Integração oficial via WhatsApp Cloud API e FastAPI para processamento assíncrono de webhooks em alta escala 24/7 sem bloqueios ou filas de espera.',
      'Sincronização bidirecional em tempo real com WooCommerce e Shopify: checagem de estoque, cálculo de frete, criação de carrinho e geração de pedidos com checkout direto.',
      'Ciclos de auto-correção e fallbacks determinísticos orquestrados pelo grafo de estados do LangGraph para lidar com mensagens ambíguas e exceções de catálogo.'
    ],
    architectureDetails: 'WhatsApp Webhook ➔ FastAPI ➔ LangGraph StateGraph (Intent Router ➔ Catalog Tool Node ➔ Cart & Shipping Agent ➔ Order Creation Node) ➔ Redis Checkpoint Store ➔ E-commerce APIs (WooCommerce / Shopify) ➔ Real-time Conversion Analytics.'
  },

  'hub-fintech': {
    id: 'hub-fintech',
    title: 'Hub Fintech & Internet Banking',
    subtitle: 'Inttegra Card, Inttegra Social, Grupo Itapemirim & +10 Instituições Digitais',
    category: 'fintech',
    categoryLabel: 'Fintech & Banking',
    role: 'Tech Lead / Arquiteto Back-end',
    period: '2019 – 2026',
    stack: [
      'PHP / Laravel',
      'Golang',
      'AWS ECS & ECR',
      'AWS SQS',
      'AWS SES',
      'AWS SSM (Parameter Store)',
      'AWS IAM (Least Privilege)',
      'PostgreSQL (AWS RDS)',
      'Redis',
      'Banking APIs',
      'Inttegra Card Engine',
      'Inttegra Social Hub',
      'Docker',
      'Webhooks'
    ],
    summary: 'Arquitetura e desenvolvimento do ecossistema transacional completo de internet banking, cartões e soluções financeiras integradas para mais de 10 instituições. Abrange o core bancário multitenant e as implementações estratégicas do Inttegra Card (emissão, autorização e ciclo de vida de cartões) e Inttegra Social (ecossistema de pagamentos sociais e distribuição de benefícios), sustentados por uma infraestrutura em nuvem na AWS com alta segurança, mensageria e automação.',
    clients: ['Inttegra Card', 'Inttegra Social', 'Grupo Itapemirim', 'Aprobank', 'STARTech', 'BANKZZ', 'Belobank', '3NK Financial', 'Jeitto', 'Pomelo', 'SimerBank', 'XBank', 'Zoop'],
    challenge: 'Construir uma infraestrutura bancária resiliente de alta disponibilidade e estrita conformidade regulatória, integrando serviços essenciais de core banking (PIX, TED, boletos), o pipeline de autorização e emissão de cartões físicos/virtuais do Inttegra Card e a liquidação em massa de benefícios sociais do Inttegra Social com conciliação contínua, governança estrita de segurança e isolamento de dados.',
    solutionHighlights: [
      'Implementação do Inttegra Card: módulo completo para emissão, gestão de ciclo de vida e processamento de cartões físicos e virtuais, autorização de transações em tempo real, controle de limites e conciliação financeira automatizada.',
      'Implementação do Inttegra Social: plataforma bancária focada em pagamentos sociais e distribuição de benefícios governamentais e corporativos, viabilizando inclusão financeira com rastreabilidade total.',
      'Arquitetura em nuvem na AWS conteinerizada: orquestração de microsserviços via AWS ECS com imagens versionadas no AWS ECR, assegurando auto-scaling e deploys contínuos sem downtime.',
      'Mensageria e resiliência transacional com AWS SQS: filas assíncronas com políticas de Dead-Letter Queue (DLQ) para absorver picos de webhooks, liquidações e autorizações de cartão.',
      'Disparo de notificações transacionais e comprovantes bancários em alta escala e homologados via AWS SES.',
      'Segurança e conformidade bancária: segregação de permissões com AWS IAM (princípio do menor privilégio por container/task) e gerenciamento seguro de credenciais e parâmetros de configuração via AWS SSM (Parameter Store).',
      'Microsserviços concorrentes em Golang para processamento ultraveloz de webhooks de liquidação PIX, conciliações e autorizações.',
      'Core bancário robusto em PHP/Laravel estruturado sob Clean Architecture e Domain-Driven Design (DDD).',
      'Sustentação de mais de 20.000 usuários ativos com isolamento multitenant seguro por instituição parceira e pipelines orientados a eventos com Redis Queues e PostgreSQL.'
    ],
    architectureDetails: 'API Gateway ➔ AWS ECS (Containers via ECR com IAM Roles dedicadas) ➔ AWS SQS Event Queues ➔ Go Concurrency Workers & Laravel Core Banking (Inttegra Card & Social) ➔ Redis Broker & PostgreSQL Cluster (RDS) ➔ AWS SES (Alertas e Comprovantes) ➔ AWS SSM (Configurações e Segredos) ➔ BACEN/CIP & Redes de Cartão.'
  },

  'monefy': {
    id: 'monefy',
    title: 'Monefy – Motor de Crédito & CCB',
    subtitle: 'Plataforma de Crédito Pessoal Online com Análise de Risco em Tempo Real',
    category: 'fintech',
    categoryLabel: 'Fintech & Crédito',
    role: 'Senior Full Stack Engineer',
    period: '2020 – 2022',
    stack: ['Python', 'PHP / Laravel', 'Docker', 'REST APIs', 'Risk Analysis Engine', 'PostgreSQL', 'Redis'],
    summary: 'Plataforma completa de concessão de crédito pessoal online com motor automatizado de score, análise de risco e emissão instantânea de CCBs.',
    challenge: 'Reduzir o tempo de análise de crédito de dias para segundos, mantendo precisão na checagem de birôs e conformidade jurídica na emissão automatizada de Cédulas de Crédito Bancário (CCBs).',
    solutionHighlights: [
      'Desenvolvimento do motor de análise de risco e antifraude com cruzamento automatizado de dados cadastrais e score.',
      'Geração dinâmica de contratos e CCBs com assinatura eletrônica e armazenamento imutável.',
      'Painel gerencial para esteira de propostas, aprovações, simulações em tempo real e réguas de cobrança automatizadas.',
      'Arquitetura conteinerizada em Docker garantindo escalabilidade nos picos de solicitações.'
    ],
    architectureDetails: 'Frontend App / Simulador ➔ Risk Engine API (Python) ➔ Score Analysis ➔ CCB Document Generator ➔ Payment & Billing Webhooks.'
  },

  'mamae-pingo': {
    id: 'mamae-pingo',
    title: 'Mamãe Pingo – IA Cognitiva & Pediátrica',
    subtitle: 'Plataforma Científica com Integração de OpenAI ChatGPT & IBM Watson',
    category: 'ai',
    categoryLabel: 'Inteligência Artificial',
    role: 'Tech Lead & AI Integrator',
    period: '2021 – Presente',
    stack: ['Python', 'OpenAI API (ChatGPT)', 'IBM Watson', 'PHP / Laravel', 'Vue.js / React', 'PostgreSQL', 'Docker'],
    summary: 'Iniciativa comercial e científica que conecta estudos pediátricos e neurodesenvolvimento infantil à Inteligência Artificial conversacional.',
    challenge: 'Orquestrar modelos de linguagem (LLMs) para responder a dúvidas sensíveis de mães e pais garantindo acurácia médica, fundamentação científica e respostas empáticas em tempo real.',
    solutionHighlights: [
      'Engenharia de prompts e base de conhecimento estruturada utilizando IBM Watson e OpenAI ChatGPT.',
      'Sistema de registro e consolidação: diário comportamental, marcos de desenvolvimento e artigos científicos.',
      'Módulo de monetização com controle de assinaturas recorrentes e limites de uso da IA.',
      'Apresentado e prestigiado em feiras acadêmicas e eventos científicos (UFG / Conpeex).'
    ],
    architectureDetails: 'Client App (Vue/React) ➔ AI Orchestrator API (Python/Laravel) ➔ Knowledge Base Index ➔ OpenAI / IBM Watson Engine ➔ Audit & Diary Store.'
  },

  'jeitto': {
    id: 'jeitto',
    title: 'Jeitto – Portal B2B & Microcrédito',
    subtitle: 'Portal de Cobrança e Gestão de Transações para Parceiros Comerciais',
    category: 'platform',
    categoryLabel: 'Plataformas & B2B',
    role: 'Senior Full Stack Engineer',
    period: '2021 – 2023',
    stack: ['PHP / Laravel', 'JavaScript', 'MySQL', 'REST Microservices', 'Tailwind CSS', 'Docker'],
    summary: 'Portal transacional exclusivo para empresas parceiras da Jeitto, permitindo geração de links de pagamento e liquidação via microcrédito.',
    challenge: 'Criar uma experiência fluida para parceiros B2B gerenciarem vendas a prazo e links de pagamento com integração direta aos serviços de crédito do ecossistema Jeitto.',
    solutionHighlights: [
      'Dashboard analítico em tempo real com métricas de parceiros aprovados, pendentes e volume de transações.',
      'Módulo de geração e compartilhamento instantâneo de links de pagamento via microcrédito.',
      'Consolidação financeira automatizada com extrato detalhado de recebíveis.',
      'Arquitetura de microsserviços desacoplada com alta taxa de resposta.'
    ],
    architectureDetails: 'B2B Partner Portal ➔ Laravel Core API ➔ Jeitto Credit Engine ➔ Payment Link Dispatcher ➔ Real-time Dashboard Analytics.'
  },

  'sprylife': {
    id: 'sprylife',
    title: 'Sprylife – Health & Fitness Platform',
    subtitle: 'Plataforma de Gestão de Atletas, Treinos e Conexão com Personal Trainers',
    category: 'platform',
    categoryLabel: 'Plataformas & B2B',
    role: 'Senior Full Stack Engineer',
    period: '2020 – 2021',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Mobile Integrations', 'AWS'],
    summary: 'Solução digital completa para conectar personal trainers a alunos, organizando rotinas de treinos, avaliações físicas e evolução de desempenho.',
    challenge: 'Centralizar a comunicação e acompanhamento de treinos personalizados com interface interativa tanto para o profissional quanto para o aluno.',
    solutionHighlights: [
      'Dashboard gerencial com controle de alunos, planos ativos e questionários de satisfação.',
      'Módulo de montagem dinâmica de treinos e acompanhamento de metas em tempo real.',
      'Sistema de fidelização e divulgação do trabalho de profissionais autônomos de educação física.'
    ],
    architectureDetails: 'Mobile Student App & Web Trainer Dashboard ➔ Laravel API ➔ MySQL Database ➔ Push Notification & Metrics Service.'
  },

  'meetat': {
    id: 'meetat',
    title: 'Meetat – Rede & Marketplace Gastronômico',
    subtitle: 'Rede Social e Guia Comercial para Pessoas com Restrições Alimentares',
    category: 'platform',
    categoryLabel: 'Plataformas & B2B',
    role: 'Full Stack Engineer & Solution Architect',
    period: '2020 – 2021',
    stack: ['PHP / Laravel', 'REST APIs', 'MySQL', 'Mobile API', 'Nginx', 'Docker'],
    summary: 'Plataforma e aplicativo móvel reunindo estabelecimentos, receitas e produtos para pessoas com intolerâncias e restrições alimentares (+1.000 usuários ativos).',
    challenge: 'Construir um catálogo geolocalizado e rede de parceiros comerciais para facilitar o acesso a alimentos seguros (sem glúten, sem lactose, veganos).',
    solutionHighlights: [
      'Catálogo interativo com filtros rigorosos por tipo de restrição e cardápios especializados.',
      'Módulo de marketplace com sacola de compras e pedidos diretos aos estabelecimentos parceiros.',
      'Comunidade ativa com avaliação de produtos e compartilhamento de receitas seguras.'
    ],
    architectureDetails: 'Mobile App ➔ Geolocation & Catalog API ➔ Order Management ➔ Merchant Webhook Notification.'
  },

  'expresso62': {
    id: 'expresso62',
    title: 'Expresso62 – Portal de Notícias & Distribuição',
    subtitle: 'Portal de Alto Tráfego Otimizado para Indexadores e Redes Sociais',
    category: 'content',
    categoryLabel: 'Conteúdo & Web',
    role: 'Solution Architect & Lead Dev',
    period: '2021 – 2022',
    stack: ['PHP / Laravel', 'SEO Engine', 'Redis Caching', 'PostgreSQL', 'Cloudflare CDN'],
    summary: 'Portal de notícias e concentrador de artigos políticos com foco em entrega veloz de conteúdo e máxima probabilidade de indexação orgânica.',
    challenge: 'Garantir tempo de resposta inferior a 200ms sob picos de tráfego orgânico e leitura otimizada para robôs de busca e redes sociais.',
    solutionHighlights: [
      'Otimização avançada de SEO semântico, JSON-LD e metadados OpenGraph.',
      'Estratégia agressiva de cache com Redis e CDN para servir páginas estáticas pré-compiladas.',
      'Painel editorial dinâmico com gestão de colunistas, enquetes e newsletter.'
    ],
    architectureDetails: 'Crawler / Reader Request ➔ Cloudflare Edge ➔ Redis Cache Layer ➔ Laravel Content Renderer ➔ Postgres DB.'
  },

  'us-arquitetura': {
    id: 'us-arquitetura',
    title: '&US Arquitetura – Portfolio Expositivo',
    subtitle: 'Website Expositivo de Alto Padrão Visual para Escritório de Design',
    category: 'content',
    categoryLabel: 'Conteúdo & Web',
    role: 'Full Stack Developer',
    period: '2022',
    stack: ['Modern Web', 'CSS3 Custom Engine', 'Responsive Design', 'Asset Optimization'],
    summary: 'Website institucional desenvolvido para refletir o requinte e a sofisticação de um dos principais escritórios de arquitetura e design contemporâneo.',
    challenge: 'Traduzir a identidade arquitetônica requintada em uma experiência web veloz, com transições refinadas e excelente renderização de fotografias de alta resolução.',
    solutionHighlights: [
      'Design clean e minimalista focado em hierarquia visual, tipografia e espaço negativo.',
      'Otimização de imagens de alta fidelidade sem comprometer o tempo de carregamento.',
      'Extensão digital da marca com alto engajamento de novos clientes.'
    ],
    architectureDetails: 'Static High-Performance Web ➔ Optimized Visual Assets ➔ Responsive Layout Engine.'
  }
};

// ==========================================================================
// 2. ARCHITECTURE INTERACTIVE PIPELINE DATA
// ==========================================================================
const ARCH_STAGES = {
  'gateway': {
    title: 'API Gateway & Security Layer',
    badge: 'Camada de Entrada',
    desc: 'Ponto único de entrada com terminação TLS, mTLS para parceiros bancários, validação JWT, rate limiting dinâmico por IP/Token e proteção contra requisições maliciosas.',
    specs: [
      'Autenticação JWT & OAuth2 com mTLS bancário',
      'Rate Limiting com token bucket no Redis',
      'CORS rigoroso & WAF integrado',
      'Roteamento dinâmico para microsserviços'
    ],
    code: `// Exemplo: Middleware de Rate Limiting & Auth
func SecurityGateway(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if !ValidateJWT(token) {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        if !RateLimiter.Allow(r.RemoteAddr) {
            http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
            return
        }
        next.ServeHTTP(w, r)
    })
}`
  },

  'microservices': {
    title: 'Microsserviços & Concorrência (Go / Laravel / Python)',
    badge: 'Core Transacional',
    desc: 'Arquitetura modular desacoplada. Golang para serviços de altíssima concorrência e webhooks; PHP/Laravel para regras de domínio de core bancário e cartões; Python/FastAPI para análise de crédito e orquestração de IA.',
    specs: [
      'Clean Architecture & Domain-Driven Design (DDD)',
      'Goroutines e channels para processamento paralelo',
      'APIs RESTful e gRPC para comunicação inter-serviços',
      'Validações transacionais ACID e idempotência'
    ],
    code: `// Exemplo: Worker Concorrente em Go para PIX
type PixProcessor struct {
    jobs chan PixWebhookPayload
}

func (p *PixProcessor) StartWorkerPool(workers int) {
    for i := 0; i < workers; i++ {
        go func(workerID int) {
            for payload := range p.jobs {
                p.ProcessTransaction(payload)
            }
        }(i)
    }
}`
  },

  'messaging': {
    title: 'Event Bus & Mensageria Assíncrona (Redis / Queues)',
    badge: 'Desacoplamento & Filas',
    desc: 'Garante que operações pesadas (como emissão de CCBs em PDF, notificações push, conciliação e chamadas a birôs de crédito) não bloqueiem as respostas HTTP do usuário.',
    specs: [
      'Redis Streams & Pub/Sub para eventos em tempo real',
      'Filas com políticas de Retry exponencial e Dead Letter Queues',
      'Processamento de webhooks com garantia de entrega',
      'Desacoplamento total entre ingestão e processamento'
    ],
    code: `// Laravel Event-Driven Job Dispatch
class ProcessBankingWebhook implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $tries = 5;
    public $backoff = [10, 30, 60];

    public function handle(BankingCoreService $core): void {
        $core->reconcileTransaction($this->transactionId);
    }
}`
  },

  'storage': {
    title: 'Bancos de Dados & Caching Estruturado',
    badge: 'Persistência & Alta Disponibilidade',
    desc: 'Modelagem relacional para dados financeiros com integridade referencial estrita no PostgreSQL/MySQL, aliada a cache distribuído em Redis para leituras sub-milissegundo.',
    specs: [
      'PostgreSQL com particionamento de tabelas de extrato',
      'Redis Caching para saldo consolidado e sessões',
      'Migrações automatizadas e versionadas',
      'Backups contínuos e replicação Read-Replica na AWS'
    ],
    code: `-- Exemplo: Lock Otimista & Transação Segura
BEGIN TRANSACTION;
SELECT saldo FROM contas_correntes 
WHERE id = :conta_id FOR UPDATE;

INSERT INTO lancamentos (conta_id, tipo, valor, created_at)
VALUES (:conta_id, 'PIX_OUT', :valor, NOW());

UPDATE contas_correntes 
SET saldo = saldo - :valor 
WHERE id = :conta_id;
COMMIT;`
  },

  'integrations': {
    title: 'Integrações Externas (Bancos, IA & Cloud)',
    badge: 'Ecossistema & Terceiros',
    desc: 'Comunicação resiliente com APIs do BACEN (PIX SPI), CIP (TED/DOC), emissoras de cartões, gateways de pagamento e provedores de Inteligência Artificial (OpenAI / IBM Watson).',
    specs: [
      'Circuit Breaker pattern para APIs bancárias instáveis',
      'Integração OpenAI API (ChatGPT) & IBM Watson',
      'Orquestração AWS (EC2, S3, RDS, Lambda)',
      'Monitoramento de latência e métricas em tempo real'
    ],
    code: `// Chamada com Retry & Fallback
async function askPediatricAI(prompt, context) {
    try {
        const response = await openAI.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: PEDIATRIC_GUARD_PROMPT },
                { role: "user", content: prompt }
            ]
        });
        return response.choices[0].message.content;
    } catch (err) {
        return fallbackWatsonEngine(prompt);
    }
}`
  }
};

// ==========================================================================
// 3. INITIALIZATION & DOM LOGIC
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackgroundCanvas();
  initMetricsCounter();
  initSpotlightEffect();
  initArchitectureVisualizer();
  initProjectsFilter();
  initProjectModal();
  initEmailCopy();
  initContactForm();
});

/* Navbar & Scroll Spy */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateScrollSpy();
  });

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      const isOpen = navLinksContainer.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // Scroll spy helper
  function updateScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* Subtle Interactive Background Canvas */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = Math.min(Math.floor(width / 35), 45);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw and update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* Animated Metrics Counter */
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll('.metric-number[data-target]');
  if (!metricNumbers.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          animateNumber(el, target, prefix, suffix);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  metricNumbers.forEach(num => observer.observe(num));

  function animateNumber(el, target, prefix, suffix) {
    let current = 0;
    const duration = 1600;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.innerHTML = `${prefix}${Math.floor(current).toLocaleString('pt-BR')}<span>${suffix}</span>`;
    }, stepTime);
  }
}

/* Spotlight Glow Effect for Cards */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.bento-card, .project-card, .metric-card, .timeline-card, .community-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* Interactive Architecture Visualizer */
function initArchitectureVisualizer() {
  const tabBtns = document.querySelectorAll('.arch-tab-btn');
  const pipelineNodes = document.querySelectorAll('.pipeline-node');
  const detailTitle = document.getElementById('arch-detail-title');
  const detailBadge = document.getElementById('arch-detail-badge');
  const detailDesc = document.getElementById('arch-detail-desc');
  const detailSpecs = document.getElementById('arch-detail-specs');
  const detailCode = document.getElementById('arch-detail-code');

  function setArchStage(stageKey) {
    const data = ARCH_STAGES[stageKey];
    if (!data) return;

    // Update buttons & nodes active state
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-stage') === stageKey);
    });
    pipelineNodes.forEach(node => {
      node.classList.toggle('selected', node.getAttribute('data-stage') === stageKey);
    });

    // Update panel
    if (detailTitle) detailTitle.textContent = data.title;
    if (detailBadge) detailBadge.textContent = data.badge;
    if (detailDesc) detailDesc.textContent = data.desc;
    if (detailCode) detailCode.textContent = data.code;

    if (detailSpecs) {
      detailSpecs.innerHTML = data.specs
        .map(
          spec => `
        <li class="arch-spec-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${spec}</span>
        </li>
      `
        )
        .join('');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage');
      setArchStage(stage);
    });
  });

  pipelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const stage = node.getAttribute('data-stage');
      setArchStage(stage);
    });
  });
}

/* Portfolio Filters */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => (card.style.opacity = '1'), 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => (card.style.display = 'none'), 200);
        }
      });
    });
  });
}

/* Project Detail Modal */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const projectCards = document.querySelectorAll('.project-card[data-project-id]');

  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalRole = document.getElementById('modal-role');
  const modalPeriod = document.getElementById('modal-period');
  const modalSummary = document.getElementById('modal-summary');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalStack = document.getElementById('modal-stack');
  const modalClientsBox = document.getElementById('modal-clients-box');
  const modalClients = document.getElementById('modal-clients');
  const modalArchDetails = document.getElementById('modal-arch-details');
  const modalLinkBox = document.getElementById('modal-link-box');
  const modalSiteLink = document.getElementById('modal-site-link');
  const modalActionBox = document.getElementById('modal-action-box');
  const modalActionLink = document.getElementById('modal-action-link');

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modalOverlay) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalRole) modalRole.textContent = data.role;
    if (modalPeriod) modalPeriod.textContent = data.period;
    if (modalSummary) modalSummary.textContent = data.summary;
    if (modalChallenge) modalChallenge.textContent = data.challenge;
    if (modalArchDetails) modalArchDetails.textContent = data.architectureDetails;

    // Handle project external link
    if (data.url) {
      if (modalLinkBox && modalSiteLink) {
        modalLinkBox.style.display = 'block';
        modalSiteLink.href = data.url;
        modalSiteLink.textContent = data.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      }
      if (modalActionBox && modalActionLink) {
        modalActionBox.style.display = 'block';
        modalActionLink.href = data.url;
        modalActionLink.querySelector('span').textContent = `Acessar Website Oficial (${data.url.replace(/^https?:\/\//, '').replace(/\/$/, '')})`;
      }
    } else {
      if (modalLinkBox) modalLinkBox.style.display = 'none';
      if (modalActionBox) modalActionBox.style.display = 'none';
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = data.solutionHighlights
        .map(item => `<li>${item}</li>`)
        .join('');
    }

    if (modalStack) {
      modalStack.innerHTML = data.stack
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('');
    }

    if (modalClientsBox && modalClients) {
      if (data.clients && data.clients.length > 0) {
        modalClientsBox.style.display = 'block';
        modalClients.innerHTML = data.clients
          .map(c => `<span class="tech-chip">${c}</span>`)
          .join('');
      } else {
        modalClientsBox.style.display = 'none';
      }
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openModal(pid);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* Copy Email to Clipboard */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.btn-copy-email');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'charlesegidio@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('E-mail copiado para a área de transferência!');
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

/* Static Contact Form Handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const subject = document.getElementById('contact-subject')?.value || 'Contato Profissional via Landing Page';
    const message = document.getElementById('contact-message')?.value || '';

    const mailtoBody = encodeURIComponent(`Olá Charles,\n\nMeu nome é ${name}.\n\n${message}\n\nEnviado através do site oficial.`);
    const mailtoSubject = encodeURIComponent(subject);

    window.location.href = `mailto:charlesegidio@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  });
}
