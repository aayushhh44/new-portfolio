import React from "react";

const Center = () => {
  return (
    <div className="w-4">
      <div className="flex flex-col absolute w-full bottom-96 items-center justify-center">
        <h1 className="font-normal text-xl sm:text-2xl font-dotgot">
          front-end.web(developer)_
        </h1>
      </div>

      <div className="absolute right-0 top-1 sm:top-28 h-screen flex flex-col justify-center">
        <p className="transform hidden sm:block cursor-pointer font-manrope font-bold -rotate-90 origin-left whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-300 mb-16">
          dark mode.
        </p>
      </div>
    </div>
  );
};

export default Center;
