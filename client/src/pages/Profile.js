import React from 'react';
import EditPlace from '../components/EditPlace';
import PlacesList from '../components/PlacesList';





const Profile = (props) => {
  //console.log(props.data.email);
  return (
      <div>
          <h1> My Profile</h1>
          <EditPlace user={props.user} setUser={props.setUser}/>
          <PlacesList />
      </div>
  )
}

export default Profile;