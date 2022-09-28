import { motion } from "framer-motion";
import { FC } from "react";

export type SectionCardType = {
  imgSrc: string;
  heading: string;
  content: string;
};

const BodySections: FC<{ sectionCards: SectionCardType[] }> = ({
  sectionCards,
}) => {
  return (
    <>
      {sectionCards.map(({ content, heading, imgSrc }, index) => (
        <motion.section
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`section-shadow mb-9 last:mb-0 rounded-2xl py-12 px-6 text-center ${
            index % 2 == 0 ? "flex-row-reverse" : "flex-row"
          } lg:flex items-center lg:text-left gap-24 lg:px-16 min-h-[310px]`}
          key={index}
        >
          <motion.img
            transition={{
              type: "spring",
              repeatType: "loop",
            }}
            whileHover={{
              scale: 1.1,
            }}
            width={448}
            height={366}
            className="max-w-[16rem] lg:max-w-md w-full mx-auto"
            src={imgSrc}
            alt={heading}
          />
          <div>
            <h2 className="mt-8 mb-4 font-heading font-bold text-darkCyan text-xl lg:text-2xl">
              {heading}
            </h2>
            <p className="text-sm lg:text-lg  leading-relaxed">{content}</p>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default BodySections;
