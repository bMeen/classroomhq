function FormInput({
  children,
  id,
  label,
  error,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
  error?: string;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div>
        {children}
        {error && (
          <span className="mt-0.5 block text-sm text-red-500">{error}</span>
        )}
      </div>
    </>
  );
}

export default FormInput;
