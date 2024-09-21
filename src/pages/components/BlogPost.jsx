import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, date, excerpt, timeToRead }) => {
  return (
    <article className="mb-12 font-manrope pb-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{timeToRead}</span>
      </div>
      <p className="text-base leading-relaxed text-gray-600 mb-4">{excerpt}</p>
      <Link 
        to={`/blog/${id}`} 
        className="inline-block px-6 py-2 border-2 border-gray-800 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out rounded-none relative overflow-hidden group"
      >
        <span className="relative z-10">Read more</span>
        <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
    </article>
  );
};

export default BlogPost;
