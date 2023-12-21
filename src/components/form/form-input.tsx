import { useId } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/utils/cn";

interface FormInputProps {
  label: string;
  placeholder: string;
  useValue: () => string;
  useSetValue: () => (value: string) => void;
  className?: string;
}

export default function FormInput({
  label,
  placeholder,
  useValue,
  useSetValue,
  className,
}: FormInputProps) {
  const id = useId();

  const value = useValue();
  const setValue = useSetValue();

  return (
    <div className={cn("space-y-1", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
