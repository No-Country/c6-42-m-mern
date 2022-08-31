import React, { useContext } from 'react';
import Menu from '../menu/Menu'; 
import Slider from './slider/Slider.js';
import Footer from '../footer/Footer'; 
import Nosotros from './nosotros/Nosotros'; 
import Clubes from './clubes/Clubes'
import Tarifas from './tarifas/Tarifas'; 
import Profesores from './profesores/Profesores'; 
import Contacto from './contacto/Contacto'; 
import Slider2 from './profesores/slider/Slider2.js';
import { SessionContext } from '../context/sessionContext';

const Home = () => {
	const { userInfo } = useContext(SessionContext);
  console.log((userInfo));
		return(
			<>
				<section id="Menu">
				<Menu/>
				<Slider/>
				</section>
				<section id="Nosotros"><Nosotros/></section>
				<section id="Clubes"><Clubes/></section>
				<section id="Profesores"><Profesores/>
				<Slider2/>
				</section>
				<section id="Tarifas"><Tarifas/></section>
				<section id="Contacto"><Contacto/></section>
				<section id="Footer"><Footer/></section>
	  		</>
		)
}
 
export default Home;