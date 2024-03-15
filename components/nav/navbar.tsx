import { IconHome } from "@/components/icons/icon-home";
import { IconCart } from "@/components/icons/icon-cart"
import { IconUser } from "@/components/icons/icon-user";
import { IconWallet } from "@/components/icons/icon-wallet";
import Link from "next/link";

export function Navbar () {
  return (
    <nav className="py-2 flex gap-x-12 justify-evenly">
      <Link href="/">
        <IconHome />  
      </Link>  
      <Link href="/">
        <IconWallet />
      </Link>
      <Link href="/">
        <IconCart />
      </Link>
      <Link href="/">
        <IconUser />
      </Link>
    </nav>
  )
}