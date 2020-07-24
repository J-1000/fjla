import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapBox.css';
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

  render() {
    return (
      <div>
      <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    )
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });
    }
}



