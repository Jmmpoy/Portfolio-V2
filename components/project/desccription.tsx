import { motion } from "motion/react";

interface DescriptionProps {
  description?: {
    firstPart?: string;
    secondPart?: string;
  };
}

const Description = ({ description }: DescriptionProps) => {
  if (!description) return null;

  const { firstPart, secondPart } = description;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.2,
          },
        },
      }}
      className="mt-4 space-y-4"
    >
      {firstPart && (
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
          }}
          className="font-sohneBuch text-sm"
        >
          {firstPart}
        </motion.p>
      )}
      {secondPart && (
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
          }}
          className="font-sohneBuch text-sm"
        >
          {secondPart}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Description;
