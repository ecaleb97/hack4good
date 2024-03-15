import { Search } from "@/components/search/search";
import { Header } from "@/components/header/header";
import Image from "next/image";
import map from "@/app/assets/images/map.webp"
import { SectionHeading } from "@/components/header/section-heading";
import { Navbar } from "@/components/nav/navbar";

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
        <section>
          <SectionHeading name="Recomendaciones para ti" />
        </section>
      </main>
      <footer 
        className="fixed bottom-4 p-2 bg-green-800 left-6 right-6 
        rounded-xl shadow-xl text-white"
      >
        <Navbar />
      </footer>
    </>
  );
}
