import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "relative isolate inline-flex -translate-y-1 translate-x-1 items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-transform before:absolute before:inset-0 before:-z-20 before:-translate-x-1 before:translate-y-1 before:rounded-md before:bg-muted before:transition-[transform,background-color] after:absolute after:inset-0 after:-z-10 after:rounded-md focus-visible:outline-none active:-translate-y-0 active:translate-x-0 before:active:translate-x-0 before:active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground after:bg-primary hover:after:bg-primary-dark focus-visible:after:bg-primary-dark",
        destructive:
          "text-destructive-foreground after:bg-destructive hover:after:bg-destructive-dark focus-visible:after:bg-destructive-dark",
        outline:
          "border after:bg-white hover:after:bg-gray-100 focus-visible:after:bg-gray-100",
        secondary:
          "text-secondary-foreground after:bg-secondary hover:after:bg-secondary-dark focus-visible:after:bg-secondary-dark",
        accent:
          "text-accent-foreground after:bg-accent hover:after:bg-accent-dark focus-visible:after:bg-accent-dark",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
      },
      size: {
        default: "px-6 py-3 text-[0.875rem]",
        sm: "rounded-md px-4 py-2 text-sm",
        lg: "rounded-md px-8 py-3",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
