import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

function Servicios1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-m btn-block m-2" variant="secondary" onClick={handleShow}>Servicios</Button>
      <Modal show={show} onHide={handleClose} className="modal-m">
        <Modal.Header closeButton>
          <Modal.Title>Servicios disponibles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="card">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">....</li>
        <li class="list-group-item">....</li>
        <li class="list-group-item">....</li>
    </ul>
    </div>
          
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default Servicios1;