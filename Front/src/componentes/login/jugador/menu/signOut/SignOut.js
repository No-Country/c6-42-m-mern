import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';


function SignOut() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>LogOut</Button>
      <Modal show={show} onHide={handleClose} className="modal-s">
        <Modal.Header closeButton>
          <Modal.Title>Cerrar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action='http://localhost:5000/logout' method='get'>
        <div>Está seguro de que desea cerrar sesión?</div>
        <Button variant="primary" type="submit" value="Submit">Confirmar</Button>
        </form>

        </Modal.Body>
      {/*   <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default SignOut;