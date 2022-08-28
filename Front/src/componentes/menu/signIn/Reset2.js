import React, { useParams, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modales.css';

function Reset2() {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  function handleChange(event) {
    input[event.target.name] = event.target.value;
    this.setState({ input });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("input:", input);
    if (validate()) {
      let input = {};
      input["password"] = "";
      setInput({ input });
      alert('Su contraseña se restableció correctamente.');
    }
  }

  function validate() {
    if (!input["password"]) {
      setIsValid(false);
      errors["password"] = "Por favor, ingrese una nueva contraseña.";
    }
    setErrors({ errors });
    return isValid;
  }

  const [token] = useParams();
  console.log(token)
  return (
    <body id="reset">
      <form onSubmit={handleSubmit}>
        <div id="reset2" class="form-group row p-3">
          <h1>Restablecer contraseña</h1>
          <div className="col-4" >
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Ingrese una nueva contraseña" />
          </div>
          <div className="text-danger">{errors.password}</div>
          <div className="text-center p-3">
            <button type="submit" value="Submit" className="btn btn-success">Enviar</button>
          </div>
        </div>
      </form>
    </body>
  )
}

export default Reset2;