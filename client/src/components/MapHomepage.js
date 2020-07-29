import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "./MapHomepage.css";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import PlacesList from "./PlaceDetails";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
});

export default class MapHomepage extends Component {
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

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // shows the userlocation
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // allows the searchbar in the map control of the map
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
        console.log("this is place.imgPath:", place.imgPath);
        el.style.width = "40px";
        el.style.height = "40px";

        new mapboxgl.Marker(el)
          .setLngLat([place.longitude, place.latitude])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<p><b>${place.name}</b></p><img src="${place.imgPath}"  width="60" height="60"/> <p>${place.description}</p><p>created by ${this.props.user.username}</p><a href="/place/${place._id}">See Details</a>`
            )
          )
          .addTo(map);
          console.log(this.props.user.username)
      });
    });
  }

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
