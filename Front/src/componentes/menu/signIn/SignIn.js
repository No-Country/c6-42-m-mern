import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import Login from './LogIn';
import SignUp from '../signUp/SignUp';

function SignIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>LogIn</Button>
      <Modal show={show} onHide={handleClose} className="modal-m">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Login/>
         
         <div>Olvidó su usuario y/o contraseña?</div>

        </Modal.Body>
        <Modal.Footer>
        <div>No tiene una cuenta aun?</div><SignUp/>
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default SignIn;