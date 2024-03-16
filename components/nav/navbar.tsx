import { IconHome } from "@/components/icons/icon-home";
import { IconCart } from "@/components/icons/icon-cart"
import { IconUser } from "@/components/icons/icon-user";
import { RouteIcon } from "../icons/icon-route";
import { FavoriteIcon } from "@/components/icons/icon-favorite";
import Link from "next/link";

export function Navbar () {
  return (
    <nav className="py-2 flex gap-x-12 justify-evenly">
      <Link href="/menu">
        <IconHome />  
      </Link>  
      <Link href="/create-route">
        <FavoriteIcon />
      </Link>
      <Link href="/my-route">
        <RouteIcon />
      </Link>
      <Link href="/auth/register">
        <IconUser />
      </Link>
    </nav>
  )
}