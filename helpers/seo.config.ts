export default {
  defaultTitle: "Mpoy Jean-Marc — Développeur Front-End",
  description:
    "Mpoy Jean-Marc est un développeur et designer d’interaction, passionné par le mouvement et la fluidité du web.En tant qu’indépendant, il conçoit des expériences pour des agences, marques et studios créatifs",
  titleTemplate: "Mpoy Jean-Marc — Développeur Front-End",
  canonical: "https://www.jmmpoy.com/",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.jmmpoy.com/",
    site_name: "Mpoy Jean-Marc - Portfolio",
    title: "Mpoy Jean-Marc — Développeur Front-End",
    description:
      "Mpoy Jean-Marc est un développeur et designer d’interaction, passionné par le mouvement et la fluidité du web.En tant qu’indépendant, il conçoit des expériences pour des agences, marques et studios créatifs",
    images: [
      {
        url: "https://www.jmmpoy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mpoy Jean-Marc - Développeur Front-End Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@jmmpoy",
    site: "@jmmpoy",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "développeur, front-end, react, nextjs, typescript, gsap, framer-motion, portfolio, web design, UI/UX",
    },
    {
      name: "author",
      content: "Jean-Marc Mpoy",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};
