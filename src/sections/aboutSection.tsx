import React, { MutableRefObject } from "react";

type AboutSectionProps = {
  index: number;
  scrollRefs: MutableRefObject<any[]>;
};

const AboutSection: React.FC<AboutSectionProps> = ({ index, scrollRefs }) => {
  return (
    <section
      ref={scrollRefs.current[index]}
      id="about"
      className="flex justify-center items-center w-full h-screen"
    >
      ¡Hola, soy la sección Acerca de!
    </section>
  );
};

export default AboutSection;
