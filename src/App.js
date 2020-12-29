import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services';
import ContactLocation from './components/pages/ContactLocation';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/services' component={Services}/>
          <Route path='/contactlocation' component={ContactLocation}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
