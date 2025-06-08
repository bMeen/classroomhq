import { createContext, useContext } from "react";
import { AuthActions, AuthContextType, AuthState } from "../types";
import { useLocalStorageReducer } from "../lib/useLocalStorageReducer";
import toast from "react-hot-toast";

const admin = {
  username: "admin",
  password: "Stud0000.",
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      throw new Error("Unknown action");
  }
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useLocalStorageReducer<
    AuthState,
    AuthActions
  >("user", authReducer, initialState);
  /*   const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState,
  );
 */
  function login(username: string, password: string) {
    if (username === admin.username && password === admin.password) {
      dispatch({ type: "login", payload: { username, password } });
      toast.success("Login Successful");
    } else {
      toast.error("Invalid credentials");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext cannot be used outside AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuthContext };
