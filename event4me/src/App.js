import React, { Component } from 'react';
import logo from './logo.svg';
import splash from './assets/img/ACL.jpg'
import NavBar from './components/navbar'
import SplashCarousel from './components/splashcarousel'
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <NavBar />
        <SplashCarousel />
      </div>
    );
  }
}

export default App;
