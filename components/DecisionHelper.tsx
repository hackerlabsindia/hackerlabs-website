import React from "react";
import "./page.css";

const DecisionHelper = () => {
  return (
    <div className="relative grid min-h-[30rem] grid-cols-1 justify-center pb-16 pt-44 md:grid-cols-2 md:pb-32 md:pt-64">
      <div className="absolute left-1/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute bottom-12 right-[45%] hidden h-64 w-1/2 translate-x-full select-none 2xl:flex">
        <div className="bg-stripes absolute inset-0 bg-gray-200"></div>
        <div className="absolute bottom-[0.73rem] right-[0.6rem] flex h-5 w-5 translate-x-full translate-y-full items-center justify-center text-5xl text-gray-200">
          +
        </div>
        <div className="absolute -top-[0.7rem] right-[0.6rem] flex h-5 w-5 translate-x-full items-center justify-center text-5xl text-gray-100">
          +
        </div>
      </div>
      <div className="relative px-9 md:px-24">
        <h2 className="font-bold text-6xl leading-[1.2] sm:text-5xl">
          Still wondering if we're right for you?
        </h2>
      </div>
      <div className="relative pt-12 md:pt-0">
        <div className="w-full cursor-pointer border border-gray-200 bg-white px-12 py-10 shadow-sm not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              What is the typical process like?
            </span>
          </div>
        </div>
        <div className="w-full cursor-pointer border border-gray-200 bg-white px-12 py-10 shadow-sm not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              How much will my website cost?
            </span>
          </div>
        </div>
        <div className="w-full cursor-pointer border border-gray-200 bg-white px-12 py-10 shadow-sm not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              How long does a website take to build?
            </span>
          </div>
        </div>
        <div className="w-full cursor-pointer border border-gray-200 bg-white px-12 py-10 shadow-sm not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              I already have the designs, can you develop them?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionHelper;
