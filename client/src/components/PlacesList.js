import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import './PlacesList.css'

class PlacesList extends Component {
  // state= {
  //   places: [],
  // }
  
  // getData() {
  //   axios.get("/api/places/userPlaces").then(response => {
  //     this.setState({
  //       places: response.data
  //     })
  //   }).catch(err => console.log(err))
  // }

  // componentDidMount() {
  //   this.getData()
  // }

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

  handleLike = id => {
    console.log("like", id)
    axios
    .post(`/api/places/like/${id}`) 
    .then((response) => {
      console.log(response.data);
      this.props.getData();
    })
    .catch((err) => {
      return err.response.data;
    });
  }

  handleDislike = id => {
    console.log("like", id)
    // wenn likes in PlacesDetails ist
    // if ( likes > 0 ) {
    //   axios
    // .post(`/api/places/dislike/${id}`) 
    // .then((response) => {
    //   console.log(response.data);
    //   this.props.getData();
    // })
    axios
    .post(`/api/places/dislike/${id}`) 
    .then((response) => {
      console.log(response.data);
      this.props.getData();
    })
    .catch((err) => {
      return err.response.data;
    });
    }
    

  componentDidUpdate(prevProps, _) {
    if (prevProps.places !== this.props.places) {
      this.render()
    }
  }


  render() {
    return (
      <div className="cardContainer">
      {this.props.places.map(place => {
        return (      
         <div className="cardContainer">
          <Card key={place._id} className="card">
          <Card.Img variant="top" src={place.imgPath} className="myPlaces"  />
          <Card.Body>
          <Card.Title><Link to={`/place/${place._id}`}><p>{place.name}</p></Link></Card.Title>
          <Card.Text><p> {place.description} </p></Card.Text>
          <p>Likes: {place.likes} </p> 
          <Button className="cardButton" onClick= {() => this.handleLike(place._id)} type="like" variant="primary">Like</Button>
          <Button className="cardButton" type="like" onClick= {() => this.handleDislike(place._id)} variant="primary"> Dislike </Button>
          <Button className="cardButton" type="delete" onClick= {() => this.handleDelete(place._id)} variant="primary"> Delete Place </Button>
          </Card.Body>
          </Card>
          </div>
        )
      })}
      </div>
    )
  }
}

export default PlacesList;