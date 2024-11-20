import React from "react";
import Image from "next/image";
import content from "@hackerlabs/content/content.json";
import "./header.css";
import Button, { IconPosition } from "../Button";
import Icon from "../Icon";
import Link from "next/link";

const Header = () => {
  return (
    <div className="headerContainer1">
      <div className="headerContainer2">
        <nav className="navLinks">
          <Link className="logoTitle  font-sans " href="/">
            <Button
              text={content.header.appTitle}
              containerClass={"logo"}
              icon={
                <Icon
                  iconSrc="/assets/hackerlabs.logo.png"
                  width={30}
                  height={30}
                  altText="logo"
                  containerClass="logoIcon"
                />
              }
              iconPosition={IconPosition.START}
            />
          </Link>
          <div className="headerText">
            <div className="headerSubText">
              <span className="dotContainer1">
                <span className="dotContainer2"></span>
                <span className="glowDot glow-dot"></span>
              </span>
              <span className="availableDate">{content.header.fontHeader}</span>
            </div>
            <Button
              text={content.buttons.button1}
              containerClass={"button"}
              icon={
                <Icon
                  iconSrc="/assets/hackerlabs.logo.png"
                  width={30}
                  height={30}
                  altText="logo"
                  containerClass="buttonLogo"
                />
              }
              iconPosition={IconPosition.START}
            />
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
