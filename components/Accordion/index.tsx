"use client";

import React, { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        // className="w-full text-left p-4 font-bold text-lg focus:outline-none"
      >
        {question}
      </button>
      {isOpen && <div>{answer}</div>}
    </div>
  );
};

export default AccordionItem;

// className="p-4 text-gray-700"
