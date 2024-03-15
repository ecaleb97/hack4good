import Image from "next/image"


interface ProductCardProps {
  title: string
  image: string
  origin: string
}

export function ProductCard ({
  title,
  image,
  origin
}: ProductCardProps) {
  return (
    <div className="p-6">
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{origin}</p>
    </div>
  )
}