import { SectionHeading } from "../header/section-heading";
import { ProductCard } from "../product/product-card";
import tomato from "@/app/assets/images/tomate.png"
import cheese from "@/app/assets/images/queso.png"
import eggs from "@/app/assets/images/huevos.png"
import styles from "@/app/slider.module.css"

export function Milk () {
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
          image={cheese}
          origin="Cádiz"
        />
        <ProductCard 
          name="Ajos"
          image={eggs}
          origin="Las Predroñeras"
        />
      </div>
    </section>
  )
}