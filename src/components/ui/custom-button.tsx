
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-aram-gold text-aram-navy hover:bg-amber-400": variant === "primary",
            "bg-aram-navy text-white hover:bg-aram-navy/90": variant === "secondary",
            "border-2 border-aram-gold text-aram-navy dark:text-white hover:bg-aram-gold/10": variant === "outline",
            "text-aram-navy dark:text-white hover:bg-aram-beige dark:hover:bg-aram-navy/50": variant === "ghost",
            "text-aram-gold underline hover:no-underline": variant === "link",
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
