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

const QR = () => {
  const [activeTab, setActiveTab] = useState('active');
  const statuses = [
    "QR Request Accepted",
    "Awaiting Production",
    "Awaiting Dispatch",
    "Dispatched",
  ];
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
              onClick={() => navigator.clipboard.writeText("9876543210@qpay")}
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
                {[579, 580, 581, 582].map((id, index) => (
                  <div key={index}>
                    <div className={styles.itemWrapper}>
                      <div className={styles.item}>
                        <div className={styles.itemImage}>
                          <img src={qrlogo} alt="QR" height="40" />
                        </div>
                        <div className={styles.itemInfo}>
                          <div className={styles.itemId}>Q2019465{id}</div>
                          <div className={styles.itemDetails}>
                            <p>All Marketing Sales -<br/>MS19030411553316489802{id}</p>
                            <div className={styles.itemstyle}>Terminal {index + 1}</div>
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
                {[0, 1].map((index) => (
                  <div key={index}>
                    <div className={styles.itemWrapper}>
                      <div className={styles.item}>
                        <div className={styles.itemImage}>
                          <img src={qrlogo} alt="QR" height="40" />
                        </div>
                        <div className={styles.itemInfo}>
                          <div className={styles.itemId}>All Marketing Sales</div>
                          <div className={styles.itemDetails}>
                            <p>45, Bharathi Nagar, VOC Port Authority,Tuticorin, 628004.</p>
                            <div className={styles.itemstyle}>Requested on 26.04.2025</div>
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
                        {openDropdowns[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </div>

                      {openDropdowns[index] && (
                        <div className={styles.dropdownList}>
                          {statuses
                            .filter((status) => status !== "QR Request Accepted")
                            .map((status, sIndex) => (
                              <div
                                key={sIndex}
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
