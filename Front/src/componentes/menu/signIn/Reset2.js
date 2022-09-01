import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './modales.css';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import instance from "../../../Utils/axiosInstance"

function Reset2() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
      reset();
      alert('Se restableció la contraseña');
      await instance.post('/new-password/'+token,params);
    } catch (err) {
      console.log(err);
    }
  }

  const {token} = useParams();
  console.log(token)

  return (
    <body id="reset">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="reset2" class="form-group row p-4">
          <h1>Restablecer contraseña</h1>
          <div className="row p-2">
          <label id="label_contacto" className="col-2 p-2">Contraseña</label>
          <div className="col-4 p-2">
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
          
          <div className="row p-2">
          <label id="label_contacto" className="col-2 p-2">Repetir contraseña</label>
          <div className="col-4 p-2">
            <input
              type="password"
              name="password2"
              className="form-control"
              {...register("password2", {
                required: true,
                validate: value => value === password.current || "Las contraseña no coinciden"
              })} />
          </div>    
          <div className="text-danger">{errors?.password2?.type === "required" && <p>Repita su contraseña</p>}
          {errors.password2 && <p>{errors.password2.message}</p>}</div>
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