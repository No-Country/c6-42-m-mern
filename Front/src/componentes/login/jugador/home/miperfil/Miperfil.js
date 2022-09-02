import React, { useContext, useEffect, useState } from 'react';
import './perfil.css';
import { Button } from 'react-bootstrap';
import { SessionContext } from '../../../../context/SessionContext';
import axios from 'axios';

const Perfil = () => {
  const { userInfo } = useContext(SessionContext);
  const [selfReservations, setSelfReservations] = useState([]);

  // const getReservationsInfo = async (reservationsIDs) => {
  //   const { data } = await axios.get("http://localhost:8080/reservation", { params: reservationsIDs });
  //   console.log(data);
  // }

  useEffect(() => {
    async function fetchRes() {
      await axios.post("http://localhost:8080/reservations", {username: userInfo.username}, 
        { 
          withCredentials: true 
        })
        .then(res => setSelfReservations(res.data))
        .catch(err => console.log(err));
    }
    fetchRes();
  }, []);


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
                <td>{userInfo.lastname}</td>
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
          {userInfo.reservations.length === 0
            ?
            <div class="container alert alert-info" role="alert">
              No tiene reservas hechas!
            </div>
            :
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
                { selfReservations.length !== 0 ? selfReservations.map((res, i) => {
                  return <tr class="table-active" key={i}>
                  <td>{res.sport}</td>
                  <td>{res.court}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                </tr>
                }) : '' }

                {/* <tr class="table-active">
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
                </tr> */}
              </tbody>
            </table>
          }
        </div>
        <div id="perfil"><h3>Clases</h3></div>
      </div>
    </>
  )
}

export default Perfil;