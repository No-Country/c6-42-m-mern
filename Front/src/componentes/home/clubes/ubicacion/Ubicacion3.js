import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function Ubicacion3() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-m btn-block m-2" variant="primary" onClick={handleShow}>Ubicación</Button>
      <Modal show={show} onHide={handleClose} className="modal-m">
        <Modal.Header closeButton>
          <Modal.Title>Club 25 de Mayo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="google-maps">
            <iframe title="club3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.32228888972!2d-58.495308749475164!3d-34.52006176048728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb130f464a8f3%3A0xdcc91adf7ce82ee9!2sClub%2025%20De%20Mayo!5e0!3m2!1sit!2sit!4v1661178693698!5m2!1sit!2sit"></iframe>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Ubicacion3;