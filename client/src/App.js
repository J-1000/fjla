import ToolNavbar from "./components/ToolNavbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./components/Search";
<<<<<<< HEAD
// import { Route, Redirect } from 'react-router-dom';
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditPlace from "./components/EditPlace";
import MapBox from "./components/MapBox";
import "./components/MapBox.css";
import Home from "./components/Home";

import Signup from "./components/SignUp";
import Login from "./components/Login";
// import Projects from './components/Projects';
//import Navbar from './components/Navbar';
//import ProjectDetails from './components/ProjectDetails';
//import TaskDetails from './components/TaskDetails';
=======
import HoverRating from './components/Rating';
// import { Route, Redirect } from 'react-router-dom';
import Profile from "./pages/Profile";
import { Route } from "react-router-dom";
import EditPlace from "./components/EditPlace";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Slider from "./components/Slider";
>>>>>>> 4f355964d867d6058b99249a8d623f9af3bd488d

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="homeApp">
        <nav>
          <ToolNavbar user={this.state.user} setUser={this.setUser} />
        </nav>

        <div> Hello {this.state.user && this.state.user.username} </div>
        <Route
=======
      <div className="homeApp" style={{height:"100vh"}}>
        <nav>
          <ToolNavbar className="Nav ToolNavbar" user={this.state.user} setUser={this.setUser} />
        </nav>
     
          <Route
            exact
            path="/myprofile"
            render={props => <Profile {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path='/signup'
            render={props => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
>>>>>>> 4f355964d867d6058b99249a8d623f9af3bd488d
          exact
          path="/myprofile"
          render={(props) => <Profile {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/"
          render={(props) => (
            <div className="searchBar">
<<<<<<< HEAD
              {" "}
              <Search />{" "}
            </div>
          )}
        />
       
        <Route exact path="/home" render={(props) => <Home />} />
      
        </div>
=======
            <div className="searchBar-inner">
            <Search />
              <Slider className="sliderComponent slide" />
              <HoverRating />
            </div>
             
              
            </div>
          )}
        />
      </div>
>>>>>>> 4f355964d867d6058b99249a8d623f9af3bd488d
    );
  }
}

export default App;
