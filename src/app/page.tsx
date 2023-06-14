import UpButton from "@/components/buttons/up";
import NavBar from "@/components/navbar/navbar";
import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import ExperienceSection from "@/sections/experienceSection";
import ProjectsSection from "@/sections/projectsSection";

export default function Home() {
  return (
    <main className="bg-fixed bg-cover bg-center bg-[url('/background4.webp')] bg-no-repeat flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <UpButton />
    </main>
  )
}
