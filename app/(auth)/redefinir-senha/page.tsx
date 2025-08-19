import { Suspense } from "react"
import ResetPasswordForm from "./reset-password"

export default function Page() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  )
}
