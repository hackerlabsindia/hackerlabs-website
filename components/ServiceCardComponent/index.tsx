import React from "react";
import ServiceCard, { ServiceCardProps } from "../ServiceCards";

export interface ServiceCardContainerProps {
  serviceCard: Omit<ServiceCardProps, "iconComponent" | "highlight">;
  iconComponent: JSX.Element;
  highlight: boolean;
}
const ServiceCardContainer = ({
  serviceCard,
  iconComponent,
  highlight = false,
}: ServiceCardContainerProps) => {
  return (
    <div className="border-color no-transform relative min-h-[22rem] flex-1 border bg-white px-6 py-6 hover:border-gray-300 sm:px-9 min-w-[24rem]  hover:scale-105 transform transition-transform duration-300 ease-in-out">
      <ServiceCard
        title={serviceCard.title}
        description={serviceCard.description}
        tag={serviceCard.text}
        text={serviceCard.text}
        button={serviceCard.button}
        price={serviceCard.price}
        iconComponent={iconComponent}
        highlight={highlight}
      />
    </div>
  );
};
export default ServiceCardContainer;
