import React, { Component } from 'react';
import NavBar from './components/navbar'
import SplashCarousel from './components/splashcarousel'
import About from './components/about'
import Footer from './components/footer'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <About />
          <Footer />
        </div>
      </Router>
    );
  }
}

// <SplashCarousel />

export default App;
