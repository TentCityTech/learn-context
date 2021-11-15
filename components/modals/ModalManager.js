import React, { useContext } from 'react';
import { Button, FormCheck, Modal, Ratio } from 'react-bootstrap';
import { ModalContext } from '../../context/modal/ModalContext';
import { modalConfig } from './modalConfig';

const ComponentNotExist = (props) => <div>Component do not exist</div>;

export default function ModalManager({ title, link }) {
  const { modalState, closeModal } = useContext(ModalContext) || {};
  const { modalName, active, currentUser } = modalState || {};

  const handleClose = () => closeModal();

  const ChildComponent = modalConfig[modalName] ?? ComponentNotExist;

  return (
    <Modal show={active} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChildComponent {...currentUser} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
