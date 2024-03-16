import { ProductCard } from "@/components/product/product-card";
import oliveOil from "@/app/assets/images/aceiteOliva.png"
import cheese from "@/app/assets/images/queso.png"
import eggs from "@/app/assets/images/huevos.png"
import { SectionHeading } from "@/components/header/section-heading";
import styles from "@/app/slider.module.css"

export function Foryou () {
  return (
    <section className="">
      <SectionHeading name="Recomendaciones para ti" />
      <div className={`grid grid-flow-col scroll-auto
          gap-[1.2rem] overflow-y-auto overscroll-x-contain
          snap-mandatory my-4 ${styles.slider}`}>
        <ProductCard 
          name="Aceite de oliva ecologico"
          image={oliveOil}
          origin="Titulcia"
        />
        <ProductCard 
          name="Queso Marqués de Mendiola"
          image={cheese}
          origin="Ciempuzuelos"
        />
        <ProductCard 
          name="Huevos ecológicos el Carrizal"
          image={eggs}
          origin="Alcolea del Tajo"
        />
      </div>
    </section>
  )
}