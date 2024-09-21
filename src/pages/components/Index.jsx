import React from 'react';
import BlogPost from '../components/BlogPost';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {

  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Slow Living",
      date: "Sep 21, 2024",
      excerpt: "In a world that's always rushing, there's beauty in taking things slow...",
      timeToRead: "5 min read"
    },
    {
      id: 2,
      title: "Vintage Fashion: A Timeless Trend",
      date: "Sep 21, 2024",
      excerpt: "Exploring the enduring appeal of vintage clothing...",
      timeToRead: "7 min read"
    },
    {
      id: 3,
      title: "The Lost Art of Letter Writing",
      date: "Sep 20, 2024",
      excerpt: "In an age of instant messaging, let's revisit the charm of handwritten letters...",
      timeToRead: "6 min read"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-manrope">
      <button onClick={() => navigate('/')}  className='p-8 underline underline-offset-4'>back</button>
      <div className="max-w-2xl mx-auto px-4 ">
        <main className="mt-12 space-y-16">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-bold text-gray-800 mb-4">Latest Posts</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div> */}
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Index;
