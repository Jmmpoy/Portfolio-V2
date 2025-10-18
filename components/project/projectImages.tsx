import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface MediaItemProps {
  item: string;
  name: string;
  onClick: () => void;
  isPriority?: boolean;
  objectFit?: string;
}

interface MediaItemPropsExtended extends MediaItemProps {
  isPriority?: boolean;
  objectFit?: string;
}

interface ProjectImagesProps {
  name: string;
  media: string[];
  objectFit?: string;
}

interface SelectedMedia {
  item: string;
  index: number;
}

const MediaItem = ({
  item,
  name,
  onClick,
  isPriority = false,
  objectFit = "cover",
}: MediaItemPropsExtended) => {
  const isVideo = typeof item === "string" && item.endsWith(".mp4");
  const objectFitClass = objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div onClick={onClick} className="basis-full project-image-card cursor-pointer w-full">
      {isVideo ? (
        <motion.video
          src={item}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`min-w-[320px] image grain w-full h-full ${objectFitClass} aspect-[4/3]`}
        />
      ) : (
        <motion.div className="relative w-full aspect-[4/3] min-w-[320px]">
          <Image
            src={item}
            alt={name}
            fill
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            loading={isPriority ? "eager" : "lazy"}
            className={`${objectFitClass} image grain min-h-full`}
          />
        </motion.div>
      )}
    </div>
  );
};

const ProjectImages = ({ name, media, objectFit = "cover" }: ProjectImagesProps) => {
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);

  const handleMediaClick = (item: string, index: number) => {
    setSelectedMedia({ item, index });
  };

  const handleClose = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(2px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="image-container min-h-[420px] sepia-[10%] mx-auto flex flex-col justify-center items-center gap-y-8"
      >
        {media.map((item, index) => (
          <MediaItem
            key={index}
            item={item}
            name={name}
            onClick={() => handleMediaClick(item, index)}
            isPriority={index < 2}
            objectFit={objectFit}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-fullBlack/95 flex items-center justify-center z-50 cursor-pointer"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {typeof selectedMedia.item === "string" && selectedMedia.item.endsWith(".mp4") ? (
              <motion.video
                // layoutId={`card-media-container-${selectedMedia.index}`}
                src={selectedMedia.item}
                autoPlay
                loop
                muted
                controls
                className="w-11/12 md:w-3/4 lg:w-1/2 h-auto max-h-[90vh]"
              />
            ) : (
              <motion.div
                // layoutId={`card-media-container-${selectedMedia.index}`}
                className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-[4/3] max-h-[90vh]"
              >
                <Image src={selectedMedia.item} alt={name} fill className="object-contain" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectImages;
