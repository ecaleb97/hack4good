import { Search } from "@/components/search/search";
import { Header } from "@/components/header/header";
import Image from "next/image";
import map from "@/app/assets/images/map.webp"
import { Footer } from "@/components/footer/footer";
import { Huerto } from "@/components/huerto/huerto";
import { Foryou } from "@/components/foryou/for-you";
import { Milk } from "@/components/milk/milk";
import MapComponent from "@/components/map/Map";
import { Meat } from "@/components/meat/meat";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <main className="p-6">
        <div className="w-full mb-6">
          <Search />
        </div>
        {/* <Image 
          src={map} 
          alt="Map" 
          width={500} 
          height={250}
          priority
          className="my-6"
        /> */}
        {/* <div className="my-6">
          <MapComponent />
        </div> */}
        <Foryou />
        <Huerto />
        <Meat />
        <Milk />
      </main>
      <Footer />
    </div>
  );
}
