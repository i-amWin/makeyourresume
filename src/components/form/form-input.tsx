import { useId } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/utils/cn";
import { memo } from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

export const TextInput = ({
  label,
  placeholder,
  value,
  setValue,
  className,
}: FormInputProps) => {
  const id = useId();

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
};

export const MemoizedTextInput = memo(TextInput);
