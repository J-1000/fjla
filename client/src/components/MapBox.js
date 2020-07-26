import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./MapBox.css";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        lng: 13.34,
        lat: 52.51,
        zoom: 8,
      },
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.viewport.lng, this.state.viewport.lat],
      zoom: this.state.viewport.zoom,
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([13.3509, 52.5113])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Zeltplatz Nummer 1</h1>"))
      .addTo(map);

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    map.on('click', function(e) {
      let addPlaceMarker = new mapboxgl.Marker()
      .setLngLat([e.lngLat.lng, e.lngLat.lat])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Zeltplatz Nummer 1</h1>"))
      .addTo(map);
      // The event object (e) contains information like the
      // coordinates of the point on the map that was clicked.
      console.log('A click event has occurred at ' + e.lngLat);
      console.log('A Pin was placed at ' + e.lngLat);
      console.log(e.lngLat.lat);
      console.log(e.lngLat.lng);
      });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            message: "Berlins geilster Zeltplatz",
            iconSize: [20, 20],
          },
          geometry: {
            type: "Point",
            coordinates: [13.5083, 52.5444],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Superschöner Ort zum Zelten",
            iconSize: [20, 20],
          },
          geometry: {
            type: "Point",
            coordinates: [13.0016, 52.5544],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Baz",
            iconSize: [40, 40],
          },
          geometry: {
            type: "Point",
            coordinates: [-63.29223632812499, -18.28151823530889],
          },
        },
      ],
    };

    // add markers to map
    geojson.features.forEach(function (marker) {
      // create a DOM element for the marker
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage =
        'url("http://res.cloudinary.com/dvhpj9qdj/image/upload/v1595777135/tent_pictures/IMG_8540.jpg")';
      el.style.width = marker.properties.iconSize[0] + "px";
      el.style.height = marker.properties.iconSize[0] + "px";

      el.addEventListener("click", function () {
        window.alert(marker.properties.message);
      });

      // add marker to map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let newViewport = {
        //height: "100vh",
        //width: "100vw",
        lng: position.coords.longitude,
        lat: position.coords.latitude,
        zoom: 12,
      };
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(newViewport);

      this.setState({
        viewport: newViewport,
      });
    });
  };

  //<button onClick={this.setUserLocation}>My Location</button>

  render() {
    return (
      <>
        <button onClick={this.marker}>Add Marker</button>

        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />

        <div className="sidebarStyle">
          Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div>
      </>
    );
  }
}
