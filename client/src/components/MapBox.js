import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapBox.css';
import MapGL, {NavigationControl, Marker,Popup} from "react-map-gl";

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    zoom: 2
    };
    }

    componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
      });
    }

  render() {
    return (
      
    <>
      <div ref={el => this.mapContainer = el} className="mapContainer"/>
     
      <div className='sidebarStyle'>
      Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "} {this.state.zoom}
       </div>
      
    </ >
    )
  }

  
}



