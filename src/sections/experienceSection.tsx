import React, { MutableRefObject } from "react";

type ExperienceSectionProps = {
  index: number;
  scrollRefs: MutableRefObject<any[]>;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ index, scrollRefs }) => {
  return (
    <section
      ref={scrollRefs.current[index]}
      id="experience"
      className="flex justify-center items-center w-full h-screen"
    >
      ¡Hola, soy la sección ExperienceSection!
    </section>
  );
};

export default ExperienceSection;
