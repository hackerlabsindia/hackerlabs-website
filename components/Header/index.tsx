import React from "react";
import Image from "next/image";
import content from "@hackerlabs/content/content.json";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer1">
      <div className="headerContainer2">
        <nav className="navLinks">
          <a className="logoTitle  font-sans " href="<">
            <div className="logo">
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
          <div className="headerText">
            <div className="headerSubText">
              <span className="dotContainer1">
                <span className="dotContainer2"></span>
                <span className="glowDot glow-dot"></span>
              </span>
              <span className="availableDate">{content.header.fontHeader}</span>
            </div>
            <button className="button">
              <div className="buttonLogo">
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
