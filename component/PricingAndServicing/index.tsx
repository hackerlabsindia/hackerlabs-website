import React, { forwardRef } from "react";

import content from "@hackerlabs/content/content.json";
import { ArrowRight, CallIcon, LetsTalk } from "@hackerlabs/icons";
import ServiceCardContainer from "../ServiceCardComponent";

interface ServiceProps {
  contactFormRef: React.RefObject<HTMLDivElement>;
  pricingRef?: React.RefObject<HTMLDivElement>;
}

const serviceCardProperties = [ArrowRight, LetsTalk, CallIcon];

const PricingAndServicing: React.FC<ServiceProps> = ({
  contactFormRef,
  pricingRef,
}) => {
  return (
    <div className="pricingContainer" id="pricing">
      <div className="verticalLines left-1/4"></div>
      <div className="verticalLines left-1/2"></div>
      <div className="verticalLines left-3/4"></div>
      <div className="headerContainer" id="See-packages">
        <span className="heading1">{content.OurServices.text1}</span>
        <div className="relative">
          <h2 className="heading2">{content.OurServices.text2}</h2>
        </div>
      </div>
      <div className="boxContainer" ref={pricingRef}>
        {content.ServiceCard.map((serviceCard, index) => {
          const ServiceIcon = serviceCardProperties[index];

          return (
            <ServiceCardContainer
              key={index}
              serviceCard={{ ...serviceCard, contactFormRef }}
              iconComponent={<ServiceIcon />}
              highlight={index === 1}
            />
          );
        })}
      </div>
    </div>
  );
};

PricingAndServicing.displayName = "PricingAndServicing";
export default PricingAndServicing;
