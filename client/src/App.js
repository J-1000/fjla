import React from 'react';
import './App.css';
import Profile from './pages/Profile'

const App = () => {
  //what is this?
  // const user = {
  //   name: 'test',
  //   email: 'test@gmail.com',
  // }

  return (
    <div className="App">
      <Profile /*data={user}*/ />
    </div>
  );
}

export default App;
