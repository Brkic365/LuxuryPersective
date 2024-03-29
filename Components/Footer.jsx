import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>LUXURY PERSPECTIVE</h2>

      <div className={styles.blocks}>
        <div className={styles.links}>
          <h4>HOME</h4>
          <h4>ABOUT US</h4>
          <h4>PROPERTIES</h4>
        </div>

        <div className={styles.contactMethods}>
          <div className={styles.method}>
            <img src="/svg/contact/call.svg" alt="Phone icon" />
            <p>+1 123 456 7890</p>
          </div>
          <div className={styles.method}>
            <img src="/svg/contact/email.svg" alt="Email icon" />
            <p>info@luxuryperspective.com</p>
          </div>
          <div className={styles.method}>
            <img src="/svg/contact/location.svg" alt="Location icon" />
            <p>New York</p>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <img src="/svg/socials/instagram.svg" alt="Instagram icon" />
        <img src="/svg/socials/facebook.svg" alt="Facebook icon" />
        <img src="/svg/socials/youtube.svg" alt="YouTube icon" />
      </div>

      <p className={styles.cc}>
        © 2021 Luxury Perspective. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
