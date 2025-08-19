import { Suspense } from "react"
import EmailVerificationPage from "./email-verification-page"

export default function Page() {
  return (
    <Suspense>
      <EmailVerificationPage />
    </Suspense>
  )
}
