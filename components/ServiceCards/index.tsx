import React from "react";
import Button, { ButtonProps, IconPosition } from "../Button";

export interface ServiceCardProps {
  tag: string;
  title: string;
  description: string;
  price: string;
  text: string;
  iconComponent: JSX.Element;
  button: string;
  highlight: boolean;
}

const ServiceCard = ({
  tag,
  title,
  description,
  price,
  text,
  iconComponent,
  button,
  highlight = false,
}: ServiceCardProps) => {
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
          containerClass={highlight ? "highlightedButton" : "startButton1"}
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
