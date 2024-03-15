import { Search } from "@/components/search/search";
import { Header } from "@/components/header/header";
import Image from "next/image";
import map from "@/app/assets/images/map.webp"
import { SectionHeading } from "@/components/header/section-heading";
import styles from "@/app/slider.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <div className="w-full">
          <Search />
        </div>
        <Image 
          src={map} 
          alt="Map" 
          width={500} 
          height={250}
          priority
          className="my-6"
        />
        <section className="">
          <SectionHeading name="Recomendaciones para ti" />
          <div className={`grid grid-flow-col scroll-auto
          gap-[1.2rem] overflow-y-auto overscroll-x-contain
          snap-mandatory my-4 ${styles.slider}`}>
            <article className="w-[130px] min-h-[150px] 
          bg-slate-300 rounded-xl">
              <Image src={map} alt="Map" width={180} height={20} priority />
              <div className="p-2">
                <p>Aceite de oliva ecologico</p>
                <small>Titulcia</small>
              </div>
            </article>
            <article className="w-[130px] min-h-[150px] 
          bg-slate-300 rounded-xl">
              <Image src={map} alt="Map" width={180} height={20} priority />
              <div className="p-2">
                <p>Aceite de oliva ecologico</p>
                <small>Titulcia</small>
              </div>
            </article>
            <article className="w-[130px] min-h-[150px] 
          bg-slate-300 rounded-xl">
              <Image src={map} alt="Map" width={180} height={20} priority />
              <div className="p-2">
                <p>Aceite de oliva ecologico</p>
                <small>Titulcia</small>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
