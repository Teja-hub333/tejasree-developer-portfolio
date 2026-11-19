import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Cloud, BriefcaseBusiness, GraduationCap, ExternalLink,
  MapPin, Download, Sparkles, Terminal, Layers3, Phone
} from 'lucide-react'

const profile = {
  name: 'Tejasree Pendyala',
  role: 'Aspiring Software Developer',
  location: 'Bengaluru, India',
  email: 'YOUR_EMAIL@example.com',
  phone: '+919701040352',
  linkedin: 'https://www.linkedin.com/in/tejasree-p-3a22ba326/',
  github: 'https://github.com/Teja-hub333',
  leetcode: 'https://leetcode.com/u/Tejasreependyala/',
}

const projects = [
  {
    number: '01',
    name: 'LifeSync AI',
    type: 'AI-powered wellness web application',
    description:
      'A smart wellness companion concept designed to recommend activities using context such as mood, stress, weather, time, budget and user preferences. The project also explores feedback-based recommendation improvements.',
    stack: ['AI concepts', 'Web development', 'Personalisation'],
    status: 'Final-year project',
    link: '',
  },
  {
    number: '02',
    name: 'Emotion-Based Learning',
    type: 'Smart emotion-aware learning platform',
    description:
      'A learning platform concept that uses emotion signals to support a more adaptive learning experience. The project uses a React and TypeScript frontend with Firebase services and a Gemini API integration.',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini API'],
    status: 'Project',
    link: 'https://github.com/Teja-hub333/Emotion-Based-Learning',
  },
  {
    number: '03',
    name: 'Bus Reservation Management',
    type: 'ERP / reservation workflow',
    description:
      'Worked on bus reservation and Bus Master screens during an internship, including UI screen creation and corrections using a visual builder and database tooling.',
    stack: ['Auvit Builder', 'DBeaver', 'ERP workflows'],
    status: 'Internship work',
    link: '',
  },
  {
    number: '04',
    name: 'Lifestyle & Recipe Knowledge Graph',
    type: 'Knowledge representation concept',
    description:
      'A project exploring how lifestyle and recipe information can be organised and connected to make related information easier to discover.',
    stack: ['Knowledge Graph', 'Data modelling'],
    status: 'Academic project',
    link: '',
  },
]

const skills = [
  { icon: Code2, title: 'Programming', items: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { icon: Layers3, title: 'Frontend', items: ['React', 'HTML', 'CSS', 'Vite'] },
  { icon: Database, title: 'Database & tools', items: ['SQL', 'Firebase', 'DBeaver', 'Git / GitHub'] },
  { icon: Cloud, title: 'Cloud', items: ['AWS fundamentals'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">T<span>.</span></span>
          <span>TEJASREE</span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO GRADUATE OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Tejasree<br /><span>Pendyala.</span></h1>
            <h2>Building useful things with <em>code</em> and curiosity.</h2>
            <p className="hero-description">
              Computer Science undergraduate interested in software development, problem solving
              and building practical web applications. Currently learning, building and preparing
              for the next opportunity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-large" />
            <div className="orbit orbit-small" />
            <div className="hero-card">
              <div className="card-top"><span className="window-dots"><i /><i /><i /></span><span>developer.ts</span><span className="card-live">● LIVE</span></div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Tejasree'</span>,</p>
                <p><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-green">'Software'</span>,</p>
                <p><span className="line-no">04</span>&nbsp;&nbsp;learning: <span className="code-green">'Every day'</span>,</p>
                <p><span className="line-no">05</span>&nbsp;&nbsp;build: <span className="code-blue">true</span>,</p>
                <p><span className="line-no">06</span>{'}'}</p>
                <p className="code-comment"><span className="line-no">07</span>// turning ideas into applications</p>
              </div>
              <div className="terminal-footer"><Terminal size={14} /><span>Ready to build something meaningful</span><span className="cursor">▋</span></div>
            </div>
            <div className="float-chip chip-one"><Sparkles size={15} /> Always learning</div>
            <div className="float-chip chip-two"><Code2 size={15} /> Java · React · Python</div>
            <div className="hero-index">01 / 05</div>
          </div>
          <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT ME</p>
            <h2>A little about<br /><span>my journey.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">I’m a Computer Science student who enjoys learning how technology works and turning ideas into working solutions.</p>
            <p className="muted-copy">My experience includes working on web application screens and ERP workflows during an internship, along with academic and personal projects involving React, TypeScript, Firebase and AI integrations. I’m strengthening my programming and problem-solving fundamentals while preparing for graduate software engineering opportunities.</p>
            <div className="about-facts">
              <div><span className="fact-label">EDUCATION</span><strong>B.Tech, Computer Science</strong><small>CHRIST (Deemed to be University)</small></div>
              <div><span className="fact-label">GRADUATION</span><strong>2027</strong><small>Final-year undergraduate</small></div>
              <div><span className="fact-label">LOCATION</span><strong>Bengaluru, India</strong><small><MapPin size={12} /> Open to opportunities</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading horizontal-heading">
            <div><p className="eyebrow">02 — TOOLKIT</p><h2>Skills I'm <span>building.</span></h2></div>
            <p className="muted-copy heading-note">A growing toolkit shaped by coursework, projects and hands-on practice.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="skill-note">Skills are presented as a learning and project toolkit—not as a claim of expert-level proficiency.</p>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">03 — EXPERIENCE</p>
            <h2>Learning by <span>doing.</span></h2>
          </div>
          <article className="experience-card">
            <div className="experience-mark"><BriefcaseBusiness size={22} /></div>
            <div className="experience-main">
              <div className="experience-top"><div><h3>Web Development Intern</h3><p className="company">WIBARS Global Software Solutions · Bengaluru</p></div><span className="experience-type">INTERNSHIP</span></div>
              <p className="muted-copy">Contributed to ERP and digital solution workflows, including a Bus Reservation Management System / Bus Master module.</p>
              <ul className="experience-list">
                <li>Created and corrected application screens using the Auvit visual builder.</li>
                <li>Worked with screen layouts and process flows for bus reservation-related functionality.</li>
                <li>Used DBeaver as a database tool during development and verification tasks.</li>
              </ul>
              <div className="tag-list"><span className="tag">Auvit Builder</span><span className="tag">DBeaver</span><span className="tag">ERP</span><span className="tag">UI workflows</span></div>
            </div>
          </article>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading horizontal-heading">
            <div><p className="eyebrow">04 — SELECTED WORK</p><h2>Projects & <span>experiments.</span></h2></div>
            <p className="muted-copy heading-note">A selection of academic, internship and personal work. More details and demos can be added as each project is polished.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-status">{project.status}</span></div>
                <div className="project-art"><div className="art-grid" /><div className="art-symbol">{project.number === '01' ? <Sparkles size={38} /> : project.number === '02' ? <Layers3 size={38} /> : project.number === '03' ? <Database size={38} /> : <Code2 size={38} />}</div></div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="muted-copy project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a> : <span className="project-link muted-link">Details coming soon</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap education-section">
          <div className="section-heading">
            <p className="eyebrow">05 — EDUCATION & CERTIFICATIONS</p>
            <h2>Grounded in <span>learning.</span></h2>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <div className="education-icon"><GraduationCap size={22} /></div>
              <div><span className="fact-label">2023 — 2027</span><h3>Bachelor of Technology</h3><p>Computer Science and Engineering</p><p className="muted-copy">CHRIST (Deemed to be University), Bengaluru</p></div>
            </article>
            <article className="education-card">
              <div className="education-icon"><Cloud size={22} /></div>
              <div><span className="fact-label">CERTIFICATION</span><h3>AWS Certification</h3><p className="muted-copy">Add the exact certification title and credential link here.</p></div>
            </article>
            <article className="education-card">
              <div className="education-icon"><Code2 size={22} /></div>
              <div><span className="fact-label">CERTIFICATION</span><h3>Oracle Java Certification</h3><p className="muted-copy">Confirm the exact credential name before publishing.</p></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">06 — CONTACT</p>
            <h2>Have an opportunity<br />or an idea? <span>Let's connect.</span></h2>
            <p className="muted-copy">I'm interested in graduate software development opportunities, internships and meaningful projects.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Say hello <Mail size={17} /></a>
            <div className="contact-links">
              <a href={`tel:${profile.phone}`}><Phone size={17} /> +91 97010 40352</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ExternalLink size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span>TEJASREE</span></a>
        <p>Designed & built with curiosity. © {new Date().getFullYear()} Tejasree Pendyala</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
