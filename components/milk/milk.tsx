import { SectionHeading } from "../header/section-heading";
import { ProductCard } from "../product/product-card";
import cheeseSponsored from "@/app/assets/images/cheeseSponsored.png"
import cheeseSponsored2 from "@/app/assets/images/cheeseSponsored2.png"
import cheeseSponsored3 from "@/app/assets/images/cheeseSponsored3.png"
import styles from "@/app/slider.module.css"

export function Milk () {
  return (
    <section>
      <SectionHeading name="Lácteos" />
      <div className={`grid grid-flow-col scroll-auto
          gap-[1.2rem] overflow-y-auto overscroll-x-contain
          snap-mandatory my-4 ${styles.slider}`}>
        <ProductCard 
          name="Queso de vaca y oveja"
          image={cheeseSponsored}
          origin="Los Navalucillos"
        />
        <ProductCard 
          name="Queso curado de vaca"
          image={cheeseSponsored2}
          origin="Los Navalucillos"
        />
        <ProductCard 
          name="Queso de vaca con hierbas aromáticas"
          image={cheeseSponsored3}
          origin="Los Navalucillos"
        />
      </div>
    </section>
  )
}