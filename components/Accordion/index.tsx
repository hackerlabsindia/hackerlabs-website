"use client";

import React from "react";
import { useFaqContext } from "../DecisionHelper/FaqContext";

export interface QuestionProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: QuestionProps) => {
  const { openFaqIndex, toggleFaq } = useFaqContext();
  const isOpen = openFaqIndex === index;

  return (
    <>
      <div className="subQuestion not-transform">
        <div className="select-none flex-space-between ">
          <button
            onClick={() => toggleFaq(index)}
            className="font-inter text-xl font-medium"
          >
            {question}
          </button>
        </div>
        <section className="bg-white h-auto">
          {isOpen && <div className="mt-4 text-gray-800">{answer}</div>}
        </section>
      </div>
    </>
  );
};

export default FaqItem;

