function FormRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid items-center gap-1 md:grid-cols-2 md:gap-0">
      {children}
    </div>
  );
}

export default FormRow;
