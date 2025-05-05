"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FieldConfig = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

type ReusableFormProps<T extends z.ZodTypeAny> = {
  schema: T;
  fields: FieldConfig[];
  onSubmit: (data: z.infer<T>) => void;
  submitLabel: string;
  isSubmitting?: boolean;
  footer?: React.ReactNode;
};

export function ReusableForm<T extends z.ZodTypeAny>({
  schema,
  fields,
  onSubmit,
  submitLabel,
  isSubmitting,
  footer,
}: ReusableFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full">
      {fields.map(({ name, label, type = "text", placeholder }) => (
        <div key={name} className="flex flex-col gap-2">
          <Label htmlFor={name}>{label}</Label>
          <Input
            id={name}
            type={type}
            placeholder={placeholder || label}
            {...register(name as any)}
            className="h-10"
          />
          {errors[name] && (
            <p className="text-sm text-red-500">{(errors[name]?.message as string) || "Campo inválido"}</p>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : submitLabel}
      </Button>

      {footer}
    </form>
  );
}
