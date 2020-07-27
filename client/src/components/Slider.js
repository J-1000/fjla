import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PlacesList from './PlacesList'
import Rating from './Rating'




function Slider (props) {

return (
<Carousel>
  <Carousel.Item>
  
  <PlacesList 
   />

    <Carousel.Caption>
    
    <p> Hello </p> 
      
    </Carousel.Caption>


  </Carousel.Item>


  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="/BER2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/BER3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}

</Carousel>
)
}

export default Slider; 