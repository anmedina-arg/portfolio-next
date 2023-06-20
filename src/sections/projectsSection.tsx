import React, { MutableRefObject } from "react";

type ProjectSectionProps = {
  index: number;
  scrollRefs: MutableRefObject<any[]>;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ index, scrollRefs }) => {
  return (
    <section
      ref={scrollRefs.current[index]}
      id="project"
      className="flex justify-center items-center w-full h-screen bg-red-300"
    >
      ¡Hola, soy la sección ProjectSection!
    </section>
  );
};

export default ProjectSection;
