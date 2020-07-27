import React from "react";
import ToolNavbar from "./ToolNavbar";
import Search from "./Search"
import MapBox from "./MapBox"
import SearchableMap from  './SearchableMap'
import "./Home.css"


export default function Home() {
  return (
    <div className = "parentContainerHome">
     
      <Search />
      <MapBox  className = "mapBoxHome"/>
    </div>
  );
}
