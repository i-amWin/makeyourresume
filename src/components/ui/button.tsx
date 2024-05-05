import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "font-medium rounded-lg focus:outline-none focus:ring-4 inline-block transition-colors",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-primary hover:bg-primary-dark focus:ring-primary/30",
        secondary:
          "text-secondary-foreground bg-secondary hover:bg-secondary-dark focus:ring-secondary/30",
        accent:
          "text-accent-foreground bg-accent hover:bg-accent-dark focus:ring-accent/30",
        outline:
          "text-gray-900 bg-transparent hover:bg-gray-100 outline outline-1 outline-gray-300 focus:ring-gray-300/40",
        destructive:
          "text-destructive-foreground bg-destructive hover:bg-destructive-dark focus:ring-destructive/30",
        link: "text-primary underline-offset-4 hover:underline focus:underline",
      },
      size: {
        default: "px-5 py-2.5 text-sm",
        sm: "px-3 py-2 text-xs",
        lg: "px-5 py-3 text-base",
        xl: "px-6 py-3.5 text-base",
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
