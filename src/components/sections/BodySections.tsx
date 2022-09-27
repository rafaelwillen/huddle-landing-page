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
        <section
          className={`section-shadow mb-9 last:mb-0 rounded-2xl py-12 px-6 text-center ${
            index % 2 == 0 ? "flex-row-reverse" : "flex-row"
          } lg:flex items-center lg:text-left gap-24 lg:px-16 min-h-[310px]`}
          key={index}
        >
          <img
            width={448}
            height={366}
            className="max-w-sm lg:max-w-md w-full mx-auto"
            src={imgSrc}
            alt={heading}
          />
          <div>
            <h2 className="mt-8 mb-4 font-heading font-bold text-darkCyan text-xl lg:text-2xl">
              {heading}
            </h2>
            <p className="text-sm lg:text-lg text-blue leading-relaxed">
              {content}
            </p>
          </div>
        </section>
      ))}
    </>
  );
};

export default BodySections;
