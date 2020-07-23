import ToolNavbar from "./components/NavbarLoggedOut";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { Route, Redirect } from 'react-router-dom';
import Profile from './pages/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditPlace from './components/EditPlace'

import Signup from './components/SignUp';
// import Projects from './components/Projects';
//import Navbar from './components/Navbar';
//import ProjectDetails from './components/ProjectDetails';
//import TaskDetails from './components/TaskDetails';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="homeApp">
        <nav>

        
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

        </nav>
        <div className="searchBar">
          <div>
            <input className="inputProfil" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
