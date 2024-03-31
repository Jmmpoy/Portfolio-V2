import React from 'react'
import {motion, useMotionValue} from 'framer-motion'

const Reveal = () => {

  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{
      opacity: 1,
      y: "-100vh",
      transition: { delay: 1, duration: 1.4, ease: "easeOut" },
    }}
    className="overflow-hidden absolute inset-0 w-full bg-white z-50 h-screen flex justify-center items-center"
  >


  </motion.div>
  )
}

export default Reveal