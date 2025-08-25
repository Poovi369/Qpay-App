import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  HeadsetMicOutlined,
  AccessTimeOutlined,
  AccountCircleOutlined,
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
// import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", icon: <HomeOutlined />, label: "Home" },
    { path: "/qr", icon: <HeadsetMicOutlined />, label: "QR" },
    {
      path: "/history",
      icon: <AccessTimeOutlined />,
      label: "History",
      extra: <KeyboardArrowDownOutlined className="ml-auto text-[18px] opacity-80" />,
    },
    { path: "/profile", icon: <AccountCircleOutlined />, label: "Profile" },
  ];

  return (
    <>
      <div
        className="md:hidden fixed top-[70px] left-[15px] z-[900] bg-gray-300 text-black rounded-md px-2 py-2 text-lg flex items-center justify-center cursor-pointer"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </div>
      <aside
        className={`fixed top-[60px] left-0 w-[240px] h-[calc(100vh-60px)] bg-[#2f7a45] text-white flex flex-col justify-between z-[50] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-auto md:w-60 md:flex`}
      >
        <div className="p-5 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 px-3.5 py-3 rounded-md text-[15px] font-medium transition-all duration-250 ${
                    isActive
                      ? "bg-white text-[#2f7a45] font-semibold"
                      : "text-[#d9f1e0] hover:bg-white/15 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
                {item.extra}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="text-center bg-white text-orange-600 p-3.5 text-[14px] font-bold border-t border-gray-200 rounded-b-[12px]">
          <div>Bharat</div>
          <div>Connect</div>
        </div>
      </aside>
      {isOpen && (
        <div
          className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100%-60px)] bg-black/40 z-[40]"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;