import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';

const SearchResults = ({ posts, categories }) => {
  const { searchTerm } = useParams();
  
  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <h1>Search Results</h1>
      <div className="blog-main">
        <div className="blog-posts">
          {filteredPosts.length > 0 ? (
            <>
              <h2 className="search-results-title">
                Found {filteredPosts.length} results for "{searchTerm}"
              </h2>
              {filteredPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))}
            </>
          ) : (
            <div className="no-results">
              <h2>No results found for "{searchTerm}"</h2>
              <p>Try different keywords or check your spelling.</p>
            </div>
          )}
        </div>
        <Sidebar posts={posts} categories={categories} />
      </div>
    </div>
  );
};

export default SearchResults;