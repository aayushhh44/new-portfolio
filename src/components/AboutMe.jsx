import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className=" p-8 lg:p-24">
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
              I'm more than one in love for Front-End. My experience with
              interface design turn me one extremely criterious with alignments,
              margins, colors and a lot other resorces in CSS. Today I work with
              projects in a whole world. Codifiding in my home office, in a
              quiet interior of São Paulo, Brazil.
            </p>

            <div className="flex gap-2 font-manrope my-2 sm:my-6">
              <p className="cursor-pointer hover:font-semibold">INSTAGRAM</p>
              <p className="cursor-pointer hover:font-semibold">GITHUB</p>
              <p className="cursor-pointer hover:font-semibold">EMAIL</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="border rounded-lg flex gap-2 items-center justify-between p-2">
            <img className="w-8" src="/webdesigns.svg" />
            <hr className="w-px h-16 bg-gray-300 mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">HTML & CSS</p>
              <p className="font-manrope font-light text-xs">
                Responsive website with fast loading
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex gap-2 justify-between p-2">
            <img className="w-8" src="/react1.svg" />
            <hr className="w-px h-16 bg-gray-300 mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">HTML & CSS</p>
              <p className="font-manrope font-light text-xs">
                Responsive website with fast loading
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex gap-2 justify-between p-2">
            <img className="w-8" src="/wordpress.svg" />
            <hr className="w-px h-16 bg-gray-300 mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">HTML & CSS</p>
              <p className="font-manrope font-light text-xs">
                Responsive website with fast loading
              </p>
            </div>
          </div>

          <div className="border rounded-lg items-center flex gap-2 justify-between p-2">
            <img className="w-8" src="/react1.svg" />
            <hr className="w-px h-16 bg-gray-300 mx-4" />

            <div className="flex flex-col gap-1">
              <p className=" font-manrope font-semibold">HTML & CSS</p>
              <p className="font-manrope font-light text-xs">
                Responsive website with fast loading
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
              <p className="font-light font-manrope">Coding HTML5</p>
              <p className="font-light font-manrope">CSS3</p>
              <p className="font-light font-manrope">Coding JavaScript</p>
              <p className="font-light font-manrope">MongoDb Database</p>
              <p className="font-light font-manrope">Node Js</p>
            </div>
          </div>

          <div className="border w-full sm:w-1/4 flex rounded-xl p-4">
            <hr className="w-[2px] h-60 bg-gray-300 mr-4" />
            <div className="flex flex-col gap-2">
              <p className="font-manrope font-bold">I work and Study about</p>
              <p className="font-light font-manrope">Coding React.js</p>
              <p className="font-light font-manrope">CSS3</p>
              <p className="font-light font-manrope">Coding JavaScript</p>
              <p className="font-light font-manrope">MongoDb Database</p>
              <p className="font-light font-manrope">Node Js</p>
              <p className="font-light font-manrope">Solidity</p>
              <p className="font-light font-manrope">Web3</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default AboutMe;
