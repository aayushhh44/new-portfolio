import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Sidebar = () => {
  const menuItems = [
    { name: "home", path: "/" },
    { name: "blogs", path: "/blog" },
    { name: "projects", path: "projects", scroll: true }, 
    { name: "about me", path: "about", scroll: true },
    { name: "contact", path: "contact", scroll:true },
  ];

  return (
    <nav className="ml-8 sm:ml-12 mt-32 left-12 top-8 w-44 flex flex-col justify-center">
      {menuItems.map((item, index) =>
        item.scroll ? (
          <ScrollLink
            key={index}
            to={item.path}
            smooth={true}
            duration={600}
            className="transform hover:underline w-16 cursor-pointer font-light font-manrope -rotate-90 origin-left whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-300 mb-16"
          >
            {item.name}
          </ScrollLink>
        ) : (
          <RouterLink
            key={index}
            to={item.path}
            className="transform hover:underline w-16 cursor-pointer font-light font-manrope -rotate-90 origin-left whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-300 mb-16"
          >
            {item.name}
          </RouterLink>
        )
      )}
    </nav>
  );
};

export default Sidebar;
