import React from "react";
import content from "@hackerlabs/content/content.json";
import "./index.css";

import ProjectContainer from "../ProjectContainer";

const PortfolioMainPage = () => {
  console.log({ content });

  return (
    <div className="mainPage vignette projectTextContainer">
      <div className="mainHeading">
        <h2 className="text font-inter mb-10">
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
            <span className="gradient-text visible-no-transform sm:items-center">
              {"Projects"}
            </span>
          </span>
        </h2>
      </div>

      {content?.Projects.map((projectCards, index) => {
        return (
          <ProjectContainer
            key={index}
            projectCards={projectCards}
            projectKey={projectCards.key}
            highlight={
              index === 0 ||
              index === 2 ||
              index === 3 ||
              index === 4 ||
              index === 5 ||
              index === 6 ||
              index === 8
            }
          />
        );
      })}
    </div>
  );
};

export default PortfolioMainPage;
