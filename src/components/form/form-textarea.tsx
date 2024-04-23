import { memo, useId } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { cn } from "@/utils/cn";

interface FormTextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
  rows?: number;
}

export const FormTextArea = ({
  label,
  placeholder,
  value,
  setValue,
  className,
  rows = 9,
}: FormTextAreaProps) => {
  const id = useId();

  return (
    <div className={cn("space-y-1", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="resize-none"
      />
    </div>
  );
};

export const MemoizedTextArea = memo(FormTextArea);
