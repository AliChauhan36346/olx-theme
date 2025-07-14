import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            className="px-3 py-2 rounded-l-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            &lt;
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-blue-100 ${page === currentPage ? 'bg-blue-600 text-white font-bold' : ''}`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="px-3 py-2 rounded-r-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
} 