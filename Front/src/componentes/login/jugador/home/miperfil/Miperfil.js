import React, { useContext } from 'react';
import './perfil.css';
import { Button } from 'react-bootstrap';
import { SessionContext } from '../../../../context/sessionContext';
import instance from "../../../../../Utils/axiosInstance";



const getReservationsInfo = async(reservationsIDs)=>{
  const {data} = await instance.get("/reservation",{params:reservationsIDs});
  console.log(data);
  }
const Perfil = () => {
  const { userInfo } = useContext(SessionContext);
  if (userInfo.reservations !== []){
    getReservationsInfo(userInfo.reservations);
  }
  return (
    <>
      <div id="perfilPrincipal" className="container-fluid">

        <div id="perfil"><h1 className="display-3">Mi perfil</h1></div>
        <div id="perfil"><h2>Mis datos personales</h2></div>

        <div id="perfil" >
          <table id="tabla" className="table table-hover">
            <tbody>
              <tr className="table-active">
                <th scope="row">Nombre</th>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <th scope="row">Apellido</th>
                <td>{userInfo.lastName}</td>
              </tr>
              <tr className="table-active">
                <th scope="row">Dirección</th>
                <td>{userInfo.address}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="perfil"><Button>Editar datos</Button></div>

        <div id="perfil"><h2>Mis reservas</h2></div>
        <div id="perfil"><h3>Canchas</h3></div>
        <div id="perfil" >
          <table id="tabla" className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Deporte</th>
                <th scope="col">Club</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <td>Padel</td>
                <td>Pedro Bidegain</td>
                <td>25-08-2022</td>
                <td>18:00</td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>La Terraza</td>
                <td>27-08-2022</td>
                <td>15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="perfil"><h3>Clases</h3></div>
      </div>
    </>
  )
}

export default Perfil;