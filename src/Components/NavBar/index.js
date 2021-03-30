import { Menu } from "antd";
import { useState } from "react";
import { FaHome, FaBook, FaReact } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";

const menu = [
  { name: "Home", icon: <FaHome className="icon" /> },
  { name: "About", icon: <FaBook className="icon" /> },
  { name: "Devs", icon: <RiStackFill className="icon" /> },
  { name: "Tech", icon: <FaReact className="icon" /> },
  { name: "Contact", icon: <MdContactMail className="icon" /> },
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
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
