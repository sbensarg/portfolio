import { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Truck, Server, Gamepad2, Terminal, Box, ArrowUpRight,
  Code2, Database, Cloud, Cpu, Layers, Zap
} from "lucide-react";
import "./App.css";

const projects = [
  {
    id: "travel",
    featured: true,
    icon: Truck,
    iconColor: "blue",
    name: "TravelCourier",
    tagline: "Shipment Tracking Platform",
    desc: "Full-stack shipment management app built with Vaadin Hilla (React) + Spring Boot. Animated landing page, real-time dashboard with filtering, per-courier chat system. Submitted to Vaadin Community Competition 2026.",
    tags: ["Spring Boot", "React", "Vaadin Hilla", "Docker", "Java 21", "CI/CD"],
    hotTags: ["Spring Boot", "React", "Vaadin Hilla"],
    live: "https://sbensarg-travel-courier.hf.space",
    source: "https://github.com/sbensarg/travel-courier",
    isLive: true,
  },
  {
    id: "webserv",
    icon: Server,
    iconColor: "teal",
    name: "42Webserv",
    tagline: "HTTP/1.1 Server from scratch",
    desc: "Fully functional web server in C++. CGI, file upload, config parsing, multiplexed I/O — zero external libraries.",
    tags: ["C++", "HTTP/1.1", "CGI", "Networking", "Systems"],
    source: "https://github.com/sbensarg/42Webserv",
  },
  {
    id: "trans",
    icon: Gamepad2,
    iconColor: "purple",
    name: "ft_transcendence",
    tagline: "Multiplayer Pong Platform",
    desc: "Real-time multiplayer Pong with auth, chat, and tournament system. Full web stack team project at 1337 school.",
    tags: ["TypeScript", "WebSocket", "Real-time", "Team"],
    source: "https://github.com/Zqadiri/ft_transcendence",
  },
  {
    id: "shell",
    icon: Terminal,
    iconColor: "amber",
    name: "minishell",
    tagline: "POSIX Shell Interpreter",
    desc: "Shell in C handling pipes, redirections, env variables, signals and built-ins — no system() call.",
    tags: ["C", "Unix", "POSIX", "Systems"],
    source: "https://github.com/MouadDv/minishell",
  },
  {
    id: "cub",
    icon: Box,
    iconColor: "coral",
    name: "Cub3D",
    tagline: "Raycasting 3D Engine",
    desc: "Wolfenstein-inspired 3D engine in C. Parses custom maps, renders textured walls in real time with mlx.",
    tags: ["C", "Graphics", "Raycasting", "Math"],
    source: "https://github.com/sbensarg/Cub3D_1337",
  },
];

const skills = [
  { label: "Backend", icon: Layers, items: ["Java", "Spring Boot", "Go / Golang", "Node.js / NestJS"] },
  { label: "Frontend", icon: Code2, items: ["React.js", "Next.js", "TypeScript", "Vaadin Hilla"] },
  { label: "Database", icon: Database, items: ["PostgreSQL", "MySQL", "Firebase"] },
  { label: "DevOps", icon: Cloud, items: ["Docker", "Kubernetes", "Rancher", "CI/CD"] },
  { label: "Monitoring", icon: Zap, items: ["Grafana", "Prometheus", "K6", "JUnit / Mockito"] },
  { label: "Systems", icon: Cpu, items: ["C / C++", "Python", "Linux", "Git"] },
];

const experience = [
  { role: "Web Developer Engineer", company: "Cires Technologies", location: "Tanger Med", date: "2022 – present", active: true },
  { role: "Mobile Developer Intern", company: "CGI Technologies", location: "Fès", date: "Apr – Jul 2019", active: false },
  { role: "Technical Support Intern", company: "Webhelp", location: "Rabat", date: "2017 – 2018", active: false },
];

const iconColors = {
  blue: { bg: "var(--blue-light)", color: "var(--blue)" },
  teal: { bg: "var(--teal-light)", color: "var(--teal)" },
  purple: { bg: "#eeedfe", color: "#534ab7" },
  amber: { bg: "#faeeda", color: "#854f0b" },
  coral: { bg: "#faece7", color: "#993c1d" },
};

function Badge({ children, variant = "default" }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

function LiveDot() {
  return (
    <span className="live-badge">
      <span className="live-dot" />
      live
    </span>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const colors = iconColors[project.iconColor];

  return (
    <div
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="project-card__top">
        <div className="project-card__icon" style={{ background: colors.bg, color: colors.color }}>
          <Icon size={20} />
        </div>
        {project.isLive && <LiveDot />}
      </div>

      <div className="project-card__meta">
        <div className="project-card__tagline">{project.tagline}</div>
        <h3 className="project-card__name">{project.name}</h3>
      </div>

      <p className="project-card__desc">{project.desc}</p>

      <div className="project-card__tags">
        {project.tags.map(t => (
          <span key={t} className={`tag ${project.hotTags?.includes(t) ? "tag--hot" : ""}`}>{t}</span>
        ))}
      </div>

      <div className="project-card__footer">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="card-link card-link--primary">
            <ExternalLink size={13} /> live demo
          </a>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noreferrer" className="card-link">
            <Github size={13} /> source
          </a>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  return (
    <div className={`portfolio ${visible ? "portfolio--visible" : ""}`}>

      {/* NAV */}
      <nav className="nav">
        <div className="nav__inner">
          <span className="nav__logo">sb<span className="nav__dot">.</span></span>
          <div className="nav__links">
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
            <a href="mailto:sarabensarghin9@gmail.com" className="nav__cta">hire me <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero__inner">
          <div className="hero__left">
            <div className="hero__available">
              <span className="avail-dot" />
              available for opportunities
            </div>
            <h1 className="hero__name">
              Sara<br />
              <span className="hero__name--accent">Bensarghin</span>
            </h1>
            <p className="hero__role">Fullstack Java Developer</p>
            <p className="hero__bio">
              3+ years building production SaaS systems at Tanger Med — port payment platforms,
              IoT logistics, AI traffic management. Passionate about reactive architectures and clean code.
            </p>
            <div className="hero__actions">
              <a href="https://github.com/sbensarg" target="_blank" rel="noreferrer" className="btn btn--outline">
                <Github size={16} /> github
              </a>
              <a href="https://www.linkedin.com/in/sbensarg/" target="_blank" rel="noreferrer" className="btn btn--outline">
                <Linkedin size={16} /> linkedin
              </a>
              <a href="mailto:sarabensarghin9@gmail.com" className="btn btn--primary">
                <Mail size={16} /> get in touch
              </a>
            </div>
          </div>

          <div className="hero__stats">
            {[
              { num: "3+", label: "years experience" },
              { num: "6+", label: "languages" },
              { num: "10+", label: "prod systems" },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-card__num">{s.num}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* decorative strip */}
        <div className="hero__strip">
          {["Spring Boot", "React", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "WebFlux", "R2DBC", "Java 21", "Go"].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section__inner">
          <div className="section__header">
            <span className="section__eyebrow">work</span>
            <h2 className="section__title">Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section--alt">
        <div className="section__inner">
          <div className="section__header">
            <span className="section__eyebrow">stack</span>
            <h2 className="section__title">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map(({ label, icon: Icon, items }) => (
              <div key={label} className="skill-group">
                <div className="skill-group__header">
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
                <ul className="skill-group__items">
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section__inner">
          <div className="section__header">
            <span className="section__eyebrow">career</span>
            <h2 className="section__title">Experience</h2>
          </div>
          <div className="exp-list">
            {experience.map((e, i) => (
              <div key={i} className={`exp-item ${e.active ? "exp-item--active" : ""}`}>
                <div className="exp-item__line">
                  <div className="exp-item__dot" />
                  {i < experience.length - 1 && <div className="exp-item__connector" />}
                </div>
                <div className="exp-item__body">
                  <div className="exp-item__role">{e.role}</div>
                  <div className="exp-item__company">{e.company} · {e.location}</div>
                </div>
                <div className="exp-item__date">{e.date}</div>
              </div>
            ))}
          </div>

          {/* Education strip */}
          <div className="edu-row">
            <div className="edu-item">
              <div className="edu-item__school">UM6P – 1337 / 42 Network</div>
              <div className="edu-item__degree">IT Architect student</div>
              <div className="edu-item__date">2019 – present</div>
            </div>
            <div className="edu-item">
              <div className="edu-item__school">Faculty of Sciences Dhar El Mahraz</div>
              <div className="edu-item__degree">B.Sc. Information Systems & Software Engineering</div>
              <div className="edu-item__date">2018 – 2019</div>
            </div>
            <div className="edu-item">
              <div className="edu-item__school">Superior School of Technology</div>
              <div className="edu-item__degree">DUT Computer Engineering</div>
              <div className="edu-item__date">2016 – 2018</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__name">Sara Bensarghin</div>
            <div className="footer__tagline">Fullstack Java Developer · Tangier, Morocco</div>
          </div>
          <div className="footer__contacts">
            <a href="mailto:sarabensarghin9@gmail.com" className="footer__link"><Mail size={15}/> sarabensarghin9@gmail.com</a>
            <a href="tel:+212636603922" className="footer__link"><Phone size={15}/> +212 636 603 922</a>
            <span className="footer__link"><MapPin size={15}/> Tangier, Morocco</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
