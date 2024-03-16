import { NewPasswordForm } from "@/components/auth/new-password-form"
import { Suspense } from "react"

export default function NewPasswordPage () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewPasswordForm />
    </Suspense>
  )
}