import Image from "next/image";
import React from "react";
import content from "@hackerlabs/content/content.json";
import Button, { IconPosition } from "../Button";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerText no-transform">{content.Footer.title}</div>
      <div className="footerSubparts">
        <div className="left-1/4 line"></div>
        <div className="left-1/2 line"></div>
        <div className="left-3/4 line"></div>
        <div className="left-0 line"></div>
        <div className="right-0 line"></div>
        <div className="logoAndLink">
          <div className="flex select-none gap-2 text-3xl">
            <Button
              iconPosition={IconPosition.START}
              icon={
                <Logo logoContainerClass="flex items-center justify-center " />
              }
            />

            {content.Footer.title}
          </div>
          <div className="flex gap-5 text-gray-300">
            <a
              href={content.Footer.link1}
              target="_blank"
              className="hover:text-blue-400"
            >
              {content.Footer.linkName1}
            </a>
            <a
              href={content.Footer.link2}
              target="_blank"
              className="hover:text-blue-400"
            >
              {content.Footer.linkName2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
