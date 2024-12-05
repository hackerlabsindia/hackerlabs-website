import React from "react";
import content from "@hackerlabs/content/content.json";
import "../../../components/Header/header.css";
import Button, { IconPosition } from "../../../components/Button";
import Icon from "../../../components/Icon";
import { DottedLine } from "@hackerlabs/icons";
import Logo from "../../../components/Logo";
import Link from "next/link";

const PortfolioHeader = () => {
  return (
    <div className="headerContainer1">
      <div className="headerContainer2">
        <nav className="navLinks max-w-clamp-custom">
          <Link href="/">
            <Button
              text={content.header.appTitle}
              containerClass={"logoTitle"}
              iconPosition={IconPosition.START}
              icon={
                <Logo logoContainerClass="flex items-center justify-center " />
              }
            />
          </Link>
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

export default PortfolioHeader;
