import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapBox.css';
import MapGL, {NavigationControl, Marker,Popup} from "react-map-gl";

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
    lng: 13.34,
    lat: 52.51,
    zoom: 8} 
    
    };
    }

    componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.viewport.lng, this.state.viewport.lat],
    zoom: this.state.viewport.zoom
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
      });
    }

    setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
          let newViewport = {
              //height: "100vh",
              //width: "100vw",
              lng: position.coords.longitude,
              lat: position.coords.latitude,
              zoom: 12
          }
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          console.log(newViewport)
          
          this.setState({
              viewport: newViewport
          })
      })
  }


  render() {
    return (
      
    <>
     <button onClick={this.setUserLocation}>My Location</button> 
    <div ref={el => this.mapContainer = el} className="mapContainer"/>
     
      <div className='sidebarStyle'>
      Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "} {this.state.zoom}
       </div>
      
    </ >
    )
  }

  
}



