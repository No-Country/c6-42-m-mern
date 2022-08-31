import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import instance from "../../../Utils/axiosInstance"

export default function App() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const dateOfBirth = useRef({});
  dateOfBirth.current = watch("dateOfBirth", "");

  function calcular_edad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    console.log(edad);
    return edad;
  }

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      Object.entries(data).map(pair => {
        return params.append(pair[0], pair[1]);
      })
      reset();
      await instance.post("register", params);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formulario">
      <div class="form-group row mb-3">
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Nombre</label>
          <div className="col-m-9">
            <input name="firstName" className="form-control"
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })} />
          </div>
          <div className="text-danger">
            {errors?.firstName?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.firstName?.type === "maxLength" && (<p>El nombre no puede tener más de 20 caracteres</p>)}
            {errors?.firstName?.type === "pattern" && (<p>Solo se permiten caracteres alfabéticos</p>)}</div>
        </div>

        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Apellido</label>
          <div className="col-m-9">
            <input name="lastName" className="form-control"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })} />
          </div>
          <div className="text-danger">
            {errors?.lastName?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.lastName?.type === "maxLength" && (<p>El apellido no puede tener más de 20 caracteres</p>)}
            {errors?.lastName?.type === "pattern" && (<p>Solo se permiten caracteres alfabéticos</p>)}</div>
        </div>
      </div>

      <div class="form-group row mb-3">
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">DNI</label>
          <div className="col-m-9" >
            <input name="dni" className="form-control"
              {...register("dni", {
                required: true,
                pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
                maxLength: 8,
              })} />
          </div>
          <div className="text-danger">
            {errors?.dni?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.dni?.type === "pattern" && (<p>Solo se permiten caracteres numéricos</p>)}
            {errors?.dni?.type === "maxLength" && (<p>Solo se permiten 8 dígitos</p>)}</div>
        </div>

        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Género</label>
          <div class="col-m-9">
            <select className="form-select" name="gender" {...register("gender", { required: "Seleccione una opción" })}>
              <option value="" selected disabled>Seleccione género</option>
              <option value="female">Femenino</option>
              <option value="male">Masculino</option>
              <option value="other">Prefiero no responder</option>
            </select>
          </div>
          <div className="text-danger">{errors?.gender?.type === "required" && <p>Seleccione una opción</p>}</div>
        </div>
      </div>

      <div class="form-group row mb-3">
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Dirección</label>
          <div className="col-m-9" >
            <input name="street" className="form-control"
              {...register("street", {
                required: true
              })} />
          </div>
          <div className="text-danger">{errors.street?.type === 'required' && "Este campo es requerido"}</div>
        </div>
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Ciudad</label>
          <div className="col-m-9" >
            <input name="city" className="form-control" {...register("city", { required: true })} />
          </div>
          <div className="text-danger">{errors.city?.type === 'required' && "Este campo es requerido"}</div>
        </div>
      </div>

      <div class="form-group row mb-3" >
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Celular</label>
          <div className="col-m-9" >
            <input name="phoneNumber" className="form-control" {...register("phoneNumber", {
              required: true,
              pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ }
            })} />
          </div>
          <div className="text-danger">
            {errors?.phoneNumber?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.phoneNumber?.type === "pattern" && (<p>Solo se permiten caracteres numéricos</p>)}</div>
        </div>

        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Fecha de nacimiento</label>
          <div className="col-m-9">
            <input type="date" max={new Date().toISOString().split("T")[0]} name="dateOfBirth" dateFormat="dd-mm-yyyy" className="form-control" {...register("dateOfBirth", {
              required: true,
              validation: edad => edad === calcular_edad(dateOfBirth.current) || "Usted es mayor de edad",
            })} />
          </div>
          <div className="text-danger">
            {errors?.dateOfBirth?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.dateOfBirth?.type === "maxDate" && (<p>Fecha maxima hoy</p>)}</div>
        </div>
      </div>

      <div class="form-group row mb-3">
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Email</label>
          <div className="col-m-9">
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
        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Usuario</label>
          <div className="col-m-9">
            <input name="username" className="form-control" {...register("username", { required: true, maxLength: 20 })} />
          </div>
          <div className="text-danger">
            {errors?.lastName?.type === "required" && <p>Este campo es requerido</p>}
            {errors?.lastName?.type === "maxLength" && (<p>El usuario no puede tener más de 20 caracteres</p>)}
          </div>
        </div>
      </div>

      <div class="form-group row mb-3">
        <div className="col-6">
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

        <div className="col-6">
          <label id="label_contacto" className="col-m-3">Repetir contraseña</label>
          <div className="col-m-9">
            <input
              type="password"
              name="password2"
              className="form-control"
              {...register("password2", {
                required: true,
                validate: value => value === password.current || "Las contraseña no coinciden"
              })} />
          </div>
          <div className="text-danger">
            {errors?.password2?.type === "required" && <p>Repita su contraseña</p>}
            {errors.password2 && <p>{errors.password2.message}</p>}</div>
        </div>
      </div>

      <div className="text-center">
        <button type="submit" value="Submit" className="btn btn-success align-center">Enviar</button>
      </div>
    </form>
  );
}