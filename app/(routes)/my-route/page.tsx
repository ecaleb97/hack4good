import { raleway } from "@/components/ui/fonts"
import { Card } from "@/components/card/card"
import { ClockIcon } from "@/components/icons/icon-time"
import { FlagIcon } from "@/components/icons/icon-flag"
import { MiniCard } from "@/components/card/mini-card"

export default function CreateRoute () {
  return (
    <div className={`my-6 ${raleway.className}
    font-semibold text-[#424b54]`}>
      <h3 className="text-center">Tu Ruta</h3>
      <Card
        time="40 min"
        description="Degustacion Gourmet de 
        Quesos en casa Ana"
        icon={<ClockIcon />}
        className="bg-cheese bg-no-repeat bg-cover"
      />
      <h3 
        className="text-center font-light"
      >
        Duración Total: 40 minutos
      </h3>

      <h4 
        className="text-center mt-8 text-[#B4B3B3]
        font-light"
      >
        ¿Quizás te apetece?
      </h4>
      <Card
        time="1h"
        description="Recorrido en caballo por el campo en 1h"
        message="Añadir al itinerario"
        icon={<ClockIcon />}
        className="bg-horse bg-no-repeat bg-cover"
      />

      <Card
        time="35 min"
        description="Visita al castillo de Manzanares El Real"
        message="Añadir al itinerario"
        icon={<ClockIcon />}
        className="bg-castle bg-no-repeat bg-cover"
      />

      <div className="flex justify-around">
        <MiniCard message="Rutas anteriores" />
        <MiniCard message="Rutas guardadas" />
      </div>
    </div>
  )
}