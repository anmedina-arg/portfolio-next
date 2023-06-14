import Image from "next/image"
import logotipo from '../../assets/K.png'
export default function Logotipo() {
  return (
    <Image src={logotipo} alt='es un dibujo particular de la letra K mayuscula' width={100} height={100} className="rounded-full" />
  )
}