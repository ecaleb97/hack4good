import { raleway } from "@/components/ui/fonts"
import { Card } from "@/components/card/card"
import { ClockIcon } from "@/components/icons/icon-time"
import { MiniCard } from "@/components/card/mini-card"
import { Footer } from "@/components/footer/footer"

export default function CreateRoute () {
  return (
    <div className={`my-6 ${raleway.className}
    font-semibold text-[#424b54] max-w-[1200px] mx-auto`}>
      <h3 className="text-center">Tu Ruta</h3>
      <section className="sm:mx-auto md:flex gap-10">
        <div>
          <Card
            time="40 min"
            description="Degustacion Gourmet de 
          Quesos en casa Ana"
            icon={<ClockIcon />}
            className="bg-cheese bg-cover"
          />
      
          <h3 
            className="text-center font-light"
          >
        Duración Total: 40 minutos
          </h3>
        </div>
        
        
        <h4 
          className="text-center mt-8 text-[#B4B3B3]
        font-light md:hidden"
        >
        ¿Quizás te apetece?
        </h4>
        <Card
          time="1h"
          description="Recorrido en caballo por el campo en 1h"
          message="Añadir al itinerario"
          icon={<ClockIcon />}
          className="bg-horse bg-cover"
        />

        <Card
          time="35 min"
          description="Visita al castillo de Manzanares El Real"
          message="Añadir al itinerario"
          icon={<ClockIcon />}
          className="bg-castle bg-cover"
        />
      </section>
      <div className="flex justify-around my-20">
        <MiniCard message="Rutas anteriores" />
        <MiniCard message="Rutas guardadas" />
      </div>
      <Footer />
    </div>
  )
}