import { cvData, siteConfig } from "../data/content";

function CvSection({ title, entries }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">{title}</h2>
      {entries.map((e, i) => (
        <div key={i} className="cv-entry">
          <div className="cv-year">{e.year}</div>
          <div>
            <h3>{e.title}</h3>
            {e.subtitle && <p className="cv-subtitle">{e.subtitle}</p>}
            {e.detail && <p>{e.detail}</p>}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function CV() {
  return (
    <main className="page">
      <div className="container">
        <p className="page-eyebrow">Background</p>
        <h1 style={{ marginBottom: "0.5rem" }}>{siteConfig.name}</h1>
        <p style={{ color: "var(--ink-mid)", fontStyle: "italic", marginBottom: "2.5rem" }}>
          {siteConfig.tagline} &nbsp;·&nbsp; {siteConfig.institution}
        </p>
        <a className="cv-download" href="/cv.pdf" target="_blank" rel="noreferrer"
          style={{ display: "inline-block", marginBottom: "3rem" }}>
          Download PDF ↓
        </a>
        <CvSection title="Education" entries={cvData.education} />
        <hr className="rule" />
        <CvSection title="Research experience" entries={cvData.research} />
        <hr className="rule" />
        <CvSection title="Publications & preprints" entries={cvData.publications} />
        <hr className="rule" />
        <CvSection title="Fellowships & awards" entries={cvData.awards} />
        <hr className="rule" />
        <CvSection title="Skills" entries={cvData.skills} />
      </div>
    </main>
  );
}