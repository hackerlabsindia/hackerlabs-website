import { Button } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import NavBar from "Components/NavBar";
import { HeaderWrapper } from "./StyledComonents";

const Header = (props) => {
  const [showNavBar, setShowNavBar] = useState(false);

  document.addEventListener("click", function (e) {
    if (showNavBar) {
      setShowNavBar(false);
    }
  });

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="logo_section">
          <Button
            className="toggle_btn"
            onClick={(e) => {
              setShowNavBar(!showNavBar);
              e.stopPropagation();
            }}>
            {showNavBar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <img src="./logo192.png" alt="logo" />
          <h1 className="title"> HackerLabs</h1>
        </div>
        <nav className="spred_nav_bar">
          <a href="#hero">Home</a>
          <a href="#hero">About</a>
          <a href="#dev">Devs</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="absolute_navbar" onClick={(e) => e.stopPropagation()}>
        {showNavBar && (
          <NavBar className="header_navbar" setShowNavBar={setShowNavBar} />
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
