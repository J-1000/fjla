import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "./PlaceDetails.css";
import { Card, Button } from 'react-bootstrap';


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
      <div className="cardDatailsContainer">    
      <Card style={{width: "25rem"}} className="detailsCard">
      <Card.Text>  <p>{this.state.place.name}</p> </Card.Text> 
      <Card.Img variant="top"  src={this.state.place.imgPath}/>    
        <Card.Text> <p>{this.state.place.description}</p> </Card.Text>
        <p>Likes: {this.state.place.likes} </p>
        <Button variant="primary" type="like" onClick={() => this.handleLike(this.state.place._id)}> Likes </Button>     
        <Link to={`/`}><p>Back</p></Link>
        </Card>
      </div>
    );
  }
}


//<Rating rating={this.state.place.rating} />
