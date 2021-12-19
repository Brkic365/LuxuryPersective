import React from "react";
import styles from "../styles/Listing.module.scss";

function Listing({ listing }) {
  return (
    <div className={styles.listing}>
      <div className={styles.gradient}>
        <img
          src={`/images/listings/thumbnails${listing.imgUrl}`}
          alt="Photo of the property"
        />
      </div>
      <div className={styles.text}>
        <h4>{listing.street}</h4>
        <p>{listing.city}</p>
      </div>
      <h3 className={styles.price}>${listing.price.toLocaleString("en-US")}</h3>
    </div>
  );
}

export default Listing;
