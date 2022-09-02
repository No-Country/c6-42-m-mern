import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons';
import SignOut from '../../menu/signOut/SignOut';
import instance from "../../../../../Utils/axiosInstance";
import { SessionContext } from '../../../../context/sessionContext';
import './reservas.css';

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