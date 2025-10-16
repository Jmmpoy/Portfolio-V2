
// TODO : SWITCH FROM GRID TO LSIT VIEW
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { motion, Variants } from "motion/react";
import { NextSeo } from "next-seo";
import Grid from "@/components/grid";
import data from "../api";

export default function Home() {
  const pageVariants: Variants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Mpoy Jean-Marc — Développeur Front-End"
        description="Jean-Marc Mpoy est un développeur passionné par l'enrichissement de l'expérience utilisateur à travers des interfaces élégantes et interactives. Son travail en freelance avec une diversité de partenaires vise à maximiser l'engagement utilisateur."
      />

      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <Hero />
        <Grid data={data} />
      </motion.div>
    </Layout>
  );
}
