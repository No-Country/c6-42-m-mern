import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modales.css';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import instance from "../../../Utils/axiosInstance"

function Reset2() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
      reset();
      alert('Se restableció la contraseña');
      await instance.post('/new-password/' + token, params);
    } catch (err) {
      console.log(err);
    }
  }

  const { token } = useParams();

  return (
    <body id="reset">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="reset2" class="form-group row p-3">
          <h1>Restablecer contraseña</h1>
          <div className="col-4" >
            <label id="label_contacto" className="col-m-3">Contraseña</label>
            <div className="col-m-9">
              <input
                id="password"
                type="password"
                name="password"
                className="form-control" {...register("password", {
                  required: true
                })} />
            </div>
            <div className="text-danger">{errors?.password?.type === "required" && <p>Este campo es requerido</p>}</div>
          </div>
          <div className="text-center p-3">
            <button type="submit" value="Submit" className="btn btn-success">Enviar</button>
          </div>
        </div>
      </form>
    </body>
  )
}

export default Reset2;