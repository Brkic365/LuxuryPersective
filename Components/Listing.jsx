import React from "react";
import styles from "../styles/Listing.module.scss";

function Listing({ listing }) {
  return (
    <div className={styles.listing}>
      <div className={styles.gradient}>
        <img src={listing.imgUrl} alt="Photo of the property" />
      </div>
      <div className={styles.text}>
        <h4>{listing.street}</h4>
        <p>{listing.city}</p>
      </div>
      <h3 className={styles.price}>{"$100,000"}</h3>
    </div>
  );
}

export default Listing;
