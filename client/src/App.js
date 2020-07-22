import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <nav>
    <div className='container'>
         <ul id='nav-mobile' className='right
          hide-on-med-and-down'>
            <li><a href='/'>Home</a></li>
            <li><a href='/profil'>Profil</a></li>
         </ul>
      </div>
    </nav>

  );
}

export default App;
