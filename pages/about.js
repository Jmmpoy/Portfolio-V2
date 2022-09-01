import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export default function About() {
  const containerRef = useRef(null);
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden  ">
      <div class="grid  h-full  md:grid-cols-2  ">
        <div class="text-sm font-founders col-start-2 flex flex-col justify-center w-4/5 mx-auto md:m-0 md:w-full ">
          <p class="text-2xl font-foundersLight">
            I’m a freelance Designer, Director based in Stockholm, Sweden.
            Currently @ Nike Technology Innovation. My passion lies in art
            direction, branding, typography, Interface/ux & system design,
            motion and technology. Previously, I worked at Ri, AKQA, RG/A,
            Google Creative Lab, Unit9, MediaMonks, Wieden + Kennedy and Waste
            Creative.
          </p>
        </div>
      </div>
    </Container>
  );
}
