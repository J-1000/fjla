import React, {Component} from "react";
import axios from "axios";
import PlacesList from '../components/PlacesList'; 


class AllPlaces extends Component {
  state= {
    places: [],
  }

  getData= () => {
    console.log("getData")
    axios.get("/api/places/userPlaces").then(response => {
      this.setState({
        places: response.data
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    console.log(this.state.places);
  return (
    <PlacesList places={this.state.places} getData={this.getData} />
  )
  
   }
}

   export default AllPlaces; 