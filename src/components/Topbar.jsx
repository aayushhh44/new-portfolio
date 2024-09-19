import React from "react";

const Topbar = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="font-manrope text-2xl font-extrabold">aayush.</h1>

        <div>
          <p className="text-lg font-manrope">
            <span className="underline underline-offset-4">se</span>lf service
          </p>
          <p className="text-sm font-manrope">20% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
