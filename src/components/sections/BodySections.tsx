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
          className="shadow-xl mb-7 last:mb-0 rounded-2xl py-8 px-4 text-center"
          key={index}
        >
          <img src={imgSrc} alt={heading} />
          <h2 className="mt-8 mb-4 font-heading font-bold text-darkCyan text-xl">
            {heading}
          </h2>
          <p className="text-sm text-blue leading-relaxed">{content}</p>
        </section>
      ))}
    </>
  );
};

export default BodySections;
