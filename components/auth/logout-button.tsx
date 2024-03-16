'use client'

import { logout } from "@/actions/logout"

interface LogoutButtonProps {
  children: React.ReactNode
}

export function LogoutButton ({ children }: LogoutButtonProps) {
  const onLogout = () => {
    logout()
  }

  return (
    <span onClick={onLogout}>
      {children}
    </span>
  )
}