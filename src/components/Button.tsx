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
  onClick?: () => void;
};

const base = "flex py-2 px-4 text-sm font-medium items-center gap-2";

const styles = {
  default:
    base +
    " bg-black rounded-md text-white border-[1px] border-black hover:bg-slate-50 hover:text-black",
  success:
    base +
    " bg-green-500 rounded-md text-white :border-[1px] :border-green-500 hover:bg-slate-50 hover:text-green-500",
  danger:
    base +
    " bg-red-500 rounded-md text-white border-[1px] border-red-500 hover:bg-slate-50 hover:text-red-500",
  outline:
    base +
    " border-[1px] text-slate-500 border-slate-50 rounded-md bg-slate-50",
  action: base + "  rounded border-none px-2 py-1 text-sm text-white",
  pagination:
    "py-2 flex items-center gap-1 px-3 text-sm border-[1px] text-slate-900 border-slate-50 rounded-md bg-slate-100 hover:border-slate-500 disabled:cursor-not-allowed disabled:hover:border-white",
};

function Button({
  type = "default",
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles[type]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

//
