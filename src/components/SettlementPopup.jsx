import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";

const SettlementPopup = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "w-full max-w-lg p-5 rounded-xl",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-black font-semibold text-lg md:text-xl">
          Manage QR/POS
        </span>
        <CloseOutlinedIcon
          onClick={onClose}
          className="cursor-pointer text-black text-lg md:text-xl"
        />
      </div>

      {/* First Row */}
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <AccountBalanceOutlinedIcon className="text-black" />
          <span>Today's Total Collection</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <CurrencyRupeeOutlinedIcon className="text-black" />
          <span className="font-bold text-lg md:text-xl">1,023</span>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-2 text-sm md:text-base text-green-600">
          <AssuredWorkloadOutlinedIcon className="text-green-600" />
          <span>Already Settled</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base text-green-600">
          <CurrencyRupeeOutlinedIcon className="text-green-600" />
          <span className="font-semibold">100</span>
        </div>
      </div>

      <hr className="my-3 border-gray-300" />

      {/* Section Title */}
      <div className="text-gray-500 text-xs md:text-sm font-medium mb-2">
        SETTLEMENT CALCULATION
      </div>

      {/* Settlement Details Rows */}
      <div className="flex justify-between items-center my-1 text-sm md:text-base">
        <span className="text-gray-500">Amount yet to be settled</span>
        <span className="text-black">IBRAHIM</span>
      </div>
      <div className="flex justify-between items-center my-1 text-sm md:text-base">
        <span className="text-gray-500">Past pending amount</span>
        <span className="text-black">09638473829</span>
      </div>
      <div className="flex justify-between items-center my-1 text-sm md:text-base">
        <span className="text-gray-500">Charges</span>
        <span className="text-black">19, Aug, 2025</span>
      </div>

      <hr className="my-3 border-gray-300" />

      {/* Last Row */}
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <AccountBalanceOutlinedIcon className="text-gray-600" />
          <span>Today's Total Collection</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <CurrencyRupeeOutlinedIcon className="text-gray-600" />
          <span className="font-semibold">1,023</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 bg-green-100 p-4 rounded-lg mt-4">
        <div className="flex flex-col gap-1 max-w-full md:max-w-[70%] text-sm md:text-base">
          <p className="text-black font-medium">
            Tap 'Settle Now' to instantly get settlements in your bank account.
          </p>
          <p className="text-green-700 text-xs md:text-sm">
            Settle Now is Chargeable.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg text-sm md:text-base">
            Settle Now
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default SettlementPopup;

