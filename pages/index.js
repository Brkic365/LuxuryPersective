import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

import Counter from "../Components/Counter";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Luxury Perspective</title>

        <meta
          name="description"
          content="We are Luxury Perspective, a real estate company that sells luxury estates."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Section */}

      <div className={styles.main}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/drone.mp4" type="video/mp4" />
        </video>

        <div className={styles.mainTitle}>
          <img src="/svg/logo.svg" alt="Website logo" />
          <h1>LUXURY PERSPECTIVE</h1>
          <div className={styles.buttons}>
            <Link href="/properties">
              <button className={styles.full}>PROPERTIES</button>
            </Link>
            <Link href="#contact">
              <button className={styles.empty}>CONTACT</button>
            </Link>
          </div>
        </div>

        <div className={styles.scroll}>
          <p>SCROLL FOR MORE</p>
          <img src="/svg/scroll.svg" alt="Scroll Icon" />
        </div>
      </div>

      {/* Short About Section */}
      <div className={styles.about}>
        <div className={styles.text}>
          <h2>LOOKING FOR A DREAM HOUSE OR APARTMENT?</h2>
          <p>
            {
              "Here at Luxury Perspective, we offer only the best to our clients. It doesn't matter if you are looking for a new house or a new apartment, you can believe us that we will fulfill your needs."
            }
          </p>
          <button className={styles.full}>SEE MORE</button>
        </div>
        <img
          src="/images/listings/thumbnails/outside_circle_pool.webp"
          alt="Photo of property with a pool"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.choose}>
        <h2>WHY CHOOSE US?</h2>
        <div className={styles.counters}>
          <Counter
            imgUrl="/svg/money.svg"
            number={650}
            prefix="$"
            suffix="k+"
            text="Revenue earned"
          />
          <Counter
            imgUrl="/svg/home.svg"
            number={100}
            prefix=""
            suffix="+"
            text="Properties sold"
          />
          <Counter
            imgUrl="/svg/family.svg"
            number={60}
            prefix=""
            suffix="+"
            text="Families satisfied"
          />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className={styles.contact} id="contact">
        <img src="/graphics/contact.svg" alt="Contact graphic" />
        <Contact title="GET IN TOUCH" />
      </div>
    </div>
  );
}
