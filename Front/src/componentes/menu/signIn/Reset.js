import React from 'react';
import instance from "../../../Utils/axiosInstance"
class Reset extends React.Component {
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
    input["email"] = event.target.value;
    this.setState({input});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      instance.put("/forgot-password", { data: this.state.input });
      let input = {};
      input["email"] = "";
      this.setState({ input: input });
      alert('Recibirá un email para restablecer su contraseña.');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Por favor, ingrese su correo electrónico.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern2 = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern2.test(input["email"])) {
        isValid = false;
        errors["email"] = "Por favor, ingrese un correo electrónico válido.";
      }
    }

    this.setState({errors});
    return isValid;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-3">
        <div class="form-group row mb-3">
          <label id="label_contacto" class="col-3">Email</label>
          <div className="col-9" >
            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Ingrese su email" />
          </div>
          <div className="text-danger">{this.state.errors.email}</div>
        </div>
        <div className="text-center">
          <button type="submit" value="Submit" className="btn btn-success">Enviar</button>
        </div>
        {/* <button type="submit" value="Submit"  className="btn btn-secondary">Cancelar</button> */}
      </form>
    )
  }
}

export default Reset;