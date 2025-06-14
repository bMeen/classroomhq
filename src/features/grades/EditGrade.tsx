import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useStudentsContext } from "../../context/StudentContext";
import { DynamicSubject, GradeScores } from "../../types";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubHeading from "../../components/SubHeading";
import toast from "react-hot-toast";

function EditGrade({
  id,
  onCloseModal,
}: {
  id: string;
  onCloseModal?: () => void;
}) {
  const {
    state: { mockStudents },
    dispatch,
  } = useStudentsContext();

  const grades =
    mockStudents.find((student) => student.id === id)?.grades ?? {};

  const schema = yup.object().shape(
    Object.keys(grades).reduce(
      (acc, subject) => {
        acc[subject] = yup
          .number()
          .typeError("Must be a valid number")
          .required()
          .min(0, "Score can't be less than 0")
          .max(100, "Score can't be higher than 100");
        return acc;
      },
      {} as Record<DynamicSubject, yup.NumberSchema>,
    ),
  ) as yup.ObjectSchema<GradeScores>;

  const { register, handleSubmit, formState, getValues } = useForm<GradeScores>(
    {
      resolver: yupResolver(schema),
      defaultValues: grades,
    },
  );

  const { errors, dirtyFields } = formState;

  function onSubmit() {
    const values = getValues();
    const updates = Object.keys(dirtyFields).reduce((acc, key) => {
      const typedKey = key as keyof GradeScores;
      acc[typedKey] = values[typedKey];
      return acc;
    }, {} as Partial<GradeScores>);
    dispatch({ type: "update-grade", payload: { id, updates } });
    toast.success("Grade details successfully editted");
  }

  const handleOnClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    onCloseModal?.();
  };

  return (
    <>
      <SubHeading
        heading="Edit Grade"
        paragraph="Update the student’s grade for any subject."
      />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-lg space-y-5">
          {Object.entries(grades as GradeScores).map(([subject]) => (
            <FormRow key={subject}>
              <FormInput
                id={subject}
                label={subject}
                error={errors[subject]?.message}
              >
                <input
                  type="text"
                  id={subject}
                  {...register(`${subject}`, {
                    setValueAs: (value) => (value ? Number(value) : value),
                  })}
                />
              </FormInput>
            </FormRow>
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-3 lg:mt-10">
          <Button type="outline" onClick={handleOnClick}>
            Cancel
          </Button>
          <Button>Update</Button>
        </div>
      </form>
    </>
  );
}

export default EditGrade;
