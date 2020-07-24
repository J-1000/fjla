import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

class EditPlace extends Component {
  state = {
    title: '',
    description: '',
    photo: ''
    
  }

  // constructor(props) {
  //   super(props);
  //   this.state = { pictures: [] };
  //   this.onDrop = this.onDrop.bind(this);
  // }

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

  handleFileUpload = event => {
    const uploadData = new FormData();
    uploadData.append("imagePath", event.target.files[0]);
    
    this.setState({uploadOn: true});

    axios
    .post("/api/places/uploadImage", uploadData)
    .then(response => {
      console.log(response)
      this.setState({photo: response.data})
    })
    .catch(err => console.log("Error while uploading the file", err)) 
    

  } 
 
  handleSubmit = event => {
    event.preventDefault();
    console.log("banana")
    const { title, description,photo } = this.state;
    const newPlace = {
      title,
      description,
      photo
    }
    // console.log(newPlace)
    axios
    .post("/api/places/new", newPlace)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      return err.response.data;
    });
    // this.setState((state, props) => ({
    //   places: [newPlace, ...state.places],
    //   title: '',
    //   description: '',
    // }))
  }

  render() {
    console.log(this.state)
    return (
      <div className='Form'>
        <h2> Add a new place for Camping!</h2>
        <form enctype="multipart/form-data"  onSubmit={this.handleSubmit}>

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
       {/*    <ImageUploader
          withIcon={true}
          name="photo"
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}

          <br></br>
          <br></br>
          <button type='submit' onClick={this.handleSubmit}> Add a place </button>
        </form>

        

        <h1> All my created places </h1>
        List with all the places I created.
      </div>
    )
  }
}

export default EditPlace;
