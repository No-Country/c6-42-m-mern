import React from 'react';
import './modales.css';
import {Button, ModalBody, ModalFooter, ModalHeader, ModalTitle} from 'react-bootstrap';
import Modal from 'react-modal';
import Login from './LogIn';
import Registro from '../signUp/Registro'
import Reset from './Reset'

class SignIn extends React.Component {
  
  state = {
    loginOpened: false,
    signupOpened: false,
    resetOpened:false,
  };

  openModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: true,
        signupOpened: false,
        resetOpened:false,
      });
    } else if (modalType === "signup") {
      this.setState({
        loginOpened: false,
        signupOpened: true,  
        resetOpened:false,
      });
    } else if (modalType === "reset") {
    this.setState({
      loginOpened: false,
      signupOpened: false,  
      resetOpened:true,
    });
  }
};

  closeModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        signupOpened: false
      });
    } else if (modalType === "reset") {
    this.setState({
      resetOpened: false
    });
  }
  };
render() {
    const { loginOpened, signupOpened, resetOpened} = this.state;
    return (
      <>
       
       <Modal
       id="modal1" 
        isOpen={loginOpened} 
        onRequestClose={this.closeModal("login")} >
        <ModalHeader className="modal-header p-3">
        <ModalTitle className="modal-title">Iniciar sesión</ModalTitle>
        <Button id="closeButton" onClick={this.closeModal("login")}>X</Button>
        </ModalHeader>
          <ModalBody className="modal-body"> 
          <Login closeModal={this.closeModal}/>
          <div><a href="#Reset" className="a-link p-1" onClick={this.openModal("reset")}>Olvidaste tu contraseña? Hacé click acá</a></div>
          <div><a href="#Registro" className="a-link p-1" onClick={this.openModal("signup")}>Aun no tiene usuario? Registrese acá</a> </div>
          </ModalBody>
          <ModalFooter className="row">
          <div id="boton_footer" className="col-6"><Button className="btn btn-secondary" onClick={this.closeModal("login")}>Cerrar</Button></div>
          </ModalFooter>
        </Modal>
        
        <Modal 
        id="modal2" 
        isOpen={signupOpened} 
        onRequestClose={this.closeModal("signup")}>
        <ModalHeader className="modal-header">
        <ModalTitle className="modal-title">Registrarse</ModalTitle>
        <Button id="closeButton" onClick={this.closeModal("signup")}>X</Button>
        </ModalHeader>
          <ModalBody className="modal-body">
          <Registro/>
          <div><a href="#Login" id="a-link" className="a-link" onClick={this.openModal("login")}>Ya estás registrado? Hacé click acá para ingresar</a></div>
          </ModalBody >
          <ModalFooter className="modal-footer">
          <Button className="btn btn-secondary" onClick={this.closeModal("signup")}>Cerrar</Button>
          </ModalFooter>
        </Modal>

        <Modal 
        id="modal3" 
        isOpen={resetOpened} 
        onRequestClose={this.closeModal("reset")}>
        <ModalHeader className="modal-header">
        <ModalTitle className="modal-title">Restablecer contraseña</ModalTitle>
        <Button id="closeButton" onClick={this.closeModal("reset")}>X</Button>
        </ModalHeader>
          <ModalBody className="modal-body">
          <Reset/>
          </ModalBody >
          <ModalFooter className="modal-footer">
          <Button className="btn btn-secondary" onClick={this.closeModal("reset")}>Cerrar</Button>
          </ModalFooter>
        </Modal>

<Button className="btn btn-primary m-1" onClick={this.openModal("login")}>Login</Button>
<Button className="btn btn-primary m-1" onClick={this.openModal("signup")}>Registrarse</Button>
    
      </>
    );
  }
}

export default SignIn;