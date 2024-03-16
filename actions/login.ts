/* 'use server'

import { z } from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { 
  generateVerificationToken,
  generateTwoFactorToken
} from '@/data/tokens'
import { getUserByEmail } from '@/data/user'
import { 
  sendVerificationEmail,
  sendTwoFactorEmail
} from '@/lib/mail'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'
import { db } from '@/lib/db'

export async function login (values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values)
  
  if (!validatedFields.success) {
    return {
      error: "Invalid fields"
    }
  }

  const { email, password, code } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist"}
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: "Verification email sent!" }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)

      if (!twoFactorToken) {
        return { error: "Invalid code" }
      }

      if (twoFactorToken.token !== code) {
        return { error: "Invalid code" }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return { error: "Code expired!" }
      }

      await db.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id
        }
      })

      const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

      if (twoFactorConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id
          }
        })
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id
        }
      })

    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token)

      return { twoFactor: true }
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case "CredentialsSignin":
        return { error: "Invalid credentials" }
      default:
        return { error: "Something went wrong" }
      }
    }
    throw error
  }

  return { success: "Logged in!" }
} */