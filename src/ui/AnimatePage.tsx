import React from "react";
import { motion, Variants } from "motion/react";
import { useLocation } from "react-router-dom";

function AnimatePage({
  children,
  className,
  animations,
  key,
}: {
  children: React.ReactNode;
  className?: string;
  animations: Variants;
  key?: string;
}) {
  const location = useLocation();

  const shouldAnimate = !/^\/student\/[^/]+/.test(location.pathname);

  return (
    <>
      {shouldAnimate ? (
        <motion.div
          key={key}
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className={className}
        >
          {children}
        </motion.div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  );
}

export default AnimatePage;
