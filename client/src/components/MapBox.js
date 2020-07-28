import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "./MapBox.css";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Search from "./Search";
import PlacesList from "./PlaceDetails";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
});

export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        lng: 13.33,
        lat: 52.51,
        zoom: 8,
      },
      places: [],
      editMap: true,
    };
  }

  // Fake Database to be replaced by data from our database
  loadFakeplacesfromFakeDB(place) {
    let markers = [];
    for (let i = 0; i < place; i++) {
      markers.push([
        parseFloat(13) + parseFloat(Math.random().toFixed(4)),
        parseFloat(52) + parseFloat(Math.random().toFixed(4)),
      ]);
    }
    //console.log(markers);
    return markers;
  }

  componentDidMount() {
    axios
      .get("/api/places")
      .then((response) => {
        console.log(response, "response");
        this.setState({ places: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.viewport.lng, this.state.viewport.lat],
      zoom: this.state.viewport.zoom,
    });
    //sets one marker specific coordinates:
    //var marker = new mapboxgl.Marker()
//.setLngLat([13.3509, 52.5113])
//.setPopup(new mapboxgl.Popup().setHTML("<h1>Zeltplatz Nummer 1</h1>"))
      //.addTo(map);

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    //sets marker where I click on the map:
   
  
    map.on('click', (e) => {
     
      let addPlaceMarker = new mapboxgl.Marker()
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        //.setPopup(new mapboxgl.Popup().setHTML("<h1>Zeltplatz Nummer 1</h1>"))
        .addTo(map);
      // The event object (e) contains information like the
      // coordinates of the point on the map that was clicked.
      console.log("A click event has occurred at " + e.lngLat);
      console.log("A Pin was placed at " + e.lngLat);
      console.log(e.lngLat.lat);
      console.log(e.lngLat.lng);
      console.log(e.lngLat);
      console.log(this.props);
      this.props.handleMapChange(e.lngLat.lng, e.lngLat.lat);
      setInterval(function(){addPlaceMarker.remove()},2000);
      setTimeout(function(){alert("Marker of location is set and saved.")},500);
      })
    
    // shows the userlocation
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    // loads the places fom the fakeplacesDB method on load
    map.on("load", () => {
      this.state.places.forEach((place) => {
        var el = document.createElement("div");
        el.className = "marker";
        //let bckgImg = place.imgPath
        el.style.backgroundImage = `url(${place.imgPath})`;
        console.log("this is place.imgPath:",place.imgPath);
        el.style.width = "40px";
        el.style.height = "40px";
        //el.addEventListener('click', () => 
   //{ 
      //alert("Marker Clicked.");
     // map.off("click")
   //}
//); 
        
        new mapboxgl.Marker(el)
        .setLngLat([place.longitude, place.latitude])
        .setPopup(new mapboxgl.Popup().setHTML( `<p><b>${place.name}</b></p><img src="${place.imgPath}"  width="60" height="60"/> <p>${place.description}</p><a href="/place/${place._id}">See Details</a>`))
        .addTo(map);

        //new mapboxgl.Marker()
         // .setLngLat([place.longitude, place.latitude])
          //.setPopup(new mapboxgl.Popup().setHTML( `<img src="${place.imgPath}"  width="60" height="60"/> <p>${place.description}</p><a href="#placeDetail">See Details</a>`))
          //.addTo(map);
      });
    });

    map.getCanvas().style.cursor = "pointer";

    //geocoder.addTo("#geocoder-container");

    // add markers to map
    //geojson.features.forEach(function (marker) {
    // create a DOM element for the marker
    // var el = document.createElement("div");
    // el.className = "marker";
    //el.style.backgroundImage =
    //   'url("http://res.cloudinary.com/dvhpj9qdj/image/upload/v1595777135/tent_pictures/IMG_8540.jpg")';
    //el.style.width = marker.properties.iconSize[0] + "px";
    // el.style.height = marker.properties.iconSize[0] + "px";

    // el.addEventListener("click", function () {
    //  window.alert(marker.properties.message);
    // });

    // add marker to map
    //new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    //});
  }
  // rest of the first try of geolocating the User
  //setUserLocation = () => {
  //navigator.geolocation.getCurrentPosition((position) => {
  //let newViewport = {
  //height: "100vh",
  //width: "100vw",
  //lng: position.coords.longitude,
  //lat: position.coords.latitude,
  //zoom: 12,
  //};
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
  //console.log(newViewport);

  //this.setState({
  // viewport: newViewport,
  //});
  //});
  //};

  //<button onClick={this.setUserLocation}>My Location</button>

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <>
        
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />

        <div className="sidebarStyle">
          Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div>
      </>
    );
  }
}
