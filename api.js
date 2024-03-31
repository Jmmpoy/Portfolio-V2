import filmo from "./public/assets/Projects/Filmo/filmo.webp";
import filmo2 from "./public/assets/Projects/Filmo/filmo2.webp";
import filmo3 from "./public/assets/Projects/Filmo/filmo3.webp";

import myCanal from "./public/assets/Projects/myCanal/canal.png";
import myCanal2 from "./public/assets/Projects/myCanal/canal-2.webp";
import myCanal3 from "./public/assets/Projects/myCanal/canal-3.png";
import myCanal4 from "./public/assets/Projects/myCanal/canal-4.png";

import soundcharts from "./public/assets/Projects/Soundcharts/soundcharts-1.png";
import soundcharts2 from "./public/assets/Projects/Soundcharts/soundcharts-2.png";
import soundcharts3 from "./public/assets/Projects/Soundcharts/soundcharts-3.png";

import fiftyLab from "./public/assets/Projects/350lab/350lab.webp";
import fiftyLabIpad from "./public/assets/Projects/350lab/350lab-ipad.webp";
import fiftylab2 from "./public/assets/Projects/350lab/350lab-2.webp";
import fiftylab4 from "./public/assets/Projects/350lab/350.png";
import fiftylab5 from "./public/assets/Projects/350lab/350-2.png";
import fiftylab6 from "./public/assets/Projects/350lab/350-3.png";

import clara from "@/public/assets/Projects/Clara/clara1.webp"
import clara2 from "@/public/assets/Projects/Clara/clara-1.png"
import clara3 from "@/public/assets/Projects/Clara/clara-2.png"
import clara4 from "@/public/assets/Projects/Clara/clara-3.png"

import test from "./public/assets/Projects/350lab/350lab.webp"

const data = [
  {
    id: 5,
    color:"text-white",
    name: "350lab",
    primaryImage: fiftyLabIpad,
    secondaryImage: fiftyLab,
    thirdImage: fiftylab2,
    fourthImage: fiftylab6,
    description: [
      {
        id: 1,
        text: "Développement et Design de la landing page",
      },
      {
        id: 2,
        text: "du studio 350lab",
      },
    ],
    role: "Développeur Front-End - Ui/Ux",
    tags: "Development / Design",
    year: "2022 - 2023",
    link: "https://www.350lab.com/",
  },
  {
    id: 1,
    name: "myCanal ",
    color:"text-black",
    primaryImage: myCanal2,
    secondaryImage: myCanal,
    thirdImage: myCanal3,
    fourthImage: myCanal4,
    description: [
      {
        id: 1,
        text: "Développment de l'application myCanal",
      },
      {
        id: 2,
        text: "sur Windows et Xbox.",
      },
    ],
    role: "Développeur Front-End",
    tags: "Development / Design / Windows / Xbox",
    year: "2020 - 2023",
    link: "https://www.canalplus.com/",
  },
  {
    id: 2,
    name: "FilmoTv",
    color:"text-black",
    primaryImage: filmo,
    secondaryImage: filmo2,
    thirdImage: filmo3,
    description: [
      {
        id: 1,
        text: "Développment de l'application mobile FilmoTV",
      },
      {
        id: 2,
        text: "sur Android et IOS.",
      },
    ],
    role: "Développeur Front-End",
    tags: "Development / Design / Mobile / Android / IOS",
    year: "2020 - 2023",
    link: "https://www.filmotv.fr/",
  },
  {
    id: 6,
    name: "Clara Onuegbu",
    color:"text-white",
    primaryImage: clara,
    secondaryImage: clara2,
    thirdImage: clara3,
    fourthImage: clara4,
    description: [
      {
        id: 1,
        text: "Développement et Design de la landing page",
      },
      {
        id: 2,
        text: "du studio 350lab",
      },
    ],
    role: "Développeur Front-End - Ui/Ux",
    tags: "Development / Design",
    year: "2022 - 2023",
    link: "https://www.350lab.com/",
  },
  // {
  //   id: 3,
  //   name: "Soundcharts",
  //   primaryImage: soundcharts,
  //   secondaryImage: soundcharts2,
  //   description: [
  //     {
  //       id: 1,
  //       text: "Développment du site web et de l'application",
  //     },
  //     {
  //       id: 2,
  //       text: "Soundcharts sur Ios et Android",
  //     },
  //   ],
  //   role: "Développeur Front-End",
  //   tags: "Development / Design / React",
  //   year: "2020 - 2023",
  //   link: "https://soundcharts.com/",
  // },
  // {
  //   id: 4,
  //   name: "Elow",
  //   primaryImage: test,
  //   secondaryImage: test,
  //   description: [
  //     {
  //       id: 1,
  //       text: "Application permettant de mesurer la",
  //     },
  //     {
  //       id: 2,
  //       text: "consommation énergétique de son PC",
  //     },
  //   ],
  //   role: "Développeur Front-End",
  //   tags: "Development / Windows ",
  //   year: "2020 - 2023",
  //   link: "https://elow.energy/fr/",
  // },
];

export default data;
