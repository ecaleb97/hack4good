import { IconBack } from "@/components/icons/icon-back"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookmarkIcon } from "@/components/icons/icon-bookmark"

interface RouteProps {
  children: React.ReactNode
}

export default function RouteLayout ({ children }: RouteProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <Link href="/menu">
          <IconBack />
        </Link>
        <Button className="bg-white text-black outline-none
        flex items-center gap-2" variant={"ghost"}>
          Guardar
          <BookmarkIcon />
        </Button>
      </div>
      <main className="">
        {children}
      </main>
    </div>
  )
}