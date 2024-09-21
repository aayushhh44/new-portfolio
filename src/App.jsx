import React from "react";

import FirstPage from "./pages/FirstPage";

import { Routes, Route } from "react-router-dom";
import BlogPost1 from "./pages/components/BlogPost1";
import Index from "./pages/components/Index";
// import BlogPost from './pages/components/BlogPost1'

const App = () => {
  return (
    <div>
      <Routes>
        {/* <FirstPage /> */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/blog" element={<Index />} />
        <Route path="/blog/:id" element={<BlogPost1 />} />
      </Routes>
    </div>
  );
};

export default App;
