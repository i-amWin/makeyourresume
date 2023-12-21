import { cn } from "@/utils/cn";
import React, { ComponentPropsWithoutRef } from "react";

type SectionHeadingProps = ComponentPropsWithoutRef<"h2">;

export default function SectionHeading({
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <h2 className={cn("border-b text-2xl font-bold", className)} {...props} />
  );
}
