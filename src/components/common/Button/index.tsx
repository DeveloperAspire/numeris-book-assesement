import * as React from "react";
import { cn } from "@/lib/utils";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  variant: "primary" | "outline" | "borderless";
  textColor?: string;
}

const Button: React.FC<IButton> = React.forwardRef<HTMLButtonElement, IButton>(
  ({ className, variant, label, textColor = "text-white", ...props }, ref) => {
    const variantClass = {
      primary: "bg-[#003EFF] text-white",
      outline: "bg-white text-[#697598] border border-[##E3E6EF]",
      borderless:
        "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white",
    };
    return (
      <button
        className={cn([
          variantClass[variant],
          className,
          "h-[60px] w-full rounded-full",
        ])}
        ref={ref}
        {...props}
      >
        <p
          className="uppercase font-semibold tracking-wider text-[12px]"
          style={{ color: textColor }}
        >
          {label}
        </p>
      </button>
    );
  }
);

export default Button;
