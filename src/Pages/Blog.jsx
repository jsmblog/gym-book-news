import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import '../Styles/stylesBlog.css';
import { blogPosts } from '../Blog/blog';
import { sliceText } from './../JS/sliceText';

const Blog = () => {
  const navigate = useNavigate();
  const go_back = () => {
    navigate(-1,{replace:true});
  }
  return (
    <>
      <div className="blog-container">
        <button onClick={go_back} className="back-button">←</button>
        <h1>Blog de Gymbook</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.title}`}
              state={post}
              className="blog-post"
            >
              <img src={post.image} alt={post.title} className="post-image" />
              <h2 className="post-title">{post.title}</h2>
              <span className="post-date">{post.date}</span>
              <p className="post-summary">{sliceText(post.summary , 75)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
