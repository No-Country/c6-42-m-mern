import React from 'react';
import club1 from './club1.jpeg';
import club4 from './club2.jpeg';
import club3 from './club3.jpeg';
import club2 from './club4.jpeg';
import club5 from './club5.jpeg';

class Clubes extends React.Component {
 
	render() {
 
		return(
		<>
    <div className="container">
      <h1 className="display-3">Clubes</h1>
      <p>Estos son los clubes asociados a <i>Deportes Online</i></p>				      
    </div>
     
    <div className="album py-5">
    <div className="container">
       <div className="row">
         <div className="col-md-4">
           <div className="card mb-4" >
              <img className="cards" src={club1} alt="Club1"/>
             <div className="card-body">
                <h3>Club 1</h3>
               <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4">
           <img className="cards" src={club2} alt="Club2"/>
             <div className="card-body">
                <h3>Club 2</h3>
               <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
             </div>
           </div>
        </div>
        <div className="col-md-4">
           <div className="card mb-4">
           <img className="cards" src={club3} alt="Club3"/>
             <div className="card-body">
             <h3>Club 3</h3>
               <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
             </div>
           </div>
        </div>   
        </div>
        <div className="row">
        <div className="col-md-4">
           <div className="card mb-4">
           <img className="cards" src={club4} alt="Club4"/>
             <div className="card-body">
             <h3>Club 4</h3>
               <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
             </div>
           </div>
        </div>    <div className="col-md-4">
           <div className="card mb-4">
           <img className="cards" src={club5} alt="Club5"/>
             <div className="card-body">
             <h3>Club 5</h3>
               <p className="card-text">Tiene estacionamiento cubierto, servicio de cafetería y restaurante. Vestuarios completos con agua caliente.</p>
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