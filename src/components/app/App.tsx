import React from 'react';
import {
    BrowserRouter as Router,
    Switch as Switcher,
    Route
  } from 'react-router-dom';
import './App.css';
import Home from '../containers/Home';
import Details from '../containers/Details';

function App() {
  return (
    <Router>
      <Switcher>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id' component={Details} />
      </Switcher>
    </Router>
  );
}

export default App;
