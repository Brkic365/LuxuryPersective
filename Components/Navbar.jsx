import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  console.log(router.pathname);

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
