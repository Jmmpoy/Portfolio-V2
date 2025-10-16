
import { motion, LayoutGroup } from "motion/react";
import { delayedFade } from "@/helpers/transitions";
import { useState } from "react";

export default function Socials() {
  const items = [
    { title: "Mail", link: "mailto:jmmpoy@gmail.com" },
    { title: "Linkedin", link: "https://www.linkedin.com/in/jean-marc-mpoy/" },
    { title: "Instagram", link: "https://www.instagram.com/jm.mpy_/?hl=fr" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className=" w-full ">
      <div className="py-4">
        <motion.div
          className="flex justify-end space-x-2"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <LayoutGroup>
            {items.map((item, index) => {
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative hover:text-gray-500 focus:text-gray-500 text-black uppercase text-sm font-sohneKraftig"
                >
                  {item.title}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-px w-full bg-black"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              );
            })}
          </LayoutGroup>
        </motion.div>
      </div>
    </div>
  );
}
