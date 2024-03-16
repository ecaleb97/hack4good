import { Search } from "@/components/search/search";
import { Header } from "@/components/header/header";
import Image from "next/image";
import map from "@/app/assets/images/map.webp"
import { Footer } from "@/components/footer/footer";
import { Huerto } from "@/components/huerto/huerto";
import { Foryou } from "@/components/foryou/for-you";
import { Milk } from "@/components/milk/milk";

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
        <Foryou />
        <Huerto />
        <Milk />
      </main>
      <Footer />
    </>
  );
}
