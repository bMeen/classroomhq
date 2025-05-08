import { differenceInYears, parseISO } from "date-fns";

export function getAge(date: string): number {
  return differenceInYears(new Date(), parseISO(date));
}

export function getAverageScore(grades: number[]): number {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = grades.length > 0 ? total / grades.length : 0;
  return average;
}
