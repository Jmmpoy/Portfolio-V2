import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import SEO from "@/helpers/seo.config";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(pageProps);
  

  return (
    <>
      <DefaultSeo {...SEO} />

        <Header />
        {/*  AnimatePresence exitBeforeEnter is used to wait for the component to exit before any components mounting, this will prevent pages to crossfade  */}
        <AnimatePresence
                mode='wait'
                initial={false}
                // onExitComplete={() => setTimeout(() => window.scroll({ top: 0, left: 0, behavior: 'smooth' }))}
                
            >
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
       
        <Footer />
    </>
  );
}
