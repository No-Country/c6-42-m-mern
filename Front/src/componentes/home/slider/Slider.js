import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import tenis1 from './images/tenis.png'
import paddle2 from './images/paddle2.jpg'
import futbol5 from './images/futbol5.png'
import football from './images/football.jpeg'
// import tennis from './images/tennis.jpeg'
// import tennis2 from './images/tennis2.jpeg'

class Slider extends React.Component {
render() {
return (
<div id="slider" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000">
<div className='container-fluid'>
<Carousel controls={false} indicators={false}>
  <Carousel.Item>
  <img className="d-block w-100" src={tenis1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={football} alt="Futbol"/>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={paddle2} alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={futbol5} alt="Third slide"/>
  </Carousel.Item>
</Carousel>
</div>
</div>
)
};
}
export default Slider;

