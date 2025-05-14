import { differenceInYears, parseISO } from "date-fns";
import { Student } from "../types";

export function getAge(date: string): number {
  return differenceInYears(new Date(), parseISO(date));
}

export function getAverageScore(grades: number[]): number {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = grades.length > 0 ? total / grades.length : 0;
  return Number(average.toFixed(1));
  //return average;
}

export const generateStudentId = (students: Student[]) => {
  const nextNumber = students.length + 1;
  return `stud${String(nextNumber).padStart(3, "0")}`;
};
