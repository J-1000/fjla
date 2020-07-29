import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class FavoritesList extends Component {

  handleDelete = id => {
    console.log("delete", id)
    axios
      .post(`/api/places/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        this.props.getData();
      })
      .catch((err) => {
        return err.response.data;
      });
    }

  render() {
    console.log(this.props.places)
    if(!this.props.places) return <div> empty </div>
    return (
      <div>
        <Link to={`/`}><p>Home</p></Link>
        {this.props.places.map(place => {
          return (
            <div key={place._id}>
            <Link to={`/place/${place._id}`}><p>{place.name}</p></Link>
            <p>{place.description}</p>
            <img className="myPlaces" src={place.imgPath} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default FavoritesList;