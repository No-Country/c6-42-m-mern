import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import './reservas.css'

class FormReservas extends React.Component {

constructor(props) {
    super(props);
    this.state = {date: new Date()};
}

render(){
    return(
<form>
<div class="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Deporte</label>
<div className="col-sm-10">
<select className="form-select" name="deporte">
    <option select disabled>Elegí un deporte</option>
    <option>Fútbol 5</option>
    <option>Padel</option>
    <option>Tenis</option>
</select> 
</div>
</div>

<div class="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Club</label>
<div className="col-sm-10">
<select className="form-select" name="club">
    <option select disabled>Elegí un club</option>
    <option>Pedro Bidegain</option>
    <option>Almagro</option>
    <option>25 de Mayo</option>
    <option>Grün</option>
    <option>La Terraza</option>
</select> 
</div>
</div>

<div className="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Fecha</label>
<div className="col-sm-10">
<input
className="form-control" 
type="date"
minDate='0'
placeholder="Ingrese aquí su fecha de nacimiento">
</input>
</div>
</div>

<div className="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Hora</label>
<div className="col-sm-10">
<select className="form-select" name="hora">
    <option select disabled>Elegí la hora</option>
    <option>08:00</option>
    <option>09:00</option>
    <option>10:00</option>
    <option>11:00</option>
    <option>12:00</option>
    <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
</select> 
</div>
</div>

<div id="boton">
<button type="submit" value="Submit" className="btn btn-success">Continuar</button>
</div>

</form>
    )
}
}

export default FormReservas;