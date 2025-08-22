"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ICourse } from "@/utils/interfaces/course"

export const columns: ColumnDef<ICourse>[] = [
  {
    accessorKey: "title",
    header: "Curso",
  },
  {
    accessorFn: (row) => row.authorUser?.fullName,
    id: "instructor",
    header: "Instrutor",
    cell: ({ row }) => {
      const instructor = row.getValue("instructor") as string
      return <span>{instructor.split(" ")[0]+" "+instructor.split(" ")[instructor.split(" ").length-1] || "Desconhecido"}</span>
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ICourse[""]
      return (
        <Badge
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      const price = Number(row.getValue("price"))
      return <span>Kz {price.toLocaleString("pt-AO")}</span>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      return <span>{date.toLocaleDateString("pt-PT")}</span>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
            >
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log("Editar", course.id)}>
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Arquivar", course.id)}>
              Arquivar
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }

]
