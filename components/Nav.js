import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { ModalContext } from "./ModalContext";

export default function Nav() {
  const [modals, setModals] = useContext(ModalContext)
  return (
    <Navbar
      bg='dark'
      className='text-light justify-content-between px-4'
    >
      <h2>Dev Josh</h2>
      <h2>Context Objects: <span class='text-danger'> {modals.length}</span> </h2>
    </Navbar>
  )
}