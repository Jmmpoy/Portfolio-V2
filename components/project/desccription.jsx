import {motion} from 'framer-motion'

export   const Description = ({description}) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.9, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        className="Description mt-8"
      >
        {description.map((item, index) => {
          const isGray = item.id === 3 ? "text-gray" : "text-black";
          return (
            <div key={index} className="overflow-hidden">
              <motion.p
                key={item.id}
                class="text-sm  font-sohneBuch  text-[#373737]"
              >
                {item.text}
              </motion.p>
            </div>
          );
        })}
      </motion.div>
    );
  };

  export default Description;