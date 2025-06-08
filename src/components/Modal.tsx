import { cloneElement, createContext, useContext, useState } from "react";
import { ModalCOntextType } from "../types";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../lib/useOutsideClick";
import { AnimatePresence, motion } from "motion/react";
import { modalVariants } from "../lib/constants";

const ModalContext = createContext<ModalCOntextType>({} as ModalCOntextType);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: opensWindowName,
}: {
  children: React.ReactElement<{
    onClick?: () => void;
  }>;
  opens: string;
}) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({
  children,
  name,
}: {
  children: React.ReactElement<{
    onCloseModal?: () => void;
  }>;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick<HTMLDivElement>(close);

  //if (name !== openName) return null;

  return createPortal(
    <AnimatePresence>
      {openName === name && (
        <div className="overlay">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
            className="modal"
            ref={ref}
            onClick={(e) => e.target}
          >
            <div className="flex flex-col items-end gap-2">
              <motion.button
                transition={{ type: "tween", duration: 0.2 }}
                whileTap={{ scale: 0.85 }}
                onClick={close}
              >
                <X />
              </motion.button>

              <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
