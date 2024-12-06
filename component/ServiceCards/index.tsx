import React from "react";
import Button, { ButtonProps, IconPosition } from "../Button";
import clsx from "clsx";


import useScrollToElement from "@hackerlabs/@/hooks/useScrollToElement";


export interface ServiceCardProps {
  tag: string;
  title: string;
  description: string;
  price: string;
  text: string;

  contactFormRef: React.RefObject<HTMLDivElement>;


  iconComponent: JSX.Element;
  button: string;
  highlight: boolean;
}


const ServiceCard: React.FC<ServiceCardProps> = ({

  tag,
  title,
  description,
  price,
  text,
  iconComponent,
  button,
  highlight = false,

  contactFormRef,
}: ServiceCardProps) => {
  const scrollToContactForm = useScrollToElement(contactFormRef);

  return (
    <>
      <div className="fixedPrice">{tag}</div>
      <h3 className="font-inter text-xl font-semibold">{title}</h3>
      <div className="mt-6 min-h-[10rem]">
        <p className="mt-3">{description}</p>
      </div>
      <div className="boxFooter">

        <Button
          text={button}
          containerClass={clsx("startButton1", {
            highlightedButton: highlight,
          })}
          onClick={scrollToContactForm}
          iconPosition={IconPosition.END}
          icon={iconComponent}
        />

        <div className="flex gap-1.5">
          {text}
          <p className="font-semibold"> {price}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
