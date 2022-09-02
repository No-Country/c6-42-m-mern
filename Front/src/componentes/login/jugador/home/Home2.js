import React from 'react';
import Menu from '../menu/Menu';
import Perfil from './miperfil/Miperfil.js'
import Footer from '../footer/Footer';
import Reservas from './reservas/Reservas';
import Contacto from './contacto/Contacto';


const Home2 = () => {
	return <>
		<section id="Menu"><Menu /></section>
		<section id="Perfil"><Perfil /></section>
		<section id="Reservas"><Reservas /></section>
		<section id="Contacto"><Contacto /></section>
		<section id="Footer"><Footer /></section>
	</>
}

export default Home2;