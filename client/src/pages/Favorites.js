import React, {Component} from "react";
import FavoritesList from "../components/FavoritesList"



class Favorites extends Component {
  state= {
    Favorites: [],
  }
  //console.log(props.data.email);

  

 

  render() {
  return (
      <div>
          <h1> My Favorites </h1>
          <FavoritesList places={this.state.places} getData={this.getData}/>
      </div>
  )
  }
}

export default Favorites;