import React from "react";

import content from "@hackerlabs/content/content.json";

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
          <h3 className="font-header text-xl font-semibold">
            {content.LandingPage.heading}
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">{content.LandingPage.description}</p>
          </div>
          <div className="boxFooter">
            <button className="button1" tabIndex={0}>
              {content.LandingPage.button}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path>
              </svg>
            </button>
            <div className="flex gap-1.5">
              {content.LandingPage.from}
              <p className="font-semibold"> {content.LandingPage.price}</p>
            </div>
          </div>
        </div>
        <div className="box2 no-transform">
          <div className="custom">{content.softwareDevelop.custom}</div>
          <h3 className="font-header text-xl font-semibold">
            {content.softwareDevelop.heading}
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">{content.softwareDevelop.description}</p>
          </div>
          <div className="boxFooter">
            <button className="button2" tabIndex={0}>
              {content.softwareDevelop.button}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
              </svg>
            </button>
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
            <button className="button3" tabIndex={0}>
              {content.BookCall.button}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"></path>
              </svg>
            </button>
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
