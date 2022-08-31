import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import FormReservas from './Formulario';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import esLocale from 'date-fns/locale/es';

function Reservas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-dark btn-lg btn-block m-3" variant="" onClick={handleShow}>Reservar cancha</Button>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Reserva de cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <FormReservas />
          </MuiPickersUtilsProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Reservas;
