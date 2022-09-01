import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

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
          <iframe title="club4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52566.139185617256!2d-58.61597821675497!3d-34.569156600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9de34ac8e11%3A0x4ff92fa75d347349!2sLa%20Terraza%20Tenis!5e0!3m2!1sit!2sit!4v1661178891182!5m2!1sit!2sit"></iframe>
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