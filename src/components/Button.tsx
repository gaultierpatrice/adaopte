// import type { ButtonProps } from "../types/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonSize = "sm" | "md" | "lg" | "xl";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--btn-primary-bg)] text-[var(--primary-color)] hover:bg-[var(--btn-primary-hover-bg)]",
  secondary:
    "bg-[var(--btn-secondary-bg)] text-[var(--primary-color)] hover:bg-[var(--btn-secondary-hover-bg)]",
  accent: "bg-[var(--btn-accent-bg)] text-[var(--primary-color)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm shadow-[var(--shadow-sm)]",
  md: "px-4 py-2 text-base shadow-[var(--shadow-md)]",
  lg: "px-5 py-3 text-lg shadow-[var(--shadow-lg)]",
  xl: "px-6 py-4 text-xl shadow-[var(--shadow-xl)]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "focus:outline-2",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-3xl font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
}
