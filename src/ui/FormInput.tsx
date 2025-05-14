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
        {error && <span className="mt-0.5 text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
}

export default FormInput;

/* 
    fullName: "Chinedu Nwachukwu",
    dateOfBirth: "2012-06-17",
    gender: "male",
    address: "12 Ajose Adeogun Street, Lagos",
    guardianName: "Ada Nwachukwu",
    guardianEmail: "mollygray@carter.com",
    guardianPhone: "+2347824511357",

*/
