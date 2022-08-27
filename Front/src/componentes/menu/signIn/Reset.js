import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Reset extends React.Component{

<<<<<<< Updated upstream
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
    input[event.target.email] = event.target.value;
    this.setState({input});}
       
handleSubmit(event) {
    event.preventDefault();
      if(this.validate()){
        console.log(this.state);
        let input = {};
        input["email"] = "";

        this.setState({input:input});
    
        alert('Recibirá un email para restablecer su contraseña.');
      }
    }
=======
constructor() {
  super();
  this.state = {
    input: {},
    errors: {}};
   
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
    input["email"] = "";

    this.setState({input:input});
    console.log(input);
    
    alert('Recibirá un email para restablecer su contraseña.');
    }
  }
>>>>>>> Stashed changes
    
validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;

<<<<<<< Updated upstream
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
=======
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
  
this.setState({errors: errors});
console.log(isValid);
>>>>>>> Stashed changes
return isValid;
}

render(){
    return(
<<<<<<< Updated upstream
        <form onSubmit={this.handleSubmit} className="mb-3">
=======
        <form action='http://localhost:8080/forgot-password' method='post' id="form-reset" className="mb-3">
>>>>>>> Stashed changes
            <div class="form-group row mb-3">
              <label id="label_contacto" class="col-3">Email</label>
              <div className="col-9" >
              <input
<<<<<<< Updated upstream
                type="email"
=======
                type="text"
>>>>>>> Stashed changes
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Ingrese su email"/>
              </div>
            <div className="text-danger">{this.state.errors.email}</div>    
            </div>
        
        <div className="text-center">
<<<<<<< Updated upstream
        <button type="submit" value="Submit"  className="btn btn-success">Enviar</button>
        </div>
        
        {/* <button type="submit" value="Submit"  className="btn btn-secondary">Cancelar</button> */}
        
=======
        <button type="submit" value="Submit" className="btn btn-success align-center">Enviar</button>
        </div>
        
>>>>>>> Stashed changes
        </form>
    )
}
}

<<<<<<< Updated upstream
export default Reset;
=======
export default Reset;
>>>>>>> Stashed changes
