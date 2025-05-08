import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StudentsProvider } from "./context/StudentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </StrictMode>,
);
