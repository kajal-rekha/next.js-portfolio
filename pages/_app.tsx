import "../styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps, router }: AppProps) {
  const aosInitialized = useRef(false);

  useEffect(() => {
    let isActive = true;

    import("aos").then(({ default: AOS }) => {
      if (!isActive) {
        return;
      }

      if (!aosInitialized.current) {
        AOS.init({ duration: 1000, once: true });
        aosInitialized.current = true;
      }

      AOS.refreshHard();
    });

    return () => {
      isActive = false;
    };
  }, [router.asPath]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
