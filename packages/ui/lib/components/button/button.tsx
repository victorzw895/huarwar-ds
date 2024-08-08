import * as styles from "./button.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style"
> &
  styles.ButtonVariants & {
    children: ReactNode;
    disabled?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
  };

export const Button = ({
  children,
  style = "fill",
  disabled = false,
  size = "large",
  color = "primary",
  ...other
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type="button"
      {...other}
      className={styles.button({
        style,
        color,
        size,
      })}
    >
      {children}
    </button>
  );
};
