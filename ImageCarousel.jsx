import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel=()=> {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 " height={400}
          src="https://cdn.dribbble.com/users/5463251/screenshots/18940384/animacja_ubezpieczenie_budynkow.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " height={400}
          src="https://i.pinimg.com/736x/9a/a7/9b/9aa79b79dc4eebd851537dbc982433e0.jpg"
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " height={400}
          src="https://www.theanimationguys.com/wp-content/uploads/2018/07/Grenson.jpg"
          alt="Third slide"
        />
 
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;