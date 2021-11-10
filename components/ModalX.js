import React, { useState } from 'react'
import { Button, Modal, Ratio } from 'react-bootstrap'

export default function ModalX({ title, link }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='m-3'>
      <Button onClick={handleShow}>Launch Modal</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: 'auto', height: 'auto' }}>
            <Ratio aspectRatio="16x9">
              <embed src={link} />
            </Ratio>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}