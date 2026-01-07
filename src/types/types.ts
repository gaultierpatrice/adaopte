export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export type ButtonVariant = "primary" | "secondary" | "accent";

export type ButtonSize = "sm" | "md" | "lg";
