import { Link } from "react-router-dom";
import { siteConfig, blogPosts, projects } from "../data/content";

export default function Home() {
  const recentPost = blogPosts[0];
  const activeProjects = projects.filter((p) => p.status === "active").slice(0, 2);

  return (
    <main className="page">
      <div className="container">
        <header className="home-header">
          <p className="eyebrow">{siteConfig.tagline} &nbsp;·&nbsp; {siteConfig.institution}</p>
          <h1>{siteConfig.name}</h1>
          <p className="bio">{siteConfig.bio}</p>
        </header>

        <div className="home-grid">
          <Link to="/blog" className="home-card">
            <p className="card-label">Latest writing</p>
            <h3>{recentPost.title}</h3>
            <p>{recentPost.excerpt}</p>
          </Link>
          {activeProjects.map((proj) => (
            <Link to="/projects" className="home-card" key={proj.id}>
              <p className="card-label">Current project</p>
              <h3>{proj.title}</h3>
              <p>{proj.description.slice(0, 100)}…</p>
            </Link>
          ))}
          <Link to="/cv" className="home-card">
            <p className="card-label">Background</p>
            <h3>Curriculum vitae</h3>
            <p>Education, publications, and research experience.</p>
          </Link>
        </div>

        <hr className="rule" />
        <p style={{ fontSize: "0.9rem", color: "var(--ink-light)", fontStyle: "italic" }}>
          Currently working on: guide RNA efficiency prediction, perturbation screen analysis.
        </p>
      </div>
    </main>
  );
}