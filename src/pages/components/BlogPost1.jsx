import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";



const BlogPost1 = () => {
  const { id } = useParams();
  
  const [likes, setLikes] = useState(0); 

  const post = {
    title: "The Art of Slow Living",
    date: "Sep 21, 2024",
    content: "In a world that's always rushing, there's beauty in taking things slow...",
    timeToRead: "5 min read"
  };

  const postUrl = `${window.location.origin}/post/${id}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}`;
  const emailUrl = `mailto:?subject=Check out this post: ${encodeURIComponent(post.title)}&body=Read it here: ${encodeURIComponent(postUrl)}`;

  const handleLike = () => {
    setLikes(likes + 1);
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

          
          <div className="mt-8 space-x-4">
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <button className="font-manrope">Share on Twitter</button>
              
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <button className="font-manrope">Share on Facebook</button>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <button className="font-manrope">Share on LinkedIn</button>
            </a>
            <a href={emailUrl}>
              <button className="text-gray-600">Share via Email</button>
            </a>
          </div>

      
          <div className="mt-8">
            <button 
              onClick={handleLike}
              className=" px-4 py-2 rounded  transition duration-300 ease-in-out"
            >
              👍 {likes}
            </button>
          </div>

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
