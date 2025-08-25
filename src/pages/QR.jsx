// import React, { useState } from "react";
// import styles from "../styles/QR.module.css";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import qrlogo from '../assests/qr-logo.png'
// import qpay from '../assests/qpay-logo.png'
// import { Terminal } from "@mui/icons-material";

// const QR = () => {
//   const [activeTab, setActiveTab] = useState('active');
//   const statuses = [
//     "QR Request Accepted",
//     "Awaiting Production",
//     "Awaiting Dispatch",
//     "Dispatched",
//   ];

//   const activeqr = [{
//     qrid : "Q2019465579",
//     type : "All Marketing Sales",
//     qrno : "MS19030411553316489802579",
//     terminal : "Terminal"
//   },
//   {
//     qrid : "Q2019465580",
//     type : "All Marketing Sales",
//     qrno : "MS19030411553316489802580",
//     terminal : "Terminal"
//   },
//   {
//     qrid : "Q2019465581",
//     type : "All Marketing Sales",
//     qrno : "MS19030411553316489802581",
//     terminal : "Terminal"
//   },
//   {
//     qrid : "Q2019465582",
//     type : "All Marketing Sales",
//     qrno : "MS19030411553316489802582",
//     terminal : "Terminal"
//   }
// ]

// const saleqr = [{
//   type : "All Marketing Sales",
//   address : "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.",
//   reqdate : "Requested on 26.04.2025"
// },
// {
//   type : "All Marketing Sales",
//   address : "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.",
//   reqdate : "Requested on 26.04.2025"
// }
// ]
//   const [openDropdowns, setOpenDropdowns] = useState({});
//   const [selectedStatus, setSelectedStatus] = useState({});

//   const toggleDropdown = (index) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };
//   return (
//     <div className={styles.wrap}>
//       <h2>Manage QR/POS</h2>
//       <div className={styles.container}>
//         <div className={styles.qrArea}>
//           <div>
//             <img src={qpay} height="70px" alt="Logo" />
//           </div>
//           <div className={styles.qrLarge}>
//             <img
//               src={qrlogo}
//               alt="QR-Image"
//             />
//           </div>
//           <div className={styles.meta}>
//             <span className={styles.upiText}>UPI ID: 9876543210@qpay</span>
//             <ContentCopyOutlinedIcon
//               className={styles.copyIcon}
//               onClick={() => {navigator.clipboard.writeText("9876543210@qpay");
//               alert("UPI ID copied to clipboard!")
//               }}
//             />
//           </div>
//           <p>Ibrahim Mohammedali</p>
//           <div className={styles.controls}>
//             <button className={styles.actionButton}>
//               <SaveAltIcon className={styles.icon} />
//               Download
//             </button>
//             <button className={styles.actionButton}>
//               <ShareOutlinedIcon className={styles.icon} />
//               Share
//             </button>
//           </div>
//         </div>
//         <div className={styles.list}>
//           <div className={styles.tabHeader}>
//             <button
//               className={activeTab === 'active' ? styles.active : styles.inactive}
//               onClick={() => setActiveTab('active')}
//             >
//               Active QR Codes
//             </button>
//             <button
//               className={activeTab === 'requests' ? styles.active : styles.inactive}
//               onClick={() => setActiveTab('requests')}
//             >
//               QR Code Requests
//             </button>
//           </div>

//           <div className={styles.items}>
//             {activeTab === 'active' ? (
//               <>
//                 {activeqr.map((data, index) => (
//                   <div key={index}>
//                     <div className={styles.itemWrapper}>
//                       <div className={styles.item}>
//                         <div className={styles.itemImage}>
//                           <img src={qrlogo} alt="QR" height="40" />
//                         </div>
//                         <div className={styles.itemInfo}>
//                           <div className={styles.itemId}>{data.qrid}</div>
//                           <div className={styles.itemDetails}>
//                             <p>{data.type} -<br/>{data.qrno}</p>
//                             <div className={styles.itemstyle}>{data.terminal} {index + 1}</div>
//                           </div>
//                         </div>
//                         <div className={styles.itemAction}>
//                           <ArrowForwardIosOutlinedIcon className={styles.arrowIcon} />
//                         </div>
//                       </div>
//                     </div>
//                     <hr/>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <>
//                 {saleqr.map((data,index) => (
//                   <div key={index}>
//                     <div className={styles.itemWrapper}>
//                       <div className={styles.item}>
//                         <div className={styles.itemImage}>
//                           <img src={qrlogo} alt="QR" height="40" />
//                         </div>
//                         <div className={styles.itemInfo}>
//                           <div className={styles.itemId}>{data.type}</div>
//                           <div className={styles.itemDetails}>
//                             <p>{data.address}</p>
//                             <div className={styles.itemstyle}>{data.reqdate}</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className={styles.inlineDropdown}>
//                       <div
//                         className={styles.dropdownHeader}
//                         onClick={() => toggleDropdown(index)}
//                       >
//                         <input
//                           type="Checkbox"
//                           checked={selectedStatus[index] === undefined ? true : false}
//                           readOnly
//                           className={styles.radioInput}
//                         />
//                         <span className={styles.selectedText}>
//                           {selectedStatus[index] || "QR Request Accepted"}
//                         </span>
//                         <span className={styles.selectedIcon}>
//                         {openDropdowns[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                         </span>
//                       </div>

//                       {openDropdowns[index] && (
//                         <div className={styles.dropdownList}>
//                           {statuses
//                             .filter((status) => status !== "QR Request Accepted")
//                             .map((status, Index) => (
//                               <div
//                                 key={Index}
//                                 className={styles.dropdownItem}
//                               >
//                                 <input
//                                   type="Checkbox"
//                                   checked={selectedStatus[index] === status}
//                                   readOnly
//                                   className={styles.radioInput}
//                                 />
//                                 <span>{status}</span>
//                               </div>
//                             ))}
//                         </div>
//                       )}
//                     </div>
//                     <hr/>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>

//           <button className={styles.request}>Request more QR Codes</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QR;




// import React, { useState } from "react";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import qrlogo from '../assests/qr-logo.png';
// import qpay from '../assests/qpay-logo.png';

// const QR = () => {
//   const [activeTab, setActiveTab] = useState('active');
//   const [openDropdowns, setOpenDropdowns] = useState({});
//   const [selectedStatus, setSelectedStatus] = useState({});
  
//   const statuses = ["QR Request Accepted","Awaiting Production","Awaiting Dispatch","Dispatched"];

//   const activeqr = [
//     { qrid: "Q2019465579", type: "All Marketing Sales", qrno: "MS19030411553316489802579", terminal: "Terminal" },
//     { qrid: "Q2019465580", type: "All Marketing Sales", qrno: "MS19030411553316489802580", terminal: "Terminal" },
//     { qrid: "Q2019465581", type: "All Marketing Sales", qrno: "MS19030411553316489802581", terminal: "Terminal" },
//     { qrid: "Q2019465582", type: "All Marketing Sales", qrno: "MS19030411553316489802582", terminal: "Terminal" }
//   ];

//   const saleqr = [
//     { type: "All Marketing Sales", address: "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.", reqdate: "Requested on 26.04.2025" },
//     { type: "All Marketing Sales", address: "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.", reqdate: "Requested on 26.04.2025" }
//   ];

//   const toggleDropdown = (index) => {
//     setOpenDropdowns(prev => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <div className="flex justify-center w-full">
//       <div className="w-full md:w-[90%] flex flex-col gap-4 p-3 md:p-5 overflow-y-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold">Manage QR/POS</h2>

//         <div className="flex flex-col md:flex-row gap-4">
//           {/* QR Area */}
//           <div className="flex-1 bg-white p-5 rounded-xl shadow border border-gray-200 flex flex-col items-center min-h-[80vh]">
//             <img src={qpay} alt="Logo" className="h-16 md:h-20" />
//             <div className="w-full max-w-xs h-64 md:h-72 mt-6 flex items-center justify-center rounded-lg border border-gray-300">
//               <img src={qrlogo} alt="QR" className="max-w-full max-h-full" />
//             </div>
//             <div className="flex items-center gap-2 mt-6 text-center">
//               <span className="font-semibold text-black">UPI ID: 9876543210@qpay</span>
//               <ContentCopyOutlinedIcon
//                 className="cursor-pointer text-green-600 hover:scale-110 transition-transform"
//                 onClick={() => {
//                   navigator.clipboard.writeText("9876543210@qpay");
//                   alert("UPI ID copied!");
//                 }}
//               />
//             </div>
//             <p className="mt-2 text-gray-500">Ibrahim Mohammedali</p>
//             <div className="flex flex-wrap gap-2 mt-4 w-full">
//               <button className="flex-1 min-w-[120px] py-2 bg-gray-300 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-400 transition">
//                 <SaveAltIcon /> Download
//               </button>
//               <button className="flex-1 min-w-[120px] py-2 bg-gray-300 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-400 transition">
//                 <ShareOutlinedIcon /> Share
//               </button>
//             </div>
//           </div>

//           {/* QR List */}
//           <div className="flex-1 bg-white p-5 rounded-xl shadow border border-gray-200 min-h-[80vh] flex flex-col">
//             <div className="flex gap-2 mb-4">
//               <button
//                 className={`${activeTab==='active'?'bg-green-600 text-white':'bg-white text-green-600'} flex-1 py-2 rounded-lg`}
//                 onClick={()=>setActiveTab('active')}
//               >
//                 Active QR Codes
//               </button>
//               <button
//                 className={`${activeTab==='requests'?'bg-green-600 text-white':'bg-white text-green-600'} flex-1 py-2 rounded-lg`}
//                 onClick={()=>setActiveTab('requests')}
//               >
//                 QR Code Requests
//               </button>
//             </div>

//             <div className="flex flex-col gap-3 overflow-y-auto">
//               {activeTab==='active' ? (
//                 activeqr.map((data,index)=>(
//                   <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-gray-50 border border-gray-200">
//                     <div className="flex gap-3 items-center">
//                       <img src={qrlogo} alt="QR" className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover" />
//                       <div className="flex flex-col">
//                         <span className="font-semibold">{data.qrid}</span>
//                         <span className="text-sm text-gray-600">{data.type} - {data.qrno}</span>
//                         <span className="text-xs text-gray-400">{data.terminal} {index+1}</span>
//                       </div>
//                     </div>
//                     <ArrowForwardIosOutlinedIcon className="text-green-600" />
//                   </div>
//                 ))
//               ) : (
//                 saleqr.map((data,index)=>(
//                   <div key={index} className="flex flex-col gap-2">
//                     <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 border border-gray-200">
//                       <div className="flex gap-3 items-center">
//                         <img src={qrlogo} alt="QR" className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover" />
//                         <div className="flex flex-col">
//                           <span className="font-semibold">{data.type}</span>
//                           <span className="text-sm text-gray-600">{data.address}</span>
//                           <span className="text-xs text-gray-400">{data.reqdate}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Dropdown Section */}
//                     <div className="mt-1">
//                       <div
//                         className="flex justify-between items-center p-2 bg-green-100 rounded cursor-pointer"
//                         onClick={()=>toggleDropdown(index)}
//                       >
//                         <div className="flex items-center gap-2">
//                           <input type="checkbox" readOnly className="w-5 h-5 accent-green-600" checked={selectedStatus[index] ? false : true} />
//                           <span>{selectedStatus[index] || "QR Request Accepted"}</span>
//                         </div>
//                         <div>
//                           {openDropdowns[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                         </div>
//                       </div>
//                       {openDropdowns[index] && (
//                         <div className="flex flex-col gap-1 p-2 bg-green-50 rounded mt-1">
//                           {statuses.filter(status => status!=="QR Request Accepted").map((status, sIndex)=>(
//                             <div key={sIndex} className="flex items-center gap-2">
//                               <input type="checkbox" readOnly className="w-5 h-5 accent-green-600" checked={selectedStatus[index]===status} />
//                               <span>{status}</span>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                   </div>
//                 ))
//               )}
//             </div>

//             <button className="mt-4 py-2 bg-green-600 text-white rounded-lg w-full">Request more QR Codes</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QR;


import React, { useState } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import qrlogo from '../assests/qr-logo.png';
import qpay from '../assests/qpay-logo.png';

const QR = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const statuses = ["QR Request Accepted","Awaiting Production","Awaiting Dispatch","Dispatched"];

  const activeqr = [
    { qrid: "Q2019465579", type: "All Marketing Sales", qrno: "MS19030411553316489802579", terminal: "Terminal" },
    { qrid: "Q2019465580", type: "All Marketing Sales", qrno: "MS19030411553316489802580", terminal: "Terminal" },
    { qrid: "Q2019465581", type: "All Marketing Sales", qrno: "MS19030411553316489802581", terminal: "Terminal" },
    { qrid: "Q2019465582", type: "All Marketing Sales", qrno: "MS19030411553316489802582", terminal: "Terminal" }
  ];

  const saleqr = [
    { type: "All Marketing Sales", address: "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.", reqdate: "Requested on 26.04.2025" },
    { type: "All Marketing Sales", address: "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.", reqdate: "Requested on 26.04.2025" }
  ];

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full md:w-[90%] flex flex-col gap-4 p-3 md:p-5 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Manage QR/POS</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* QR Area */}
          <div className="flex-1 bg-white p-4 md:p-5 rounded-xl shadow border border-gray-200 flex flex-col items-center">
            <img src={qpay} alt="Logo" className="h-16 md:h-20" />
            <div className="w-full max-w-xs h-64 md:h-72 mt-6 flex items-center justify-center rounded-lg border border-gray-300">
              <img src={qrlogo} alt="QR" className="max-w-full max-h-full" />
            </div>
            <div className="flex items-center gap-2 mt-6 text-center">
              <span className="font-semibold text-black">UPI ID: 9876543210@qpay</span>
              <ContentCopyOutlinedIcon
                className="cursor-pointer text-green-600 hover:scale-110 transition-transform"
                onClick={() => {
                  navigator.clipboard.writeText("9876543210@qpay");
                  alert("UPI ID copied!");
                }}
              />
            </div>
            <p className="mt-2 text-gray-500">Ibrahim Mohammedali</p>
            <div className="flex flex-wrap gap-2 mt-4 w-full">
              <button className="flex-1 min-w-[120px] py-2 bg-gray-300 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-400 transition">
                <SaveAltIcon /> Download
              </button>
              <button className="flex-1 min-w-[120px] py-2 bg-gray-300 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-400 transition">
                <ShareOutlinedIcon /> Share
              </button>
            </div>
          </div>

          {/* QR List */}
          <div className="flex-1 bg-white p-4 md:p-5 rounded-xl shadow border border-gray-200 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`${activeTab==='active'?'bg-green-600 text-white':'bg-white text-green-600'} flex-1 py-2 rounded-lg`}
                onClick={()=>setActiveTab('active')}
              >
                Active QR Codes
              </button>
              <button
                className={`${activeTab==='requests'?'bg-green-600 text-white':'bg-white text-green-600'} flex-1 py-2 rounded-lg`}
                onClick={()=>setActiveTab('requests')}
              >
                QR Code Requests
              </button>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto">
              {activeTab==='active' ? (
                activeqr.map((data,index)=>(
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 rounded-lg bg-gray-50 border border-gray-200 gap-2">
                    <div className="flex gap-3 items-center w-full sm:w-auto flex-wrap">
                      <img src={qrlogo} alt="QR" className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover" />
                      <div className="flex flex-col">
                        <span className="font-semibold">{data.qrid}</span>
                        <span className="text-sm text-gray-600 break-words">{data.type} - {data.qrno}</span>
                        <span className="text-xs text-gray-400">{data.terminal} {index+1}</span>
                      </div>
                    </div>
                    <ArrowForwardIosOutlinedIcon className="text-green-600 mt-2 sm:mt-0" />
                  </div>
                ))
              ) : (
                saleqr.map((data,index)=>(
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 rounded-lg bg-gray-50 border border-gray-200 gap-2">
                      <div className="flex gap-3 items-center w-full sm:w-auto flex-wrap">
                        <img src={qrlogo} alt="QR" className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover" />
                        <div className="flex flex-col break-words">
                          <span className="font-semibold">{data.type}</span>
                          <span className="text-sm text-gray-600">{data.address}</span>
                          <span className="text-xs text-gray-400">{data.reqdate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Section */}
                    <div className="mt-1">
                      <div
                        className="flex justify-between items-center p-2 bg-green-100 rounded cursor-pointer"
                        onClick={()=>toggleDropdown(index)}
                      >
                        <div className="flex items-center gap-2">
                          <input type="checkbox" readOnly className="w-5 h-5 accent-green-600" checked={selectedStatus[index] ? false : true} />
                          <span>{selectedStatus[index] || "QR Request Accepted"}</span>
                        </div>
                        <div>
                          {openDropdowns[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                      </div>
                      {openDropdowns[index] && (
                        <div className="flex flex-col gap-1 p-2 bg-green-50 rounded mt-1">
                          {statuses.filter(status => status!=="QR Request Accepted").map((status, sIndex)=>(
                            <div key={sIndex} className="flex items-center gap-2">
                              <input type="checkbox" readOnly className="w-5 h-5 accent-green-600" checked={selectedStatus[index]===status} />
                              <span>{status}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                ))
              )}
            </div>

            <button className="mt-4 py-2 bg-green-600 text-white rounded-lg w-full">Request more QR Codes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;

