import mainImage from "@/app/assets/images/gallinitas.webp";
import Image from "next/image";
import { raleway } from "@/components/ui/fonts";
import logo from "@/app/assets/images/logo.webp"
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="min-h-screen w-full
    z-50">
      <Image 
        src={logo} 
        alt="We grow"
        width={200}
        height={200}
        className="object-cover aspect-[200 / 81]
        pl-6 pt-6"
      />
      <div className="flex justify-center mx-4 mt-6">
        <Image
          src={mainImage}
          alt="Gallinitas"
          className="object-cover"
          priority
        />
      </div>
      
      <h1 className={`text-3xl text-[#424B54]
      ${raleway.className} font-semibold p-6`}>
        Encuentra tu próximo destino
        gastrónimo en la tranquilidad del campo.
      </h1>
      <p className={`${raleway.className} font-light
      px-6`}>
        Compra productos frescos y descubre
        todo lo que el mundo rural tiene para ti.
      </p>
      <div className="bg-[#DB514A] mx-6 text-center
      py-2 my-6 rounded-lg">
        <Link href="/menu" className={`
        text-center text-[#FEFEFE] ${raleway.className}
        font-semibold mb-20`}>
        Empieza a explorar
        </Link>
      </div>
    </div>
  )
}