import React, { Fragment } from "react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../ui/select";

import { socialNames } from "@/lib/data";
import { capitalize } from "@/utils/capitalize";
import { cn } from "@/utils/cn";
import { Label } from "../ui/label";

type FromSelectProps = {
  label: string;
  placeholder: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
  className?: string;
};

export default function FormSelect({
  label,
  placeholder,
  defaultValue,
  onValueChange,
  className,
}: FromSelectProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <Label>{label}</Label>
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {socialNames.map((socialName) => (
            <Fragment key={socialName}>
              <SelectItem value={socialName}>
                {capitalize(socialName)}
              </SelectItem>
            </Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
