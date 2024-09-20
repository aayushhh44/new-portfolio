import React from "react";

const ContactMe = () => {
  return (
    <div className="p-4 sm:p-20">
      <div className="">
        <div>
          <h1 className="text-2xl text-center font-bold">
            con<span className="underline underline-offset-4">tact m</span>e
          </h1>

          <div className="flex justify-center mt-12 gap-24">
            <a target="_blank" href="https://www.linkedin.com/in/aayush-poudel-915007223/">
            
              <img src="/linkedin.svg" alt="Linkedin" />
            </a>
            <a target="_blank" href="https://www.instagram.com/aayblush/">
      
              <img src="/instagram.png" alt="Insta" />
            </a>
            <a target="_blank" href="https://github.com/aayushhh44">
              <img src="/github.svg" alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-40 sm:pt-60 sm:px-16">
        <p className="font-manrope text-2xl font-extrabold">aayush.</p>
        <p className="font-light text-gray-500">
          design and coding by <span className="font-bold">me</span>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
