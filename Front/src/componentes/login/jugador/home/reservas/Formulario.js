
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import './reservas.css';
import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../../../../Utils/axiosInstance"
function FormReservas(){

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
      reset();
      await instance.post("reservation", params);
    } catch (err) {
      console.log(err);
    }
  }
  
var max = new Date('01/01/2023');
var hoy=new Date();
console.log(hoy);
console.log(max);

return(
<div>
<form onSubmit={handleSubmit(onSubmit)}>

<div className="row p-2">
<label id="label_contacto" className="col-sm-1 p-2">Deporte</label>
<div className="col-sm-5 p-2">
<select className="form-select" name="sport" {...register("sport", { required: "Seleccione una opción" })}>
    <option value=""selected disabled>Elegí un deporte</option>
    <option value="futbol">Fútbol 5</option>
    <option value="padel">Padel</option>
    <option value="tenis">Tenis</option>
</select> 
<div className="text-danger">{errors?.sport?.type === "required" && <p>Seleccione una opción</p>}</div>
</div>

<label id="label_contacto" className="col-sm-1 p-2">Club</label>
<div className="col-sm-5 p-2">
<select className="form-select" name="club"{...register("club", { required: "Seleccione una opción" })}>
    <option value="" selected disabled>Elegí un club</option>
    <option value="Bidegain">Pedro Bidegain</option>
    <option value="Almagro">Almagro</option>
    <option value="Mayo">25 de Mayo</option>
    <option value="Grun">Grün</option>
    <option value="Terraza">La Terraza</option>
</select> 
<div className="text-danger">{errors?.club?.type === "required" && <p>Seleccione una opción</p>}</div>
</div>
</div>

<div className="row p-2">
<label id="label_contacto" className="col-sm-1 p-2">Fecha</label>
<div className="col-sm-5 p-2">
<input 
type="date" 
min={new Date().toISOString().split("T")[0]} 
max={new Date('01/01/2023').toISOString().split("T")[0]} 
name="date" 
dateFormat="dd-mm-yyyy" 
className="form-control" {...register("date", {
              required: true,
            })} />
          <div className="text-danger">
            {errors?.date?.type === "required" && <p>Este campo es requerido</p>}</div>
   

<div className="text-danger">{errors?.date?.type === "required" && <p>Seleccione una opción</p>}</div>
</div>

<label id="label_contacto" className="col-sm-1 p-2">Hora</label>
<div className="col-sm-5 p-2">
<select className="form-select" name="hour" {...register("hour", { required: "Seleccione una opción" })}>
    <option value="" selected disabled>Elegí el horario</option>
    <option value="09:00">09:00</option>
    <option value="10:00">10:00</option>
    <option value="11:00">11:00</option>
    <option value="12:00">12:00</option>
    <option value="13:00">13:00</option>
    <option value="14:00">14:00</option>
    <option value="15:00">15:00</option>
    <option value="16:00">16:00</option>
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>
    <option value="19:00">19:00</option>
    <option value="20:00">20:00</option>
    <option value="21:00">21:00</option>
</select> 
<div className="text-danger">{errors?.hour?.type === "required" && <p>Seleccione una opción</p>}</div>
</div>

</div>

<div id="boton">
<button type="submit" value="Submit" className="btn btn-primary">Confirmar</button>
</div>

</form>
</div>
)
}

export default FormReservas;