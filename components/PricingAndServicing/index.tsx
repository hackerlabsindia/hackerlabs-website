import React from "react";

import content from "@hackerlabs/content/content.json";
import Button from "../Button";
import Icon from "../Icon";
import { ArrowRight, CallIcon, LetsTalk } from "@hackerlabs/icons";

const PricingAndServicing = () => {
  return (
    <div className="pricingContainer" id="pricing">
      <div className="verticalLines left-1/4"></div>
      <div className="verticalLines left-1/2"></div>
      <div className="verticalLines left-3/4"></div>
      <div className="headerContainer">
        <span className="heading1">{content.OurServices.text1}</span>
        <div className="relative">
          <h2 className="heading2">{content.OurServices.text2}</h2>
        </div>
      </div>
      <div className="boxContainer">
        <div className="border-color no-transform box1">
          <div className="fixedPrice">{content.LandingPage.fixedPrice}</div>
          <h3 className="font-inter font-intertext-xl font-semibold">
            {content.LandingPage.heading}
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">{content.LandingPage.description}</p>
          </div>
          <div className="boxFooter">
            <Button containerClass={"startButton1"} tabIndex={0}>
              {content.LandingPage.button}
              <Icon Icon={ArrowRight} width={20} height={20} />
            </Button>
            <div className="flex gap-1.5">
              {content.LandingPage.from}
              <p className="font-semibold"> {content.LandingPage.price}</p>
            </div>
          </div>
        </div>
        <div className="box2 no-transform">
          <div className="custom">{content.softwareDevelop.custom}</div>
          <h3 className="font-inter text-xl font-semibold">
            {content.softwareDevelop.heading}
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">{content.softwareDevelop.description}</p>
          </div>
          <div className="boxFooter">
            <Button containerClass={"talkButton2"} tabIndex={0}>
              {content.softwareDevelop.button}
              <Icon Icon={LetsTalk} width={20} height={20} />
            </Button>
            <div className="flex gap-1.5">
              {content.softwareDevelop.from}

              <p className="font-semibold"> {content.softwareDevelop.price}</p>
            </div>
          </div>
        </div>

        <div className="border-color box3 no-transform">
          <div className="perHour">{content.BookCall.perHour}</div>
          <h3 className="consulting">{content.BookCall.heading}</h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">{content.BookCall.description}</p>
          </div>
          <div className="boxFooter">
            <Button containerClass={"callButton3"} tabIndex={0}>
              {content.BookCall.button}
              <Icon Icon={CallIcon} width={20} height={20} />
            </Button>
            <div className="flex gap-1.5">
              {content.BookCall.from}
              <p className="font-semibold">{content.BookCall.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndServicing;
