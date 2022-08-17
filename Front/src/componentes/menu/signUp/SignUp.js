import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import Registro from './Registro'


function SignUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Registrarse</Button>
      <Modal id="registro" show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <Registro/>
        </Modal.Body>
        <Modal.Footer>
        
        <div>Ya tiene una cuenta? Inicie sesión acá</div>
        <Button variant="secondary" onClick={handleClose} href="#LogIn">LogIn</Button>
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default SignUp;