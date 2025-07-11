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
  field,
  onKeyDown,
}: IRenderInput) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <Label htmlFor={field}>{label}</Label>
      <Input
        type={type}
        id={field}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        {...register(field, {
          onKeyDown,
        })}
      />
      {isError && (
        <span className="text-[13px] text-red-500 absolute bottom-[-22px]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
