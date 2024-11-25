import React from "react";

import FirstPage from "./pages/FirstPage";

import { Routes, Route } from "react-router-dom";
import BlogPost1 from "./pages/components/BlogPost1";
import Index from "./pages/components/Index";
import AdminLogin from "./pages/blogs/AdminLogin";
import BlogWrite from "./pages/blogs/BlogWrite";
// import BlogPost from './pages/components/BlogPost1'

const App = () => {
  return (
    <div>
      <Routes>
        {/* <FirstPage /> */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/blog" element={<Index />} />
        <Route path="/blog/:id" element={<BlogPost1 />} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/blog-write" element={<BlogWrite/>}/>
      </Routes>
    </div>
  );
};

export default App;
