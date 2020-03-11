import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { JerseyDetailView } from './pages/jersey/JerseyDetailView';

//components
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mt">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/jerseys/:id" component={JerseyDetailView} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
