import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/nav/Nav'

import Home from './home/Home'
import Projects from './components/Projects'
// import Corona from './corona/Corona'

import './App.css';

function App(props) {
  console.log(props)
  // let match = useRouteMatch()
  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
