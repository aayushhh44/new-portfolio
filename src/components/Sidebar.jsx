import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "home", path: "/" },
    { name: "blogs", path: "/blog" },
    { name: "projects", path: "/projects" },
    { name: "about me", path: "/about" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="ml-8 sm:ml-12 mt-32 left-12 top-8 w-44 flex flex-col justify-center">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="transform hover:underline w-16 cursor-pointer font-light font-manrope -rotate-90 origin-left whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-300 mb-16"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
