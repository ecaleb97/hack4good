"use server"

import { currentRole } from "@/lib/auth"
import { UserRole } from "@prisma/client"

export async function admin () {
  const role = await currentRole()

  if (role !== UserRole.ADMIN) {
    return {
      error: "Forbidden Server Action!"
    }
  }

  return { success: "Allowed Server Action!"}
}