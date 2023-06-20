import Link from "next/link";

type AnchorProps = {
  label: string;
  to: string;
  navRefs: React.MutableRefObject<any[]>;
  active?: number;
  scrollTo: (index: number) => void;
  index: number;
};

const Anchor: React.FC<AnchorProps> = ({
  label,
  to,
  navRefs,
  active,
  scrollTo,
  index,
}) => {
  return (
    <Link
      href={to}
      onClick={() => scrollTo(index)}
      ref={navRefs.current[index]}
      className={`mx-5 text-grayLigthTheme border border-grayLigthTheme rounded-md p-2 w-36 text-center uppercase transition-all duration-400 ease-in-out hover:text-orangeTheme hover:border-orangeTheme hover:shadow-shadowAnchorTheme ${active === index ? "text-orangeTheme border-orangeTheme shadow-shadowAnchorTheme" : ""
        }`}
    >
      {label}

    </Link>
  );
};

export default Anchor;