import { Eye, EyeOff } from "lucide-react";

function PasswordVisible({
  show,
  onclick,
}: {
  show: boolean;
  onclick: () => void;
}) {
  return (
    <span
      onClick={onclick}
      className="absolute right-2 top-2/3 -translate-y-2/3 cursor-pointer text-slate-500"
    >
      {show ? <EyeOff size={22} /> : <Eye size={22} />}
    </span>
  );
}

export default PasswordVisible;
