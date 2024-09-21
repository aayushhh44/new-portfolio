import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost1 = () => {
  const { id } = useParams();
  
  const post = {
    title: "The Art of Slow Living",
    date: "Sep 21, 2024",
    content: "In a world that's always rushing, there's beauty in taking things slow...",
    timeToRead: "5 min read"
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Manrope']">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <main className="mt-12">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.timeToRead}</span>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>{post.content}</p>
            </div>
          </article>
          <Link 
            to="/blog" 
            className="inline-block mt-12 px-6 py-2 border-2 border-gray-800 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out rounded-none relative overflow-hidden group"
          >
            <span className="relative z-10">← Back to all posts</span>
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default BlogPost1;
