import { Label } from "@/components/ui/label";
import { IRenderInput } from "./interface";
import { Input } from "@/components/ui/input";

export const RenderInput = ({
  errorMessage,
  isError,
  label,
  placeholder,
  type,
  register,
}: IRenderInput) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <Label htmlFor={type}>{label}</Label>
      <Input
        type={type}
        id={type}
        placeholder={placeholder}
        {...register(type)}
      />
      {isError && (
        <span className="text-[13px] text-red-500 absolute bottom-[-22px]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
