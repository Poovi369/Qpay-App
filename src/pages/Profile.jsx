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
      <div className={pstyles.wrap}>
      <div className={styles.topBanner}>
      <div className={styles.belowBanner}>
        <div className={styles.firstItem}>Pay <strong>₹1/month*</strong> for the <strong>QPay</strong></div>
        <div className={styles.secondItem}>POS Device</div>
        <p className={styles.thirdItem}>One Device for accepting all modes of payments</p>
        <button className={styles.btn}>Download App Now!</button>
        </div>
      <div className={styles.image}>
        <img src={his} alt='Bill' height="250px" width="400px"/>
      </div>
      </div>

      <div className={pstyles.cardGrid}>
          {/* Card 1: Bank Account */}
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

          {/* Card 2: Business Profile */}
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

          {/* Card 3: KYC Verification */}
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

          {/* Card 4: Order QR */}
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



{/* test */}

<div className={pstyles.wrapper}>
      {/* Card 1 */}
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

      {/* Card 2 */}
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

    // <div>
    //   <h2>Profile</h2>
    //   <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12,marginTop:12}}>
    //     <div style={{background:'white',padding:18,borderRadius:8,boxShadow:'var(--shadow)'}}>
    //       <h4>Bank</h4>
    //       <p>ICICI Bank | Chennai</p>
    //     </div>

    //     <div style={{background:'white',padding:18,borderRadius:8,boxShadow:'var(--shadow)'}}>
    //       <h4>Business Profile</h4>
    //       <p>View and edit your business details</p>
    //     </div>

    //     <div style={{background:'white',padding:18,borderRadius:8,boxShadow:'var(--shadow)'}}>
    //       <h4>KYC Verification</h4>
    //       <p>Unlock exclusive benefits with KYC</p>
    //     </div>

    //     <div style={{background:'white',padding:18,borderRadius:8,boxShadow:'var(--shadow)'}}>
    //       <h4>Order QR</h4>
    //       <p>Get paid, manage & order QR codes</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
