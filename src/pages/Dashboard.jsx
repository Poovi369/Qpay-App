import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { Link } from 'react-router-dom';
import HS from '../assests/HS-img.png'
import qr from '../assests/qr-code.png'

const Dashboard = () => {
  return (
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
            <img src={HS} alt='Bill' className="img-fluid" />
          </div>
        </div>
      </div>

      <div className={`${styles.cards} row g-3`}>
        <div className="col-6 col-lg-3">
          <div className={styles.card}><h3>1.5k</h3><p>Account Holders</p></div>
        </div>
        <div className="col-6 col-lg-3">
          <div className={styles.card}><h3>2.1k</h3><p>Transactions</p></div>
        </div>
        <div className="col-6 col-lg-3">
          <div className={styles.card}><h3>2.3k</h3><p>Settlement</p></div>
        </div>
        <div className="col-6 col-lg-3">
          <div className={styles.card}><h3>45k</h3><p>QR Orders</p></div>
        </div>
      </div>
      <div className={`${styles.panels} row g-3`}>
        <div className="col-12 col-lg-6">
          <div className={styles.panel}>
            <h5>Profile</h5>
            <div className={`${styles.progress} row g-2 align-items-center`}>
              <div className="col-auto">
                <div className={styles.ring}><div className={styles.inner}>30%</div></div>
              </div>
              <div className="col">
                <p>Complete your profile</p>
                <ul>
                  <li>Personal KYC</li>
                  <li>Company KYC</li>
                  <li>Onboarding details</li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className={styles.buttonWrapper}>
              <Link to="/profile"><button className={styles.next}>Next</button></Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className={styles.panel}>
            <h5>QR</h5>
            <div className={`${styles.qrBox} row g-2 align-items-center`}>
              <div className="col-12 col-sm-auto text-center">
                <div className={styles.qrPlaceholder}>
                  <img src={qr} alt='QR-Image' className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <p>Order QR</p>
                <ul>
                  <li>Receive Payment</li>
                  <li>Order new QRs</li>
                  <li>Download QR</li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className={styles.buttonWrapper}>
              <Link to="/qr"><button className={styles.next}>View More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
