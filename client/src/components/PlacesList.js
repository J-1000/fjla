import React, {Component} from "react";
import axios from "axios";

class PlacesList extends Component {
  state= {
    places: [],
  }
  
  componentDidMount() {
    axios.get("/api/places/userPlaces").then(response => {
      this.setState({
        places: response.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      {this.state.places.map(place => {
        return (
          <div key={place._id}>
          <img className="myPlaces" src={place.imgPath} />
          <p>{place.name}</p>
          </div>
        )
      })}
      </div>
    )
  }
}

export default PlacesList;