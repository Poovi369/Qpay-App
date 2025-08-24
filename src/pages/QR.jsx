import React, { useState } from "react";
import styles from "../styles/QR.module.css";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import qrlogo from '../assests/qr-logo.png'
import qpay from '../assests/qpay-logo.png'
import { Terminal } from "@mui/icons-material";

const QR = () => {
  const [activeTab, setActiveTab] = useState('active');
  const statuses = [
    "QR Request Accepted",
    "Awaiting Production",
    "Awaiting Dispatch",
    "Dispatched",
  ];

  const activeqr = [{
    qrid : "Q2019465579",
    type : "All Marketing Sales",
    qrno : "MS19030411553316489802579",
    terminal : "Terminal"
  },
  {
    qrid : "Q2019465580",
    type : "All Marketing Sales",
    qrno : "MS19030411553316489802580",
    terminal : "Terminal"
  },
  {
    qrid : "Q2019465581",
    type : "All Marketing Sales",
    qrno : "MS19030411553316489802581",
    terminal : "Terminal"
  },
  {
    qrid : "Q2019465582",
    type : "All Marketing Sales",
    qrno : "MS19030411553316489802582",
    terminal : "Terminal"
  }
]

const saleqr = [{
  type : "All Marketing Sales",
  address : "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.",
  reqdate : "Requested on 26.04.2025"
},
{
  type : "All Marketing Sales",
  address : "45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.",
  reqdate : "Requested on 26.04.2025"
}
]
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className={styles.wrap}>
      <h2>Manage QR/POS</h2>
      <div className={styles.container}>
        <div className={styles.qrArea}>
          <div>
            <img src={qpay} height="70px" alt="Logo" />
          </div>
          <div className={styles.qrLarge}>
            <img
              src={qrlogo}
              alt="QR-Image"
            />
          </div>
          <div className={styles.meta}>
            <span className={styles.upiText}>UPI ID: 9876543210@qpay</span>
            <ContentCopyOutlinedIcon
              className={styles.copyIcon}
              onClick={() => {navigator.clipboard.writeText("9876543210@qpay");
              alert("UPI ID copied to clipboard!")
              }}
            />
          </div>
          <p>Ibrahim Mohammedali</p>
          <div className={styles.controls}>
            <button className={styles.actionButton}>
              <SaveAltIcon className={styles.icon} />
              Download
            </button>
            <button className={styles.actionButton}>
              <ShareOutlinedIcon className={styles.icon} />
              Share
            </button>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.tabHeader}>
            <button
              className={activeTab === 'active' ? styles.active : styles.inactive}
              onClick={() => setActiveTab('active')}
            >
              Active QR Codes
            </button>
            <button
              className={activeTab === 'requests' ? styles.active : styles.inactive}
              onClick={() => setActiveTab('requests')}
            >
              QR Code Requests
            </button>
          </div>

          <div className={styles.items}>
            {activeTab === 'active' ? (
              <>
                {activeqr.map((data, index) => (
                  <div key={index}>
                    <div className={styles.itemWrapper}>
                      <div className={styles.item}>
                        <div className={styles.itemImage}>
                          <img src={qrlogo} alt="QR" height="40" />
                        </div>
                        <div className={styles.itemInfo}>
                          <div className={styles.itemId}>{data.qrid}</div>
                          <div className={styles.itemDetails}>
                            <p>{data.type} -<br/>{data.qrno}</p>
                            <div className={styles.itemstyle}>{data.terminal} {index + 1}</div>
                          </div>
                        </div>
                        <div className={styles.itemAction}>
                          <ArrowForwardIosOutlinedIcon className={styles.arrowIcon} />
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                ))}
              </>
            ) : (
              <>
                {saleqr.map((data,index) => (
                  <div key={index}>
                    <div className={styles.itemWrapper}>
                      <div className={styles.item}>
                        <div className={styles.itemImage}>
                          <img src={qrlogo} alt="QR" height="40" />
                        </div>
                        <div className={styles.itemInfo}>
                          <div className={styles.itemId}>{data.type}</div>
                          <div className={styles.itemDetails}>
                            <p>{data.address}</p>
                            <div className={styles.itemstyle}>{data.reqdate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.inlineDropdown}>
                      <div
                        className={styles.dropdownHeader}
                        onClick={() => toggleDropdown(index)}
                      >
                        <input
                          type="Checkbox"
                          checked={selectedStatus[index] === undefined ? true : false}
                          readOnly
                          className={styles.radioInput}
                        />
                        <span className={styles.selectedText}>
                          {selectedStatus[index] || "QR Request Accepted"}
                        </span>
                        <span className={styles.selectedIcon}>
                        {openDropdowns[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </span>
                      </div>

                      {openDropdowns[index] && (
                        <div className={styles.dropdownList}>
                          {statuses
                            .filter((status) => status !== "QR Request Accepted")
                            .map((status, Index) => (
                              <div
                                key={Index}
                                className={styles.dropdownItem}
                              >
                                <input
                                  type="Checkbox"
                                  checked={selectedStatus[index] === status}
                                  readOnly
                                  className={styles.radioInput}
                                />
                                <span>{status}</span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                    <hr/>
                  </div>
                ))}
              </>
            )}
          </div>

          <button className={styles.request}>Request more QR Codes</button>
        </div>
      </div>
    </div>
  );
};

export default QR;
