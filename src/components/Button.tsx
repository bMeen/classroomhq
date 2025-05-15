type ButtonType = "default" | "success" | "danger" | "outline" | "action";

type ButtonProps = {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const base = "flex py-2 px-4 text-sm font-medium items-center gap-2";

const styles = {
  default:
    base +
    " bg-black rounded-xl text-white border-[1px] border-black hover:bg-slate-50 hover:text-black",
  success:
    base +
    " bg-green-500 rounded-xl text-white :border-[1px] :border-green-500 hover:bg-slate-50 hover:text-green-500",
  danger:
    base +
    " bg-red-500 rounded-xl text-white border-[1px] border-red-500 hover:bg-slate-50 hover:text-red-500",
  outline:
    base +
    " border-[1px] text-slate-500 border-slate-50 rounded-xl bg-slate-50",
  action: base + "  rounded border-none px-2 py-1 text-sm text-white",
};

function Button({
  type = "default",
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button className={`${styles[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

//
