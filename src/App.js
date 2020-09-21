import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
// import HomePage from './components/HomePage.js';
// import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
// import Contact from './components/Contact.js';


function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">

    {/* <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={Portfolio} /> */}
    <Route exact path="/" component={About} />
    {/* <Route exact path="/contact" component={Contact} /> */}

    </div>
    </HashRouter>

  );

}

export default App;

