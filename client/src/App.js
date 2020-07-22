import ToolNavbar from "./components/Navbar";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { Route, Redirect } from 'react-router-dom';
import Profile from './pages/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditPlace from './components/EditPlace'

// import Signup from './components/SignUp';
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

        <EditPlace /> 

      </nav>
      <div className="searchBar">
    <div>
        <input className="inputProfil" type="text" placeholder="Search..." />
      </div>
      </div>
    </div>

        // {/* <Route
        //   exact
        //   path='/signup'
        //   // to the Signup we have to pass a reference to the setUser method
        //   // this we cannot do via component={<some component>}
        //   // For this we use the render prop - The term “render prop” refers to a technique for sharing 
        //   // code between React components using a prop whose value is a function.
        //   // A component with a render prop takes a function that returns a React element and calls it 
        //   // instead of implementing its own render logic.
        //   render={props => <Signup setUser={this.setUser} {...props} />}
        // /> */}
      
    );
  }

}

export default App;
