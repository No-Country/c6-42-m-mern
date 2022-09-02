import React from 'react';
import Contact from './Formulario';

class Contacto extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <section className="text-center">
            <div className="container">
              <h1 className="display-3">Contacto</h1>
            </div>
          </section>
        </div>

        <Contact />

      </>
    )

  }
}

export default Contacto;