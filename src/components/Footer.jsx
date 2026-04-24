import { siteConfig } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {siteConfig.name} &nbsp;·&nbsp; {siteConfig.institution} &nbsp;·&nbsp;{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        {siteConfig.github && (
          <> &nbsp;·&nbsp; <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a></>
        )}
        {siteConfig.scholar && (
          <> &nbsp;·&nbsp; <a href={siteConfig.scholar} target="_blank" rel="noreferrer">Scholar</a></>
        )}
      </div>
    </footer>
  );
}