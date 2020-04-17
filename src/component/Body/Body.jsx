import React, { Component } from 'react';
import Leptop from './laptopmap.png';
import Candleglow from "./candleglow.png";

class Body extends Component {
  render() {
    return (
      <div className="body">
          <img className="laptop" src={Leptop} alt="laptoppic"/>
          <img className="candle" src={Candleglow} alt="candleline"/>
      </div>
    );
  }
}

export default Body;
