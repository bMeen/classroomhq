import { createContext, useContext, useReducer } from "react";
import { Actions, StudentsContextType, StudentsState } from "../types";
import { mockStudents } from "../data/data";

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
    case "change-status":
      return {
        ...state,
        mockStudents: state.mockStudents.map((student) => {
          if (student.id !== action.payload.id) return student;

          const prevStatus = student.status;
          const newStatus = action.payload.status;

          // If status is the same, do nothing
          if (prevStatus === newStatus) return student;

          const updatedAttendance = { ...student.attendance };

          // Decrement previous status if exists
          if (prevStatus) {
            updatedAttendance[prevStatus] = Math.max(
              0,
              updatedAttendance[prevStatus] - 1,
            );
          }

          // Increment new status
          updatedAttendance[newStatus] += 1;

          return {
            ...student,
            attendance: updatedAttendance,
            status: newStatus,
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
  const [state, dispatch] = useReducer(studentsReducer, initialState);

  return (
    <StudentsContext.Provider value={{ state, dispatch }}>
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
