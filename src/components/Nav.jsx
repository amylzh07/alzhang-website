import { NavLink } from "react-router-dom";
import { siteConfig } from "../data/content";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="nav-name">
          {siteConfig.name}
        </NavLink>
        <ul className="nav-links">
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}