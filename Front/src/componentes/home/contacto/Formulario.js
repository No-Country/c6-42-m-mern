import React from 'react';
 
class Formulario extends React.Component {
 
  render() {
 
    return (
    <form className="mb-2">
        <div class="row mb-4">
        <label for="nya" class="col-sm-3 col-form-label text-right">Nombre y apellido</label>
        <div class="col-sm-6">
        <input type="nya" class="form-control" id="nya" placeholder="Ingrese su nombre y apellido" required/>
        </div>
        </div>

        <div class="row mb-4">
        <label for="email" class="col-sm-3 col-form-label text-right">Email</label>
        <div class="col-sm-6">
        <input type="email" class="form-control" id="email" placeholder="Ingrese su email" required/>
        </div>
        </div>
       

        <div class="row mb-4">
        <label for="asunto" class="col-sm-3 col-form-label text-right">Asunto</label>
        <div class="col-sm-6">
        <input type="asunto" class="form-control" id="email" placeholder="Ingrese el asunto" required/>
        </div>
        </div>
       
        <div class="row mb-4">
        <label for="mensaje" class="col-sm-3 col-form-label text-right">Mensaje</label>
        <div class="col-sm-6">
        <textarea className="form-control" id="mensaje" placeholder="Ingrese su mensaje"required></textarea>
        </div>
        </div>

        <button type="submit" className="btn btn-outline-dark">Enviar</button>
    </form>
    )
    
  }
 
}
 
export default Formulario;