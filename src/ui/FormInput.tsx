function FormInput({
  children,
  id,
  label,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {children}
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
