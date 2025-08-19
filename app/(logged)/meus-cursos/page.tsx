import { Suspense } from "react"
import StudentCoursesPage from "./student-courses-page"

export default function Page() {
  return (
    <Suspense>
      <StudentCoursesPage />
    </Suspense>
  )
}
