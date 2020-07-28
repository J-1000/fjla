import React, {Component} from "react";
import FavoritesList from "../components/FavoritesList"
import axios from "axios";



class Favorites extends Component {
  state= {
    favorites: [],
  }
  //console.log(props.data.email);

  componentDidMount() {
    axios.get("/api/places/favorites").then(favoritesPlaces => {
      console.log(favoritesPlaces, "favoritesPlaces")
      this.setState({
        favorites: favoritesPlaces.data.favorites
      })
    })
  }

 

  render() {
    console.log(this.state.favorites, "favorites")
  return (
      <div>
          <h1> My Favorites </h1>
          <FavoritesList places={this.state.favorites} getData={this.getData}/>
      </div>
  )
  }
}

export default Favorites;