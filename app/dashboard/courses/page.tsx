"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { useGetCourse } from "@/hooks/use-get-course"
import { ICourse } from "@/utils/interfaces/course"
import Link from "next/link"


export default function CoursesPage() {
  const { data } = useGetCourse({ limit: "10", page: "1" })

  return (
    <div className="p-6 space-y-6 bg-white min-h-svh">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cursos</h1>
        <Button>
          <Link href="/dashboard/courses/new">Adicionar Curso</Link>
        </Button>
      </div>

      {/* DataTable */}
      {/* <DataTable columns={columns} data={data?.courses || []} />
       */}
      {!data ? (
        <p>Carregando...</p>
      ) : (
        <DataTable columns={columns} data={data?.courses || []} />
      )}
    </div>
  )
}
