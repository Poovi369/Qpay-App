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
import styles from "../styles/Sidebar.module.css";

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
      extra: <KeyboardArrowDownOutlined className={styles.downIcon} />,
    },
    { path: "/profile", icon: <AccountCircleOutlined />, label: "Profile" },
  ];

  return (
    <>
      <div className={styles.mobileMenuButton} onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <aside
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.menu}>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
                {/* <span className={styles.linkLabel}>{item.label}</span> */}
                {item.extra}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.footer}>
          <div>Bharat</div>
          <div>Connect</div>
        </div>
      </aside>
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;


