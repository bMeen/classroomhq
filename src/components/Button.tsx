type ButtonType = "default" | "success" | "danger" | "outline";

type ButtonProps = {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const base = "flex rounded-xl py-2 px-4 text-sm font-medium items-center gap-2";

const styles = {
  default:
    base +
    " bg-black text-white border-[1px] border-black hover:bg-slate-50 hover:text-black",
  success:
    base +
    " bg-green-500 text-white :border-[1px] :border-green-500 hover:bg-slate-50 hover:text-green-500",
  danger:
    base +
    " bg-red-500 text-white border-[1px] border-red-500 hover:bg-slate-50 hover:text-red-500",
  outline: base + " border-[1px] text-slate-500 border-slate-50  bg-slate-50",
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
