import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Radium, { StyleRoot } from 'radium';

import Header from '../components/Header/index';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import AddEditInventories from './AddEditInventories';

import './App.css';

class App extends Component {

  render = () => {
    const loggedIn = true;
    return (
      <StyleRoot>
        <center>
          <Header />
          <Router>
            <Switch>
              <Route
                path="/dashboard"
              >
                <Dashboard />
              </Route>
              <Route 
                exact
                path="/add-edit-inventory"
              >
                <AddEditInventories />
              </Route>
              <Route exact path="/" render={() => (
                loggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>
            </Switch>
          </Router>
          <Footer />       
        </center>
      </StyleRoot>
    );
  }
}

export default Radium(App);
