import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import Cookie from 'js-cookie';
import axios from 'axios';
import { SessionContext } from '../../../../context/sessionContext';

function SignOut() {
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { setUserInfo } = useContext(SessionContext);

  const handleClose = async () => {
    await axios.get('http://localhost:5000/logout', { withCredentials: true })
      .then(res => {
        Cookie.remove('fsuid');
        setUserInfo(null);
        setShow(false)
        Navigate('/')
      })
      .catch(err => console.log(err));
  };

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
          <Button variant="primary" onClick={handleClose}>
            Confirmar
          </Button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default SignOut;