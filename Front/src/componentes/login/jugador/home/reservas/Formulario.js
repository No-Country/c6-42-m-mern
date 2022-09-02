import React, { useContext, useState } from "react";
import 'bootswatch/dist/minty/bootstrap.min.css';
import './reservas.css';
import axios from "axios";
import { SessionContext } from "../../../../context/SessionContext";

function FormReservas() {
	const [dateSelected, changeDateSelected] = useState(new Date());
	const { userInfo, setUserInfo } = useContext(SessionContext);

	const handlePrice = (deporte, date) => {
		const day = new Date(date).getDay();

		if (deporte === 'Fútbol 5') {
			if (day <= 4 ) return 450; 
			else return 500;
		}
		if (deporte === 'Padel') {
			if (day <= 4 ) return 130; 
			else return 140;
		}
		if (deporte === 'Tenis') {
			if (day <= 4 ) return 150; 
			else return 170;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const reservation = {
			username: userInfo.username,
			email: userInfo.email,
			date: event.target.date.value,
			time: event.target.hour.value,
			paymentMethod: event.target.pago.value === 'Tarjeta' ? 'Card' : 'Cash',
			sport: event.target.deporte.value,
			court: event.target.court.value,
			price: handlePrice(event.target.deporte.value, event.target.date.value)
		};

		await axios.post('http://localhost:8080/reservation', reservation, 
		{
			withCredentials: true
		})
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err))
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>

				<label id="label_contacto" className="col-sm-2">Deporte</label>
				<div className="col-sm-4">
					<select className="form-select" name="deporte">
						<option select disabled>Elegí un deporte</option>
						<option>Fútbol 5</option>
						<option>Padel</option>
						<option>Tenis</option>
					</select>
				</div>

				<label id="label_contacto" className="col-sm-2">Club</label>
				<div className="col-sm-4">
					<select className="form-select" name="court">
						<option select disabled>Elegí un club</option>
						<option>Pedro Bidegain</option>
						<option>Almagro</option>
						<option>25 de Mayo</option>
						<option>Grün</option>
						<option>La Terraza</option>
					</select>
				</div>

				<div class="form-group row p-2">
					<label id="label_contacto" className="col-sm-2">Fecha</label>
					<input
						type="date"
						id='datepicker'
						className="form-select"
						name="date"
						// value={dateSelected}
						onChange={changeDateSelected}
						maxDate={'01/01/2023'}
						format="dd/MM/yyyy" />
				</div>

				<label id="label_contacto" className="col-sm-2">Hora</label>
				<div className="col-sm-4">
					<select className="form-select" name="hour">
						<option select disabled>Elegí el horario</option>
						<option>09:00</option>
						<option>10:00</option>
						<option>11:00</option>
						<option>12:00</option>
						<option>13:00</option>
						<option>14:00</option>
						<option>15:00</option>
						<option>16:00</option>
						<option>17:00</option>
						<option>18:00</option>
						<option>19:00</option>
						<option>20:00</option>
						<option>21:00</option>
					</select>
				</div>

				<label id="label_contacto" className="col-sm-2">Metodo de pago</label>
				<div className="col-sm-4">
					<select className="form-select" name="pago">
						<option select disabled>Elegí un metodo de pago</option>
						<option>Tarjeta</option>
						<option>Efectivo</option>
					</select>
				</div>

				<div id="boton">
					<button type="submit" value="Submit" className="btn btn-primary">Confirmar</button>
				</div>

			</form>
		</div>
	)
}

export default FormReservas;