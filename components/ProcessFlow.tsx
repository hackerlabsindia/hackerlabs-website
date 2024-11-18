import React from "react";
import content from "@hackerlabs/content/content.json";
import "./page.css";

const ProcessFlow = () => {
  return (
    <div className="relative pb-32 pt-32 md:pt-56">
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent to-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent to-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent to-gray-300"></div>
      <div className="relative flex flex-col items-center gap-3 pb-12 pt-12">
        <span className="font-semibold uppercase tracking-wider text-blue-500">
          The process
        </span>
        <div className="relative">
          <div className="absolute h-7 w-7 fill-gray-300 border rounded-full p-1 shadow-sm hidden sm:flex -bottom-12 -left-10 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"></path>
            </svg>
          </div>
          <div className="absolute h-7 w-7 fill-gray-300 border rounded-full p-1 shadow-sm hidden sm:flex -left-16 -top-7 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"></path>
            </svg>
          </div>
          <div className="absolute h-7 w-7 fill-gray-300 border rounded-full p-1 shadow-sm hidden sm:flex -right-16 -top-7 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm-21-241q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Z"></path>
            </svg>
          </div>
          <div className="absolute h-7 w-7 fill-gray-300 border rounded-full p-1 shadow-sm hidden sm:flex -bottom-12 -right-10 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"></path>
            </svg>
          </div>
          <h2 className="text-center text-4xl font-bold sm:text-5xl">
            How we work:
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="group relative z-10 min-h-[20rem] border-b border-t border-gray-300 bg-white px-6 py-6 md:w-1/4 translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">01</span>
          <h3 className="font-header text-xl font-semibold">
            {" "}
            Introductory Call
          </h3>
          <p className="mt-3">
            In a 30 min call, we will discuss how can we provide value to you
            and your business.
            <br />
            <br />
          </p>
          <button
            className="cursor-pointer select-none rounded-2xl px-6 py-3 flex items-center gap-3 font-header bg-gray-900 text-white hover:bg-gray-800"
            tabIndex={0}
          >
            Start a project
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="left-1/2 -translate-x-1/2 fill-gray-100 group-hover:fill-blue-100 transition-colors duration-200 ease-in-out absolute  -right-2 bottom-1 h-10 w-10"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path>
          </svg>
        </div>
        <div className="group relative z-10 min-h-[20rem] border-b border-t border-gray-300 bg-white px-6 py-6 md:w-1/4 translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">02</span>
          <h3 className="font-header text-xl font-semibold">
            Requirement & Scope
          </h3>
          <p className="mt-3">
            Our team will gather all the information needed to start the project
            and provide you with a proposal.
            <br />
            Once you accept the proposal, we will start working on the project.
            <br />
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="left-1/2 -translate-x-1/2 fill-gray-100 group-hover:fill-blue-100 transition-colors duration-200 ease-in-out absolute -right-2 bottom-3 h-8 w-8"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
          </svg>
        </div>
        <div className="group relative z-10 min-h-[20rem] border-b border-t border-gray-300 bg-white px-6 py-6 md:w-1/4 translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">03</span>
          <h3 className="font-header text-xl font-semibold">Development</h3>
          <p className="mt-3">
            The team work in iterations with frequent communication with you in
            order to deliver the best possible result.
            <br />
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="left-1/2 -translate-x-1/2 fill-gray-100 group-hover:fill-blue-100 transition-colors duration-200 ease-in-out absolute -right-2 bottom-3 h-10 w-10"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"></path>
          </svg>
        </div>
        <div className="group relative z-10 min-h-[20rem] border-b border-t border-gray-300 bg-white px-6 py-6 md:w-1/4 translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">04</span>
          <h3 className="font-header text-xl font-semibold">
            Handover & Support
          </h3>
          <p className="mt-3">
            After you get the result, you have the option of ongoing maintenance
            and development of new features.
            <br />
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="left-1/2 -translate-x-1/2 fill-gray-100 group-hover:fill-blue-100 transition-colors duration-200 ease-in-out absolute -right-2 bottom-3 h-10 w-10"
          >
            <path d="M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120h-80v-120H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h640v-120h80v120q0 33-23.5 56.5T800-160H160Zm240-120q11 0 21-5.5t15-16.5l124-248 44 88q5 11 15 16.5t21 5.5h240v-80H665l-69-138q-5-11-15-15.5t-21-4.5q-11 0-21 4.5T524-658L400-410l-44-88q-5-11-15-16.5t-21-5.5H80v80h215l69 138q5 11 15 16.5t21 5.5Zm80-200Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
