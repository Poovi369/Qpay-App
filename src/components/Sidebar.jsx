import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  HeadsetMicOutlined,
  AccessTimeOutlined,
  PersonOutline,
  KeyboardArrowDownOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <HomeOutlined /> <span>Home</span>
          </NavLink>
          <NavLink
            to="/qr"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <HeadsetMicOutlined /> <span>QR</span>
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <div className={styles.historyRow}>
              <div className={styles.historyLeft}>
                <AccessTimeOutlined /> <span>History</span>
              </div>
              <KeyboardArrowDownOutlined className={styles.downIcon} />
            </div>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <AccountCircleOutlined /> <span>Profile</span>
          </NavLink>
        </nav>
      </div>

      <div className={styles.footer}>
        <div>Bharat</div>
        <div>Connect</div>
      </div>
    </aside>
  );
};

export default Sidebar;
