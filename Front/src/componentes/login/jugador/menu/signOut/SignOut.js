import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../../../../index.css';

function SignOut() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>LogOut</Button>
      <Modal show={show} onHide={handleClose} className="modal-s">
        <Modal.Header closeButton>
          <Modal.Title>Cerrar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action='http://localhost:8080/logout' method='get'>
        <div>Está seguro de que desea cerrar sesión?</div>
        <div id="logout">
        <Button variant="primary" type="submit" value="Submit">Confirmar</Button>
        </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default SignOut;