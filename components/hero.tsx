import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Container from "@/components/container";
import ScrollForMore from "@/components/scrollForMore";
import dynamic from "next/dynamic";

// Import dynamique de SplitText pour éviter l'exécution côté serveur de GSAP
const SplitText = dynamic(() => import("@/components/splitText"), {
  ssr: false,
});

const ABOUT_TEXT =
  "Designer et développeur front-end depuis plus de cinq ans, j’explore la rencontre entre design et technologie. J’ai collaboré avec des agences web, des éditeurs de logiciels, ainsi que des studios créatifs et start-ups, en cultivant une approche à la fois esthétique et pragmatique. Inspiré par l’art, la musique, l’architecture, j’aime créer des interfaces qui respirent, bougent et racontent quelque chose.";

const AboutPreview = () => {
  const containerVariants: Variants = {
    initial: {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    animate: {
      maxHeight: "500px",
      paddingTop: "32px",
      paddingBottom: "32px",
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    exit: {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="text-left overflow-hidden w-full md:w-2/3"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SplitText
        text={ABOUT_TEXT}
        tag="p"
        splitType="lines"
        mask="lines"
        textAlign="left"
        from={{ yPercent: 110 }}
        to={{ yPercent: 0 }}
        delay={90}
        duration={0.7}
        ease="power4.out"
        threshold={0.05}
        rootMargin="0px"
        className="text-base xsm:text-base  font-sohneLeicht  sm:text-2xl tracking-tight"
      />
    </motion.div>
  );
};

export default function Hero() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  return (
    <Container extraClasses="Hero-Container relative">
      <main className="flex flex-col justify-center relative ">
        <motion.div className="pb-24"></motion.div>
        <>
          <div className="flex sm:w-full justify-between flex-row">
            <motion.div
              onClick={() => setIsAboutVisible(!isAboutVisible)}
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.7, 0, 0.3, 1],
                },
              }}
              className="text-left sm:text-center font-sohneBuch uppercase text-xs flex items-center cursor-pointer"
            >
              <div className="relative w-3 h-3 flex items-center justify-center mr-1">
                <AnimatePresence initial={false}>
                  {!isAboutVisible && (
                    <motion.span
                      key="plus"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute"
                    >
                      +
                    </motion.span>
                  )}
                  {isAboutVisible && (
                    <motion.span
                      key="minus"
                      initial={{ opacity: 0, rotate: 45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -45 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute"
                    >
                      -
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <SplitText
                splitType="chars"
                text="à propos"
                className="font-sohneBuch uppercase text-xs flex items-center cursor-pointer"
                delay={100}
                duration={0.3}
                ease="power2.out"
              />
            </motion.div>
            {!isAboutVisible && <ScrollForMore />}
          </div>
          <AnimatePresence>{isAboutVisible && <AboutPreview />}</AnimatePresence>
        </>
      </main>
    </Container>
  );
}
