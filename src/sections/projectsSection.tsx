import React, { MutableRefObject } from "react";
import Card from "@/components/card/card";
import { PROJECTS } from "@/mocks/projects";

type ProjectSectionProps = {
  index: number;
  scrollRefs: MutableRefObject<any[]>;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ index, scrollRefs }) => {
  return (
    <section
      ref={scrollRefs.current[index]}
      id="project"
      className="relative justify-center items-center w-3/4 h-full"
    >
      <h2>Mis proyectos!</h2>
      {/* <div className="absolute rounded-xl shadow-xl w-full h-full bg-neutral-100 opacity-50 border-black border-2 border-solid "></div> */}
      <div className="grid gap-10 p-10 grid-cols-auto-fit-minmax m-5 shadow-xl bg-transparentTheme rounded-3xl">
        {
          PROJECTS.map((project, index) => <Card project={project} key={index} />)
        }

      </div>
    </section>
  );
};

export default ProjectSection;
