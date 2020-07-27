import ToolNavbar from "./components/ToolNavbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./components/Search";
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
import HoverRating from "./components/Rating";
// import { Route, Redirect } from 'react-router-dom';
import Slider from "./components/Slider";

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
    console.log(this.state.user);
    return (
      <div className="homeApp">
        <nav>
          <ToolNavbar user={this.state.user} setUser={this.setUser} />
        </nav>

        <Route
          exact
          path="/myprofile"
          render={(props) => (
            <Profile {...props} setUser={this.setUser} user={this.state.user} />
          )}
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
              <div className="searchBar-inner">
                <Search />
                <Slider className="sliderComponent slide" />
                <HoverRating />
              </div>
            </div>
          )}
        />
        <Route exact path="/home" render={(props) => <Home />} />
      </div>
    );
  }
}

export default App;
