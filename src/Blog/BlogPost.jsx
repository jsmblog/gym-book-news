import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../Styles/stylesBlogPost.css';

const BlogPost = () => {
  const location = useLocation();
  const blogPost = location.state;

  if (!blogPost) {
    return (
      <div className="blogpost-container">
        <h1>Post no encontrado</h1>
        <Link to="/blog" className="back-link">Regresar al Blog</Link>
      </div>
    );
  }

  return (
    <div className="blogpost-container">
      {blogPost.image && (
        <img src={blogPost.image} alt={blogPost.title} className="blogpost-image" />
      )}
      <h1 className="blogpost-title merriweather-bold">{blogPost.title}</h1>
      <div className="blogpost-meta">
        <span className="blogpost-date">{blogPost.date}</span>
        <span className="blogpost-author">Por Joel Saldarriaga</span>
        <span className="blogpost-category">#{blogPost.category}</span>
      </div>
      <p className="blogpost-summary">{blogPost.summary}</p>
      {blogPost.extendedContent && blogPost.extendedContent.map((section, index) => (
        <div key={index} className="blogpost-section">
          <h2 className="section-heading">{section.heading}</h2>
          <p className="section-text">{section.text}</p>
        </div>
      ))}
      {blogPost.references && blogPost.references.length > 0 && (
        <div className="blogpost-references">
          <h2>Referencias</h2>
          <ul>
            {blogPost.references.map((ref, index) => (
              <li key={index}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/blog" className="back-link">← Volver al Blog</Link>
    </div>
  );
};

export default BlogPost;
