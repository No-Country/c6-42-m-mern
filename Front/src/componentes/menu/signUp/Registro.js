<<<<<<< Updated upstream
import React,{ useRef }  from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const dateOfBirth = useRef({});
  dateOfBirth.current = watch("dateOfBirth", "");
  
function calcular_edad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
  }
  console.log(edad);
  return edad;
}

return (
<form action='http://localhost:8080/register' method='post' id="formulario">
<div class="form-group row mb-3">
  <div className="col-6">
  <label id="label_contacto" className="col-m-3">Nombre</label>
  <div className="col-m-9">
  <input name="firstName" className="form-control" 
    {...register("firstName", {
    required: true,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/i
    })}/>
  </div>  
  <div className="text-danger">
  {errors?.firstName?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.firstName?.type === "maxLength" && (<p>El nombre no puede tener más de 20 caracteres</p>)}
  {errors?.firstName?.type === "pattern" && (<p>Solo se permiten caracteres alfabéticos</p>)}</div>
  </div>

  <div className="col-6">
  <label id="label_contacto" className="col-m-3">Apellido</label>
  <div className="col-m-9">
  <input name="lastName" className="form-control"
  {...register("lastName", { 
    required: true,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/i
  })}/>
  </div>  
  <div className="text-danger">
  {errors?.lastName?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.lastName?.type === "maxLength" && (<p>El apellido no puede tener más de 20 caracteres</p>)}
  {errors?.lastName?.type === "pattern" && (<p>Solo se permiten caracteres alfabéticos</p>)}</div>
  </div>
</div>

<div class="form-group row mb-3">
  <div className="col-6">
  <label id="label_contacto" className="col-m-3">DNI</label>
  <div  className="col-m-9" >
  <input name="dni" className="form-control" 
  {...register("dni", { 
    required: true, 
    pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/},
    maxLength: 8,
  })}/>
  </div>
  <div className="text-danger">
  {errors?.dni?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.dni?.type === "pattern" && (<p>Solo se permiten caracteres numéricos</p>)}
  {errors?.dni?.type === "maxLength" && (<p>Solo se permiten 8 dígitos</p>)}</div> 
  </div>

<div className="col-6">
<label id="label_contacto" className="col-m-3">Género</label>
<div class="col-m-9">
<select className="form-select" name="gender" {...register("gender", {required: "Seleccione una opción"})}>
<option value="" selected disabled>Seleccione género</option>
<option value="female">Femenino</option>
<option value="male">Masculino</option>
<option value="other">Prefiero no responder</option>
</select> 
</div>
<div className="text-danger">{errors?.gender?.type === "required" && <p>Seleccione una opción</p>}</div>
</div>
</div>

<div class="form-group row mb-3">
<div className="col-6">
<label id="label_contacto" className="col-m-3">Dirección</label>
<div className="col-m-9" >
<input name="street" className="form-control" 
{...register("street", { 
required: true })}/>
</div>
<div className="text-danger">{errors.street?.type === 'required' && "Este campo es requerido"}</div>
</div>    
<div className="col-6">
<label id="label_contacto" className="col-m-3">Ciudad</label>
<div className="col-m-9" >
<input name="city" className="form-control" {...register("city", { required: true })}/>
</div>
<div className="text-danger">{errors.city?.type === 'required' && "Este campo es requerido"}</div>
</div>
</div>

<div class="form-group row mb-3" >
  <div className="col-6">
  <label id="label_contacto" className="col-m-3">Celular</label>
  <div className="col-m-9" >
  <input name="phoneNumber" className="form-control" {...register("phoneNumber", {
  required: true, 
  pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/}
 })}/>
  </div>
  <div className="text-danger">
  {errors?.phoneNumber?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.phoneNumber?.type === "pattern" && (<p>Solo se permiten caracteres numéricos</p>)}</div> 
  </div>
      
  <div className="col-6">
  <label id="label_contacto" className="col-m-3">Fecha de nacimiento</label>
  <div className="col-m-9">
  <input type="date" max={new Date().toISOString().split("T")[0]} name="dateOfBirth" dateFormat="dd-mm-yyyy" className="form-control" {...register("dateOfBirth", { 
  required: true,
  validation: edad => edad === calcular_edad(dateOfBirth.current) || "Usted es mayor de edad",
  })}/>
  </div> 
  <div className="text-danger">
  {errors?.dateOfBirth?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.dateOfBirth?.type === "maxDate" && (<p>Fecha maxima hoy</p>)}</div>
  </div>
</div>

<div class="form-group row mb-3">
<div className="col-6">
<label id="label_contacto" className="col-m-3">Email</label>
<div className="col-m-9">
<input
className="form-control"
name="email"
type="email"
{...register("email", {
required: true,
pattern: new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
})}/>
</div>
<div className="text-danger">
{errors?.email?.type === "required" && <p>Este campo es requerido</p>}
{errors?.email?.type === "pattern" && (<p>Ingrese un email válido</p>)}</div>
        </div>
=======
import React from 'react';

class Registro2 extends React.Component {

constructor() {
    super();
    this.state = {
        input: {},
        errors: {}
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({input});}
       
handleSubmit(event) {
    event.preventDefault();
      if(this.validate()){
        console.log(this.state);
        let input = {};
        let errors={};
        input["firstName"] = "";
        input["lastName"] = "";
        input["dni"] = "";
        input["street"] = "";
        input["city"] = "";
        input["phoneNumber"] = "";
        input["dateOfBirth"] = "";
        input["email"] = "";
        input["username"] = "";
        input["password"] = "";
        input["password2"] = "";
        input["nameTutor"]="";
        input["dniTutor"]="";
        input["phoneTutor"]="";
        errors["dateOfBirth"] = "";

        this.setState({input:input});
        
        alert('Recibirá un mail para confirmar su cuenta. Muchas gracias!');
        
      }
    }

  calcular_edad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
          edad--;
    }
    return edad;
  }

  validate(event){     
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Por favor, ingrese su nombre.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Por favor, ingrese su apellido.";
    }
  
    if (!input["dni"]) {
      isValid = false;
      errors["dni"] = "Por favor, ingrese su DNI.";
    }

    if (typeof input["dni"] !== "undefined") { 
      if( !(/^\d{8}$/.test(input["dni"])) ) {
      isValid = false;
      errors["dni"] = "Solo se permiten 8 caracteres numéricos. Por ej.: 22743134";
      }
    }

    if (!input["street"]) {
      isValid = false;
      errors["street"] = "Por favor, ingrese su dirección.";
    }

    if (!input["city"]) {
      isValid = false;
      errors["city"] = "Por favor, ingrese su ciudad.";
    }

    if (!input["phoneNumber"]) {
      isValid = false;
      errors["phoneNumber"] = "Por favor, ingrese su celular.";
    } 

    if (typeof input["phoneNumber"] !== "undefined") { 
      if(isNaN(input["phoneNumber"]) ) {
      isValid = false;
      errors["phoneNumber"] = "Solo se permiten valores numéricos (sin +, () ni -)";
      }
    }

    if (!input["dateOfBirth"]) {
      isValid = false;
      errors["dateOfBirth"] = "Por favor, ingrese su fecha de nacimiento.";

    } 
    
    if (typeof input["dateOfBirth"] !== "undefined") { 
    var edad=this.calcular_edad(input["dateOfBirth"]);
      if ((edad<18) && (document.getElementById("tutor").className="invisible")) {
        errors["dateOfBirth"] = "Es menor de edad. Debe completar los datos de su tutor/a.";
        document.getElementById("tutor").classList.replace("invisible", "visible");

        if (!input["nameTutor"]) {
          isValid = false;
          errors["nameTutor"] = "Por favor, ingrese el nombre del tutor/a.";
        }
        
        if (!input["dniTutor"]) {
          isValid = false;
          errors["dniTutor"] = "Por favor, ingrese el dni del tutor/a.";
        }

        if (typeof input["dniTutor"] !== "undefined") { 
          if( !(/^\d{8}$/.test(input["dniTutor"])) ) {
          isValid = false;
          errors["dniTutor"] = "Solo se permiten 8 caracteres numéricos. Por ej.: 22743134";
          }
        }
        
        if (!input["phoneTutor"]) {
          isValid = false;
          errors["phoneTutor"] = "Por favor, ingrese el teléfono del tutor/a."; 
        }

        if (typeof input["phoneTutor"] !== "undefined") { 
          if(isNaN(input["phoneTutor"]) ) {
          isValid = false;
          errors["phoneTutor"] = "Solo se permiten valores numéricos (sin +, () ni -)";
          }
        }
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Por favor, ingrese su correo electrónico.";
    }
  
    if (typeof input["email"] !== "undefined") {   
      var pattern2= new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern2.test(input["email"])) {
        isValid = false;
        errors["email"] = "Por favor, ingrese un correo electrónico válido.";
      }
    }
  
    if (!input["userName"]) {
      isValid = false;
      errors["userName"] = "Por favor, ingrese su usuario";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Por favor, ingrese su contraseña";
    }
    
    if (input["password"] !== input["password2"] ) {
      isValid = false;
      errors["password2"] = "Las contraseñas ingresadas no coinciden";
    } 

  this.setState({
  errors: errors
  });
  console.log(isValid);
  return isValid;
  
  } 

    render() {
        return (
        <form action='http://localhost:8080/register' method='post'>
        <div class="form-group row mb-3">
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Nombre</label>
        <div className="col-m-9">
        <input
              type="text" 
              name="firstName"
              id="firstName"
              value={this.state.input.firstName}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Ingrese aquí su nombre"
              />
        </div>  
        <div className="text-danger">{this.state.errors.firstName}</div>
        </div>
           
        
      
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Apellido</label>
        <div className="col-m-9">
        <input
              type="text" 
              name="lastName"
              id="lastName" 
              value={this.state.input.lastName}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Ingrese aquí su apellido" 
              autofocus/>
        </div>
        <div className="text-danger">{this.state.errors.lastName}</div>
        </div>
        </div> 

        <div class="form-group row mb-3">
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">DNI</label>
        <div  className="col-m-9" >
        <input
            type="text" 
            name="dni"
            id="dni" 
            value={this.state.input.dni}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese su número de documento"
            autofocus/>
        </div>
        <div className="text-danger">{this.state.errors.dni}</div>
        
        </div>

        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Género</label>
        <div class="col-m-9">
        <select className="form-select" name="gender">
        <option disabled selected>Seleccione género</option>
        <option>Femenino</option>
        <option>Masculino</option>
        <option>Prefiero no responder</option>
        </select> 
        </div>
        </div>
        </div>

        
        <div class="form-group row mb-3">
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Dirección</label>
        <div className="col-m-9" >
            <input
            type="text" 
            name="street"
            id="street" 
            value={this.state.input.street}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese aquí la dirección"
            autofocus/>
        <div className="text-danger">{this.state.errors.street}</div>
        </div>
        </div>
    
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Ciudad</label>
        <div className="col-m-9" >
            <input
            type="text" 
            name="city"
            id="city" 
            value={this.state.input.city}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese aquí la ciudad"
            autofocus/>
         <div className="text-danger">{this.state.errors.city}</div>
        </div>
        </div>
        </div>
            
        <div class="form-group row mb-3" >
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Celular</label>
        <div className="col-m-9" >
        <input
              type="phone" 
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.input.phoneNumber}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Ingrese su número de teléfono"
              autofocus/>
        </div>
             
         <div className="text-danger">{this.state.errors.phoneNumber}</div>      
            </div>
        
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Fecha de nacimiento</label>
        <div className="col-m-9">
            <input
            type="date" 
            id="dateOfBirth" 
            name="dateOfBirth" 
            value={this.state.input.dateOfBirth}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese aquí su fecha de nacimiento"
            autofocus/>
         <div className="text-danger">{this.state.errors.dateOfBirth}</div>
        </div>
        </div>
        </div>
       

        <div class="form-group row mb-3">
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Email</label>
        <div className="col-m-9">
            <input
            type="text" 
            id="email"
            name="email"
            value={this.state.input.email}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese aquí su email"
            autofocus/>
        </div>
        <div className="text-danger">{this.state.errors.email}</div>    
        </div>
>>>>>>> Stashed changes

        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Usuario</label>
        <div className="col-m-9">
<<<<<<< Updated upstream
        <input name="username" className="form-control" {...register("username", { required: true, maxLength: 20 })}/>
        </div>
  <div className="text-danger">
  {errors?.lastName?.type === "required" && <p>Este campo es requerido</p>}
  {errors?.lastName?.type === "maxLength" && (<p>El usuario no puede tener más de 20 caracteres</p>)}
</div>
</div>
</div>

<div class="form-group row mb-3">
  <div className="col-6">
    <label id="label_contacto" className="col-m-3">Contraseña</label>
    <div className="col-m-9">
    <input 
    id="password" 
    type="password" 
    name="password" 
    className="form-control" {...register("password", { 
    required: true})}/>
    </div>
    <div className="text-danger">{errors?.password?.type === "required" && <p>Este campo es requerido</p>}</div>
  </div> 

  <div className="col-6">
    <label id="label_contacto" className="col-m-3">Repetir contraseña</label>
    <div className="col-m-9">
    <input 
    type="password" 
    name="password2" 
    className="form-control"
    {...register("password2", { 
    required: true, 
    validate: value => value === password.current || "Las contraseña no coinciden"
    })}/>
    </div>
  <div className="text-danger">
  {errors?.password2?.type === "required" && <p>Repita su contraseña</p>}
  {errors.password2 && <p>{errors.password2.message}</p>}</div>
</div>
</div>

<div className="text-center">
<button type="submit" value="Submit" className="btn btn-success align-center">Enviar</button>
</div>
</form>

  );
}
=======
            <input
            type="text" 
            id="username"
            name="username"
            value={this.state.input.username}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Ingrese su usuario"
            autofocus/>
        <div className="text-danger">{this.state.errors.username}</div>
        </div>
        </div>
        </div>
        
        <div class="form-group row mb-3">
        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Contraseña</label>
        <div className="col-m-9">
            <input
            type="password" 
            id="password" 
            className="form-control" 
            name="password"
            value={this.state.input.password}
            onChange={this.handleChange}
            placeholder="Ingrese aquí su contraseña"/>
        </div>
        <div className="text-danger">{this.state.errors.password}</div>
        </div> 

        <div className="col-6">
        <label id="label_contacto" className="col-m-3">Repetir contraseña</label>
        <div className="col-m-9">
            <input
            type="password" 
            className="form-control" 
            id="password2"
            name="password2"
            value={this.state.input.password2}
            onChange={this.handleChange}
            placeholder="Repita su contraseña"
            autofocus/>
        </div>
        <div className="text-danger">{this.state.errors.password2}</div>
        </div>
        </div>

        <div className="text-center">
        <button type="submit" value="Submit" className="btn btn-success align-center">Enviar</button>
        </div>

        <div id="tutor" className="invisible">
        <h3>Completar datos de tutor/a</h3>
        
        <div class="form-group row mb-3">
        <label id="label_contacto" className="col-3">Nombre y apellido</label>
        <input
              type="text" 
              name="nameTutor"
              id="nameTutor"
              value={this.state.input.nameTutor}
              onChange={this.handleChange}
              className="col-9" 
              placeholder="Ingrese nombre y apellido del tutor/a"
              />
        <div className="text-danger">{this.state.errors.nameTutor}</div>
        </div>

        <div class="form-group row mb-3">
        <label id="label_contacto" className="col-3">DNI</label>
        <input
              type="text" 
              name="dniTutor"
              id="dniTutor"
              value={this.state.input.dniTutor}
              onChange={this.handleChange}
              className="col-9" 
              placeholder="Ingrese dni del tutor/a"
              autofocus/>
        <div className="text-danger">{this.state.errors.dniTutor}</div>
        </div>

        <div class="form-group row mb-3">
        <label id="label_contacto" className="col-3">Celular</label>
        <input
              type="text" 
              name="phoneTutor"
              id="phoneTutor"
              value={this.state.input.phoneTutor}
              onChange={this.handleChange}
              className="col-9" 
              placeholder="Ingrese teléfono del tutor/a"
              autofocus/>
        <div className="text-danger">{this.state.errors.phoneTutor}</div>
        </div>

        </div>

        
        </form>
        ) 
    };
};

export default Registro2;
>>>>>>> Stashed changes
