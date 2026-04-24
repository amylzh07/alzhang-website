import { projects } from "../data/content";

export default function Projects() {
  return (
    <main className="page">
      <div className="container">
        <p className="page-eyebrow">Research & building</p>
        <h1 style={{ marginBottom: "2.5rem" }}>Projects</h1>
        <div className="projects-grid">
          {projects.map((proj) => (
            <article key={proj.id} className="project-card">
              <div>
                <h3>{proj.title}</h3>
                {proj.subtitle && <p className="project-sub">{proj.subtitle}</p>}
                <p>{proj.description}</p>
                {proj.links.length > 0 && (
                  <div className="project-links">
                    {proj.links.map((l) => (
                      <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label} →</a>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <span className={`project-status status-${proj.status}`}>{proj.statusLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}