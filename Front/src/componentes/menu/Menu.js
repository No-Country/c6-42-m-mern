import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import {Dropdown} from 'react-bootstrap';
import SignIn from './signIn/SignIn.js'; 
import SignUp from './signUp/SignUp.js';
// import SignOut from './signOut/SignOut.js';

class Menu extends React.Component {
    render (){
      return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home"><strong>Deportes Online</strong></a>
        <div className="collapse navbar-collapse align-content-right">
          <ul className="navbar-nav ms-auto">
          <li className="nav-link dropdown">
          <Dropdown>
            <Dropdown.Toggle >Menú</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#Nosotros">Nosotros</Dropdown.Item>
            <Dropdown.Item href="#Clubes">Clubes</Dropdown.Item>
            <Dropdown.Item href="#Profesores">Profesores</Dropdown.Item>  
            <Dropdown.Item href="#Tarifas">Tarifas</Dropdown.Item>
            <Dropdown.Item href="#Reservas">Reservas</Dropdown.Item>
            <Dropdown.Item href="#Contacto">Contacto</Dropdown.Item>  
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li class="nav-link"><SignUp/></li> 
        <li class="nav-link"><SignIn/></li>
        {/* <li id="nav-item"><SignOut/></li>  */}
        </ul> 
        </div>
      </div>
  </nav>
  )
  }
}

export default Menu;