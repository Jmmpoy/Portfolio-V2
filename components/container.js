import {motion} from 'framer-motion';
export default function Container({ children, extraClasses }) {
  return (
    <motion.section className={`${extraClasses} px-6 mx-auto w-full  md:px-8`}>
      {children}
    </motion.section>
  );
}
