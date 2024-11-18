import React from "react";
import content from "@hackerlabs/content/content.json";
import "./page.css";

const MainPage = () => {
  return (
    <div className="border-color m-auto min-h-screen border-l border-r max-w-clamp-custom">
      <div className="vignette relative flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 h-full w-full"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 20 0 L 0 0 0 20" fill="none"></path>
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)"></rect>
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#d1d1d1"
                strokeWidth="1"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
        <div className="relative z-20 py-32">
          <h2 className="font-family max-w-[50rem] text-center text-4xl font-medium leading-[1.3] sm:text-5xl md:text-6xl md:leading-[1.3]">
            {content.mainPage.topTitle}
            <br />
            <span className="border-color relative overflow-hidden bg-white px-3 shadow border-light">
              <span className="absolute -left-[0.9rem] -top-[0.52rem] z-10 flex h-4 w-7 select-none items-center justify-center text-xl text-gray-400 visible-no-transform">
                {content.mainPage.plus}
              </span>
              <span className="absolute -right-[0.9rem] -top-[0.52rem] z-10 flex h-4 w-7 select-none items-center justify-center text-xl text-gray-400 visible-no-transform">
                {content.mainPage.plus}
              </span>
              <span className="absolute -bottom-[0.52rem] -right-[0.9rem] z-10 flex h-4 w-7 select-none items-center justify-center text-xl text-gray-400 visible-no-transform">
                {content.mainPage.plus}
              </span>
              <span className="absolute -bottom-[0.52rem] -left-[0.9rem] z-10 flex h-4 w-7 select-none items-center justify-center text-xl text-gray-400 visible-no-transform">
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
            <button
              className="cursor-pointer select-none rounded-2xl px-6 py-3 flex items-center gap-3 font-header bg-gray-900 text-white hover:bg-gray-800"
              tabIndex={0}
            >
              {content.buttons.button1}
            </button>
            <button
              className="cursor-pointer select-none rounded-2xl px-6 py-3 flex items-center font-header border border-gray-900 bg-white text-gray-900 gap-1"
              tabIndex={0}
            >
              {content.buttons.button2}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#000"
              >
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
