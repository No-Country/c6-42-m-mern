import React from 'react';
import Login from '../signIn/LogIn';

class Validation extends React.Component{

render(){
    return(
<body>
<div class="p-3"><h1>Su cuenta fue validada con éxito</h1>
</div>
<div class="p-3">
<div className="btn btn-light p-3"><h3>Iniciar sesión</h3><Login/></div>
</div>
<div class="p-3">
<button type="button" className="btn btn-warning"><a className="enlace" id="enlace" href="/">Volver al sitio principal</a></button>
</div>
</body>
)
}
}

export default Validation;