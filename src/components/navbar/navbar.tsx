import Anchor from "../ancors/ancors";
type NavBarProps = {
  navRefs: React.MutableRefObject<any[]>;
  active?: number;
  scrollTo: (index: number) => void;
};

const NavBar: React.FC<NavBarProps> = ({ navRefs, active, scrollTo }) => {
  return (
    <header className="flex justify-end w-full bg-darkBlueTheme text-grayLigthTheme fixed p-4 shadow-shadowNavTheme rounded-b-xl z-20">
      {/* <Logotipo /> */}
      <div className="hidden md:flex">
        <Anchor
          navRefs={navRefs}
          active={active}
          scrollTo={scrollTo}
          to="#about"
          label="about"
          index={0}
        />
        <Anchor
          navRefs={navRefs}
          active={active}
          scrollTo={scrollTo}
          to="#experience"
          label="experience"
          index={1}
        />
        <Anchor
          navRefs={navRefs}
          active={active}
          scrollTo={scrollTo}
          to="#project"
          label="projects"
          index={2}
        />
        <Anchor
          navRefs={navRefs}
          active={active}
          scrollTo={scrollTo}
          to="#contact-me"
          label="contact me"
          index={3}
        />
      </div>
      <div className="md:hidden">
        <button className="mx-5 text-grayLigthTheme border border-grayLigthTheme rounded-md p-2 w-36 text-center uppercase transition-all duration-400 ease-in-out hover:text-orangeTheme hover:border-orangeTheme hover:shadow-shadowAnchorTheme">
          Menu
        </button>
      </div>
    </header>
  );
};

export default NavBar;