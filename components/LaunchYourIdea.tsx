import React from "react";
import "./page.css";

const LaunchYourIdea = () => {
  return (
    <div className='"relative overflow-x-hidden pb-12 pt-12"'>
      <div className="absolute left-1/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute -left-5 flex items-center justify-center border-b border-t border-gray-200 bg-gray-800 px-12 py-9 transformed-element"></div>
      <div className="relative flex min-h-[20rem] items-center justify-center border-b border-t border-gray-200 bg-white px-12 py-9 text-center md:text-left">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-header text-3xl font-medium">
            Kickstart your dream project today.
          </h3>
          <p className="font-header text-lg">You're in good hands. </p>
          <button
            className="cursor-pointer select-none rounded-2xl px-6 py-3 flex items-center gap-3 font-header bg-gray-900 text-white hover:bg-gray-800"
            tabIndex={0}
          >
            Start a project
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchYourIdea;
