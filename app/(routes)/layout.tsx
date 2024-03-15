import { IconBack } from "@/components/icons/icon-back"
import Link from "next/link"

interface RouteProps {
  children: React.ReactNode
}

export default function RouteLayout ({ children }: RouteProps) {
  return (
    <div className="p-6">
      <Link href="/">
        <IconBack />
      </Link>
      <main className="">
        {children}
      </main>
    </div>
  )
}