import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { SessionContext } from '../../context/sessionContext';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = ({ closeModal }) => {

  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const { userInfo, setUserInfo } = useContext(SessionContext);
  const navigate = useNavigate();

  function handleChange(event) {
    let newInput = input;
    newInput[event.target.name] = event.target.value;
    setInput({ ...newInput });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      console.log(input, errors);
      let newInput = {};
      newInput["username"] = "";
      newInput["password"] = "";
      setInput({ ...newInput });
    }

    const { data } = await axios.post('http://localhost:5000/login', input, { withCredentials: true });
    Cookie.set('fsuid', JSON.stringify(data));
    closeModal("login");
    setUserInfo(data);
    // navigate( `login/${data.username}`);
    
    // navigate(`login/${data.username}`);
  }


  function validate() {
    let inputCheck = input;
    let newErrors = {};
    let isValid = true;

    if (!inputCheck["username"]) {
      isValid = false;
      errors["username"] = "Por favor, ingrese su usuario.";
      setErrors({ ...newErrors })
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Por favor, ingrese su contraseña.";
      setErrors({ ...newErrors })
    }

    setErrors({ ...newErrors });

    return isValid;
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div class="form-group row mb-3">
        <label id="label_contacto" class="col-3">Usuario</label>
        <div className="col-9" >
          <input
            type="text"
            name="username"
            value={input?.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese su usuario" />
        </div>
        <div className="text-danger">{errors?.username}</div>
      </div>
      <div class="form-group row mb-3">
        <label id="label_contacto" class="col-3">Contraseña</label>
        <div className="col-9" >
          <input
            type="password"
            name="password"
            value={input?.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese su contraseña" />
        </div>
        <div className="text-danger">{errors?.password}</div>
      </div>

      <div className="text-center">
        <button type="submit" value="Submit" className="btn btn-success" >Ingresar</button>
      </div>
    </form>
  )
}

export default Login;
