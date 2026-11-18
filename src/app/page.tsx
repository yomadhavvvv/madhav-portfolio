const projects = [
  {
    number: "01",
    name: "AI Career Agent",
    type: "LLM AGENTS · BACKEND",
    description: "A tool-calling career assistant that parses resumes, searches opportunities, identifies skill gaps and drafts tailored cover letters. Built around structured outputs and persistent conversational memory.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Pydantic"],
    metric: "98% schema-valid outputs across 100 test prompts",
    mark: "AG"
  },
  {
    number: "02",
    name: "Job Matching & Ranking Engine",
    type: "RECOMMENDATION · SEARCH",
    description: "A two-stage recommendation system that retrieves jobs using embedding similarity, then reranks them with skill, location and experience signals. Personalization uses saves and dismissals.",
    stack: ["Python", "Embeddings", "pgvector", "FastAPI", "scikit-learn"],
    metric: "Recall@10 improved from 0.52 to 0.81",
    mark: "JR"
  },
  {
    number: "03",
    name: "Semantic Job Search Platform",
    type: "INFORMATION RETRIEVAL · DATA",
    description: "Hybrid BM25 and vector search across a continuously updated jobs index, with scheduled ingestion, deduplication and incremental embedding updates.",
    stack: ["Python", "PostgreSQL", "pgvector", "Celery", "Docker"],
    metric: "10,000+ job postings indexed",
    mark: "SJ"
  },
  {
    number: "04",
    name: "Multi-Document PDF RAG",
    type: "GENERATIVE AI · RAG",
    description: "A document question-answering application that uses page-aware chunking, vector retrieval and evidence-grounded answers with exact page-level citations.",
    stack: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers"],
    metric: "Page-level source citations",
    mark: "PDF"
  },
  {
    number: "05",
    name: "Explainable Fraud Detection",
    type: "MACHINE LEARNING",
    description: "A fraud classification pipeline designed for severe class imbalance, comparing models and thresholds while using SHAP to explain individual flagged transactions.",
    stack: ["Python", "XGBoost", "SHAP", "scikit-learn", "Streamlit"],
    metric: "Interpretable transaction-level predictions",
    mark: "FD"
  },
  {
    number: "06",
    name: "DSA Revision Scheduler",
    type: "FULL-STACK · PRODUCTIVITY",
    description: "A full-stack learning tool that schedules solved problems using an SM2-based spaced-repetition algorithm and provides a daily revision queue with topic analytics.",
    stack: ["React", "FastAPI", "PostgreSQL", "JWT"],
    metric: "Daily revision queue & weak-area analytics",
    mark: "DSA"
  }
];

const skills = [
  ["AI & LLMs", "LLM Agents", "Function Calling", "RAG", "Embeddings", "Semantic Search", "Prompt Engineering", "LLM Evaluation"],
  ["Backend", "Python", "FastAPI", "REST APIs", "Pydantic", "Celery", "JWT Authentication", "Error Handling"],
  ["Data & Search", "PostgreSQL", "SQL", "pgvector", "BM25", "Retrieval & Reranking", "scikit-learn"],
  ["Engineering", "TypeScript", "JavaScript", "React", "Docker", "Git", "GitHub Actions", "pytest", "Linux"]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">MK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#skills">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:madhavsingh1458@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-topline"><span className="eyebrow"><i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span><span className="eyebrow">BENGALURU, INDIA · 2027</span></div>
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">AI / BACKEND ENGINEERING</p>
            <h1>Building<br />intelligent systems<span className="lime">.</span></h1>
            <p className="hero-copy">I&apos;m Madhav — a computer science student focused on AI engineering, backend systems and turning complex ideas into useful software.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#work">Explore selected work <span>↘</span></a>
              <a className="text-link" href="https://github.com/yomadhavvvv" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card">
              <div className="orbit-label">CURRENT FOCUS</div>
              <div className="orbit-graphic"><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /><span className="orbit-core">MK</span><span className="orbit-cross cross-one">+</span><span className="orbit-cross cross-two">+</span></div>
              <p>Building at the intersection of language models, retrieval and reliable software.</p>
            </div>
            <div className="hero-index"><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
        </div>
        <div className="hero-foot"><span>PYTHON · FASTAPI · POSTGRESQL</span><span>THOUGHTFUL BY DESIGN</span></div>
      </section>

      <section className="intro-section" id="about">
        <div className="shell intro-grid">
          <p className="section-label">01 — A LITTLE ABOUT ME</p>
          <div><h2>Curious about how things work.<br /><span className="muted">Driven to make them work better.</span></h2>
            <p className="body-copy">I&apos;m pursuing a B.E. in Computer Science and Engineering (Data Science) at B.M.S. College of Engineering. I enjoy building practical AI applications and the backend systems that make them dependable — from retrieval pipelines and recommendation engines to APIs and data workflows.</p>
            <div className="facts"><div><strong>9.2<span>/10</span></strong><small>ACADEMIC CGPA</small></div><div><strong>2027</strong><small>GRADUATION</small></div><div><strong>02<span>nd</span></strong><small>DSYNC HACKATHON · 50 TEAMS</small></div></div>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><div><p className="section-label">02 — SELECTED WORK</p><h2>Ideas, made <span className="muted">tangible.</span></h2></div><p className="heading-note">A selection of projects across AI engineering, search, machine learning and full-stack development.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-side"><div className="project-mark">{project.mark}</div><p>{project.metric}</p></div>
            </article>
          ))}
        </div>
        <p className="project-footnote">Project descriptions reflect work listed in my resumes. Source code and demos can be added as repositories are made public.</p>
      </section>

      <section className="skills-section" id="skills">
        <div className="shell">
          <div className="section-heading"><div><p className="section-label">03 — CAPABILITIES</p><h2>Tools of the <span className="muted">trade.</span></h2></div><p className="heading-note">A practical toolkit for shipping thoughtful software, from data and retrieval to APIs and deployment.</p></div>
          <div className="skill-grid">{skills.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="education-section shell">
        <div className="section-label">04 — BACKGROUND</div>
        <div className="education-row"><div><p className="project-type">2023 — 2027</p><h3>B.M.S. College of Engineering</h3><p className="body-copy">B.E. Computer Science and Engineering (Data Science)</p></div><div className="education-score">9.2 <span>/ 10 CGPA</span></div></div>
        <div className="education-row"><div><p className="project-type">RECOGNITION</p><h3>Second place · DSYNC Hackathon</h3><p className="body-copy">Placed second among 50 teams at B.M.S. College of Engineering, as a team of two.</p></div><div className="education-score">02<span>ND PLACE</span></div></div>
        <div className="certs"><span>IBM SkillsBuild — Software Engineering for Web Developers</span><span>freeCodeCamp — Back End Development and APIs</span></div>
      </section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><p className="section-label">05 — HAVE A GOOD PROBLEM?</p><h2>Let&apos;s build<br />something <span className="lime">meaningful.</span></h2><a className="contact-email" href="mailto:madhavsingh1458@gmail.com">madhavsingh1458@gmail.com <span>↗</span></a><div className="social-links"><a href="https://github.com/yomadhavvvv" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/madhav-kumar-b163a8316" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:madhavsingh1458@gmail.com">Email ↗</a></div></div></section>
      <footer className="footer shell"><a className="brand" href="#top">MK<span>.</span></a><span>DESIGNED & BUILT WITH INTENTION</span><span>© 2026 MADHAV KUMAR</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
