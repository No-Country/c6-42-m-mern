import React from 'react';
import instance from "../../../Utils/axiosInstance";

class Login extends React.Component {

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
    this.setState({ input });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      let input = {};
      input["username"] = "";
      input["password"] = "";
      const params = new URLSearchParams();
      Object.entries(this.state.input).map(pair => params.append(pair[0], pair[1]));
      instance.post("login", params);
      this.setState({ input: input });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Por favor, ingrese su usuario.";
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-3">
        <div class="form-group row mb-3">
          <label id="label_contacto" class="col-3">Usuario</label>
          <div className="col-9" >
            <input
              type="text"
              name="username"
              value={this.state.input.username}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Ingrese su usuario" />
          </div>
          <div className="text-danger">{this.state.errors.username}</div>
        </div>
        <div class="form-group row mb-3">
          <label id="label_contacto" class="col-3">Contraseña</label>
          <div className="col-9" >
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Ingrese su contraseña" />
          </div>
          <div className="text-danger">{this.state.errors.password}</div>
        </div>

        <div className="text-center">
          <button type="submit" value="Submit" className="btn btn-success">Ingresar</button>
        </div>

        {/* <button type="submit" value="Submit"  className="btn btn-secondary">Cancelar</button> */}

      </form>
    )
  }
}

export default Login;