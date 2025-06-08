import { useParams } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";
import { useStudentsContext } from "../../context/StudentContext";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types";
import { motion } from "motion/react";

function Details() {
  const {
    state: { mockStudents },
  } = useStudentsContext();
  const { id } = useParams();
  const currentStudent = mockStudents.find((student) => student.id === id);

  const defaultValues = {
    fullName: currentStudent?.fullName,
    dateOfBirth: currentStudent?.dateOfBirth,
    gender: currentStudent?.gender,
    address: currentStudent?.address,
    guardianName: currentStudent?.guardianName,
    guardianEmail: currentStudent?.guardianEmail,
    guardianPhone: currentStudent?.guardianPhone,
  };

  const { register } = useForm<FormValues>({
    defaultValues,
  });

  if (!currentStudent) return <p>Student Id not available</p>;

  return (
    <form>
      <motion.div
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg space-y-5"
      >
        <FormRow>
          <FormInput id="fullName" label="Full Name">
            <input
              type="text"
              id="fullName"
              className="cursor-not-allowed"
              {...register("fullName")}
              disabled
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="date-of-birth" label="Date of Birth">
            <input
              type="text"
              id="date-of-birth"
              className="cursor-not-allowed"
              {...register("dateOfBirth")}
              disabled
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="gender" label="Gender">
            <input
              type="text"
              id="gender"
              {...register("gender", {
                setValueAs: (value) => (value ? value.toLowerCase() : value),
              })}
              disabled
              className="cursor-not-allowed capitalize"
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="address" label="Address">
            <input
              type="text"
              id="address"
              {...register("address")}
              disabled
              className="cursor-not-allowed"
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="guardian-name" label="Guardian / Parent">
            <input
              type="text"
              id="guardian-name"
              className="cursor-not-allowed"
              {...register("guardianName")}
              disabled
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="guardian-email" label="Email">
            <input
              type="text"
              id="guardian-email"
              className="cursor-not-allowed"
              {...register("guardianEmail")}
              disabled
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="guardian-phone" label="Phone Number">
            <input
              type="text"
              id="guardian-phone"
              className="cursor-not-allowed"
              {...register("guardianPhone")}
              disabled
            />
          </FormInput>
        </FormRow>
      </motion.div>
    </form>
  );
}

export default Details;

/* 
    fullName: "Chinedu Nwachukwu",
    dateOfBirth: "2012-06-17",
    gender: "male",
    address: "12 Ajose Adeogun Street, Lagos",
    guardianName: "Ada Nwachukwu",
    guardianEmail: "mollygray@carter.com",
    guardianPhone: "+2347824511357",

*/
