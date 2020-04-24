import React, { Component } from 'react';
import "./Navbar.css";
import Logogramcolor from "../logo/logogram-white.png";
import {Link} from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className='nav-links'>
          <Link to='/'>
              <li><img src={Logogramcolor} alt="" className='logo'/></li>
          </Link>
          <Link className='links'  to='/'>
              <li>Home</li>
          </Link>
          <Link className='links' to='/about'>
              <li>About Us</li>
          </Link>
          <Link className='links' to='/contact'>
              <li>Contact</li>
          </Link>
        </ul>
        {/* <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a> */}
      </nav>
    );
  }
}

export default Navbar;
