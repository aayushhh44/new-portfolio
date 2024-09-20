import React from 'react';

const Sidebar = () => {
  const menuItems = ['home', 'blogs', 'projects', 'about me', 'contact'];

  return (
    
    <nav className="ml-8 sm:ml-12 mt-32 left-12 top-8 h-full w-44 flex flex-col justify-center">
      {menuItems.map((item, index) => (
        <a
          key={index}
          className="transform cursor-pointer font-light font-manrope -rotate-90 origin-left whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-300 mb-16"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;