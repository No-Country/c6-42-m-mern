import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import {Dropdown} from 'react-bootstrap';
import SignOut from './signOut/SignOut.js';


const Menu = () => {
  console.log('Menu');
      return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home"><strong>Deportes Online</strong></a>
        <div className="collapse navbar-collapse align-content-right">
          <ul className="navbar-nav ms-auto">
          <li id="nav-item">
          <Dropdown>
            <Dropdown.Toggle >Menú</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="#Perfil">Mis datos</Dropdown.Item>
            <Dropdown.Item href="#Reservas">Mis reservas</Dropdown.Item>
            <Dropdown.Item href="#Contacto">Contacto</Dropdown.Item>  
            </Dropdown.Menu>
          </Dropdown>
        </li>
         <li id="nav-item"><SignOut/></li>  
        </ul> 
        </div>
      </div>
  </nav>
  )
  }

export default Menu;