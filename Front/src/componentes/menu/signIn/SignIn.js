import React, { useState } from 'react';
import './modales.css';
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Modal from 'react-modal';
import Login from './LogIn';
import Registro from '../signUp/Registro'
import Reset from './Reset'

const SignIn = () => {
  const [loginOpened, setLoginOpened] = useState(false);
  const [signupOpened, setSignupOpened] = useState(false);
  const [resetOpened, setResetOpened] = useState(false);


  let openModal = modalType => () => {
    if (modalType === "login") {
      setLoginOpened(true);
      setSignupOpened(false);
      setResetOpened(false);
    } else if (modalType === "signup") {
      setLoginOpened(false);
      setSignupOpened(true);
      setResetOpened(false);
    } else if (modalType === "reset") {
      setLoginOpened(false);
      setSignupOpened(false);
      setResetOpened(true);
    }
  };

  let closeModal = modalType => () => {
    if (modalType === "login") {
      setLoginOpened(false);
    } else if (modalType === "signup") {
      setSignupOpened(false);
    } else if (modalType === "reset") {
      setResetOpened(false);
    }
  };

  // const { loginOpened, signupOpened, resetOpened} = this.state;
  return (
    <>

      <Modal
        id="modal1"
        isOpen={loginOpened}
        onRequestClose={closeModal("login")} >
        <ModalHeader className="modal-header p-3">
          <ModalTitle className="modal-title">Iniciar sesión</ModalTitle>
          <Button id="closeButton" onClick={closeModal("login")}>X</Button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Login closeModal={closeModal} />
          <div><a href="#Reset" className="a-link p-1" onClick={openModal("reset")}>Olvidaste tu contraseña? Hacé click acá</a></div>
          <div><a href="#Registro" className="a-link p-1" onClick={openModal("signup")}>Aun no tiene usuario? Registrese acá</a> </div>
        </ModalBody>
        <ModalFooter className="row">
          <div id="boton_footer" className="col-6"><Button className="btn btn-secondary" onClick={closeModal("login")}>Cerrar</Button></div>
        </ModalFooter>
      </Modal>

      <Modal
        id="modal2"
        isOpen={signupOpened}
        onRequestClose={closeModal("signup")}>
        <ModalHeader className="modal-header">
          <ModalTitle className="modal-title">Registrarse</ModalTitle>
          <Button id="closeButton" onClick={closeModal("signup")}>X</Button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Registro />
          <div><a href="#Login" id="a-link" className="a-link" onClick={openModal("login")}>Ya estás registrado? Hacé click acá para ingresar</a></div>
        </ModalBody >
        <ModalFooter className="modal-footer">
          <Button className="btn btn-secondary" onClick={closeModal("signup")}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      <Modal
        id="modal3"
        isOpen={resetOpened}
        onRequestClose={closeModal("reset")}>
        <ModalHeader className="modal-header">
          <ModalTitle className="modal-title">Restablecer contraseña</ModalTitle>
          <Button id="closeButton" onClick={closeModal("reset")}>X</Button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Reset />
        </ModalBody >
        <ModalFooter className="modal-footer">
          <Button className="btn btn-secondary" onClick={closeModal("reset")}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      <Button className="btn btn-primary m-1" onClick={openModal("login")}>Login</Button>
      <Button className="btn btn-primary m-1" onClick={openModal("signup")}>Registrarse</Button>

    </>
  );

}

export default SignIn;
