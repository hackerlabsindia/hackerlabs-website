import React from "react";
import Button from "../Button";
import "../ProcessFlow/processFlow.css";
import Link from "next/link";
import useScrollToElement from "@hackerlabs/@/hooks/useScrollToElement";


export interface ProcessFlowProps {
  title: string;
  description: string;
  iconComponent: JSX.Element;
  text: string;

  contactFormRef: React.RefObject<HTMLDivElement>;
  highlight: boolean;
}

const ProcessFlowCard: React.FC<ProcessFlowProps> = ({

  title,
  description,
  iconComponent,
  highlight = false,
  text,

  contactFormRef,
}: ProcessFlowProps) => {
  const scrollToContactForm = useScrollToElement(contactFormRef);

  return (
    <div className="group relative z-10 min-h-[20rem] border-b border-t border-gray-300 bg-white px-6 py-6 md:w-1/4 opacity-100 transform translate-y-12 transition-all">
      <span className="my-3 block font-mono text-sm text-gray-500">{text}</span>
      <h3 className="text-xl font-semibold"> {title}</h3>
      <p className="mt-3">
        {description}

        <br />
        <br />
      </p>
      {highlight && (

        <Button
          containerClass={"startButton"}
          tabIndex={0}
          onClick={scrollToContactForm}
        >
          {"Start a Project"}
        </Button>

      )}
      {iconComponent}
    </div>
  );
};

export default ProcessFlowCard;
