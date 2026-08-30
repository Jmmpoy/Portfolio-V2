import "@/styles/main.css";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import Header from "@/components/header/header";
import SEO from "@/helpers/seo.config";
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2100); // Should match the duration of your preloader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <Header />
            <Component {...pageProps} key={router.asPath} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
