import React, { Component } from 'react';
import axios from 'axios';
import mapboxgl from "mapbox-gl"
import MapBox from "./MapBox"

class EditPlace extends Component {
  state = {
    title: '',
    description: '',
    photo: '',
    userPhoto: this.props.user.photo,
    userPhotoURL: "",
    uploadOn: true,
    uploadOn2: true,
    longitude: "",
    latitude: "",
    places: [],
    Likes: 0

  }

// in edit list likes updaten via setState 
// prop in places list übergeben mit Referenz auf update likes funktion
// in placesList onclick triggered funktion aus props

updateLikes = (like) => {
  this.setState({
    likes: this.state.likes+like
  })
}




  onDrop=(picture)=> {
    this.setState({
      photo: this.state.photo.concat(picture),
    });
  }
  addPlace = () => {
    const newPlace = { 'title': 'Camping in Berlin', 'description': 'The best camping in Berlin' };
    this.setState((state, props) => {
      places: state.places.concat(newPlace)
    })
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    // console.log(name, value, this.state)
    this.setState({
      [name]: value 
    }) 
  }

  handleMapChange = (longitude, latitude) => {
    console.log(longitude, latitude, "handlemapchange")
    this.setState({
      longitude: longitude,
      latitude: latitude
    })
  }

  handleFileUpload = event => {
    const uploadData = new FormData();
    uploadData.append("imagePath", event.target.files[0]);
    
    this.setState({uploadOn2: true});

    axios
    .post("/api/places/uploadImage", uploadData)
    .then(response => {
      console.log(response)
      this.setState({
        photo: response.data,
        uploadOn2: false
      })
    })
    .catch(err => console.log("Error while uploading the file", err)) 
  } 

  // this should be for the profile picture
  handleFileUploadProfile = event => {
    const uploadData = new FormData();
    uploadData.append("imagePath", event.target.files[0]);
    
    this.setState({uploadOn: true});

    axios
    .post("/api/auth/uploadImage", uploadData)
    .then(response => {
      console.log(response)
      this.setState({
        uploadOn: false,
        userPhotoURL: response.data
      })
    })
    .catch(err => console.log("Error while uploading the file", err)) 
  } 
 

  handleSubmit = event => {
    event.preventDefault();
    console.log("banana")
    const { title, description,photo, latitude, longitude } = this.state;
    const newPlace = {
      title,
      description,
      photo,
      latitude,
      longitude
    }
    // console.log(newPlace)
    axios
    .post("/api/places/new", newPlace)
    .then((response) => {
      console.log(response.data);
      this.props.getData();  
    })
    .catch((err) => {
      return err.response.data;
    });
  }

  handleSubmitUserProfile = event => {
    event.preventDefault();
    console.log(this.state.userPhotoURL)
    axios
    .post("/api/auth/profilePicture", {photo: this.state.userPhotoURL})
    .then((response) => {
      console.log(response.data.photo);
      this.props.setUser(response.data);
      this.setState({
        userPhoto: response.data.photo
      })
    })
    .catch((err) => {
      return err.response.data;
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.userPhoto !== this.state.userPhoto) {
      this.render()
    }
  }

  

  render() {
    console.log(this.state)
    console.log(this.props, "PROPS")

    return (
      <div className='Form'>
        <img className= "profileimg" src={this.state.userPhoto} /> 
        <form encType="multipart/form-data"  onSubmit={this.handleSubmitUserProfile}>
        <h2>Add a your profile picture!</h2> 
        <input type="file" name="photo" onChange={this.handleFileUploadProfile}></input>
        <br></br>
        <br></br>
        {this.state.uploadOn ? <button disabled type='submit'> Add a your profile picture </button> : <button type='submit'> Add a your profile picture </button>}
        </form>

        <h2> Add a new place for Camping!</h2>
        <form encType="multipart/form-data"  onSubmit={this.handleSubmit}>

          <label htmlFor='title'> Title: </label>
          <input
            type='text'
            name='title'
            id='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          

          <label htmlFor='description'> Description: </label>
          <input
            type='text'
            name='description'
            id='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          
          <input type="file" name="photo" onChange={this.handleFileUpload}></input>

          <br></br>
          <MapBox  className="mapBoxHome" handleMapChange={this.handleMapChange} />
          <br></br>
          {this.state.uploadOn2 ? <button disabled type='submit'> Add a Place </button> : <button type='submit'> Add a Place </button>}

        </form>

        

        <h1> All my created places </h1>
        List with all the places I created.
      </div>
    )
  }
}

export default EditPlace;
