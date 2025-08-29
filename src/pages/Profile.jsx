import React from "react";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import his from "../assests/Historypage-img.png";

const Profile = () => {
  return (
    <div className="w-full flex justify-center">
    <div className=" w-[90%] flex flex-col gap-5 w-full overflow-x-hidden font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-2xl md:text-3xl font-medium">
            Pay <strong className="text-white">₹1/month*</strong> for the <strong>QPay</strong>
          </div>
          <div className="text-2xl md:text-3xl font-bold">POS Device</div>
          <p className="text-green-200">One Device for accepting all modes of payments</p>
          <button className="bg-white text-green-700 py-2 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base w-max">
            Download App Now!
          </button>
        </div>
        <div className="flex-shrink-0">
          <img src={his} alt="Bill" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 mt-2">
        {/* Card 1 */}
        <button className="bg-green-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-left">
          <div className="flex justify-between items-start mb-2">
            <span className="w-14 h-14 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gray-200 bg-green-700">
              <AccountBalanceOutlinedIcon className="text-gray-200 text-3xl" />
            </span>
            <ArrowForwardIosOutlinedIcon className="text-green-700 text-lg mt-1" />
          </div>
          <div className="font-bold text-green-700 text-lg md:text-xl">XXXX 9820</div>
          <div className="text-gray-500 text-base md:text-lg">ICICI Bank | Chennai Egmore Branch</div>
        </button>

        {/* Card 2 */}
        <button className="bg-green-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-left">
          <div className="flex justify-between items-start mb-2">
            <span className="w-14 h-14 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gray-200 bg-green-700">
              <BusinessCenterOutlinedIcon className="text-gray-200 text-3xl" />
            </span>
            <ArrowForwardIosOutlinedIcon className="text-green-700 text-lg mt-1" />
          </div>
          <div className="font-bold text-green-700 text-lg md:text-xl">Business Profile</div>
          <div className="text-gray-500 text-base md:text-lg">View and edit your business details</div>
        </button>

        {/* Card 3 */}
        <button className="bg-green-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-left">
          <div className="flex justify-between items-start mb-2">
            <span className="w-14 h-14 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gray-200 bg-green-700">
              <FactCheckOutlinedIcon className="text-gray-200 text-3xl" />
            </span>
            <ArrowForwardIosOutlinedIcon className="text-green-700 text-lg mt-1" />
          </div>
          <div className="font-bold text-green-700 text-lg md:text-xl">KYC Verification</div>
          <div className="text-gray-500 text-base md:text-lg">Unlock exclusive benefits with KYC</div>
        </button>

        {/* Card 4 */}
        <button className="bg-green-100 border border-gray-200 rounded-xl p-4 flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-left">
          <div className="flex justify-between items-start mb-2">
            <span className="w-14 h-14 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gray-200 bg-green-700">
              <ShoppingCartCheckoutOutlinedIcon className="text-gray-200 text-3xl" />
            </span>
            <ArrowForwardIosOutlinedIcon className="text-green-700 text-lg mt-1" />
          </div>
          <div className="font-bold text-green-700 text-lg md:text-xl">Order QR</div>
          <div className="text-gray-500 text-base md:text-lg">Get paid, manage & order QRs</div>
        </button>
      </div>

      {/* Business & Manage Cards */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {/* Business Services Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4 min-h-[180px]">
          <div className="uppercase font-bold text-gray-500 text-sm mb-4">Business Services</div>
          <div className="flex gap-4 overflow-x-auto">
            <div className="flex flex-col items-center min-w-[80px] max-w-[110px] text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-md border border-gray-200 bg-white">
                <QrCodeScannerOutlinedIcon className="text-green-600 text-2xl" />
              </span>
              <div className="mt-2 text-black text-xs">Smart Speaker</div>
            </div>
            <div className="flex flex-col items-center min-w-[80px] max-w-[110px] text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-md border border-gray-200 bg-white">
                <PointOfSaleIcon className="text-green-600 text-2xl" />
              </span>
              <div className="mt-2 text-black text-xs">POS Machine</div>
            </div>
          </div>
        </div>

        {/* Manage Business Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4 min-h-[180px]">
          <div className="uppercase font-bold text-gray-500 text-sm mb-4">Manage Business</div>
          <div className="flex gap-4 overflow-x-auto">
            <div className="flex flex-col items-center min-w-[80px] max-w-[110px] text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-md border border-gray-200 bg-white">
                <SettingsOutlinedIcon className="text-green-600 text-2xl" />
              </span>
              <div className="mt-2 text-black text-xs">Payment Settings</div>
            </div>
            <div className="flex flex-col items-center min-w-[80px] max-w-[110px] text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-md border border-gray-200 bg-white">
                <SupervisorAccountOutlinedIcon className="text-green-600 text-2xl" />
              </span>
              <div className="mt-2 text-black text-xs">Manage Staff</div>
            </div>
            <div className="flex flex-col items-center min-w-[80px] max-w-[110px] text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-md border border-gray-200 bg-white">
                <TranslateOutlinedIcon className="text-green-600 text-2xl" />
              </span>
              <div className="mt-2 text-black text-xs">Change Language</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
