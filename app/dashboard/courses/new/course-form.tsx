"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { courseSchema } from "@/schemas/course-schema"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

// Tipagem inferida do schema
type CourseFormValues = z.infer<typeof courseSchema>

export function CourseForm() {
  const form = useForm<CourseFormValues>({
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
      author: "current-user-id", // substitui pelo id do user logado
    },
  })

  const onSubmit = (values: CourseFormValues) => {
    console.log("🚀 Enviando curso:", values)
    // Aqui você chama sua API (POST /courses)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Título */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Digite o título do curso" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Descrição */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="Descreva o curso..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tipo (FREE ou PAID) */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="FREE">Gratuito</SelectItem>
                  <SelectItem value="PAID">Pago</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Preço */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço (Kz)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ex: 15000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Duração */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duração (horas)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ex: 40" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nível */}
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nível</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BEGINNER">Iniciante</SelectItem>
                  <SelectItem value="INTERMEDIATE">Intermediário</SelectItem>
                  <SelectItem value="ADVANCED">Avançado</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Categoria */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="WEB_DEVELOPMENT">Web Development</SelectItem>
                  <SelectItem value="MOBILE_DEVELOPMENT">Mobile</SelectItem>
                  <SelectItem value="DATA_SCIENCE">Data Science</SelectItem>
                  <SelectItem value="DEVOPS">DevOps</SelectItem>
                  <SelectItem value="GAME_DEVELOPMENT">Game Development</SelectItem>
                  <SelectItem value="SECURITY">Security</SelectItem>
                  <SelectItem value="SOFT_SKILLS">Soft Skills</SelectItem>
                  <SelectItem value="PROGRAMMING_LOGIC">Programming Logic</SelectItem>
                  <SelectItem value="CLOUD">Cloud</SelectItem>
                  <SelectItem value="TESTING">Testing</SelectItem>
                  <SelectItem value="AI_ML">AI / ML</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Discount */}
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desconto (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ex: 10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Guarantee */}
        <FormField
          control={form.control}
          name="guarantee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Garantia (dias)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ex: 7" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botão */}
        <Button type="submit" className="w-full">
          Criar Curso
        </Button>
      </form>
    </Form>
  )
}
