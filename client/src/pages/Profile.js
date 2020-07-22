import React from 'react'
import EditPlace from '../components/EditPlace'
import ToolNavbar from '../components/NavbarLoggedOut'


const Profile = (props) => {
  //console.log(props.data.email);
  return (
      <div>
          <ToolNavbar/>
          <h1> My Profile </h1>
          <EditPlace/>
          
    
      </div>
  )
}

export default Profile;