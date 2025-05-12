import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Grades from "./pages/Grades";
import Student from "./pages/Student";
import Details from "./features/student/Details";
import Grade from "./features/student/Grade";
import Records from "./features/student/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AppLayout />}>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
