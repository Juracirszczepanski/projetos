import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Img_banner1 from './../../Assets/aplicativo-radio-min-201x300.png';
import Img_banner2 from './../../Assets/Outdoor-modelo-1-Macaubas-1-768x302.jpg';
import Img_banner3 from './../../Assets/74db70ba361ae69a8e90f362874cb130.jpg';

export default function Carousels() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='img_carousel' src={Img_banner2}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='img_carousel' src={Img_banner2}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img_carousel' src={Img_banner3}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
