import Link from "next/link";

type AnchorProps = {
  label: string;
  to: string
}

export default function Ancor({ label, to }: AnchorProps) {
  return (
    <Link className='mx-5 text-grayLigthTheme bg-grayTheme rounded-full p-2 w-36 text-center uppercase hover:text-orangeTheme' href={to}>{label}</Link>
  )
}