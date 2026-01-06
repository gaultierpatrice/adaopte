import type { ButtonProps } from "../types/types";

export default function Button({ children }: ButtonProps) {
  return <button className="p-1 border rounded-4xl">{children}</button>;
}
