import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw';

// axios.get("/api/auth/loggedin").then((response) => {
//   const user = response.data;


  ReactDOM.render(
    <BrowserRouter>
      <App  
       // user={user}
      />

    </BrowserRouter>,
    document.getElementById("root")
  );

// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
