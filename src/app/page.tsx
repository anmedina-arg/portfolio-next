'use client'
import React, { createRef, useRef, useState, useEffect } from "react";
import UpButton from "@/components/buttons/up";
import NavBar from "@/components/navbar/navbar";
import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import ExperienceSection from "@/sections/experienceSection";
import ProjectsSection from "@/sections/projectsSection";

export default function Home() {
  const [active, setActive] = useState(0);

  const scrollRefs = useRef<Array<React.RefObject<HTMLElement>>>([]);
  const navRefs = useRef<Array<React.RefObject<HTMLAnchorElement>>>([]);

  scrollRefs.current = [...Array(4)].map(
    (_, i) => scrollRefs.current[i] ?? createRef<HTMLElement>()
  );

  navRefs.current = [...Array(4)].map(
    (_, i) => navRefs.current[i] ?? createRef<HTMLAnchorElement>()
  );

  const scrollTo = (index: number) => {
    scrollRefs.current[index].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(index);
  };

  const scrollHandler = () => {
    const scrollRefsElements = scrollRefs.current;

    scrollRefsElements.forEach((el, i) => {
      if (el.current) {
        const rect = el.current.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (isVisible) {
          setActive(i);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <main className="bg-fixed bg-cover bg-center bg-[url('/background4.webp')] bg-no-repeat flex min-h-screen flex-col items-center justify-between">
      <NavBar navRefs={navRefs} active={active} scrollTo={scrollTo} />
      <AboutSection scrollRefs={scrollRefs} index={0} />
      <ExperienceSection scrollRefs={scrollRefs} index={1} />
      <ProjectsSection scrollRefs={scrollRefs} index={2} />
      <ContactSection scrollRefs={scrollRefs} index={3} />
      <UpButton />
    </main>
  );
}
