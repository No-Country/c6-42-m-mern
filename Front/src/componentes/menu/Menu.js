import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Login from './login/Login.js'; 
import Registro from './registro/Registro.js'; 
import 'bootswatch/dist/minty/bootstrap.min.css'; 


function Menu() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Home"><strong>Deportes Online</strong></a>
       

          <div className="collapse navbar-collapse align-content-right">
            <ul className="navbar-nav ms-auto">
            <li id="nav-item" className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle>Menú</Dropdown.Toggle>
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
            <li id="nav-item"><Login/></li>
            <li id="nav-item"><Registro/></li>
            </ul> 
          </div>
        </div>
      </nav>
    )
  }

export default Menu;