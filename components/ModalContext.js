import React, { useState, createContext } from "react";

export const ModalContext = createContext()


export function ModalProvider(props) {
  const [modals, setModals] = useState([
    {
      active: false,
      currentUser: null,
    },
    {
      active: false,
      currentUser: null,
    },
  ])

  return (
    <ModalContext.Provider value={[modals, setModals]}>
      {props.children}
    </ModalContext.Provider>
  )
}