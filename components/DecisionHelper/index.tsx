import React from "react";
import content from "@hackerlabs/content/content.json";
import AccordionItem from "../Accordion";
import FaqItem from "../Accordion";

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
        {content.faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default DecisionHelper;
