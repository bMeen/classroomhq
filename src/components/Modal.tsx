import { cloneElement, createContext, useContext, useState } from "react";
import { ModalCOntextType } from "../types";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../lib/useOutsideClick";

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
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      <div
        className="modal flex flex-col items-end gap-2"
        ref={ref}
        onClick={(e) => e.target}
      >
        <button onClick={close}>
          <X />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
