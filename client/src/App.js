import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
//import Projects from './components/Projects';
//import Navbar from './components/Navbar';
//import ProjectDetails from './components/ProjectDetails';
//import TaskDetails from './components/TaskDetails';
import Signup from './components/Signup';

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
      <div className='App' >
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact path='/projects'
          render={props => {
            if (this.state.user) return <Projects {...props}/>
            else return <Redirect to='/' />
          }}
        />
        <Route
          exact path='/projects/:id'
          render={props => <ProjectDetails {...props} user={this.state.user} />}
        />
        <Route
          exact path='/tasks/:id'
          component={TaskDetails}
        />
        <Route
          exact
          path='/signup'
          // to the Signup we have to pass a reference to the setUser method
          // this we cannot do via component={<some component>}
          // For this we use the render prop - The term “render prop” refers to a technique for sharing 
          // code between React components using a prop whose value is a function.
          // A component with a render prop takes a function that returns a React element and calls it 
          // instead of implementing its own render logic.
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
