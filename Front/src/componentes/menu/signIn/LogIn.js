import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{

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
        input["userName"] = "";
        input["password"] = "";
        this.setState({input:input});
    
        alert('');
      }
    }
    
    validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
    
      if (!input["userName"]) {
        isValid = false;
        errors["userName"] = "Por favor, ingrese su usuario.";
      }
    
    /*   if (typeof input['name"] !== "undefined"){
        const sim = /^\S*$/;
        if(input["name"].length < 3 || !sim.test(input["name"])){
            isValid = false;
            errors["name"] = "Please enter valid username.";
        }
      } */

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Por favor, ingrese su contraseña.";
      }
    


      this.setState({
        errors: errors
      });
      
      return isValid;
    }

render(){
    return(
        <form onSubmit={this.handleSubmit} className="mb-3">
            <div class="form-group row mb-3">
              <label class="col-3">Usuario</label>
              <input
                type="text"
                name="userName"
                value={this.state.input.userName}
                onChange={this.handleChange}
                className="col-9" 
                placeholder="Ingrese su usuario"/>
            <div className="text-danger">{this.state.errors.userName}</div>    
            </div>
            <div class="form-group row mb-3">
              <label class="col-3">Contraseña</label>
              <input
                type="text"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                className="col-9" 
                placeholder="Ingrese su contraseña"/>
            <div className="text-danger">{this.state.errors.password}</div>    
            </div>

        <div className="text-center">
        <button type="submit" value="Submit"  className="btn btn-success">Ingresar</button>
        </div>
        
        {/* <button type="submit" value="Submit"  className="btn btn-secondary">Cancelar</button> */}
        
        </form>
    )
}
}

export default Login;