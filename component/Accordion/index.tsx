"use client";

import React, { useCallback } from "react";
import { useFaqContext } from "../DecisionHelper/FaqContext";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  const { openFaqIndex, toggleFaq } = useFaqContext();

  const isOpen = openFaqIndex === index;

  const handleToggleFaq = useCallback(() => {
    toggleFaq(index);
  }, [index, toggleFaq]);

  return (
    <div
      onClick={handleToggleFaq}
      className="subQuestion not-transform cursor-pointer"
    >
      <h3
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-screen mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {question}
      </h3>
      {isOpen && (
        <p className="mt-4 text-gray-800 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
