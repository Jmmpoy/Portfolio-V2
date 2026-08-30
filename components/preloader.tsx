import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// The wordmark sweeps from a light tint to solid ink, left to right.
//
// Two earlier attempts left the "j" descender visibly unfilled, for two
// separate reasons — both worth recording so they don't get reintroduced:
//
// 1. Box clipping. Glyph ink is NOT confined to the element's box: with
//    line-height 1, this font's "j" descender overflows the bottom by
//    ~1.56px at 30px. Anything that paints via the box — `background-clip:
//    text` (whose paint area is the padding box) or `clip-path: inset()`
//    (which clips to the border box) — cuts that overflow off. Hence the
//    `padding: 0.25em 0`: it enlarges the paint area without affecting the
//    visible layout, since background-clip:text keeps the padding invisible.
//
// 2. Stroke/fill geometry mismatch. `-webkit-text-stroke` expands the glyph
//    outward by half the stroke width, so an outlined layer and a filled
//    layer trace different shapes; stacking them leaves an unpainted notch
//    at the descender hook where the two disagree. Removing the stroke
//    entirely is what makes this robust — the "empty" state is now a light
//    tint of the same single glyph render rather than an outline of a
//    slightly larger one.
export default function Preloader() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#EEEBE4]"
        >
          <motion.span
            className="text-3xl font-sohneKraftig tracking-[-0.05em] leading-none"
            style={{
              padding: "0.25em 0",
              backgroundImage: "linear-gradient(to right, #282828 50%, #CFCBC2 50%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            initial={{ backgroundPosition: "100% 0" }}
            animate={{ backgroundPosition: "0% 0" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.7, 0, 0.3, 1] }}
          >
            jm.m
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
