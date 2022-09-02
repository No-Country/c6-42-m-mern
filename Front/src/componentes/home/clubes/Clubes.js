import React from 'react';
import club1 from './club1.jpeg';
import club4 from './club2.jpeg';
import club3 from './club3.jpeg';
import club2 from './club4.jpeg';
import club5 from './club5.jpeg';
import './clubes.css';
import Ubicacion1 from './ubicacion/Ubicacion1.js';
import Ubicacion2 from './ubicacion/Ubicacion2.js';
import Ubicacion3 from './ubicacion/Ubicacion3.js';
import Ubicacion4 from './ubicacion/Ubicacion5.js';
import Ubicacion5 from './ubicacion/Ubicacion4.js';


class Clubes extends React.Component {

  render() {

    return (
      <>
        <div className="container">
          <h1 className="display-3">Clubes</h1>
          <p>Estos son los clubes asociados a <i>Deportes Online</i></p>
        </div>

        <div className="album">
          <div className="container">
            <div className="row p-4">
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top img-fluid" id="cards" src={club1} alt="Club1" />
                  <div className="card-body">
                    <h3>Club Pedro Bidegain</h3>
                    <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
                    <Ubicacion1 />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top img-fluid" id="cards" src={club2} alt="Club2" />
                  <div className="card-body">
                    <h3>Club Almagro</h3>
                    <p className="card-text">Cuenta con una escuela de deporte infantil. En verano ofrece colonia de vacaciones que incluye actividades en pileta de niños </p>
                    <Ubicacion2 />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top img-fluid" id="cards" src={club3} alt="Club3" />
                  <div className="card-body">
                    <h3>Club 25 de Mayo</h3>
                    <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
                    <Ubicacion3 />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top img-fluid" id="cards" src={club4} alt="Club4" />
                  <div className="card-body">
                    <h3>Club Grün</h3>
                    <p className="card-text">Piscina semiolímpica. Cancha de basquet indoor. Salón de usos múltiples apto para celebraciones infantiles.</p>
                    <Ubicacion4 />
                  </div>
                </div>
              </div>    <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top img-fluid" id="cards" src={club5} alt="Club5" />
                  <div className="card-body">
                    <h3>Club La Terraza</h3>
                    <p className="card-text">En sus instalaciones ofrece un moderno gimnasio con equipamento de última generación. Café buffet con servicio de cocina.</p>
                    <Ubicacion5 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Clubes;