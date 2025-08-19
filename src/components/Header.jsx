import React from "react";
// import "./Header.css";
import styles from '../styles/Header.module.css'
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import qpay from '../assests/logo-qpay.png'
function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img src={qpay} alt="Logo" />
      </NavLink>

      <div className={styles.rightItem}>
        <AccountCircleOutlinedIcon className={styles.profileIcon} style={{ fontSize: "40px" }} />

        <div className={styles.rightText}>
          <div className={styles.style}>Hello </div>
          <div>Thomas Shelby</div>
        </div>
        <FaChevronDown className={styles.dropdownIcon} />
      </div>
    </div>
  );
}

export default Header;
