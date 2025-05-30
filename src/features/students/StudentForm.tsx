import { useForm } from "react-hook-form";
import { FormValues, Gender, GradeScores, schema, Status } from "../../types";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStudentsContext } from "../../context/StudentContext";
import { generateStudentId } from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import SubHeading from "../../components/SubHeading";

function StudentForm({
  id,
  onCloseModal,
}: {
  id?: string;
  onCloseModal?: () => void;
}) {
  const navigate = useNavigate();
  const { state, dispatch } = useStudentsContext();

  const isEditSession = Boolean(id);

  const currentStudent = state.mockStudents.find(
    (student) => student.id === id,
  );

  const editValues = {
    fullName: currentStudent?.fullName,
    dateOfBirth: currentStudent?.dateOfBirth,
    gender: currentStudent?.gender as Gender,
    address: currentStudent?.address,
    guardianName: currentStudent?.guardianName,
    guardianEmail: currentStudent?.guardianEmail,
    guardianPhone: currentStudent?.guardianPhone,
  };

  const { register, handleSubmit, reset, formState, getValues } =
    useForm<FormValues>({
      resolver: yupResolver(schema),
      defaultValues: isEditSession ? editValues : {},
    });
  const { errors, dirtyFields } = formState;

  const onSubmit = (data: FormValues) => {
    const values = getValues();
    if (isEditSession) {
      const updates = Object.keys(dirtyFields).reduce((acc, key) => {
        const typedKey = key as keyof FormValues;
        acc[typedKey] = values[typedKey];
        return acc;
      }, {} as Partial<FormValues>);

      navigate(`/student/${id}`);
      dispatch({ type: "update-student", payload: { id: id!, updates } });
    } else {
      const id = generateStudentId(state.mockStudents);
      const status = "present" as Status;
      const attendance = { present: 0, late: 0, absent: 0 };
      const subjects = Object.keys(state.mockStudents[0].grades);
      const grades = subjects.reduce((acc, subject) => {
        acc[subject] = 0;
        return acc;
      }, {} as GradeScores);
      const newStudent = { ...data, id, status, attendance, grades };
      dispatch({ type: "add-student", payload: newStudent });
      reset();
      navigate(`/student/${id}`);
    }
    onCloseModal?.();
  };

  return (
    <>
      <SubHeading
        heading={id ? "Update Profile" : "Add Student"}
        paragraph={
          id
            ? "Update the student’s profile"
            : "Fill in the details to create a new student profile."
        }
      />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
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
                placeholder="YYYY-MM-DD"
              />
            </FormInput>
          </FormRow>
          <FormRow>
            <FormInput
              id="gender"
              label="Gender"
              error={errors.gender?.message}
            >
              <input
                type="text"
                id="gender"
                className="capitalize"
                {...register("gender", {
                  setValueAs: (value) => (value ? value.toLowerCase() : value),
                })}
              />
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
          {isEditSession ? (
            <Button>Update</Button>
          ) : (
            <Button type="success">Add</Button>
          )}
        </div>
      </form>
    </>
  );
}

export default StudentForm;
