import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';
import VideoSection from './component/VideoSection';
import About from './component/About/About';
import Contact from './component/Contact/contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Body/>
    <VideoSection/>
  </div>
)

export default App;
