import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function Ubicacion2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-m btn-block m-2" variant="primary" onClick={handleShow}>Ubicación</Button>
      <Modal show={show} onHide={handleClose} className="modal-m">
        <Modal.Header closeButton>
          <Modal.Title>Club Grün</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="google-maps">
            <iframe title="club4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72186.83949164153!2d-58.46435754348016!3d-34.56709304408385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb423bd22b8cf%3A0x181e8dd7bb087890!2zR1LDnE4gRkM!5e0!3m2!1sit!2sit!4v1661179103184!5m2!1sit!2sit"></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Ubicacion2;