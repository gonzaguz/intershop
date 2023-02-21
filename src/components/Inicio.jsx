import Carousel from 'react-bootstrap/Carousel';

const Inicio = () => {
  return (
    <Carousel>
      <Carousel.Item className='carrousel'>
        <img
          className="d-block"
          src="https://intershop.com.ar/wp-content/uploads/2022/03/Mesa-de-trabajo-11.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://intershop.com.ar/wp-content/uploads/2022/03/Mesa-de-trabajo-12.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://intershop.com.ar/wp-content/uploads/2022/03/inter2.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;