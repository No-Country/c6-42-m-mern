import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons';
import SignOut from '../../menu/signOut/SignOut';
import instance from "../../../../../Utils/axiosInstance";
import { SessionContext } from '../../../../context/sessionContext';

function Exito() {

  const { userInfo } = useContext(SessionContext);

  async function getReservations() {

    //Pendiente hacer uso de reservaciones en front (data);
    const { data } = await instance.get('/reservations', { params: { username: userInfo.username } });
  }

  return (
    <body>
      <div class="p-3"><FontAwesomeIcon icon={faFaceLaugh} size='10x' /></div>
      <div class="p-3"><h1>La reserva se realizó correctamente</h1></div>
      <div class="p-3">
        <div id="perfil"><h2>Mis reservas</h2></div>
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
      <div class="row p-4">
        <div class="col-2">
          <button type="button" className="btn btn-success"><a className="enlace" id="enlace" href="/login">Página principal</a></button>
        </div>
        <div class="col-1">
          <button type="button" className="btn btn-warning"><a className="enlace" id="enlace" href="/login">Mi perfil</a></button>
        </div>
        <div class="col-2">
          <SignOut />
        </div>
      </div>
    </body>
  );
}
export default Exito;