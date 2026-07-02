import React from 'react';

const assets = {
  heroVideo: '/assets/hero-field.mp4',
  avatar: '/assets/chillguy.JPG',
  knowledgeGraph: '/assets/knowledge-graph.png',
  news: '/assets/project-news.png',
  lung: '/assets/project-lung.png',
  tactile: '/assets/project-tactile.png',
};

const metrics = [
  { value: '4+', label: 'research tracks' },
  { value: '2', label: 'accepted papers' },
  { value: '3', label: 'deployed APIs' },
  { value: '1', label: 'medical AI internship' },
];

const projects = [
  {
    title: 'Extended-Vocabulary LLM News Recommendation',
    type: 'LLM Recommendation',
    image: assets.news,
    summary:
      'Encode news as learnable vocabulary tokens, align similar news in latent space, and reduce long-context pressure in LLM-based user interest modeling.',
    tags: ['LLM', 'Recommendation', 'Contrastive Learning'],
  },
  {
    title: 'Skill-Point Knowledge Graph',
    type: 'Knowledge Graph System',
    image: assets.knowledgeGraph,
    summary:
      'Build semantic matching among resumes, job requirements, and university training plans through LLM-NER, ontology design, and backend services.',
    tags: ['Knowledge Graph', 'NER', 'Django / Flask'],
  },
  {
    title: 'Sound-DeiT Respiratory Abnormality Detection',
    type: 'Medical AI',
    image: assets.lung,
    summary:
      'Transform lung sounds into spectrograms and classify respiratory abnormalities with a dual-token Transformer and periodic positional encoding.',
    tags: ['Transformer', 'PyTorch', 'Healthcare'],
  },
  {
    title: 'Tactile Material Classification',
    type: 'Robotic Perception',
    image: assets.tactile,
    summary:
      'Extract hybrid features from tactile kinematic signals and build lightweight models for material recognition in robotic perception tasks.',
    tags: ['Tactile Sensing', 'Feature Engineering', 'Robotics'],
  },
];

const strengths = [
  {
    title: 'LLM Systems',
    text: 'Experience with prompt-based NER, Llama fine-tuning, vocabulary expansion, retrieval skills, and fast/slow reasoning workflow design.',
  },
  {
    title: 'Multimodal Modeling',
    text: 'Hands-on practice across tactile signals, lung sounds, infrared vision, VLM baselines, video understanding interests, and medical AI scenarios.',
  },
  {
    title: 'Research Execution',
    text: 'Comfortable moving from paper reading and dataset processing to model training, ablation studies, writing, and reproducible experiments.',
  },
  {
    title: 'Engineering Delivery',
    text: 'Able to turn research prototypes into usable APIs and demos with Python, PyTorch, Linux, Django, Flask, LaTeX, Markdown, Cursor, and Codex.',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
    </svg>
  );
}

function Header() {
  const links = [
    ['Profile', '#profile'],
    ['Projects', '#projects'],
    ['Strengths', '#strengths'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Back to top">
        <span className="brand-mark">YT</span>
        <span>Yang Taoming</span>
      </a>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="mailto:buaaytm@buaa.edu.cn">
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <video className="hero-video" src={assets.heroVideo} autoPlay muted loop playsInline />
      <div className="hero-noise" aria-hidden="true" />
      <Header />
      <div className="hero-content">
        <p className="identity">AI Algorithm Engineer</p>
        <h1>
          Building intelligent systems that understand knowledge, signals, and
          multimodal worlds.
        </h1>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            View projects <ArrowIcon />
          </a>
          <a className="secondary-action" href="mailto:buaaytm@buaa.edu.cn">
            buaaytm@buaa.edu.cn
          </a>
        </div>
      </div>
      <div className="hero-meta">
        <span>Beihang University</span>
        <span>Automation</span>
        <span>LLM · KG · Multimodal AI</span>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="profile section-shell" id="profile">
      <div className="profile-media">
        <img src={assets.avatar} alt="Yang Taoming avatar" />
      </div>
      <div className="profile-copy">
        <p className="section-kicker">Profile</p>
        <h2>From knowledge graphs to multimodal intelligence.</h2>
        <p>
          I am Yang Taoming, an undergraduate student in Automation at Beihang
          University. My work focuses on knowledge graphs, large language models,
          recommendation systems, medical AI, and multimodal perception. I care
          about building AI systems that can be researched rigorously and shipped
          as usable products.
        </p>
        <div className="contact-lines">
          <a href="mailto:buaaytm@buaa.edu.cn">buaaytm@buaa.edu.cn</a>
          <a href="tel:+8615385124350">+86 15385124350</a>
          <span>Beijing · Hefei · Open to research collaboration</span>
        </div>
      </div>
      <div className="metrics" aria-label="Project data">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-shell projects-intro">
        <p className="section-kicker">Selected Projects</p>
        <h2>Research prototypes with system intent.</h2>
      </div>
      <div className="project-grid section-shell">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} visual`} />
            </div>
            <div className="project-info">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="strengths section-shell" id="strengths">
      <div className="strengths-heading">
        <p className="section-kicker">Strengths</p>
        <h2>What I bring into AI research and engineering.</h2>
      </div>
      <div className="strength-grid">
        {strengths.map((item) => (
          <article className="strength-card" key={item.title}>
            <div className="strength-icon">
              <SparkIcon />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-end" id="contact">
      <div className="contact-inner">
        <p className="section-kicker">Contact</p>
        <h2>Let us build something with signal, structure, and taste.</h2>
        <div className="contact-actions">
          <a className="primary-action" href="mailto:buaaytm@buaa.edu.cn">
            Email me <ArrowIcon />
          </a>
          <a className="secondary-action" href="tel:+8615385124350">
            Call +86 15385124350
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );
}
