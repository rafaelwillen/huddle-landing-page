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
        <section key={index}>
          <img src={imgSrc} alt={heading} />
          <h2>{heading}</h2>
          <p>{content}</p>
        </section>
      ))}
    </>
  );
};

export default BodySections;
