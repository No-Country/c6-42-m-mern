import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

function Ubicacion1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-m btn-block m-2" variant="primary" onClick={handleShow}>Ubicación</Button>
      <Modal show={show} onHide={handleClose} className="modal-m">
        <Modal.Header closeButton>
          <Modal.Title>Club Pedro Bidegain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="google-maps">
          <iframe title="ubicacion1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1028486656214!2d-58.44394217980077!3d-34.65210544625434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbbf80977ed5%3A0xb7eedcbe4a3ab64e!2sStadio%20Pedro%20Bidegain!5e0!3m2!1sit!2sit!4v1660911540705!5m2!1sit!2sit"></iframe>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default Ubicacion1;