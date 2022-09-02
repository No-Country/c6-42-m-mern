import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh } from '@fortawesome/free-regular-svg-icons';

function NoExito() {
  return (
    <body>
      <div class="p-3"><FontAwesomeIcon icon={faFaceMeh} size='10x' /></div>
      <div class="p-3"><h1>La cancha solicitada no está disponible</h1></div>
      <div class="row p-3">
        <div class="col-2">
          <button type="button" className="btn btn-primary"><a className="enlace" id="enlace" href="/login">Hacer otra reserva</a></button>
        </div>
        <div class="col-1">
          <button type="button" className="btn btn-warning"><a className="enlace" id="enlace" href="/login">Mi perfil</a></button>
        </div>
      </div>
    </body>
  );
}
export default NoExito;