import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const SinglePost = ({ posts, categories }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Convert id to number since useParams returns a string
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="blog-container">
      <div className="blog-main">
        <div className="single-post">
          <img src={post.image} alt={post.title} className="post-image" />
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{post.date}</span>
            <span>By {post.author}</span>
            <span>Category: {post.category}</span>
          </div>
          <div className="post-content">
            {post.content}
          </div>
        </div>
        <Sidebar posts={posts} categories={categories} />
      </div>
    </div>
  );
};

export default SinglePost;