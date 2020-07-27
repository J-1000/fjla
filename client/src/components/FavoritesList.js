import React, { Component } from "react";
import axios from "axios";

class FavoritesList extends Component {


  handleDelete = id => {
    console.log("delete", id)
    axios
      .post(`/api/places/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        this.props.getData();
      })
      .catch((err) => {
        return err.response.data;
      });
  }

  

  componentDidUpdate(prevProps, _) {
    if (prevProps.places !== this.props.places) {
      this.render()
    }
  }


  render() {
    return (
      <div>
        <p> test </p>
        {/* here needs to be the the info from the favorites list   req.user._id*/}
        
      </div>
    )
  }
}

export default FavoritesList;