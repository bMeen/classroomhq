import { Dispatch, ReactElement } from "react";

export type Status = "present" | "late" | "absent";

export type Gender = "male" | "female";

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
  sn: number;
  id: string;
  status: Status | "";
  name: string;
} & Record<Status, number>;

export type Grade = {
  sn: number;
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
  | AddNewSubject;

export type StudentsContextType = {
  state: StudentsState;
  dispatch: Dispatch<Actions>;
  totalGrades: Grade[];
  totalAttendance: Attendance[];
};
