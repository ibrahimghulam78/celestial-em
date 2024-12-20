import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';
import CategoryView from './CategoryView';
import './Blog.css';
import SearchResults from './SearchResults';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 2,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Basics"
    },
    {
      id: 3,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Basics"
    },
    {
      id: 4,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 5,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 6,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 7,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 8,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 9,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 10,
      title: "React Started with Moon",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "React Native"
    },
    {
      id: 11,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first application...",
      content: "Full content goes here with more detailed information about React basics.",
      date: "March 20, 2024",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
      category: "State Management"
    },
  ]);

  const [categories] = useState([
    { id: 1, name: "React Basics", count: 5 },
    { id: 2, name: "Advanced React", count: 3 },
    { id: 3, name: "React Hooks", count: 4 },
    { id: 4, name: "State Management", count: 2 },
    { id: 5, name: "React Native", count: 3 }
  ]);

   // Add pagination state
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 6;
 
   // Calculate pagination values
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   const totalPages = Math.ceil(posts.length / postsPerPage);
 
   // Pagination change handler
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
     window.scrollTo(0, 0); // Scroll to top when page changes
   };

   const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`search/${searchTerm}`);
      setSearchTerm(''); // Clear the search input after submission
    }
  };
 
   // Pagination component
   const Pagination = () => {
     return (
       <div className="pagination">
         <button 
           onClick={() => handlePageChange(currentPage - 1)}
           disabled={currentPage === 1}
           className="pagination-button"
         >
           <i class="fa-solid fa-chevron-left"></i>
         </button>
         
         {[...Array(totalPages)].map((_, index) => (
           <button
             key={index + 1}
             onClick={() => handlePageChange(index + 1)}
             className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
           >
             {index + 1}
           </button>
         ))}
 
         <button 
           onClick={() => handlePageChange(currentPage + 1)}
           disabled={currentPage === totalPages}
           className="pagination-button"
         >
           <i class="fa-solid fa-chevron-right"></i>
         </button>
       </div>
     );
   };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="blog-container">
            <h1 className='blog-title-main'>Blog</h1>
            <div className="main-search-widget mobile-search">
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
            <div className="blog-main">
              <div className="blog-posts">
                {currentPosts.map(post => (
                  <BlogPost key={post.id} post={post} />
                ))}
                <Pagination />
              </div>
              <Sidebar posts={posts} categories={categories} />
            </div>
          </div>
        }
      />
      <Route 
        path="post/:id" 
        element={<SinglePost posts={posts} categories={categories} />} 
      />
      <Route 
        path="category/:categoryName" 
        element={<CategoryView posts={posts} categories={categories} />} 
      />
      <Route 
        path="search/:searchTerm" 
        element={<SearchResults posts={posts} categories={categories} />} 
      />
    </Routes>
  );
};

export default Blog;