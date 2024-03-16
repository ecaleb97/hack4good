'use server'

import { NewPasswordSchema } from "@/schemas"
import { z } from "zod"
import { getResetPasswordToken } from "@/data/reset-password-token"
import { getUserByEmail } from "@/data/user"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"

export async function newPassword (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) {
  if (!token) {
    return {
      error: "Missing token"
    }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!"
    }
  }

  const { password } = validatedFields.data

  const existingToken = await getResetPasswordToken(token)

  if (!existingToken) {
    return { error: "Invalid token" }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: "Token has expired" }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: "Email does not exist" }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword }
  })

  await db.resetPasswordToken.delete({
    where: { id: existingToken.id }
  })

  return { success: "Password updated!" }
}