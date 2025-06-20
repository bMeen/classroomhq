import { createContext, useContext } from "react";
import {
  Actions,
  Attendance,
  Grade,
  GradeScores,
  StudentsContextType,
  StudentsState,
} from "../types";
import { mockStudents } from "../data/data";
import { getAverageScore } from "../lib/utils";
import { useLocalStorageReducer } from "../lib/useLocalStorageReducer";

const initialState: StudentsState = {
  mockStudents,
};

const studentsReducer = (
  state: StudentsState,
  action: Actions,
): StudentsState => {
  switch (action.type) {
    case "add-student":
      return {
        ...state,
        mockStudents: [...state.mockStudents, action.payload],
      };

    case "remove-student":
      return {
        ...state,
        mockStudents: state.mockStudents.filter(
          (student) => student.id !== action.payload.id,
        ),
      };

    case "update-student":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload.updates }
            : student,
        ),
      };

    case "update-grade":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) =>
          student.id === action.payload.id
            ? {
                ...student,
                grades: {
                  ...student.grades,
                  ...action.payload.updates,
                } as GradeScores,
              }
            : student,
        ),
      };

    case "change-status":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) => {
          if (student.id !== action.payload.id) return student;

          const prevStatus = student.status;
          const newStatus = action.payload.status;

          if (prevStatus === newStatus) return student;

          const updatedAttendance = { ...student.attendance };

          if (prevStatus) {
            updatedAttendance[prevStatus] = Math.max(
              0,
              updatedAttendance[prevStatus] - 1,
            );
          }

          updatedAttendance[newStatus] += 1;

          return {
            ...student,
            attendance: updatedAttendance,
            status: newStatus,
          };
        }),
      };
    case "new-subject":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) => ({
          ...student,
          grades: {
            ...student.grades,
            [action.payload.subject]: 0,
          },
        })),
      };

    case "remove-subject":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [action.payload.subject]: _, ...remainingGrades } =
            student.grades;
          return {
            ...student,
            grades: remainingGrades,
          };
        }),
      };

    default:
      return state;
  }
};

const StudentsContext = createContext<StudentsContextType>(
  {} as StudentsContextType,
);

function StudentsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useLocalStorageReducer<StudentsState, Actions>(
    "students",
    studentsReducer,
    initialState,
  );
  /*   const [state, dispatch] = useReducer(studentsReducer, initialState); */

  const totalGrades: Grade[] = state.mockStudents.map((stud) => {
    return {
      id: stud.id,
      name: stud.fullName,
      average_score: getAverageScore(Object.values(stud.grades)),
      grades: stud.grades,
    };
  });

  const totalAttendance: Attendance[] = state.mockStudents.map((stud) => {
    return {
      id: stud.id,
      status: stud.status,
      name: stud.fullName,
      ...stud.attendance,
    };
  });

  return (
    <StudentsContext.Provider
      value={{ state, dispatch, totalAttendance, totalGrades }}
    >
      {children}
    </StudentsContext.Provider>
  );
}

function useStudentsContext() {
  const context = useContext(StudentsContext);

  if (!context) {
    throw new Error("StudentsContext cannot be used outside StudentsProvider");
  }

  return context;
}

export { StudentsProvider, useStudentsContext };
