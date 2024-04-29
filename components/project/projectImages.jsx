import {motion} from 'framer-motion'
import Image from 'next/image';

export  const ProjectImages = ({
    image,
    secondaryImage,
    thirdImage,
    fourthImage,
    name
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: {duration: 0.6, ease: "easeInOut" },
        }}
        className="image-container min-h-[420px] sepia-[10%]  mx-auto flex flex-col  justify-center items-center gap-y-8   "
      >
        {image && (
          <motion.div className="basis-full project-image-card   ">
            <Image
              src={image}
              blurDataURL={image.blurDataURL}
              placeholder="blur"
              priority
              alt={name}
              class=" min-w-[320px]  image basis-full"
            />
          </motion.div>
        )}

        {secondaryImage && (
          <motion.div className="basis-full project-image-card  ">
            {secondaryImage && (
              <Image
                src={secondaryImage}
                blurDataURL={secondaryImage.blurDataURL}
                placeholder="blur"
                alt={name}
                class=" min-w-[320px]  image "
              />
            )}
          </motion.div>
        )}

        {thirdImage && (
          <motion.div className="basis-full project-image-card  ">
            {thirdImage && (
              <Image
                src={thirdImage}
                blurDataURL={thirdImage.blurDataURL}
                placeholder="blur"
                alt={name}
                class=" min-w-[320px]  image "
              />
            )}
          </motion.div>
        )}

        {fourthImage && (
          <motion.div className="basis-full project-image-card  ">
            {fourthImage && (
              <Image
                src={fourthImage}
                blurDataURL={fourthImage.blurDataURL}
                placeholder="blur"
                alt={name}
                class=" min-w-[320px]  image "
              />
            )}
          </motion.div>
        )}
      </motion.div>
    );
  };

  export default ProjectImages