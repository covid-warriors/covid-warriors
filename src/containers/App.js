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
import AddItems from './AddItems';
import ChatBot from '../components/ChatBot/ChatBot';
import Login from '../containers/Login/login';
import ListItems from '../components/ListItems/ListItems';

import IntroOne from '../components/intro/pageOne';
import IntroTwo from '../components/intro/pageTwo';

import InventoryData from '../data/inventory.json';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventoryData: InventoryData,
      isLoggedIn: false
    };
    window.selectedCategory = 'Grocery';
  }

  updateInventoryData = (data) => {
    this.setState({ inventoryData: data });
  }

  authorizeUser = ({ userName, password }) => {
    if (userName && password) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  routePath = () => {
    return this.state.isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />;
  }

  render = () => {
    return (
      <AppContext.Provider value={{
        inventoryData: this.state.inventoryData,
        isLoggedIn: this.state.isLoggedIn,
        updateInventoryData: this.updateInventoryData,
        authorizeUser: this.authorizeUser
      }}>
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
                  path="/login"
                  render={ props => <Login {...props} />}
                />
                <Route
                  exact
                  path="/list-items"
                  render={ props => <ListItems {...props} />}
                />
                <Route
                  exact
                  path="/add-edit-inventory"
                  component={AddEditInventories}
                />
                <Route
                  exact
                  path="/add-items"
                  render={ props => <AddItems {...props} />}
                />
                <Route
                  exact
                  path="/chat-assistant"
                  component={ChatBot}
                />
                <Route exact path="/" render={this.routePath} />
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
