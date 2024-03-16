"use server"

import { ForgotPasswordSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { z } from "zod"
import { generateResetPasswordToken } from "@/data/tokens"
import { sendResetPasswordEmail } from "@/lib/mail"

export async function resetPassword (values: z.infer<typeof ForgotPasswordSchema>) {
  const validatedFields = ForgotPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid fields"
    }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: "Email does not exist"}
  }

  const passwordResetToken = await generateResetPasswordToken(email)

  await sendResetPasswordEmail(passwordResetToken.email, passwordResetToken.token)

  return { success: "Reset email sent!" }
}