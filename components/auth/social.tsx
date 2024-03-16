'use client'

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export function Social () {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button 
        variant="outline" 
        size="lg"
        className="w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className="w-full"
        onClick={() => onClick("github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  )
}