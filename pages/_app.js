import "../styles/globals.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {!router.pathname.includes("/properties/") && <Navbar />}

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
