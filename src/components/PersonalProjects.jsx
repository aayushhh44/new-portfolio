import React from "react";
import Projects from "./Projects.json";

const PersonalProjects = () => {
  // console.log(Projects); // Log the Projects data

  return (
    <>
      <div id="projects" className="p-4 lg:p-24">
        <h1 className="font-manrope text-2xl font-extrabold flex justify-end">
          Personal pro
          <span className="underline decoration-4 underline-offset-8">
            jects
          </span>
        </h1>

        <div className="flex flex-col p-4 gap-6 md:gap-0 md:flex-row flex-wrap">
          {Projects ? (
            Object.entries(Projects).map(([key, pro]) => (
              <div
                key={key}
                className="flex w-full mt-8 md:w-1/2 md:p-8 gap-4 items-center"
              >
                <div className="bg-[#f8f8f8] sm:p-4 xl:p-10 w-1/2">
                  <img
                    loading="lazy"
                    className="w-96 font-manrope  font-normal"
                    src={pro.imageURL}
                    alt={pro.name}
                  />

                  <div className="flex mt-4 gap-2 font-manrope text-xs">
                    <p className="bg-white rounded-md sm:p-2">#react</p>
                    <p className="bg-white rounded-md sm:p-2">#tailwind</p>
                    <p className="bg-white rounded-md sm:p-2">#mobile-screen</p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                  <div className="flex items-center font-manrope font-bold">
                    <h1 className="text-xl text-nowrap sm:text-2xl font-manrope">
                      {pro.name}
                    </h1>
                  </div>
                  <p className="font-normal text-[#808080] font-manrope text-sm text-justify">
                    {pro.details}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={pro.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-manrope"
                    >
                      <span className="underline text-gray-700 underline-offset-4 font-manrope">
                        See
                      </span>{" "}
                      project
                    </a>
                    <a
                      href={pro.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <span className="underline font-manrope">Git</span>Hub
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default PersonalProjects;
