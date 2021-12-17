import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Properties.module.scss";

import Listing from "../../Components/Listing";

function properties() {
  const [email, setEmail] = useState(null);

  const listings = [
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
    {
      imgUrl: "/images/villa_pool_2.jpg",
      street: "12345 STREET",
      city: "LOS ANGELES, CA",
    },
  ];

  return (
    <div className={styles.properties}>
      <Head>
        <title>Properties</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Section */}

      <div className={styles.main}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/drone.mp4" type="video/mp4" />
        </video>

        <div className={styles.mainTitle}>
          <h1>PROPERTIES</h1>
        </div>
      </div>

      {/* Listings Section */}

      <div className={styles.listings}>
        <h2>LISTINGS</h2>
        <div className={styles.grid}>
          {listings.map((listing, i) => {
            return (
              <Link key={i} href="/properties/1">
                <a>
                  <Listing listing={listing} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Subscribe Section */}

      <div className={styles.subscribe}>
        <h3>
          SUBSCRIBE TO OUR NEWSLETTER SO YOU KNOW WHEN WE LIST A NEW PROPERTY
        </h3>
        <div className={styles.inputSection}>
          <input
            placeholder="E-MAIL ADDRESS"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default properties;
