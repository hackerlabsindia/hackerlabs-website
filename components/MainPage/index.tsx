import React from "react";
import content from "@hackerlabs/content/content.json";
import "./mainPage.css";

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
            <span className="plusTopRight visible-no-transform">
              {content.mainPage.plus}
            </span>
            <span className="plusBottomRight visible-no-transform">
              {content.mainPage.plus}
            </span>
            <span className="plusBottomLeft visible-no-transform">
              {content.mainPage.plus}
            </span>
            <span className="gradient-text visible-no-transform">
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
          <button className="button1" tabIndex={0}>
            {content.buttons.button1}
          </button>
          <button className="button2" tabIndex={0}>
            {content.buttons.button2}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000"
              className="text-white"
            >
              <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
