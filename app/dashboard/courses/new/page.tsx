"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { CourseFormValues, courseSchema } from "@/schemas/course-schema"
import { useAuth } from "@/context/auth-context"
import { CourseForm } from "./course-form"

export default function NewCoursePage() {
  const router = useRouter()
  const { user } = useAuth()

const form = useForm<z.infer<typeof courseSchema>>({
  resolver: zodResolver(courseSchema),
  defaultValues: {
    title: "",
    description: "",
    price: 0,
    duration: 0,
    type: "PAID",
    level: "BEGINNER",
    category: "WEB_DEVELOPMENT",
    discount: 0,
    guarantee: 0,
    author: "www", // pega do usuário logado (não precisa input)
  },
})


  const onSubmit = async (values: CourseFormValues) => {
    console.log("Novo curso:", values)
    // Exemplo: await API.post("/courses", values)
    router.push("/dashboard/courses")
  }

  return (
    <div className="bg-white w-full h-full px-20 py-6">
      <h1 className="text-2xl font-bold">Novo Curso</h1>
      <CourseForm />
    </div>
  )
}
