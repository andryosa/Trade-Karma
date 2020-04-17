import React, { Component } from 'react';
import "./Navbar.css";
import Logogramcolor from "../logo/logogram-white.png";


class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <a href="#"><img src={Logogramcolor} alt=""/></a>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default Navbar;
