import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-105",
        variant === "primary"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "border border-sky-300 bg-white text-slate-700 hover:bg-sky-50",
        className
      )}
    >
      {children}
    </button>
  );
}