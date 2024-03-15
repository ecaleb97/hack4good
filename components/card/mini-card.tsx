import { Button } from "@/components/ui/button"
import { raleway } from "@/components/ui/fonts"
import Link from "next/link"

interface MiniCardProps {
  message: string
}

export function MiniCard ({ message }: MiniCardProps) {
  return (
    <Button asChild className={`bg-[#ABAF5E]
    rounded-xl text-[#fefefe] ${raleway.className}
    font-semibold px-4 py-5`}>
      <Link href="/my-route">
        {message}
      </Link>
    </Button>
  )
}