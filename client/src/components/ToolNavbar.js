import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {logout} from '../pages/auth/auth'
import './ToolNavbar.css'
import logo from "../images/LOGOMYTENT.png"
const handleLogout = props => {
  console.log(props)
  logout().then(() => {
    props.setUser(null);
  });
}


function ToolNavbar (props) {
  console.log(props.user);
  return (
    <Navbar collapseOnSelect expand="lg"  className="Navbar" >
    <Navbar.Brand href="/" ><img src={logo} className="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Nav >
      {props.user ? (
        <>
        <h4 style={{ color: '0000' }}>Welcome {props.user.username} </h4>
        <Nav.Link href="/myprofile">Profil</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <Nav.Link to='/' onClick={() => handleLogout(props)}>Logout</Nav.Link>

        </>
        ) : (
        <>
        <Nav.Link href="/signup">Sign Up</Nav.Link>

        <Nav.Link eventKey={2} href="/login"> LogIn </Nav.Link>
        </>
        )}

      </Nav>
    </Navbar.Collapse>
  </Navbar>

   
  );
}

export default ToolNavbar;