import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ posts, categories = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isRootPath = location.pathname === '/blog';
  const recentPosts = posts.slice(0, 5);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(isRootPath ? `search/${searchTerm}` : `/blog/search/${searchTerm}`);
    }
  };

  // Count posts for each category
  const categoryPostCounts = posts.reduce((acc, post) => {
    const category = post.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Filter categories that have posts
  const activeCategories = categories.filter(
    category => categoryPostCounts[category.name] > 0
  );

  return (
    <div className="blog-sidebar">
      <div className="sidebar-widget search-widget desktop-search">
        <form onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon" onClick={handleSearchSubmit}></i>
          </div>
        </form>
      </div>
      {activeCategories.length > 0 && (
        <div className="sidebar-widget">
          <h3>Categories</h3>
          <ul className="categories-list">
            {activeCategories.map(category => (
              <li key={category.id}>
                <Link 
                  to={isRootPath 
                    ? `category/${category.name.toLowerCase()}` 
                    : `/blog/category/${category.name.toLowerCase()}`
                  }
                >
                  {category.name}
                  {/* <span className="post-count">
                    ({categoryPostCounts[category.name]})
                  </span> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="sidebar-widget">
        <h3>Latest Posts</h3>
        <ul className="recent-posts">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link to={isRootPath ? `post/${post.id}` : `/blog/post/${post.id}`}>
                <img src={post.image} alt={post.title} />
                <div className="post-info">
                  <h4>{post.title}</h4>
                  {/* <span>{post.date}</span> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;