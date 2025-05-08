import { ReactElement } from "react";

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
