import React, { useRef } from "react";
import content from "@hackerlabs/content/content.json";
import "./serviceDetails.css";
import {
  ConsultingIcon,
  PackagesIcon,
  SoftwareDevIcon,
} from "@hackerlabs/icons";
import CardContainer from "../CardContainer";

const cardProperties = [
  {
    icon: PackagesIcon,
    child: (
      <div className="hidden justify-end lg:flex">
        <div className="h-24 w-1/2 rounded-tl-xl border-l border-t border-gray-200"></div>
      </div>
    ),
  },
  {
    icon: SoftwareDevIcon,
    child: (
      <div className="hidden justify-center lg:flex">
        <div className="h-14 w-1/2 border-r border-t border-gray-200"></div>
        <div className="h-14 w-1/2 border-l border-t border-gray-200"></div>
      </div>
    ),
  },
  {
    icon: ConsultingIcon,
    child: (
      <>
        <div className="hidden h-24 w-1/2 rounded-tr-xl border-r border-t border-gray-200 lg:flex"></div>
        <div className="flex lg:hidden">
          <div className="h-14 w-1/2 border-r border-gray-200"></div>
        </div>
      </>
    ),
  },
];

const ServiceDetails = () => {
  return (
    <div>
      <h2 className="headingText1 font-inter ">
        {content.tableHeading.text1}
        <span className="headingText2  border-color gradient-text">
          {content.tableHeading.text2}
          <span className="text-xl">{content.tableHeading.emoji}</span>
        </span>
        {content.tableHeading.text3}
      </h2>
      <div className="hidden justify-center lg:flex">
        <div className="flex h-10 w-0.5 justify-center bg-gray-200"></div>
      </div>
      <div className="tableSubContainer">
        {content.Cards.map((card, index) => (
          <React.Fragment key={index}>
            <CardContainer
              key={index}
              card={{ ...card, iconComponent: cardProperties[index].icon }}
            >
              {cardProperties[index].child}
            </CardContainer>
            {index === 0 && (
              <div className="flex lg:hidden">
                <div className="h-14 w-1/2 border-r border-gray-200"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
