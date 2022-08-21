import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import FormReservas from './Formulario';

function Reservas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-lg btn-block m-3" variant=""onClick={handleShow}>Reservar cancha</Button>
      <Modal show={show} onHide={handleClose} className="modal-l">
        <Modal.Header closeButton>
          <Modal.Title>Reserva de cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FormReservas/>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Reservas;