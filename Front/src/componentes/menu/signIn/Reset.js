import React from "react";
import instance from "../../../Utils/axiosInstance";
import { useForm } from "react-hook-form";

function Reset({closeModal}){

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
     
      await instance.put("/forgot-password", params);
      alert('Recibirá un email para restablecer su contraseña.');
      reset();
      closeModal();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <div class="form-group row mb-3">
        <label id="label_contacto" class="col-3">Email</label>
        <div className="col-9" >
            <input
              className="form-control"
              name="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
              })} />
          </div>
          <div className="text-danger">
            {errors?.email?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.email?.type === "pattern" && (<p>Ingrese un email válido</p>)}</div>
          </div>
  
        

        <div className="text-center">
          <button type="submit" value="Submit" className="btn btn-success">Enviar</button>
        </div>
      </form>
    )
  }

export default Reset;