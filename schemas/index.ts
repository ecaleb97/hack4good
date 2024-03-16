import { UserRole } from "@prisma/client";
import { z } from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(8)),
  newPassword: z.optional(z.string().min(8)),
})
  .refine(data => {
    if (data.password && !data.newPassword) {
      return false
    }

    return true
  }, {
    message: "New password is required",
    path: ["newPassword"],
  })
  .refine(data => {
    if (data.newPassword && !data.password) {
      return false
    }

    return true
  }, {
    message: "Password is required",
    path: ["password"],
  })

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  }).max(100),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  }).max(100),
  name: z.string().min(1, {
    message: "Name is required"
  })
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  })
});

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  }).max(100),
});