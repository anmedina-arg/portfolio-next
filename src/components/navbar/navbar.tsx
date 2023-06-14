import Ancor from "../ancors/ancors";
import Logotipo from "../logo/logotipo";

export default function NavBar() {
  return (
    <header className="flex justify-end w-full bg-darkBlueTheme text-grayLigthTheme fixed p-4">
      {/* <Logotipo /> */}
      <Ancor to='#about' label="about" />
      <Ancor to='#experience' label="experience" />
      <Ancor to='#project' label="projects" />
      <Ancor to='#contact-me' label="contact me" />
    </header>
  )
}