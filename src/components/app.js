import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationComponent from "./navigation/navigationContainer.js";
import About from "./pages/about";
import Experience from "./pages/experience";
import Create from "./pages/create";
import Connect from "./pages/connect";

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='hero'>
          <div className='logo'>logo</div>
          <div className='title'>NaraMalia</div>
          <div className='title-tag'>... not your average full stack developer</div>
        </div>

          <Router>
            <div>
              <NavigationComponent />
              
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/create" component={Create} />
                <Route path="/connect" component={Connect} />
              </Switch>
            </div>
          </Router>
        
      </div>
    );
  }
}
