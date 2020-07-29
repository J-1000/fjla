import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "./PlaceDetails.css";


export default class PlaceDetails extends Component {
  state = {
    place: null,
  }
  getData() {
    axios.get(`/api/places/details/${this.props.match.params.placeId}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        place: response.data
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    console.log(this.state.place);
    console.log(this.props.match.params.placeId);
    this.getData()
  }

  handleLike = id => {
    console.log("like", id)
    axios
    .put(`/api/places/like/${id}`) 
    .then((response) => {
      console.log(response.data);
      this.getData();
    })
    .catch((err) => {
      return err.response;
    });
  }


  render() {
    if (!this.state.place) return <div>loading...</div>
    return (
      <div>
        <Link to={`/`}><p>Back</p></Link>
        <p>{this.state.place.name}</p>
        <p><img className="profileimg" src={this.state.place.imgPath} /></p>
        <p>{this.state.place.description}</p>
        <p>Likes: {this.state.place.likes} </p>
        <button type="like" onClick={() => this.handleLike(this.state.place._id)}> Like </button>
      </div>
    );
  }
}


//<Rating rating={this.state.place.rating} />
