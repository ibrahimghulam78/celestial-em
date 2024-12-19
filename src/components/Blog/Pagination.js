import React from 'react';
import './Blog.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button 
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <div className="page-numbers">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`page-number ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
        className="pagination-button"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;