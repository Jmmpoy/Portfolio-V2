
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { motion } from "motion/react";
import Link from "next/link";
import DateTime from "@/components/dateTime";
import Footer from "../socials";

// // Import dynamique de SplitText pour éviter l'exécution côté serveur de GSAP
// const SplitText = dynamic(() => import("@/components/splitText"), {
//   ssr: false,
// });
export default function Header() {
  const menuItems = [{ route: "JM.M", url: "/" }];

  return (
    <header
      className="fixed  w-full  flex flex-col justify-center pt-2 z-10 h-12"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <Container extraClasses="Header-Section ">
        <motion.div className="flex flex-col  h-full sm:justify-between   sm:flex-row">
          <motion.nav
            variants={fade}
            initial="initial"
            animate="enter"
            exit="exit"
            className=" flex  md:flex items-center w-full  "
          >
            <motion.ul className=" flex space-x-2 self-center w-full">
              {menuItems.map(({ route, url }, index) => {
                return (
                  <motion.li
                    key={index}
                    className="text-xs uppercase transition  ease-in-out duration-10"
                  >
                    <Link
                      scroll={false}
                      href={url}
                      className="relative tracking-tighter font-sohneBuch text-sm mix-blend-difference inline-block transition-transform duration-150 ease-out hover:scale-[1.04] active:scale-[0.96]"
                    >
                      <p className=" uppercase text-sm font-sohneKraftig">{route}</p>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="w-full flex items-center">
              <DateTime />
              <Footer />
            </div>
          </motion.nav>
        </motion.div>
      </Container>
    </header>
  );
}
