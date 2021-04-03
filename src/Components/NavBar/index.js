import { Menu } from "antd";
import { useState } from "react";
import { FaHome, FaBook, FaReact } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";

const menu = [
  { name: "Home", icon: <FaHome className="icon" />, id: "hero" },
  { name: "About", icon: <FaBook className="icon" />, id: "about" },
  { name: "Devs", icon: <RiStackFill className="icon" />, id: "dev" },
  { name: "Tech", icon: <FaReact className="icon" />, id: "tech" },
  { name: "Contact", icon: <MdContactMail className="icon" />, id: "contact" },
];

const NavBar = (props) => {
  const { setShowNavBar, defaultSelectedKey, className } = props;

  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);

  const handleSelectedKeyChange = ({ key }) => {
    setSelectedKey(key);
    setShowNavBar(false);
  };

  return (
    <Menu
      theme="light"
      onClick={handleSelectedKeyChange}
      selectedKeys={selectedKey}
      className={className}
      mode="inline">
      {menu.map((item, index) => (
        <Menu.Item key={index} icon={item.icon}>
          <a href={"#" + item.id}>{item.name} </a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
