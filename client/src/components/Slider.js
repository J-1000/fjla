import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class Slider extends React.Component {
  state = {
    places: null
  };

  getData() {
    axios.get("/api/places").then(response => {
      this.setState({
        places: response.data
      })
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if(!this.state.places) return <div>Loading..</div>
return (
<Carousel>
  {this.state.places.map(place => {
    return (
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={place.imgPath}
      alt="Third slide"
    />
  </Carousel.Item>
    )
  })}
</Carousel>
)
  }
}

export default Slider; 