import {motion} from "framer-motion"

export const Title = ({classes, name, link }) => {
    return (
      <motion.div className="overflow-hidden">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.7, duration: 0.7, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.7, ease: "easeInOut" },
          }}
          className={`${classes} relative`}
          href={link}
        >
          {name}
        </motion.a>
      </motion.div>
    );
  };

  export default Title;


