import Carousel from 'react-bootstrap/Carousel';
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import Navigasi from './navbar';

function Hero() {
  return (
    <div>
        <Navigasi />
    
    <Carousel>
      <Carousel.Item>
        <img src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>Pintu Masuk SMP Negeri 3 Genteng</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hero2} text="Second slide" />
        <Carousel.Caption>
          <h3>Dewan Guru</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hero3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Hero;