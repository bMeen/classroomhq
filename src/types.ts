import { Dispatch, ReactElement } from "react";

export type Status = "present" | "late" | "absent";

export type Gender = "male" | "female";

export type Subject = "Math" | "English" | "Science" | "History" | "Arts";

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
  grades: Record<Subject, number>;
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
} & Record<Subject, number>;

export type StudentsState = {
  mockStudents: Student[];
};

export type AddAction = {
  type: "add-student";
  payload: Student;
};
export type RemoveAction = {
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

export type Actions = AddAction | ChangeStatusAction | RemoveAction;

export type StudentsContextType = {
  state: StudentsState;
  dispatch: Dispatch<Actions>;
};
