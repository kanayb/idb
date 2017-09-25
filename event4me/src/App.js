import React, { Component } from 'react';
import logo from './logo.svg';
import splash from './assets/img/ACL.jpg'
import NavBar from './components/navbar'
import SplashCarousel from './components/splashcarousel'
import Footer from './components/footer'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <SplashCarousel />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
