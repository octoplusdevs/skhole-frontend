"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodTypeAny } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type AuthFormProps<T extends ZodTypeAny> = {
  title: string;
  fields: {
    name: keyof z.infer<T>;
    label: string;
    type?: string;
    placeholder?: string;
  }[];
  schema: T;
  onSubmit: (data: z.infer<T>) => Promise<void> | void;
  submitLabel: string;
  isSubmitting?: boolean;
  footer?: React.ReactNode;
};

export function AuthForm<T extends ZodTypeAny>({
  title,
  fields,
  schema,
  onSubmit,
  submitLabel,
  isSubmitting,
  footer,
}: AuthFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isFormSubmitting },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: z.infer<T>) => {
    try {
      await onSubmit(data);
      toast.success("Ação realizada com sucesso");
    } catch (err) {
      toast.error("Erro ao enviar o formulário");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full"
    >
      <h1 className="text-2xl font-bold">{title}</h1>

      {fields.map((field) => (
        <div key={field.name as string} className="flex flex-col gap-2">
          <Label htmlFor={field.name as string}>{field.label}</Label>
          <Input
            type={field.type || "text"}
            id={field.name as string}
            placeholder={field.placeholder}
            {...register(field.name as any)}
            className="h-10"
          />
          {errors[field.name] && (
            <span className="text-sm text-red-500">
              {errors[field.name]?.message?.toString()}
            </span>
          )}
        </div>
      ))}

      <Button
        type="submit"
        className="w-full h-10"
        disabled={isFormSubmitting || isSubmitting}
      >
        {isFormSubmitting || isSubmitting ? "Enviando..." : submitLabel}
      </Button>

      {footer}
    </form>
  );
}
