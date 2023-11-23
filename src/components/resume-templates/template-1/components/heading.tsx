import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Heading({
  children,
  bottomLine = false,
  mb = 5,
  className,
}: {
  children: ReactNode;
  bottomLine?: boolean;
  mb?: number;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[calc(var(--WIDTHPERCENTAGE)*14)] font-extrabold uppercase text-[rgb(var(--ACCENT-COLOR))]",
        bottomLine && "relative pl-[calc(var(--WIDTHPERCENTAGE)*9)]",
        className,
      )}
      style={{
        marginBottom: `calc(var(--WIDTHPERCENTAGE)*${mb})`,
      }}
    >
      {children}
      {bottomLine && (
        <span className="absolute left-0 top-[105%] block h-[calc(var(--WIDTHPERCENTAGE)*1.1)] w-full bg-[rgb(var(--ACCENT-COLOR))]" />
      )}
    </h2>
  );
}
