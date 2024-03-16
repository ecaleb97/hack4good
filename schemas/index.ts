import { z } from "zod";

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
