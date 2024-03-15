import { raleway } from "../ui/fonts"

export function Header () {
  return (
    <header 
      className="pt-10 px-6 flex justify-between
      items-center"
    >
      <h1 
        className={`font-bold ${raleway.className} text-xl
        text-[#424b54]`}
      >
        Hola, Lily
      </h1>
      <div 
        className="rounded-full size-8 bg-slate-500" 
      />
    </header>
  )
}