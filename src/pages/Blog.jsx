import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/content";

export function BlogList() {
  return (
    <main className="page">
      <div className="container">
        <p className="page-eyebrow">Writing</p>
        <h1 style={{ marginBottom: "2.5rem" }}>Blog</h1>
        <ul className="blog-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-item">
              <div className="blog-date">{post.dateDisplay}</div>
              <div>
                <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return (
    <main className="page">
      <div className="container">
        <Link to="/blog" className="back-link">Blog</Link>
        <p>Post not found.</p>
      </div>
    </main>
  );

  const sections = post.content.trim().split(/\n\n+/).map((block, i) => {
    block = block.trim();
    if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
    if (block.startsWith("### ")) return <h3 key={i}>{block.slice(4)}</h3>;
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.slice(2));
      return <ul key={i}>{items.map((item, j) => <li key={j}>{item}</li>)}</ul>;
    }
    if (block.startsWith("**") && block.includes("—")) {
      const boldEnd = block.indexOf("**", 2);
      const title = block.slice(2, boldEnd);
      const rest = block.slice(boldEnd + 2);
      return <p key={i}><strong>{title}</strong>{rest}</p>;
    }
    return <p key={i}>{block}</p>;
  });

  return (
    <main className="page">
      <div className="container">
        <Link to="/blog" className="back-link">Blog</Link>
        <article>
          <header className="post-header">
            <p className="meta">{post.dateDisplay} &nbsp;·&nbsp; {post.tags.join(", ")}</p>
            <h1>{post.title}</h1>
          </header>
          <div className="post-body">{sections}</div>
        </article>
      </div>
    </main>
  );
}