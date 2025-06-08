import { motion } from "motion/react";

type ButtonType =
  | "default"
  | "success"
  | "danger"
  | "outline"
  | "action"
  | "pagination";

type ButtonProps = {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const base = "flex py-2 px-4 text-sm font-medium items-center gap-2";

const styles = {
  default:
    base +
    " bg-primary rounded-md text-text-primary border-[1px] border-primary hover:bg-transparent hover:text-primary",
  success:
    base +
    " bg-color-present rounded-md text-white border-[1px] border-color-present hover:bg-transparent hover:text-color-present",
  danger:
    base +
    " bg-color-absent rounded-md text-white border-[1px] border-color-absent hover:bg-transparent hover:text-color-absent",
  outline:
    base +
    " border-[1px] text-primary-hover border-slate-50 rounded-md bg-slate-50",
  action: base + "  rounded border-none px-2 py-1 text-sm text-white",
  pagination:
    "py-2 flex items-center gap-1 px-3 text-sm border-[1px] text-primary border-slate-50 rounded-md bg-slate-100 hover:bg-transparent hover:border-primary disabled:cursor-not-allowed disabled:hover:border-transparent",
};

function Button({
  type = "default",
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <motion.button
      transition={{ type: "tween", duration: 0.2 }}
      whileTap={{ scale: 0.85 }}
      className={`${styles[type]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export default Button;

//
