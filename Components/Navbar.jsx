import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { useRouter } from "next/router";

export function MobileMenu({ open, close }) {
  return open ? (
    <div className={styles.mobileMenu}>
      <img src="/svg/close.svg" onClick={() => close(true)} />
      <ul>
        <li>
          <Link href="/">
            <a onClick={() => close(true)}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a onClick={() => close(true)}>ABOUT US</a>
          </Link>
        </li>
        <li>
          <Link href="/properties">
            <a onClick={() => close(true)}>PROPERTIES</a>
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
}

function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link href="/">
          <img
            className={styles.logo}
            src="/svg/nav_logo.svg"
            alt="Website logo"
          />
        </Link>
      </div>
      <div className={styles.right}>
        <img
          className={styles.menu}
          src="/svg/menu.svg"
          alt="Mobile Menu Icon"
          onClick={() => setMobileMenuOpen(true)}
        />

        <MobileMenu
          open={mobileMenuOpen}
          close={() => setMobileMenuOpen(false)}
        />

        <div className={styles.links}>
          <Link href="/">
            <a className={router.pathname === "/" && styles.open}>HOME</a>
          </Link>
          <Link href="/about-us">
            <a className={router.pathname === "/about-us" && styles.open}>
              ABOUT US
            </a>
          </Link>
          <Link href="/properties">
            <a
              className={router.pathname.includes("/properties") && styles.open}
            >
              PROPERTIES
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
