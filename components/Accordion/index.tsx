"use client";

import React, { useCallback } from "react";
import { useFaqContext } from "../DecisionHelper/FaqContext";

export interface QuestionProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: QuestionProps) => {
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
      <div className="select-none flex-space-between font-inter text-xl font-medium">
        {question}
      </div>

      <section
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-screen mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-800">{answer}</div>
      </section>
    </div>
  );
};

export default FaqItem;
