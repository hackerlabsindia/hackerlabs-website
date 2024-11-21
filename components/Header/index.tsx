import React from "react";
import Image from "next/image";
import content from "@hackerlabs/content/content.json";
import "./header.css";
import Button, { IconPosition } from "../Button";
import Icon from "../Icon";
import Link from "next/link";
import { DottedLine } from "@hackerlabs/icons";
import Logo, { LogoPosition } from "../Logo";

const Header = () => {
  return (
    <div className="headerContainer1">
      <div className="headerContainer2">
        <nav className="navLinks max-w-clamp-custom">
          <Button
            text={content.header.appTitle}
            containerClass={"logoTitle"}
            iconPosition={IconPosition.START}
            icon={
              <Logo logoContainerClass="flex items-center justify-center " />
            }
          />

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
              iconPosition={IconPosition.START}
              icon={
                <Logo logoContainerClass="flex items-center justify-center" />
              }
            ></Button>
          </div>
          <Icon
            Icon={DottedLine}
            height={2}
            iconClass="absolute bottom-0 left-0 w-full"
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;