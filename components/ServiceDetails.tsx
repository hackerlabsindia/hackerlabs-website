import React from "react";
import content from "@hackerlabs/content/content.json";
import "./page.css";

const ServiceDetails = () => {
  return (
    <div className="my-12 select-none py-8 md:my-24">
      <div className="font-family font-bold uppercase sm:text-6xl marquee-container">
        <div className="font-family font-bold uppercase sm:text-6xl marquee-item">
          <div className="font-family font-bold uppercase sm:text-6xl inline-relative">
            •{" "}
          </div>
          <div className="font-header  font-bold uppercase sm:text-6xl__item elative-inline">
            {content.animatedText.text1} • {content.animatedText.text2} •{" "}
            {content.animatedText.text3} • {content.animatedText.text4} •{" "}
            {content.animatedText.text5} • {content.animatedText.text6}
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-44">
        <h2 className="font-header mt-6 flex justify-center gap-3 text-center text-3xl">
          {content.tableHeading.text1}
          <span className="border-color gradient-text relative border bg-white px-3 shadow">
            {content.tableHeading.text2}
            <span className="text-xl">{content.tableHeading.emoji}</span>
          </span>
          {content.tableHeading.text3}
        </h2>
        <div className="hidden justify-center lg:flex">
          <div className="flex h-10 w-0.5 justify-center bg-gray-200"></div>
        </div>
        <div className="mx-12 mt-12 flex flex-col justify-center lg:mt-0 lg:flex-row">
          <div className="min-w-[20rem] flex-1">
            <div className="hidden justify-end lg:flex">
              <div className="h-24 w-1/2 rounded-tl-xl border-l border-t border-gray-200"></div>
            </div>
            <div className="no-transform">
              <div className="border-color  mx-3 rounded-xl border px-9 py-6">
                <h2 className="font-family inline-flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                  {content.Packages.heading}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 "
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </h2>
                <p className="mt-2 text-gray-800">
                  {content.Packages.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <div className="h-14 w-1/2 border-r border-gray-200"></div>
          </div>
          <div className="min-w-[20rem] flex-1">
            <div className="hidden justify-center lg:flex">
              <div className="h-14 w-1/2 border-r border-t border-gray-200"></div>
              <div className="h-14 w-1/2 border-r border-t border-gray-200"></div>
            </div>
            <div className="no-transform">
              <div className="border-color  mx-3 rounded-xl border px-9 py-6">
                <h2 className="font-header inline-flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                  {content.Development.heading}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M344-336 200-480l144-144 56 57-87 87 87 87-56 57Zm272 0-56-57 87-87-87-87 56-57 144 144-144 144ZM200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80Z"></path>
                  </svg>
                </h2>
                <p className="mt-2 text-gray-800">
                  {" "}
                  {content.Development.description}
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[20rem] flex-1">
            <div className="hidden h-24 w-1/2 rounded-tr-xl border-r border-t border-gray-200 lg:flex"></div>
            <div className="flex lg:hidden">
              <div className="h-14 w-1/2 border-r border-gray-200"></div>
            </div>
            <div className="no-transform">
              <div className="border-color  mx-3 rounded-xl border px-9 py-6">
                <h2 className="font-header inline-flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                  {content.Consulting.heading}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"></path>
                  </svg>
                </h2>
                <p className="mt-2 text-gray-800">
                  {content.Consulting.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
