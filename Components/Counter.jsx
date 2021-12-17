import React, { useRef, useState } from "react";
import styles from "../styles/Counter.module.scss";

import CountUp from "react-countup";
import { useIsVisible } from "react-is-visible";

export default function Counter({ imgUrl, number, prefix, suffix, text }) {
  const [countedUp, setCountedUp] = useState(false);

  return (
    <div className={styles.counter}>
      <img src={imgUrl} />
      <CountUp
        end={number}
        duration={1}
        prefix={prefix}
        suffix={suffix}
        decimal="."
        separator=","
      >
        {({ countUpRef, start }) => {
          // Create reference to div holding counter for visibility checking
          const visibilityCheckRef = useRef();

          // Check if the counter is visible in the screen
          const isVisible = useIsVisible(visibilityCheckRef);

          // If the counter is visible, start it
          if (isVisible && !countedUp) {
            start();
            setCountedUp(true);
          }

          return (
            <div className={styles.count} ref={visibilityCheckRef}>
              <h1 ref={countUpRef} />
            </div>
          );
        }}
      </CountUp>
      <p>{text}</p>
    </div>
  );
}
