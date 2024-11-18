import React from "react";
import "../app/globals.css";
import Image from "next/image";
import "./page.css";
import content from "@hackerlabs/content/content.json";

const Header = () => {
  return (
    <div className="border-color flex justify-center border-t">
      <div className="flex w-full flex-col justify-end">
        <nav className="relative m-auto flex w-full justify-between border-l border-r px-6 py-6 md:px-12 border-color max-w-clamp-custom">
          <a
            className="font-family flex select-none items-center gap-3 text-3xl font-bold tracking-wide"
            href="<"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/assets/hackerlabs.logo.png"
                alt="logo"
                width={30}
                height={30}
                className="pt-0.5 text-transparent"
              />
              {content.header.appTitle}
            </div>
          </a>
          <div className="hidden items-center gap-9 sm:flex">
            <div className="flex items-center space-x-2">
              <span className="relative mr-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="glow-dot relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="font-bold truncate text-sm text-green-800">
                {content.header.fontHeader}
              </span>
            </div>
            <button className="cursor-pointer select-none rounded-2xl px-6 py-3 items-center gap-3 font-family bg-gray-900 text-white hover:bg-gray-800 hidden md:flex">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/hackerlabs.logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                  className="text-transparent"
                />
              </div>
              {content.buttons.button1}
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full"
            height={2}
            fill="none"
            viewBox="0 0 1358 1"
          >
            <line
              x1="100%"
              y1="0.5"
              x2="-4.11709e-05"
              y2="0.499881"
              stroke="#eceaea"
              strokeOpacity="1"
              strokeDasharray="4 4"
            ></line>
          </svg>
        </nav>
      </div>
    </div>
  );
};

export default Header;
