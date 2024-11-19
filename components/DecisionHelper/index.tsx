import React from "react";
import content from "@hackerlabs/content/content.json";

const DecisionHelper = () => {
  return (
    <div className="mainContainer">
      <div className="vertical-lines left-1/4"></div>
      <div className="vertical-lines left-1/2"></div>
      <div className="vertical-lines left-3/4"></div>
      <div className="absolute bottom-12 right-[45%] hidden h-64 w-1/2 translate-x-full select-none 2xl:flex">
        <div className="bg-stripes absolute inset-0 bg-gray-200"></div>
        <div className="absolute bottom-[0.73rem] right-[0.6rem] flex h-5 w-5 translate-x-full translate-y-full items-center justify-center text-5xl text-gray-200">
          +
        </div>
        <div className="absolute -top-[0.7rem] right-[0.6rem] flex h-5 w-5 translate-x-full items-center justify-center text-5xl text-gray-100">
          +
        </div>
      </div>
      <div className="mainQuestionContainer">
        <h2 className="question">{content.Question.heading}</h2>
      </div>
      <div className="subQuestionContainer">
        <div className="subQuestion not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              {content.subQuestions.question1}
            </span>
          </div>
        </div>
        <div className="subQuestion not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              {content.subQuestions.question2}
            </span>
          </div>
        </div>
        <div className="subQuestion not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              {content.subQuestions.question3}
            </span>
          </div>
        </div>
        <div className="subQuestion not-transform">
          <div className="select-none flex-space-between ">
            <span className="font-header text-xl font-medium">
              {content.subQuestions.question4}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionHelper;
