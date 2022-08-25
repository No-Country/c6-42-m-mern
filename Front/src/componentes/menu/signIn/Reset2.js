import React, {useParams} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modales.css';

function Reset2 (){

/* constructor() {
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
        input["password"] = "";

        this.setState({input:input});
    
        alert('Su contraseña se restableció correctamente.');
      }
    }
    
validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["password"]) {
    isValid = false;
    errors["password"] = "Por favor, ingrese una nueva contraseña.";
  }

this.setState({errors: errors});
console.log(isValid);
return isValid;
} */

const [token] = useParams();
console.log(token);

return(
<body id="reset">
<form action='http://localhost:8080/new-password' method='post'>
  <div id="reset2" class="form-group row p-3">
    <h1>Restablecer contraseña</h1>
    <div className="col-4" >
    <input
    type="password"
    name="password"
    value={this.state.input.password}
    onChange={this.handleChange}
    className="form-control"
    placeholder="Ingrese una nueva contraseña"/>
    </div>
    <div className="text-danger">{this.state.errors.password}</div>    
    <div className="text-center p-3">
    <button type="submit" value="Submit"  className="btn btn-success">Enviar</button>
    </div>   
  </div>   
</form>
</body>
)
}


export default Reset2;