type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button
      className={`rounded border-none px-2 py-1 text-sm text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
