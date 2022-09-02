
import React from 'react';
import './nopage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceTired } from '@fortawesome/free-regular-svg-icons';

class NoPage extends React.Component {

    render() {
        return (
            <body>

                <div class="p-3"><FontAwesomeIcon icon={faFaceTired} size='10x' /></div>
                <div class="p-3"><h1>Ups, algo salió mal</h1></div>
                <div class="p-3">
                    <button type="button" className="btn btn-warning"><a className="enlace" id="enlace" href="/">Volver al sitio principal</a></button>
                </div>
            </body>
        )
    }
}

export default NoPage;