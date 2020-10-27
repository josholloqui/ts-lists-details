import React from 'react';
import {
    BrowserRouter as Router,
    Switch as Switcher,
    Route
  } from 'react-router-dom';
import './App.css';
import Home from '../containers/Home';

function App() {
  return (
    <Router>
      <Switcher>
        <Route exact path='/' component={Home} />
      </Switcher>
    </Router>
  );
}

export default App;
