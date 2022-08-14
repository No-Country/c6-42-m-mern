import React from 'react';

 
class Reservas extends React.Component {
 
  render() {
 
    return (
    <div className="container-fluid flex-shrink">    
    <h1 className="display-3">Reservas</h1>	
    <div className="row"> 
    <div className="col-6 bg-secondary">
    <button type="button" class="btn btn-secondary btn-lg">Canchas</button>
    </div>

    <div className="col-6 bg-secondary">
    <button type="button" class="btn btn-secondary btn-lg btn-block">Clases</button>
    </div>
    </div>	      
    </div>
        
    )
  }
 
}
 
export default Reservas;