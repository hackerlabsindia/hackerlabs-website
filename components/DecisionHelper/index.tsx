import React from "react";
import content from "@hackerlabs/content/content.json";
import AccordionItem from "../Accordion";

const DecisionHelper = () => {
  return (
    <div className="mainContainer">
      <div className="vertical-lines left-1/4"></div>
      <div className="vertical-lines left-1/2"></div>
      <div className="vertical-lines left-3/4"></div>
      <div className="absolute bottom-12 right-[45%] hidden h-64 w-1/2 translate-x-full select-none 2xl:flex">
        <div className="bg-stripes absolute inset-0 bg-gray-200"></div>
      </div>
      <div className="mainQuestionContainer">
        <h2 className="question">{content.Question.heading}</h2>
      </div>
      <div className="subQuestionContainer">
        <div className="subQuestion">
          <div className=" not-transform flex flex-col max-w-3xl mx-auto my-8 select-none flex-space-between font-inter text-xl font-medium justify-around">
            {content.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionHelper;
