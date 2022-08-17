import React from 'react';
import balon from './balon.jpg';
import tenis from './tenis.jpg';
import paddle from './paddle.jpg';

class Tarifas extends React.Component {
 
  render() {
 
    return (
    <div className="container">
      <h1 className="display-3 mt-5 mb-3">Tarifas y reservas</h1>
      <div className="container">
       <div className="row">
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm" >
              <img className="center2" src={balon} alt="Futbol" height="25%"/>
             <div className="card-body">
                <h1>Futbol 5</h1>
                <h3>Alquiler de cancha</h3>
               <p className="card-text"> Lunes a viernes <h5>$450</h5></p>
               <p className="card-text"> Sábados, domingos y feriados <h5>$500</h5></p>
               <h3>Clases individuales</h3>
               <p className="card-text"> Lunes a viernes <h5>$600</h5></p>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar cancha</button>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar clase</button>
             </div>
           </div>
         </div>
       
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm" >
              <img className="center2" src={tenis} alt="Club1" height="25%"/>
              <div className="card-body">
                <h1>Tenis</h1>
                <h3>Alquiler de cancha</h3>
               <p className="card-text"> Lunes a viernes <h5>$150</h5></p>
               <p className="card-text"> Sábados, domingos y feriados <h5>$170</h5></p>
               <h3>Clases individuales</h3>
               <p className="card-text"> Lunes a viernes <h5>$300</h5></p>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar cancha</button>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar clase</button>
             </div>
           </div>
         </div>

         <div className="col-md-4">
           <div className="card mb-4 shadow-sm" >
              <img className="center2" src={paddle} alt="Club1" height="25%"/>
              <div className="card-body">
                <h1>Padel</h1>
                <h3>Alquiler de cancha</h3>
               <p className="card-text"> Lunes a viernes <h5>$130</h5></p>
               <p className="card-text"> Sábados, domingos y feriados <h5>$140</h5></p>
               <h3>Clases individuales</h3>
               <p className="card-text"> Lunes a viernes <h5>$260</h5></p>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar cancha</button>
               <button className="btn btn-outline-dark btn-lg btn-block m-3">Reservar clase</button>
             </div>
           </div>
         </div>
      
       </div>
      </div>
    </div>     
    )  
  }
}
 
export default Tarifas;