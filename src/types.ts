import * as yup from "yup";

import { Dispatch, ReactElement } from "react";

export type Status = "present" | "late" | "absent";

export type Gender = "male" | "female" | string;

export type Subject = "Math" | "English" | "Science" | "History" | "Arts";

export type DynamicSubject = Subject | string;

export type GradeScores = Record<DynamicSubject, number>;

export type NavItems = {
  icon: ReactElement;
  label: string;
  to: string;
};

export interface Student {
  id: string;
  fullName: string;
  dateOfBirth: string;
  address: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: string;
  gender: Gender;
  status: Status | "";
  grades: GradeScores;
  attendance: Record<Status, number>;
}

export type Attendance = {
  id: string;
  status: Status | "";
  name: string;
} & Record<Status, number>;

export type Grade = {
  id: string;
  name: string;
  average_score: number;
  grades: GradeScores;
};

export type StudentsState = {
  mockStudents: Student[];
};

export type AddStudentAction = {
  type: "add-student";
  payload: Student;
};

export type RemoveStudentAction = {
  type: "remove-student";
  payload: {
    id: string;
  };
};
export type UpdateStudentAction = {
  type: "update-student";
  payload: {
    id: string;
    updates: Partial<Omit<Student, "id">>;
  };
};
export type UpdateGradeAction = {
  type: "update-grade";
  payload: {
    id: string;
    updates: Partial<GradeScores>;
  };
};

export type ChangeStatusAction = {
  type: "change-status";
  payload: {
    id: string;
    status: Status;
  };
};

export type AddNewSubject = {
  type: "new-subject";
  payload: {
    subject: string;
  };
};

export type Actions =
  | AddStudentAction
  | ChangeStatusAction
  | RemoveStudentAction
  | UpdateStudentAction
  | UpdateGradeAction
  | AddNewSubject;

export type StudentsContextType = {
  state: StudentsState;
  dispatch: Dispatch<Actions>;
  totalGrades: Grade[];
  totalAttendance: Attendance[];
};

export type ModalCOntextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

/* export type FormValues = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: string;
}; */
export type FormValues = yup.InferType<typeof schema>;

export const schema = yup.object({
  fullName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.mixed<Gender>().oneOf(["male", "female"]).required(),
  address: yup.string().required(),
  guardianName: yup.string().required(),
  guardianEmail: yup.string().email("Provide a valide email").required(),
  guardianPhone: yup.string().required(),
});

export type Options = { label: string; value: string };

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    username: string;
    password: string;
  } | null;
};

export type AuthContextType = {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: {
    username: string;
    password: string;
  } | null;
};

export type AuthActions =
  | { type: "login"; payload: { username: string; password: string } }
  | { type: "logout" };
