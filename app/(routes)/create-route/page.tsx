import { Footer } from "@/components/footer/footer"
import { raleway } from "@/components/ui/fonts"
import Image from "next/image"
import map2 from "@/app/assets/images/map2.png"
import { Search } from "@/components/search/search"
import { MiniCard } from "@/components/card/mini-card"
import MapComponent from "@/components/map/Map"

export default function MyRoute () {
  return (
    <div className={`my-6 ${raleway.className} font-semibold text-[#424B54]
    max-w-[1200px] mx-auto`}>
      <h3 
        className="text-center mb-6"
      >
        Crea tu ruta personalizada
        
      </h3>
      <Search />
      {/* <Image 
        src={map2} 
        alt="Map" 
        width={500} 
        height={250} 
        priority 
        className="my-6" 
      /> */}
      <div className="my-6">
        <MapComponent />
      </div>
      <div className="flex justify-around mb-20">
        <MiniCard message="Rutas anteriores" />
        <MiniCard message="Rutas guardadas" />
      </div>
      <Footer />
    </div>
  )
}