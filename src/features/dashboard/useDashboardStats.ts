//average(subject) = (sum of subject scores for all students) / number of students
//totalOverallAverage = (sum of all subject scores for all students) / (number of students × number of subjects)
//presentRate = (total presents / total attendance entries) * 100
//lateRate = (total lates / total attendance entries) * 100
//absentRate = (total absents / total attendance entries) * 100
//

import { useStudentsContext } from "../../context/StudentContext";
import { Options } from "../../types";

export default function useDashboardStats() {
  const {
    state: { mockStudents },
  } = useStudentsContext();

  const subjects = Object.keys(mockStudents[0].grades);

  const totalStudents = mockStudents.length;
  const totalSubjects = subjects.length;

  const subjectAverages = subjects.reduce((acc, subject) => {
    const totalScore = mockStudents.reduce(
      (sum, student) => sum + student.grades[subject],
      0,
    );
    acc.push({
      label: subject,
      value: (totalScore / totalStudents).toFixed(2),
    });
    return acc;
  }, [] as Options[]);

  const overallAverage = (
    mockStudents.reduce((sum, student) => {
      return (
        sum + Object.values(student.grades).reduce((s, score) => s + score, 0)
      );
    }, 0) /
    (totalSubjects * totalStudents)
  ).toFixed(2);

  const topPerformingSubject = subjectAverages.reduce((previous, current) => {
    return current.value > previous.value ? current : previous;
  }, subjectAverages[0]);

  const totalAttendance = mockStudents.reduce(
    (totals, student) => {
      const { present, late, absent } = student.attendance;

      return {
        present: totals.present + present,
        late: totals.late + late,
        absent: totals.absent + absent,
      };
    },
    {
      present: 0,
      late: 0,
      absent: 0,
    },
  );

  const totalAttendanceEntries = Object.values(totalAttendance).reduce(
    (acc, value) => acc + value,
    0,
  );

  const attendanceRates = Object.entries(totalAttendance).map(
    ([label, count]) => ({
      label,
      value: `${((count / totalAttendanceEntries) * 100).toFixed(2)}%`,
    }),
  );

  return {
    totalStudents,
    totalSubjects,
    subjectAverages,
    topPerformingSubject,
    overallAverage,
    attendanceRates,
  };
}
