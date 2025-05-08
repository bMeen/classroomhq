import { createContext, Dispatch, useContext, useReducer } from "react";
import { Student } from "../types";
import { mockStudents } from "../data/data";

// types
type StudentsState = {
  mockStudents: Student[];
};

type addAction = {
  type: "add-student";
  payload: Student;
};

type StudentsContextType = {
  state: StudentsState;
  dispatch: Dispatch<addAction>;
};

const initialState: StudentsState = {
  mockStudents,
};

const studentsReducer = (
  state: StudentsState,
  action: addAction,
): StudentsState => {
  switch (action.type) {
    case "add-student":
      return {
        ...state,
        mockStudents: [...state.mockStudents, action.payload],
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
