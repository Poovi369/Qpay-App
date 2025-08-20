import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import styles from '../styles/Settlement.module.css'

const SettlementPopup = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: styles.popupPaper,
      }}
    >
      <div className={styles.header}>
        <span className={styles.headerText}>Manage QR/POS</span>
        <CloseOutlinedIcon onClick={onClose} className={styles.closeIcon} />
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <AccountBalanceOutlinedIcon className={styles.icon} />
          <span>Today's Total Collection</span>
        </div>
        <div className={styles.right}>
          <CurrencyRupeeOutlinedIcon className={styles.icon} />
          <span>1,023</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.nextleft}>
          <AssuredWorkloadOutlinedIcon className={styles.icons} />
          <span>Already Settled</span>
        </div>
        <div className={styles.nextright}>
          <CurrencyRupeeOutlinedIcon className={styles.icons} />
          <span>100</span>
        </div>
      </div>
      <hr />
      <div className={styles.sectionTitle}>SETTLEMENT CALCULATION</div>
      <div className={styles.row}>
        <span className={styles.leftText}>Amount yet to be settled</span>
        <span className={styles.rightText}>IBRAHIM MOHAMMEDALI</span>
      </div>
      <div className={styles.row}>
        <span className={styles.leftText}>Past pending amount</span>
        <span className={styles.rightText}>09638473829</span>
      </div>
      <div className={styles.row}>
        <span className={styles.leftText}>Charges</span>
        <span className={styles.rightText}>19, Aug, 2025</span>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.leftside}>
          <AccountBalanceOutlinedIcon className={styles.icon} />
          <span>Today's Total Collection</span>
        </div>
        <div className={styles.rightside}>
          <CurrencyRupeeOutlinedIcon className={styles.icon} />
          <span>1,023</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <p className={styles.footerNote}>
            Tap 'Settle Now' to instantly get settlements in your bank account.
          </p>
          <p className={styles.footerSubNote}>Settle Now is Chargeable.</p>
        </div>
        <div className={styles.footerRight}>
          <button className={styles.settleBtn}>Settle Now</button>
        </div>
      </div>
    </Dialog>
  );
};

export default SettlementPopup;
