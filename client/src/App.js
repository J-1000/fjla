import ToolNavbar from "./components/ToolNavbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./components/Search";
// import { Route, Redirect } from 'react-router-dom';
import Profile from "./pages/Profile";
import { Route } from "react-router-dom";
import EditPlace from "./components/EditPlace";
import Signup from "./components/SignUp";
import Login from "./components/Login";
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
    return (
      <div className="homeApp" style={{height:"100vh"}}>
        <nav>
          <ToolNavbar className="Nav ToolNavbar" user={this.state.user} setUser={this.setUser} />
        </nav>

        <div> {this.state.user && this.state.user.username} </div>
        <Route
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
            <div className="searchBar-inner">
            <Search />
              <Slider className="sliderComponent slide" />
            </div>
             
              
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
