import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogPost = ({ post }) => {
  const location = useLocation();
  const isRootPath = location.pathname === '/blog';

  // Create the correct path based on current location
  const postPath = isRootPath ? `post/${post.id}` : `/blog/post/${post.id}`;

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
      <div className="post-meta">
          
          {/* <span>By {post.author}</span> */}
          <span>{post.category}</span>
        </div>
        <h2 className="blog-title">
          <Link to={postPath}>{post.title}</Link>
        </h2>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className='blog-foot'>
          <span className='blog-date'>{post.date}</span>
          <Link to={postPath} className="read-more">
            Read More
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default BlogPost;