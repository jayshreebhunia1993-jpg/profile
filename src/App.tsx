import { ArrowUpRight, Mail, MapPin, Download, Code2 } from "lucide-react";

const skills = {
  "React / Frontend": ["React.js", "TypeScript", "JavaScript ES6+", "React Router", "TanStack React Query", "Jotai", "Formik", "Yup", "Tailwind CSS", "Shadcn UI", "Vite", "REST APIs"],
  "WordPress": ["WordPress", "Custom Themes", "Custom Plugins", "WooCommerce", "Elementor", "Gutenberg", "ACF", "WPBakery"],
  "Web Development": ["PHP", "MySQL", "HTML5", "CSS3", "SASS", "LESS", "jQuery", "Responsive Design"],
  "Tools / Performance": ["Git", "PageSpeed", "SEO", "Schema Markup", "Cloudflare", "Docker (basic)", "cPanel", "Apache / Nginx"],
};

const experience = [
  { period: "JULY 2025 — PRESENT", role: "Frontend Developer", company: "Brainwave Science", text: "Building responsive frontend interfaces with React, TypeScript and modern JavaScript, collaborating on user-focused web experiences and reusable UI components." },
  { period: "2021 — JUNE 2025", role: "Senior WordPress Developer", company: "Volans Infomatics Pvt. Ltd., Noida", text: "Developed responsive web experiences with HTML, CSS and JavaScript, implemented interfaces in WordPress, supported the design team, communicated with clients, and managed team members." },
  { period: "2019 — 2021", role: "WordPress Developer", company: "Bharat Arpanet", text: "Developed responsive custom WordPress and WooCommerce websites, extended plugins, performed website audits and SEO work, and provided ongoing maintenance and support." },
  { period: "FEB — MAY 2019", role: "UI/UX Designer", company: "Grabox", text: "Worked on an in-house product, e-commerce website, and website/mobile application mockups." },
  { period: "2017 — 2019", role: "UI/UX Designer", company: "Freebird Info Solution", text: "Designed website layouts, converted designs into HTML, created banners, and implemented HTML in WordPress." },
  { period: "2016 — 2017", role: "Website Designer", company: "Wizi Logic Pvt Ltd", text: "Designed website layouts, converted designs to HTML, and created animated banners and print creatives." },
];

const reactProjects = [
  { name: "BL-FE iCognative", url: "https://bl-fe.icognative.info/", type: "Brainwave Science / React" },
  { name: "Basil Health", url: "https://basilhealth.ai/", type: "Brainwave Science / React" },
  { name: "Basil Health Jobs", url: "https://jobs.basilhealth.com/", type: "Brainwave Science / React" },
  { name: "MyID iCognative", url: "https://myid-fe.icognative.info/", type: "Brainwave Science / React" },
];

const projects = [
  { name: "Brainwave Science", url: "https://brainwavescience.com/", type: "Brainwave Science / WordPress" },
  { name: "EW Nutrition", url: "https://ew-nutrition.com/", type: "Volans Infomatics / WordPress" },
  { name: "EW Biotech", url: "https://ew-biotech.com/", type: "Volans Infomatics / WordPress" },
  { name: "IGY Research", url: "https://igy-research.com/", type: "Volans Infomatics / WordPress" },
  { name: "Volans Infomatics", url: "https://volansinfo.com/", type: "Volans Infomatics / WordPress" },
  { name: "Bharat Arpanet", url: "https://bharatarpanet.com/", type: "Bharat Arpanet / WordPress" },
  { name: "The Mini Tins", url: "https://theminitins.com/", type: "Bharat Arpanet / WordPress / WooCommerce" },
  { name: "Shivalik Journal", url: "https://www.shivalikjournal.com/", type: "Bharat Arpanet / WordPress" },
  { name: "Global Stem Cell Care", url: "https://www.globalstemcellcare.com/", type: "Bharat Arpanet / WordPress" },
  { name: "LRF Enterprises", url: "https://www.lrfenterprises.com/", type: "Bharat Arpanet / WordPress" },
  { name: "LoanQubes", url: "https://loanqubes.com/", type: "Bharat Arpanet / WordPress" },
  { name: "Shaddix Plastic Surgery", url: "https://www.shaddixplasticsurgery.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Dr. Fichadia", url: "https://www.drfichadia.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Rio Body Wax", url: "https://www.riobodywax.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Skincare of Arizona", url: "https://skincareofarizona.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Pacific Center Plastic Surgery", url: "https://www.pacificcenterplasticsurgery.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Brandon Plastic Surgery", url: "https://www.brandonplasticsurgery.com/", type: "Freebird Info Solution / UI/UX Design" },
  { name: "Genuine Likes", url: "https://genuinelikes.com/", type: "Wizi Logic Pvt Ltd / Website Design" },
];

function App() {
  return (
    <>
      <header className="nav">
        <a className="logo" href="#home">JB<span>.</span></a>
        <nav>
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a className="resume" href="/Jayshree_CV.pdf" target="_blank">Resume <ArrowUpRight size={16}/></a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="eyebrow"><span></span> OPEN TO FULL-TIME OPPORTUNITIES</div>
          <h1>Hi, I'm <strong>Jayshree Bhunia.</strong></h1>
          <h2>Senior Frontend &<br/>WordPress Developer</h2>
          <p>Web developer with 10+ years of professional experience, specializing in WordPress and modern frontend development with React, TypeScript and JavaScript.</p>
          <div className="actions">
            <a className="primary" href="#projects">View my work <ArrowUpRight size={18}/></a>
            <a className="secondary" href="/Jayshree_CV.pdf" target="_blank"><Download size={18}/> Download resume</a>
          </div>
          <div className="techline">REACT <i/> TYPESCRIPT <i/> JAVASCRIPT <i/> WORDPRESS <i/> PHP</div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div>
            <h3>I build thoughtful digital experiences that work.</h3>
            <p>I'm a frontend and WordPress developer based in New Delhi with a background spanning website design, UI/UX, custom WordPress development and modern frontend engineering.</p>
            <p>My work focuses on responsive, user-centric interfaces, reusable development patterns, API integrations, website performance, SEO and cross-browser compatibility.</p>
            <div className="location"><MapPin size={17}/> New Delhi, India</div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">02 / EXPERIENCE</div>
          <div className="wide">
            <h3>Professional experience</h3>
            <div className="timeline">
              {experience.map((item) => (
                <article key={item.company}>
                  <div className="period">{item.period}</div>
                  <div><h4>{item.role}</h4><div className="company">{item.company}</div><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">03 / SKILLS</div>
          <div className="wide">
            <h3>Tools I work with</h3>
            <div className="skill-grid">
              {Object.entries(skills).map(([group, list]) => (
                <div className="skill-card" key={group}>
                  <Code2 size={22}/><h4>{group}</h4>
                  <div className="tags">{list.map(s => <span key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">04 / PROJECTS</div>
          <div className="wide">
            <h3>Selected work</h3>
            <div className="project-grid">
              <div className="project-card featured">
                <div className="project-num">01</div>
                <div className="project-type">FEATURED / REACT</div>
                <h4>React Application</h4>
                <p>Modern frontend application work using React, TypeScript, REST APIs, state management and responsive component-based UI development.</p>
                <div className="tags"><span>React</span><span>TypeScript</span><span>React Query</span><span>Jotai</span><span>Tailwind</span></div>
                <small>Project details can be added here when public sharing is permitted.</small>
              </div>
              {reactProjects.map((p, i) => (
                <a className="project-card" href={p.url} target="_blank" rel="noreferrer" key={p.name}>
                  <div className="project-num">{String(i + 2).padStart(2,"0")}</div>
                  <div className="project-type">{p.type}</div>
                  <h4>{p.name}</h4>
                  <span className="view">View project <ArrowUpRight size={17}/></span>
                </a>
              ))}
              {projects.map((p, i) => (
                <a className="project-card" href={p.url} target="_blank" rel="noreferrer" key={p.name}>
                  <div className="project-num">{String(i + reactProjects.length + 2).padStart(2,"0")}</div>
                  <div className="project-type">{p.type}</div>
                  <h4>{p.name}</h4>
                  <span className="view">View website <ArrowUpRight size={17}/></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="section-label">05 / EDUCATION</div>
          <div><h3>Education</h3><h4>Bachelor of Commerce (B.Com)</h4><p>Delhi University · 2013</p></div>
        </section>

        <section id="contact" className="contact">
          <div className="eyebrow"><span></span> LET'S CONNECT</div>
          <h3>Interested in working<br/>together?</h3>
          <p>I'm open to full-time opportunities in Frontend, React and WordPress development.</p>
          <a className="email" href="mailto:jayshreebhunia1993@gmail.com"><Mail size={22}/> jayshreebhunia1993@gmail.com <ArrowUpRight size={20}/></a>
        </section>
      </main>

      <footer><span>© 2026 Jayshree Bhunia</span><span>Frontend & WordPress Developer</span></footer>
    </>
  );
}

export default App;
