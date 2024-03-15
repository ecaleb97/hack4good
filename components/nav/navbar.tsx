import { IconHome } from "@/components/icons/icon-home";
import { IconCart } from "@/components/icons/icon-cart"
import { IconUser } from "@/components/icons/icon-user";
import { FavoriteIcon } from "@/components/icons/icon-favorite";
import Link from "next/link";

export function Navbar () {
  return (
    <nav className="py-2 flex gap-x-12 justify-evenly">
      <Link href="/">
        <IconHome />  
      </Link>  
      <Link href="/create-route">
        <FavoriteIcon />
      </Link>
      <Link href="/my-route">
        <IconCart />
      </Link>
      <Link href="/login">
        <IconUser />
      </Link>
    </nav>
  )
}