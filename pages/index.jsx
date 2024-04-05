// TODO : SWITCH FROM GRID TO LSIT VIEW
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Grid from "@/components/grid";
import data from "api";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);

  return (
    <Layout className="no-scrollbar relative">
            <NextSeo
              title="Mpoy Jean-Marc — Développeur Front-End"
              description="Jean-Marc Mpoy est un développeur passionné par l'enrichissement de l'expérience utilisateur à travers des interfaces élégantes et interactives. Son travail en freelance avec une diversité de partenaires vise à maximiser l'engagement utilisateur."
            />

            {data && (
              <motion.div className="relative bg-beige">
                <Hero />
                <Grid data={data} />
              </motion.div>
            )}
          </Layout>
  );
}
