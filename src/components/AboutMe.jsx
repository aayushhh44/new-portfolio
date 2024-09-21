import React from "react";

const AboutMe = () => {
  return (
    <>
      <div id="about" className="p-8 lg:p-24">
        <h1 className="font-manrope text-2xl font-extrabold flex">
          <span className="underline decoration-4 underline-offset-8">
            about
          </span>
          me
        </h1>

        <h1>
          <span></span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center sm:p-16">
          <img className="w-48" src="/image1.png" alt="" />

          <div className="flex flex-col gap-8 sm:gap-2">
            <h1 className="font-normal font-manrope text-2xl">Aayush Poudel</h1>
            <p className="font-manrope font-thin">
              I'm Aayush Poudel, a front-end developer who enjoys creating clean
              and easy-to-use websites. I focus on React and have experience
              working with full-stack projects using the MERN stack. My goal is
              to build responsive and user-friendly interfaces that look great
              on any device. I'm also learning new technologies like Web3 and
              Solidity to improve my skills. I enjoy working with others and
              always aim to deliver the best results in my projects.
            </p>

            <div className="flex gap-2 font-manrope my-2 sm:my-6">
              <a href="https://www.instagram.com/aayblush/" className="cursor-pointer hover:font-semibold">INSTAGRAM</a>
              <a href="https://github.com/aayushhh44" className="cursor-pointer hover:font-semibold">GITHUB</a>
              <a href="mailto:example@example.com" className="cursor-pointer hover:font-semibold">EMAIL</a>
              </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="border rounded-lg flex gap-2 items-center justify-between p-2">
            <img className="w-8" src="/webdesigns.svg" />
            <hr className="w-px h-full bg-gray-300 mx-2 sm:mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">HTML & CSS</p>
              <p className="font-manrope font-light text-xs">
                I create responsive websites with fast loading and optimized
                design.
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex  justify-between p-2">
            <img className="w-8" src="/react1.svg" />
            <hr className="w-px h-full bg-gray-300 mx-2 sm:mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">React.js</p>
              <p className="font-manrope font-light text-xs">
                Skilled in building interactive user interfaces using React.
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex justify-between p-2">
            <img className="w-8" src="/wordpress.svg" />
            <hr className="w-px h-full bg-gray-300 mx-2 sm:mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">Backend Development</p>
              <p className="font-manrope font-light text-xs">
                Building efficient server-side applications using Node.js and
                Express.
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex justify-between p-2">
            <img className="w-8" src="/react1.svg" />
            <hr className="w-px h-full bg-gray-300 mx-2 sm:mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">
                Full-Stack Development
              </p>
              <p className="font-manrope font-light text-xs">
                Creating scalable and maintainable full-stack applications.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row mt-16 justify-between">
          <div className="border w-full sm:w-1/3 flex rounded-xl p-4">
            <hr className="w-[2px] h-48 bg-gray-300 mr-4" />
            <div className="flex flex-col gap-2">
              <p className="font-manrope font-bold">
                I've had experiences with
              </p>
              <p className="font-light font-manrope">Firebase Database</p>
              <p className="font-light font-manrope">MYSQL Database</p>
              <p className="font-light font-manrope">GIT, GitHub</p>
              <p className="font-light font-manrope">Digital Marketing</p>
              <p className="font-light font-manrope">Coding Python</p>
            </div>
          </div>

          <div className="border w-full sm:w-1/3 flex rounded-xl p-4">
            <hr className="w-[2px] h-48 bg-gray-300 mr-4" />
            <div className="flex flex-col gap-2">
              <p className="font-manrope font-bold">I've experience on</p>
              <p className="font-light font-manrope">HTML5 & CSS3</p>
              <p className="font-light font-manrope">JavaScript Development</p>
              <p className="font-light font-manrope">MongoDB & Node.js</p>
              <p className="font-light font-manrope">
                React.js & Front-End Design
              </p>
            </div>
          </div>

          <div className="border w-full sm:w-1/4 flex rounded-xl p-4">
            <hr className="w-[2px] h-44 bg-gray-300 mr-4" />
            <div className="flex flex-col gap-2">
              <p className="font-manrope font-bold">I work and Study about</p>
              <p className="font-light font-manrope">React.js</p>
              <p className="font-light font-manrope">JavaScript & CSS3</p>
              <p className="font-light font-manrope">Node.js & MongoDB</p>
              <p className="font-light font-manrope">Solidity & Web3</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default AboutMe;
