import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class App extends Component {
  state = {
    Title: '',
    Description: '',
  }

  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  addPlace = () => {
    const newPlace = { 'title': 'Camping in Berlin', 'description': 'The best camping in Berlin' };
    this.setState((state, props) => {
      places: state.places.concat(newPlace)
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    const newPlace = {
      title,
      description
    }
    console.log(newPlace)
    this.setState((state, props) => ({
      places: [newPlace, ...state.places],
      title: '',
      description: '',
    }))
  }
  render() {
    return (
      <div className='Form'>
        <h2> Add a new place for Camping!</h2>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='title'> Title: </label>
          <input
            type='text'
            name='title'
            id='title'
            value={this.state.title}
          />
          

          <label htmlFor='description'> Description: </label>
          <input
            type='text'
            name='description'
            id='description'
            value={this.state.description}
          />
          
          <br></br>
          <br></br>

          <button type='submit'> Add a place </button>
        </form>

        <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />


        <h1> All my created places </h1>
        List with all the places I created.
      </div>
    )
  }
}

export default App;

