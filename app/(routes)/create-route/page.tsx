import { Footer } from "@/components/footer/footer"
import { raleway } from "@/components/ui/fonts"

export default function MyRoute () {
  return (
    <div className={`my-6 ${raleway.className} font-semibold text-[#424B54]`}>
      <h3 
        className="text-center"
      >
        Crea tu ruta personalizada
      </h3>
      <Footer />
    </div>
  )
}