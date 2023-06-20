import React, { MutableRefObject } from "react";

type ContactSectionProps = {
  index: number;
  scrollRefs: MutableRefObject<any[]>;
};

const ContactSection: React.FC<ContactSectionProps> = ({ index, scrollRefs }) => {
  return (
    <section
      ref={scrollRefs.current[index]}
      id="contact-me"
      className="flex justify-center items-center w-full h-screen"
    >
      ¡Hola, soy la sección ContactSection!
    </section>
  );
};

export default ContactSection;
