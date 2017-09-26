import React, { Component } from 'react';
import NavBar from './components/navbar'
import SplashCarousel from './components/splashcarousel'
import About from './components/about'
import Footer from './components/footer'
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact={true} path ="/" component={ SplashCarousel } />
          <Route path="/about" component={ About } />
          <Footer />
        </div>
      </Router>
    );
  }
}

// <SplashCarousel />

export default App;
