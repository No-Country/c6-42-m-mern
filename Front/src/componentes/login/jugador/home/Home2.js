import React, { useContext } from 'react';
import Menu from '../menu/Menu';
import Perfil from './miperfil/Miperfil.js'
import Footer from '../footer/Footer';
import Reservas from './reservas/Reservas';
import Contacto from './contacto/Contacto';
import { SessionContext } from '../../../context/sessionContext';


const Home2 = () => {
	const { userInfo } = useContext(SessionContext);

	return ( <>
		<section id="Menu"><Menu /></section>
		<section id="Perfil">{ userInfo?.username ? <Perfil user={userInfo} /> : 'No userblablabla' }</section>
		<section id="Reservas"><Reservas /></section>
		<section id="Contacto"><Contacto /></section>
		<section id="Footer"><Footer /></section>
	</>)

}

export default Home2;