import React, { Component } from 'react';
import axios from 'axios';

export default class PlaceDetails extends Component {
  state = {
    place: null,
  }

  componentDidMount() {
    console.log(this.state.place);
    console.log(this.props.match.params.placeId);
    axios.get(`/api/places/details/${this.props.match.params.placeId}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        place: response.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    if(!this.state.place) return <div>loading...</div>
    return (
      <div>
       <p>{this.state.place.name}</p>
       <p><img className="profileimg" src={this.state.place.imgPath}/></p>
       <p>{this.state.place.description}</p>
      </div>
    );
  }
}


//<Rating rating={this.state.place.rating} />
