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
      className="flex flex-col justify-center items-center w-full h-screen"
    >
      <h1 className="uppercase">andres medina</h1>
      <p className="p-2">{`I am a proactive and responsible person. I like new challenges, research, study and learn new things. This has led me to train as a Full Stack Developer with main stack JavaScript and Node Js. I developed my experience in the IT world at Henry's bootcamp, where I have carried out different projects, individually and as a team! In addition, I generated solid and important soft skills during his 12 years of experience as an Industrial Engineer where I led work teams, developing people in soft skills such as communication, feedback, inclusion, diversity, teamwork and continuous improvement.`}</p>
    </section>
  );
};

export default AboutSection;
