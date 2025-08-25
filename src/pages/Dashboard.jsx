import React from "react";
import { Link } from "react-router-dom";
import Tns from "../assests/HS-img.png";
import qr from "../assests/qr-code.png";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Dashboard = () => {
  const transacinfo = [
    { name: "Ibrahim", date: "23 July, 9.15 AM", amount: "90" },
    { name: "Ibrahim", date: "23 July, 9.15 AM", amount: "90" },
    { name: "Ibrahim", date: "23 July, 9.15 AM", amount: "90" },
  ];

  const cardinfo = [
    { count: "1.5k", type: "Account Holders" },
    { count: "2.1k", type: "Transactions" },
    { count: "2.3k", type: "Settlement" },
    { count: "45k", type: "QR Orders" },
  ];

  return (
    <div className="flex justify-center">
      {/* Container */}
      <div className="w-full md:w-[90%] h-[calc(100vh-60px)] md:h-auto overflow-y-auto md:overflow-visible p-3 md:p-5 flex flex-col gap-4 font-sans">
        {/* Top Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg p-4 md:p-5 gap-4">
          <div className="flex flex-col gap-2 text-center md:text-left flex-1">
            <div className="text-base md:text-2xl font-medium">
              Pay <strong>₹1/month*</strong> for the <strong>QPay</strong>
            </div>
            <div className="text-base md:text-2xl font-bold">POS Device</div>
            <p className="text-green-100 text-xs md:text-base">
              One Device for accepting all modes of payments
            </p>
            <button className="bg-white text-green-600 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold hover:bg-gray-100 self-center md:self-start mt-2 md:mt-3 transition text-sm md:text-base">
              Download App Now!
            </button>
          </div>
          <div className="flex-shrink-0 w-full md:w-48 mt-2 md:mt-0">
            <img
              src={Tns}
              alt="Bill"
              className="max-w-full h-auto rounded-md mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {cardinfo.map((info, i) => (
            <div
              key={i}
              className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200 text-center md:p-7"
            >
              <h3 className="text-green-700 text-lg md:text-xl font-bold">
                {info.count}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                {info.type}
              </p>
            </div>
          ))}
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {/* Profile Panel */}
          <div className="bg-white p-3 md:p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">
                Profile
              </h5>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-sm md:text-base font-bold">
                  30%
                </div>
                <div className="text-center sm:text-left text-xs md:text-sm">
                  <p>Complete your profile</p>
                  <ul className="list-disc ml-4 mt-1 space-y-0.5">
                    <li>Personal KYC</li>
                    <li>Company KYC</li>
                    <li>Onboarding details</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Link to="/profile">
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-sm md:text-base">
                  Next
                </button>
              </Link>
            </div>
          </div>

          {/* QR Panel */}
          <div className="bg-white p-3 md:p-4 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">
                QR
              </h5>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  <img src={qr} alt="QR" className="max-w-full h-auto" />
                </div>
                <div className="text-center sm:text-left text-xs md:text-sm">
                  <p>Order QR</p>
                  <ul className="list-disc ml-4 mt-1 space-y-0.5">
                    <li>Receive Payment</li>
                    <li>Order new QRs</li>
                    <li>Download QR</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Link to="/qr">
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-sm md:text-base">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {["Settlement", "Total Transaction"].map((title, idx) => (
            <div
              key={idx}
              className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center mb-1 md:mb-2">
                <h6 className="font-semibold text-sm md:text-base">{title}</h6>
                <ArrowForwardIosOutlinedIcon fontSize="small" />
              </div>
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <CurrencyRupeeOutlinedIcon fontSize="small" />
                <h3 className="text-base md:text-lg font-bold">1,23,816.19</h3>
              </div>
              <hr />
              {transacinfo.map((userdata, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center my-1 text-xs md:text-sm"
                >
                  <div>
                    <strong>{userdata.name}</strong>
                    <br />
                    <small>{userdata.date}</small>
                  </div>
                  <div className="flex items-center gap-1 text-xs md:text-sm">
                    +<CurrencyRupeeOutlinedIcon fontSize="small" />
                    <span>{userdata.amount}</span>
                  </div>
                </div>
              ))}
              <Link to={idx === 0 ? "/history" : "#"}>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition mt-2 text-sm md:text-base">
                  {idx === 0 ? "Settle Now" : "View All"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

