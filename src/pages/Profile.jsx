import React from 'react';
import styles from '../styles/Dashboard.module.css'
import pstyles from '../styles/Profile.module.css';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import his from '../assests/Historypage-img.png'

const Profile = () => {
  return (
    <>
    <div className={`${styles.wrap} container-fluid`}>

      <div className={`${styles.topBanner} row g-3 align-items-center`}>
        <div className="col-12 col-md-6">
          <div className={styles.belowBanner}>
            <div className={styles.firstItem}>Pay <strong>₹1/month*</strong> for the <strong>QPay</strong></div>
            <div className={styles.secondItem}>POS Device</div>
            <p className={styles.thirdItem}>One Device for accepting all modes of payments</p>
            <button className={styles.btn}>Download App Now!</button>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <div className={styles.image}>
            <img src={his} alt='Bill' className="img-fluid" />
          </div>
        </div>
      </div>
      {/* <div className={styles.image}>
        <img src={his} alt='Bill' className="img-fluid"/>
      </div> */}

      <div className={pstyles.cardGrid}>
          <button className={pstyles.infoCard}>
            <div className={pstyles.cardHeader}>
              <span className={pstyles.iconCircle}>
                <AccountBalanceOutlinedIcon className={pstyles.icons} />
              </span>
              <ArrowForwardIosOutlinedIcon className={pstyles.arrow} />
            </div>
            <div className={pstyles.cardTitle}>XXXX 9820</div>
            <div className={pstyles.cardSubtitle}>ICICI Bank | Chennai Egmore Branch</div>
          </button>
          <button className={pstyles.infoCard}>
            <div className={pstyles.cardHeader}>
              <span className={pstyles.iconCircle}>
                <BusinessCenterOutlinedIcon className={pstyles.icons} />
              </span>
              <ArrowForwardIosOutlinedIcon className={pstyles.arrow} />
            </div>
            <div className={pstyles.cardTitle}>Business Profile</div>
            <div className={pstyles.cardSubtitle}>View and edit your business details</div>
          </button>
          <button className={pstyles.infoCard}>
            <div className={pstyles.cardHeader}>
              <span className={pstyles.iconCircle}>
                <FactCheckOutlinedIcon className={pstyles.icons} />
              </span>
              <ArrowForwardIosOutlinedIcon className={pstyles.arrow} />
            </div>
            <div className={pstyles.cardTitle}>KYC Verification</div>
            <div className={pstyles.cardSubtitle}>Unlock exclusive benefits with KYC</div>
          </button>
          <button className={pstyles.infoCard}>
            <div className={pstyles.cardHeader}>
              <span className={pstyles.iconCircle}>
                <ShoppingCartCheckoutOutlinedIcon className={pstyles.icons} />
              </span>
              <ArrowForwardIosOutlinedIcon className={pstyles.arrow} />
            </div>
            <div className={pstyles.cardTitle}>Order QR</div>
            <div className={pstyles.cardSubtitle}>Get paid, manage & order QRs</div>
          </button>
        </div>
<div className={pstyles.wrapper}>
      <div className={pstyles.card}>
        <div className={pstyles.title}>BUSINESS SERVICES</div>

        <div className={pstyles.iconRow}>
          <div className={pstyles.iconItem}>
            <span className={pstyles.iconBorder}>
              <QrCodeScannerOutlinedIcon className={pstyles.icon} />
            </span>
            <div className={pstyles.iconLabel}>Smart Speaker</div>
          </div>

          <div className={pstyles.iconItem}>
            <span className={pstyles.iconBorder}>
              <PointOfSaleIcon className={pstyles.icon} />
            </span>
            <div className={pstyles.iconLabel}>POS Machine</div>
          </div>
        </div>
      </div>

      <div className={pstyles.card}>
        <div className={pstyles.title}>MANAGE BUSINESS</div>

        <div className={pstyles.iconRow}>
          <div className={pstyles.iconItem}>
            <span className={pstyles.iconBorder}>
              <SettingsOutlinedIcon className={pstyles.icon} />
            </span>
            <div className={pstyles.iconLabel}>Payment Settings</div>
          </div>

          <div className={pstyles.iconItem}>
            <span className={pstyles.iconBorder}>
              <SupervisorAccountOutlinedIcon className={pstyles.icon} />
            </span>
            <div className={pstyles.iconLabel}>Manage Staff</div>
          </div>

          <div className={pstyles.iconItem}>
            <span className={pstyles.iconBorder}>
              <TranslateOutlinedIcon className={pstyles.icon} />
            </span>
            <div className={pstyles.iconLabel}>Change Language</div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>

  );
};

export default Profile;
