import React from "react";
import content from "@hackerlabs/content/content.json";
import Button from "../Button";
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
      <div className="boxContainer gap-0">
        <div className="boxes group translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">01</span>
          <h3 className="text-xl font-semibold">
            {" "}
            {content.IntroductoryCall.heading}
          </h3>
          <p className="mt-3">
            {content.IntroductoryCall.description}

            <br />
            <br />
          </p>
          <Button containerClass={"startButton"} tabIndex={0}>
            {content.IntroductoryCall.button}
          </Button>
          <Icon Icon={IntroCall} iconClass="intro-call" />
        </div>
        <div className="group boxes translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">02</span>
          <h3 className="font-inter text-xl font-semibold">
            {content.Requirement.heading}
          </h3>
          <p className="mt-3">{content.Requirement.description}</p>
          <Icon Icon={RequirementIcon} iconClass="requirement-icon" />
        </div>
        <div className="group boxes translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">03</span>
          <h3 className="font-inter text-xl font-semibold">
            {content.Development.heading}
          </h3>
          <p className="mt-3">
            {content.Development.description}
            <br />
          </p>
          <Icon Icon={DevelopmentIcon} iconClass="development-icon" />
        </div>
        <div className="group boxes translate-up">
          <span className="my-3 block font-mono text-sm text-gray-500">04</span>
          <h3 className="font-inter text-xl font-semibold">
            {content.Support.heading}
          </h3>
          <p className="mt-3">
            {content.Support.description}

            <br />
          </p>
          <Icon Icon={SupportIcon} iconClass="support-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
