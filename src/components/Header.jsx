import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import qpay from "../assests/logo-qpay.png";

function Header() {
  return (
    // <header className={classNames(styles.header, "fixed top-0 left-0 right-0 h-[60px] flex justify-between items-center bg-white shadow-md z-[1000]")}>
      <header className="fixed top-0 left-0 right-0 h-[60px] flex justify-between items-center bg-white shadow-md z-[1000]">
      <NavLink to="/" aria-label="Go to home">
        <img src={qpay} alt="QPay logo" className="h-[35px] cursor-pointer"/>
      </NavLink>
      
      <div className="flex items-center gap-2 shrink-0">
        <AccountCircleOutlinedIcon className="text-[28px] text-gray-500" />

        <div className="text-sm font-normal text-[#333] font-['Roboto'] leading-[1.2]" aria-label="User greeting">
          <div className="text-[1px] font-medium text-[rgb(172,169,169)]">Hello</div>
          <div>Thomas Shelby</div>
        </div>

        <FaChevronDown className="text-[14px] pr-1 text-[#565555] cursor-pointer" aria-hidden="true" />
      </div>
    </header>
  );
}

export default Header;


