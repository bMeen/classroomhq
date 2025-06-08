import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { StudentsProvider } from "./context/StudentContext";
import { AuthProvider } from "./context/AuthContext";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Students = lazy(() => import("./pages/Students"));
const Attendance = lazy(() => import("./pages/Attendance"));
const Grades = lazy(() => import("./pages/Grades"));
const Student = lazy(() => import("./pages/Student"));
const Details = lazy(() => import("./features/student/Details"));
const Grade = lazy(() => import("./features/student/Grade"));
const Records = lazy(() => import("./features/student/Records"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import AnimateRoutes from "./components/AnimateRoutes";

function App() {
  return (
    <AuthProvider>
      <StudentsProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <AnimateRoutes>
              <Route path="login" element={<Login />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="students" element={<Students />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="grades" element={<Grades />} />
                <Route path="student/:id" element={<Student />}>
                  <Route index element={<Navigate replace to="details" />} />
                  <Route path="details" element={<Details />} />
                  <Route path="grade" element={<Grade />} />
                  <Route path="records" element={<Records />} />
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </AnimateRoutes>
          </Suspense>
        </BrowserRouter>

        <Toaster position="top-center" />
      </StudentsProvider>
    </AuthProvider>
  );
}

export default App;
