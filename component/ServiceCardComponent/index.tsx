import React from "react";
import ServiceCard, { ServiceCardProps } from "../ServiceCards";
import "./ServiceCardContainer.css";

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
    <div className="container">
      <ServiceCard
        title={serviceCard.title}
        description={serviceCard.description}
        tag={serviceCard.tag}
        text={serviceCard.text}
        button={serviceCard.button}
        price={serviceCard.price}
        iconComponent={iconComponent}
        highlight={highlight}
        contactFormRef={serviceCard.contactFormRef}

      />
    </div>
  );
};
export default ServiceCardContainer;
