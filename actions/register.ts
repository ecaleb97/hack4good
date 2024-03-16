'use server'

import { z } from 'zod'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/data/tokens'
import { sendVerificationEmail } from '@/lib/mail'

export async function register (values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: "Invalid fields"
    }
  }

  const { email, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already exists" }
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    }
  })

  const verificationToken = await generateVerificationToken(email)

  /* // TODO: Send verification token email */
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: "Verification email sent" }
}