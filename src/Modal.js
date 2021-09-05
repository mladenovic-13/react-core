// Reusable modal component

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // use ref insted of just variable as container
  // because we want to create new div for each
  // modal component that we created
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // Same as ReactDOM.render(), just in other div
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
