import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profesor1 from './profesor1.jpg';
import profesor2 from './profesor2.jpg';
import profesor3 from './profesor3.jpg';
import profesor4 from './profesor4.jpg';
import profesor5 from './profesor5.jpg';
import './slider2.css';

class Slider2 extends React.Component {
render() {
return (
<div id="slider2" className="carousel slide carousel-fade" data-bs-ride="carousel">
<div className='container-fluid' >
<Carousel controls={true}>
  <Carousel.Item id="carousel-item2">
  <img className="center" src={profesor1} alt="Profesor1"/>
   {/* <Carousel.Caption>
        <h3>Profesor 1</h3>
        <p>Profesor especializado en clases de tenis. Ex número 24 ATP.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item id="carousel-item2">
  <img className="center" src={profesor2} alt="Profesor2"/>
{/*    <Carousel.Caption>
        <h3>Profesor 2</h3>
        <p>Profesor especializado en clases de tenis. Ex número 24 ATP.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item id="carousel-item2">
  <img className="center" src={profesor3} alt="Profesor3"/>
{/*    <Carousel.Caption>
        <h3>Profesor 3</h3>
        <p>Profesor especializado en clases de tenis. Ex número 24 ATP.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item id="carousel-item2">
  <img className="center" src={profesor4} alt="Profesor4"/>
{/*    <Carousel.Caption>
        <h3>Profesor 4</h3>
        <p>Profesor especializado en clases de tenis. Ex número 24 ATP.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item id="carousel-item2">
  <img className="center" src={profesor5} alt="Profesor5"/>
{/*    <Carousel.Caption>
        <h3>Profesor 5</h3>
        <p>Profesor especializado en clases de tenis. Ex número 24 ATP.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</div>
</div>
)
};
}
export default Slider2;
