import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../../Utils/axiosInstance"

export default function Login({closeModal}) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
      reset();
      closeModal();
      await instance.post("login", params);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
            <div class="form-group row mb-3">
              <label id="label_contacto" class="col-3">Usuario</label>
              <div className="col-9" >
              <input name="username" className="form-control"
              {...register("username", {
                required: true,
              })} />
          </div>
          <div className="text-danger">
          {errors?.username?.type === "required" && <p>Este campo es requerido</p>}</div>
          </div>
            <div class="form-group row mb-3">
              <label id="label_contacto" class="col-3">Contraseña</label>
              <div className="col-9" >
              <input 
              type="password"
              name="password" 
              className="form-control" {...register("password", {
              required: true,
              })} />
          </div>
          <div className="text-danger">
            {errors?.password?.type === "required" && <p>Este campo es requerido</p>}</div>
          </div>

        <div className="text-center">
        <button type="submit" value="Submit"  className="btn btn-success">Ingresar</button>
        </div>
        </form>
    )
}
