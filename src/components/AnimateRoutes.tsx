import { AnimatePresence } from "motion/react";
import { Routes, useLocation } from "react-router-dom";

function AnimateRoutes({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
