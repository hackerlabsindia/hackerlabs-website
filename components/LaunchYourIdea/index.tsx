import React from "react";

import content from "@hackerlabs/content/content.json";

const LaunchYourIdea = () => {
  return (
    <div className="main-container">
      <div className="absolute left-1/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="transformed-element innerContainer"></div>
      <div className="textContainer">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-header text-3xl font-medium">
            {content.StartProject.text1}
          </h3>
          <p className="font-header text-lg"> {content.StartProject.text2}</p>
          <button className="button font-header" tabIndex={0}>
            {content.StartProject.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchYourIdea;