import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Radium, { StyleRoot } from 'radium';

import Header from '../components/Header/index';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';

import './App.css';

class App extends Component {

  render = () => {

    return (
      <StyleRoot>
        <center>
          <Header />
          <Router>
            <Switch>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
          <Footer />       
        </center>
      </StyleRoot>
    );
  }
}

export default Radium(App);
