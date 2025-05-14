import { useForm } from "react-hook-form";
import { FormValues, GradeScores, schema, Status } from "../../types";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStudentsContext } from "../../context/StudentContext";
import { generateStudentId } from "../../lib/utils";

function StudentForm({
  onCloseModal,
}: {
  id?: string;
  onCloseModal?: () => void;
}) {
  const { state, dispatch } = useStudentsContext();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const id = generateStudentId(state.mockStudents);
    const status = "present" as Status;
    const attendance = { present: 0, late: 0, absent: 0 };
    const subjects = Object.keys(state.mockStudents[0].grades);
    const grades = subjects.reduce((acc, subject) => {
      acc[subject] = 0;
      return acc;
    }, {} as GradeScores);
    const newStudent = { ...data, id, status, attendance, grades };
    console.log("Form Submitted", newStudent);
    dispatch({ type: "add-student", payload: newStudent });
    onCloseModal?.();
    reset();
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full max-w-lg space-y-5">
        <FormRow>
          <FormInput
            id="fullName"
            label="Full Name"
            error={errors.fullName?.message}
          >
            <input type="text" id="fullName" {...register("fullName")} />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="date-of-birth"
            label="Date of Birth"
            error={errors.dateOfBirth?.message}
          >
            <input
              type="text"
              id="date-of-birth"
              {...register("dateOfBirth")}
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput id="gender" label="Gender" error={errors.gender?.message}>
            <input type="text" id="gender" {...register("gender")} />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="address"
            label="Address"
            error={errors.address?.message}
          >
            <input type="text" id="address" {...register("address")} />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="guardian-name"
            label="Guardian / Parent"
            error={errors.guardianName?.message}
          >
            <input
              type="text"
              id="guardian-name"
              {...register("guardianName")}
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="guardian-email"
            label="Email"
            error={errors.guardianEmail?.message}
          >
            <input
              type="text"
              id="guardian-email"
              {...register("guardianEmail")}
            />
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="guardian-phone"
            label="Phone Number"
            error={errors.guardianPhone?.message}
          >
            <input
              type="text"
              id="guardian-phone"
              {...register("guardianPhone")}
            />
          </FormInput>
        </FormRow>
      </div>

      <div className="mt-5 flex justify-end gap-3 lg:mt-10">
        <Button type="outline" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button type="success">Add</Button>
      </div>
    </form>
  );
}

export default StudentForm;
