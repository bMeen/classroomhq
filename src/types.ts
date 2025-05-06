import { ReactElement } from "react";

export type NavItems = {
  icon: ReactElement;
  label: string;
  to: string;
};

export type Attendance = {
  id: number;
  name: string;
  present: number;
  late: number;
  absent: number;
};
