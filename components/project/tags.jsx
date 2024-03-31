import {motion} from 'framer-motion'

export const Tags = ({tags}) => {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.3, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
        }}
        className=" Tags font-sohneBuch text-sm mb-4 sm:mb-0 "
      >
        {tags}
      </motion.p>
    );
  };

  export default Tags;