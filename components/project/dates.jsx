import {motion} from 'framer-motion'
import React from 'react'


export   const Dates = ({year}) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.1, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        className="Dates font-sohneBuch text-sm  uppercase w-full text-[#373737] "
      >
        {year}
      </motion.div>
    );
  };

  export default Dates;