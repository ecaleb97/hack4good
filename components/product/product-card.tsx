import Image, { StaticImageData } from "next/image"
import { raleway } from "../ui/fonts"

interface ProductCardProps {
  name: string
  image: StaticImageData
  origin: string
}

export function ProductCard ({
  name,
  image,
  origin
}: ProductCardProps) {
  return (
    <article className={`w-[140px] rounded-xl
    ${raleway.className}`}>
      <Image 
        src={image} 
        alt="Aceite de oliva" 
        className="bg-[#ECEAE1] rounded-t-2xl
        w-[140px] h-[130px] flex justify-center"
        priority 
      />
      <div className="p-3 rounded-b-2xl
              bg-[#FEFEFE] shadow">
        <p className="">{name}</p>
        <small className="text-[#B4B3B3]">{origin}</small>
      </div>
    </article>
  )
}