import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Menu,
  Navigation,
  Server,
  X,
} from 'lucide-react';
import './style.css';
import { links } from './profile';

const projects = [
  {
    id: 'emergencia',
    name: 'Emergência Brasil',
    category: 'WEB · FULL STACK',
    description:
      'Um jogo de gestão de emergências em cidades brasileiras, com bases, equipes e ocorrências em um mapa interativo.',
    tech: ['React', 'TypeScript', 'MapLibre', 'NestJS', 'Prisma', 'TWA'],
    details:
      'O frontend usa React e TypeScript, com mapa interativo em MapLibre. A API combina NestJS e Prisma. No jogo, o jogador posiciona e evolui bases, monta equipes, despacha viaturas e acompanha as ocorrências. Quando necessário, pode autorizar transferências de pacientes para hospitais. A economia usa dinheiro e ouro, e a progressão inclui experiência, tarefas e eventos. No Android, o app usa Trusted Web Activity (TWA).',
  },
  {
    id: 'essa-vai',
    name: 'Essa Vai',
    category: 'MOBILE · FULL STACK',
    description:
      'Um app para motoristas de aplicativo avaliarem uma corrida antes de aceitá-la.',
    tech: ['React Native', 'TypeScript', 'NestJS'],
    details:
      'O aplicativo e o backend usam armazenamento local, sincronização de dados e regras para avaliar as corridas. A ideia veio de uma necessidade prática e me permitiu aprender enquanto desenvolvia.',
  },
  {
    id: 'workspace',
    name: 'Workspace',
    category: 'WEB · FULL STACK',
    description:
      'Uma plataforma para organizar rotina de trabalho, calendário, notas e fechamento salarial mensal.',
    tech: ['React', 'TypeScript', 'NestJS', 'Prisma', 'pnpm', 'Turborepo'],
    details:
      'O Workspace reúne calendário de dias trabalhados, configuração de salários por local, resumo mensal e bloco de notas por usuário. A aplicação é um monorepo com pnpm e Turborepo, com frontend em React e API em NestJS.',
    repository: 'https://github.com/victorcomando/Workspace',
  },
];

const experience = [
  {
    title: 'Agente de Monitoramento CFTV',
    company: 'Empresa confidencial',
    confidential: true,
    period: 'Fev 2026 — atual',
    description:
      'Acompanho sistemas de CFTV, analiso eventos em tempo real e registro e gerencio ocorrências.',
    kind: 'Experiência profissional',
  },
  {
    title: 'Consultor de Vendas',
    company: 'Empresa confidencial',
    confidential: true,
    period: 'Ago 2024 — Nov 2024',
    description:
      'Atendi clientes, apresentei produtos e ajudei a manter o salão de vendas organizado.',
    kind: 'Experiência profissional',
  },
  {
    title: 'Atendente de SAC',
    company: 'Empresa confidencial',
    confidential: true,
    period: 'Mar 2023 — Mar 2024',
    description:
      'Prestei suporte para clientes de Wi-Fi residencial e TV por assinatura, identificando problemas e orientando soluções.',
    kind: 'Experiência profissional',
  },
  {
    title: 'Linux e servidores',
    company: 'Projetos pessoais',
    period: 'Prática contínua',
    description:
      'Configuro ambientes Linux, serviços de rede e aplicações em servidor. Investigo falhas com leitura de logs e ajustes de configuração.',
    kind: 'Prática técnica',
  },
];

const skills = [
  {
    icon: <Code2 />,
    title: 'Frontend',
    text: 'Interfaces web e componentes',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: <BriefcaseBusiness />,
    title: 'Backend',
    text: 'Serviços e APIs REST',
    items: ['Node.js', 'NestJS'],
  },
  {
    icon: <Database />,
    title: 'Banco de dados',
    text: 'Consultas e persistência SQL',
    items: ['SQL', 'SQLite', 'MariaDB', 'MySQL'],
  },
  {
    icon: <Server />,
    title: 'Ferramentas',
    text: 'Desenvolvimento e versionamento',
    items: ['Git', 'GitHub', 'pnpm', 'Vite', 'Linux'],
  },
];

function ContactLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === 'workspace') {
    return (
      <div className="project-visual workspace-visual">
        <img
          src={`${import.meta.env.BASE_URL}workspace-preview.png`}
          alt="Painel do Workspace com resumo salarial, próximos trabalhos e calendário"
        />
      </div>
    );
  }

  if (id === 'emergencia') {
    return (
      <div
        className="project-visual emergency-preview"
        role="img"
        aria-label="Captura do Emergência Brasil com mapa do país, saldo e navegação por bases e ocorrências"
      >
        <div className="emergency-screen">
          <img src={`${import.meta.env.BASE_URL}emergencia-brasil-preview.jpg`} alt="" />
        </div>
        <div className="emergency-copy">
          <span>MAPA INTERATIVO</span>
          <strong>
            Emergências
            <br />
            em todo o Brasil<span>.</span>
          </strong>
          <small>Mapa do Brasil e gerenciamento de ocorrências.</small>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual mobile-visual">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-brand">
          <Navigation size={17} /> essa vai<span>.</span>
        </div>
        <div className="phone-route">
          <span />
          <i />
          <span />
        </div>
        <div className="phone-card">
          <small>Uma decisão mais informada</small>
          <strong>
            Essa corrida
            <br />
            vale a pena?
          </strong>
          <div className="phone-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span>
            Analisar oferta <ArrowRight size={13} />
          </span>
        </div>
      </div>
      <div className="mobile-copy">
        <span>MENOS DÚVIDA.</span>
        <strong>
          Mais clareza
          <br />
          na próxima
          <br />
          corrida<span>.</span>
        </strong>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const project = projects.find((item) => item.id === selected);
  const navigation = [
    ['projetos', 'Projetos'],
    ['sobre', 'Sobre mim'],
    ['experiencia', 'Experiência'],
    ['como-desenvolvo', 'Como desenvolvo'],
  ];

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      element.setAttribute('data-reveal-ready', 'true');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <header>
        <div className="nav-wrap">
          <a className="logo" href="#inicio" aria-label="Victor Comando, início">
            vc<span>.</span>
            <span className="logo-slash">/</span>
          </a>
          <nav className={menu ? 'open' : ''} aria-label="Navegação principal">
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a className="nav-contact" href="#contato" onClick={() => setMenu(false)}>
              Vamos conversar <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero container" id="inicio">
          <div className="hero-top">
            <span className="eyebrow">
              <i /> EM BUSCA DE NOVAS OPORTUNIDADES
            </span>
            <span className="hero-index">PORTFÓLIO / 2026</span>
          </div>
          <div className="hero-content">
            <div>
              <p className="intro">Olá, eu sou Victor Comando.</p>
              <h1>
                Aprendo
                <br />
                construindo
                <br />
                <span>projetos.</span>
              </h1>
              <p className="hero-description">
                Estudo Engenharia de Software e desenvolvo projetos web e backend. Minha
                experiência também passa por suporte ao cliente e monitoramento de sistemas.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projetos">
                  Ver projetos <ArrowUpRight size={19} />
                </a>
                <a className="text-link" href="#experiencia">
                  Minha experiência <ArrowRight size={17} />
                </a>
              </div>
            </div>
            <div className="code-art" aria-hidden="true">
              <div className="code-top">
                <span />
                <span />
                <span />
                <small>sobre-mim.ts</small>
              </div>
              <div className="code-body">
                <p>
                  <b>const</b> desenvolvedor = {'{'}
                </p>
                <p>&nbsp; nome: <em>'Victor Comando'</em>,</p>
                <p>
                  &nbsp; foco: [<em>'web'</em>, <em>'backend'</em>],
                </p>
                <p>
                  &nbsp; aprendendo: <b>true</b>,
                </p>
                <p>
                  &nbsp; método: <em>'aprender na prática'</em>
                </p>
                <p>{'}'};</p>
                <br />
                <p className="code-comment">// Aprendendo com cada projeto.</p>
                <p>
                  desenvolvedor.<strong>continuarAprendendo</strong>();
                </p>
              </div>
              <div className="code-footer">
                <span>TypeScript</span>
                <span>↳ em desenvolvimento</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              REACT <i /> TYPESCRIPT <i /> NODE.JS <i /> NESTJS
            </span>
            <a href="#projetos">
              Ver projetos <ArrowDown size={16} />
            </a>
          </div>
        </section>

        <section className="projects container" id="projetos">
          <div className="section-heading">
            <div>
              <p className="eyebrow muted">01 / PROJETOS</p>
              <h2>
                Projetos que tenho desenvolvido<span>.</span>
              </h2>
            </div>
            <p>Tenho usado esses projetos para aprender na prática.</p>
          </div>
          <div className="project-grid">
            {projects.map((item, index) => (
              <article className="project-card" key={item.id} data-reveal>
                <ProjectVisual id={item.id} />
                <div className="project-info">
                  <div className="project-category">
                    <span>{item.category}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  {item.repository ? (
                    <a
                      className="project-more"
                      href={item.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositório <ArrowUpRight size={19} />
                    </a>
                  ) : (
                    <button className="project-more" onClick={() => setSelected(item.id)}>
                      Conhecer o projeto <ArrowUpRight size={19} />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="experiments" data-reveal>
            <div className="experiment-icon">
              <FlaskConical size={25} />
            </div>
            <div>
              <h3>Também exploro projetos menores.</h3>
              <p>
                Neles, experimento com APIs, sistemas administrativos, automações, jogos e
                testes de conceito.
              </p>
            </div>
            <ContactLink href={links.github} className="text-link">
              Explorar no GitHub
            </ContactLink>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container about-grid" data-reveal>
            <div>
              <p className="eyebrow muted">02 / SOBRE MIM</p>
              <h2>
                Gosto de aprender
                <br />
                <span>construindo.</span>
              </h2>
              <div className="about-signature">
                <Code2 size={23} />
                <span>
                  Victor Comando
                  <small>Estudante de Engenharia de Software · Estácio</small>
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                Estou construindo minha trajetória em desenvolvimento enquanto curso
                Engenharia de Software na Estácio.
              </p>
              <p>
                Nos projetos pessoais, trabalho com React, TypeScript, Node.js e NestJS.
                Também pratico configuração de ambientes Linux, serviços de rede e aplicações
                em servidor.
              </p>
              <p>
                O suporte ao cliente e o monitoramento me ensinaram a investigar problemas,
                registrar ocorrências e explicar soluções com clareza. Busco uma oportunidade
                de estágio ou desenvolvedor júnior para continuar aprendendo em equipe.
              </p>
            </div>
          </div>
        </section>

        <section className="experience container" id="experiencia">
          <div className="section-heading">
            <div>
              <p className="eyebrow muted">03 / EXPERIÊNCIA</p>
              <h2>
                Um pouco da minha trajetória<span>.</span>
              </h2>
            </div>
            <p>Experiências que desenvolvi em atendimento, monitoramento e tecnologia.</p>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.title} data-reveal>
                <div className="experience-meta">
                  <span>{item.kind}</span>
                  <span>{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p className={`experience-company${item.confidential ? ' confidential' : ''}`}>
                  {item.company}
                </p>
                <p className="experience-description">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="confidential-note">
            Os nomes das empresas ficam em sigilo; posso compartilhar esses detalhes em uma
            conversa profissional.
          </p>
        </section>

        <section className="organization-section" id="como-desenvolvo">
          <div className="container organization">
            <div className="section-heading">
              <div>
                <p className="eyebrow muted">04 / COMO DESENVOLVO</p>
                <h2>
                  Módulos com responsabilidades claras<span>.</span>
                </h2>
              </div>
              <p>Uma forma de deixar cada parte mais fácil de entender e manter.</p>
            </div>
            <div className="organization-layout">
              <div className="organization-tree" data-reveal>
                <div className="organization-tree-heading">
                  <span>ESTRUTURA DE UMA FUNCIONALIDADE</span>
                  <span>TypeScript</span>
                </div>
                <pre>
                  <code>{`src/
├── features/
│   ├── ocorrencias/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   └── bases/
├── shared/
│   ├── components/
│   └── lib/
└── app.tsx`}</code>
                </pre>
              </div>
              <div className="organization-copy" data-reveal>
                <p>
                  Gosto de agrupar o código por funcionalidade e separar interface, regras e
                  comunicação com a API. Assim, encontro cada parte com facilidade e consigo
                  evoluir um módulo sem espalhar mudanças pelo projeto.
                </p>
                <div className="organization-principle">
                  <span>01</span>
                  <div>
                    <strong>Funcionalidades próximas</strong>
                    <small>Componentes e tipos ficam junto do recurso a que pertencem.</small>
                  </div>
                </div>
                <div className="organization-principle">
                  <span>02</span>
                  <div>
                    <strong>Responsabilidades separadas</strong>
                    <small>Interface, regras e acesso a dados têm papéis definidos.</small>
                  </div>
                </div>
                <div className="organization-principle">
                  <span>03</span>
                  <div>
                    <strong>Reuso com critério</strong>
                    <small>Compartilho componentes quando eles servem a mais de uma área.</small>
                  </div>
                </div>
                <p className="constants-note">
                  Para constantes usadas pelo app, prefiro TypeScript: mantenho tipos e
                  autocomplete. Uso JSON para dados estáticos simples.
                </p>
              </div>
            </div>
            <div className="skills-subsection" id="tecnologias">
              <div className="section-heading">
                <div>
                  <p className="eyebrow muted">FERRAMENTAS DO DIA A DIA</p>
                  <h2>
                    Tecnologias que tenho praticado<span>.</span>
                  </h2>
                </div>
                <p>Conhecimentos aplicados nos projetos e estudos.</p>
              </div>
              <div className="stack-grid">
                {skills.map((skill) => (
                  <div className="stack-card" key={skill.title} data-reveal>
                    {skill.icon}
                    <h3>{skill.title}</h3>
                    <p>{skill.text}</p>
                    <div className="tags">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact container" id="contato">
          <div data-reveal>
            <p className="eyebrow muted">05 / CONTATO</p>
            <h2>
              Vamos conversar<span>?</span>
            </h2>
            <p>
              Estou disponível para oportunidades de estágio ou desenvolvedor júnior.
              <br />
              Você pode falar comigo por aqui.
            </p>
          </div>
          <div className="contact-links" data-reveal>
            <ContactLink href={links.github} className="contact-card">
              <Github size={24} />
              <span>
                GitHub<small>Código e projetos</small>
              </span>
            </ContactLink>
            <ContactLink href={links.linkedin} className="contact-card">
              <Linkedin size={24} />
              <span>
                LinkedIn<small>Meu perfil profissional</small>
              </span>
            </ContactLink>
            <ContactLink href={`mailto:${links.email}`} className="contact-card">
              <Mail size={24} />
              <span>
                E-mail<small>{links.email}</small>
              </span>
            </ContactLink>
          </div>
        </section>
      </main>
      <footer className="container">
        <a className="logo" href="#inicio">
          vc<span>.</span>
        </a>
        <p>Feito por Victor Comando.</p>
        <span>© {new Date().getFullYear()} Victor Comando</span>
      </footer>

      {project && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
            ref={(node) => node?.focus()}
            tabIndex={-1}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setSelected(null);
            }}
          >
            <button
              autoFocus
              className="modal-close"
              aria-label="Fechar detalhes"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <p className="eyebrow muted">{project.category}</p>
            <h2 id="modal-title">{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.details}</p>
            <div className="tags">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {project.id === 'essa-vai' && (
              <small className="concept-note">
                A prévia de Essa Vai é uma ilustração conceitual, não uma captura do aplicativo.
              </small>
            )}
          </section>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
