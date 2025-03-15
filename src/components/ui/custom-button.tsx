
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  withIcon?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withIcon = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-aram-gold text-aram-navy hover:bg-amber-400 shadow-lg hover:shadow-amber-300/30": 
              variant === "primary",
            "bg-aram-navy text-white hover:bg-aram-navy/90 shadow-lg hover:shadow-aram-navy/30": 
              variant === "secondary",
            "border-2 border-aram-gold text-aram-navy dark:text-white hover:bg-aram-gold/10 hover:shadow-lg": 
              variant === "outline",
            "text-aram-navy dark:text-white hover:bg-aram-beige dark:hover:bg-aram-navy/50": 
              variant === "ghost",
            "text-aram-gold underline hover:no-underline": 
              variant === "link",
            "bg-gradient-to-r from-amber-500 to-aram-gold text-aram-navy shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5": 
              variant === "gradient",
            "text-sm px-4 py-2": 
              size === "sm",
            "text-base px-6 py-3": 
              size === "md",
            "text-lg px-8 py-4": 
              size === "lg",
            "text-xl px-10 py-5 font-bold": 
              size === "xl",
            "gap-2": 
              withIcon,
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
