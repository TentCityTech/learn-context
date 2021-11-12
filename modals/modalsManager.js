import React, { useContext } from 'react';
import { Button, FormCheck, Modal, Ratio } from 'react-bootstrap';
import { ModalContext } from '../components/ModalContext';
import { modalConfig } from './modalConfig';

export default function ModalX({ title, link }) {
  // no local show state
  // const [show, setShow] = useState(false)
  const { modals, setModals } = useContext(ModalContext);
  const { active, currentUser, modalName } = modals;

  const handleClose = () => setModals({active: false, name: '', currentUser: null});
  const handleShow = () => setShow(true);

  const ChildComponent = modalConfig[modalName] || ComponentNotExist;

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
