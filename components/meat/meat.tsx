import { SectionHeading } from "../header/section-heading";
import { ProductCard } from "../product/product-card";
import solomillo from "@/app/assets/images/solomillo.png"
import pechugaPollo from "@/app/assets/images/pechugaPollo.png"
import hamburguer from "@/app/assets/images/hamburguesa.png"
import styles from "@/app/slider.module.css"

export function Meat () {
  return (
    <section>
      <SectionHeading name="Carnes" />
      <div className={`grid grid-flow-col scroll-auto
          gap-[1.2rem] overflow-y-auto overscroll-x-contain
          snap-mandatory my-4 ${styles.slider}`}>
        <ProductCard 
          name="Solomillo de cerdo"
          image={solomillo}
          origin="Talavera"
        />
        <ProductCard 
          name="Pechuga de pollo ecológico"
          image={pechugaPollo}
          origin="Puerto Moral"
        />
        <ProductCard 
          name="Hamburguesas de angus"
          image={hamburguer}
          origin="Pozuelo"
        />
      </div>
    </section>
  )
}