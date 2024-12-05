import React from "react";

import content from "@hackerlabs/content/content.json";
import Button from "../Button";
import Link from "next/link";

const LaunchYourIdea = () => {
  return (
    <div className="main-container">
      <div className="absolute left-1/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="transformed-element innerContainer"></div>
      <div className="ideaTextContainer">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-inter text-3xl font-medium">
            {content.StartProject.text1}
          </h3>
          <p className="font-inter text-lg"> {content.StartProject.text2}</p>
          <Link href="#contact-form">
            <Button containerClass={"footerButton font-inter"} tabIndex={0}>
              {content.StartProject.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchYourIdea;
