import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Content from "@/components/content";
import { m } from "framer-motion";
import { NextSeo } from "next-seo";
import data from "api";
import {useEffect} from "react";
import Grid from '@/components/grid'

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <Layout className="no-scrollbar">
      <NextSeo
        title="Mpoy Jean-Marc — Front-End Developer"
        description="Mpoy Jean-Marc is a developer specializing in movement and interaction. As a freelancer, he works with businesses, agencies, startups, and individuals."
      />
      <m.div initial="initial" animate="enter" exit="exit">
        <Hero />
        <Grid data={data}/>
        {/* <Content data={data}/> */}
      </m.div>
    </Layout>
  );
}
