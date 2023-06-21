import { ProjectProps } from "@/mocks/projects";
import Image from "next/image";

type CardProps = {
  project: ProjectProps
};

export default function Card({ project }: CardProps) {
  const { id, title, description, github, image, skill, demo } = project
  return (
    <>
      <div className="relative h-64 cursor-pointer border-2 border-solid border-black flex flex-col items-center justify-center">
        <h5 className="z-10">
          {title}
        </h5>
        <Image src={image} alt='descripcion del proyecto' className="absolute h-full" />
      </div>
    </>

  )
};