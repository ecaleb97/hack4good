import { SectionHeading } from "../header/section-heading";
import { ProductCard } from "../product/product-card";
import tomato from "@/app/assets/images/tomate.png"
import acelgas from "@/app/assets/images/acelgas.png"
import ajos from "@/app/assets/images/ajos.png"
import styles from "@/app/slider.module.css"

export function Huerto () {
  return (
    <section>
      <SectionHeading name="Huerto" />
      <div className={`grid grid-flow-col scroll-auto
          gap-[1.2rem] overflow-y-auto overscroll-x-contain
          snap-mandatory my-4 ${styles.slider}`}>
        <ProductCard 
          name="Tomate rosa de la reina"
          image={tomato}
          origin="Cádiz"
        />
        <ProductCard 
          name="Acelgas"
          image={acelgas}
          origin="Cádiz"
        />
        <ProductCard 
          name="Ajos"
          image={ajos}
          origin="Las Predroñeras"
        />
      </div>
    </section>
  )
}