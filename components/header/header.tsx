import { raleway } from "@/components/ui/fonts"
import { NotificationIcon } from "@/components/icons/icon-notification"

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
        Hola, Pedro
      </h1>
      <div 
        className="flex items-center justify-center" 
      >
        <NotificationIcon />
      </div>
    </header>
  )
}