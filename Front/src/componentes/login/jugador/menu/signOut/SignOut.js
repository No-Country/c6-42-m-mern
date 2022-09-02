import axios from 'axios';
import Cookie from 'js-cookie';
import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../../../context/sessionContext';


const SignOut = () => {
  const [show, setShow] = useState(false);
  const { setUserInfo } = useContext(SessionContext);
  const Navigate = useNavigate();

  const handleShow = () => setShow(true);

  const handleClose = async () => {
    await axios.get('http://localhost:8080/logout', {
      withCredentials: true
    })
      .then(res => {
        Cookie.remove('fsuid');
        setUserInfo(null);
        setShow(false);
        Navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>LogOut</Button>
      <Modal show={show} onHide={handleClose} className="modal-s">
        <Modal.Header closeButton>
          <Modal.Title>Cerrar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleClose}>
            <div>Está seguro de que desea cerrar sesión?</div>
            <div id="logout">
              <Button variant="primary" type="submit" value="Submit">Confirmar</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignOut;
