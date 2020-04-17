import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Body from './component/Body/Body'
import VideoSection from './component/VideoSection'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Body id='home'/>
      <VideoSection id='about'/>
    </div>
  );
}

export default App;
