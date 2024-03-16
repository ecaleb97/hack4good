import { raleway } from "@/components/ui/fonts"
import { NotificationIcon } from "@/components/icons/icon-notification"
/* import { currentUser } from "@/lib/auth" */

export async function Header () {
  /* const user = await currentUser() */
  return (
    <header 
      className="pt-10 px-6 flex justify-between
      items-center"
    >
      <h1 
        className={`font-bold ${raleway.className} text-xl
        text-[#424b54]`}
      >
        Hola, Caleb
      </h1>
      <div 
        className="flex items-center justify-center" 
      >
        <NotificationIcon />
      </div>
    </header>
  )
}