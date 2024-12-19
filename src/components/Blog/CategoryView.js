import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import Pagination from './Pagination';

const CategoryView = ({ posts, categories }) => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const filteredPosts = posts.filter(
    post => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-container">
      <div className="blog-main">
        <div className="blog-posts">
          <h2 className="category-title">
            Category: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </h2>
          {currentPosts.length > 0 ? (
            <>
              {currentPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))}
              <Pagination 
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          ) : (
            <p>No posts found in this category.</p>
          )}
        </div>
        <Sidebar posts={posts} categories={categories} />
      </div>
    </div>
  );
};

export default CategoryView;