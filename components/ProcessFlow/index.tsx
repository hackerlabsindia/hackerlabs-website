import React from "react";
import content from "@hackerlabs/content/content.json";
import Icon from "../Icon";
import {
  BouncingIcon1,
  BouncingIcon2,
  BouncingIcon3,
  BouncingIcon4,
  DevelopmentIcon,
  IntroCall,
  RequirementIcon,
  SupportIcon,
} from "@hackerlabs/icons";

import ProcessFlowContainer from "../ProcessFlowContainer";

const ProcessFlowIcons = [
  IntroCall,
  RequirementIcon,
  SupportIcon,
  DevelopmentIcon,
];

const ProcessFlow = () => {
  return (
    <div className="headingContainer">
      <div className="fadeVerticalLines left-1/4 "></div>
      <div className="fadeVerticalLines left-1/2 "></div>
      <div className="fadeVerticalLines left-3/4 "></div>
      <div className="header">
        <span className="heading1">{content.ProcessOfWorking.text1}</span>
        <div className="relative">
          <div className="icons -bottom-12 -left-10 ">
            <Icon Icon={BouncingIcon1} />
          </div>
          <div className="icons -left-16 -top-7">
            <Icon Icon={BouncingIcon2} />
          </div>
          <div className="icons -right-16 -top-7">
            <Icon Icon={BouncingIcon3} />
          </div>
          <div className="icons -bottom-12 -right-10">
            <Icon Icon={BouncingIcon4} />
          </div>
          <h2 className="heading2">{content.ProcessOfWorking.text2}</h2>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        {content.ProcessFlowCards.map((processFlowCard, index) => {
          const ProcessIcon = ProcessFlowIcons[index];
          return (
            <ProcessFlowContainer
              key={index}
              processFlowCard={processFlowCard}
              iconComponent={<ProcessIcon className="icon" />}
              highlight={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProcessFlow;
