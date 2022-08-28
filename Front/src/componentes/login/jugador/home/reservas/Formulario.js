import React, { useState } from "react";
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import './reservas.css';
import { createTheme } from "@material-ui/core";
import { DatePicker }  from '@material-ui/pickers';
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";


function FormReservas(){

const[dateSelected, changeDateSelected]= useState(new Date());

const defaultMaterialTheme = createTheme({
    palette: {
      primary: grey,
    },
  });

return(
<form action='' method="post">
<div class="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Deporte</label>
<div className="col-sm-4">
<select className="form-select" name="deporte">
    <option select disabled>Elegí un deporte</option>
    <option>Fútbol 5</option>
    <option>Padel</option>
    <option>Tenis</option>
</select> 
</div>
<label id="label_contacto" className="col-sm-2">Club</label>
<div className="col-sm-4">
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

<div class="form-group row p-2">
<label id="label_contacto" className="col-sm-2">Fecha</label>
<div className="col-sm-4">
<ThemeProvider theme={defaultMaterialTheme}>
<DatePicker
id='datepicker'
className="form-select"
name="date"
value={dateSelected} 
onChange={changeDateSelected}
minDate={new Date()}
maxDate={'01/01/2023'}
format="dd/MM/yyyy"/>
</ThemeProvider>
</div>
<label id="label_contacto" className="col-sm-2">Hora</label>
<div className="col-sm-4">
<select className="form-select" name="hour">
    <option select disabled>Elegí el horario</option>
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
<button type="submit" value="Submit" className="btn btn-primary">Confirmar</button>
</div>
</form>
)
}

export default FormReservas;