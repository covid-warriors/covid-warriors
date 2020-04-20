import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Radium, { StyleRoot } from 'radium';

import AppContext from "../AppContext";

import Header from '../components/Header/index';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import AddEditInventories from './AddEditInventories';

import IntroOne from '../components/intro/pageOne';
import IntroTwo from '../components/intro/pageTwo';

import InventoryData from '../data/inventory.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryData: InventoryData
    };
    window.selectedCategory = 'grocery';
  }

  updateInventoryData = (data) => {
    this.setState({ inventoryData: data });
  }

  render = () => {
    const loggedIn = true;
    return (
      <AppContext.Provider value={{ inventoryData: this.state.inventoryData, updateInventoryData: this.updateInventoryData }}>
        <StyleRoot>
          <center>
            <Header />
            <Router>
              <Switch>
                <Route
                  exact
                  path="/IntroOne"
                  component={IntroOne}
                />
                <Route
                  exact
                  path="/IntroTwo"
                  component={IntroTwo}
                />

                <Route
                  exact
                  path="/dashboard"
                  component={Dashboard}
                />
                <Route
                  exact
                  path="/add-edit-inventory"
                  component={AddEditInventories}
                />
                <Route exact path="/" render={() => (
                  loggedIn ? (
                    <Redirect to="/dashboard" />
                  ) : (
                      <Redirect to="/login" />
                    )
                )} />

              </Switch>
            </Router>
            <Footer />
          </center>
        </StyleRoot>

      </AppContext.Provider >
    );
  }
}

export default Radium(App);
