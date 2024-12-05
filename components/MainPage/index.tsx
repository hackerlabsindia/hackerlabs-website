import React from "react";
import content from "@hackerlabs/content/content.json";
import "./mainPage.css";
import Icon from "../Icon";
import { ArrowDown } from "@hackerlabs/icons";
import Button from "../Button";
import Link from "next/link";


const MainPage = () => {
  return (
    <div className="mainPageContainer vignette">
      <div className="textContainer">
        <h2 className="mainText font-inter">
          {content.mainPage.topTitle}
          <br />
          <span className="designedText border-color border-light">
            <span className="plusTopLeft visible-no-transform">
              {content.mainPage.plus}
            </span>
            <span className="plusTopRight visible no-transform">
              {content.mainPage.plus}
            </span>
            <span className="plusBottomRight visible no-transform">
              {content.mainPage.plus}
            </span>
            <span className="plusBottomLeft visible no-transform">
              {content.mainPage.plus}
            </span>
            <span className="gradient-text visible no-transform">
              {content.mainPage.titleText}
            </span>
          </span>

          {content.mainPage.lastWord}
        </h2>
        <div className="mt-6 text-center">
          <span>{content.secondaryText.line1}</span>
          <br />
          <span>{content.secondaryText.line2}</span>
          <br />
          <span>{content.secondaryText.line3}</span>
        </div>
        <div className="mt-12 flex justify-center gap-3">
          <Link href="#contact-form">
            <Button containerClass={"button1"} tabIndex={0}>
              {content.buttons.button1}
            </Button>
          </Link>
          <Link href="#See-packages">
            <Button containerClass={"button2"} tabIndex={0}>
              {content.buttons.button2}
              <Icon Icon={ArrowDown} width={20} height={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
