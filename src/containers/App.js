import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Radium, { StyleRoot } from 'radium';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppContext from "../AppContext";

import Header from '../components/Header/index';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import AddEditInventories from './AddEditInventories';
import AddItems from './AddItems';
import ChatBot from '../components/ChatBot/ChatBot';
import Login from '../containers/Login/login';
import ListItems from '../components/ListItems/ListItems';
import Location from '../components/Location/Location';

import IntroOne from '../components/intro/pageOne';
import IntroTwo from '../components/intro/pageTwo';

import InventoryData from '../data/inventory.json';
import './App.css';

toast.configure({
  autoClose: 5000,
  draggable: false
});


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventoryData: InventoryData,
      isLoggedIn: false,
      notifyClicked: false
    };
    window.selectedCategory = 'Grocery';
  }

  initToast = () => {
    toast("It's been quite some time since you washed your hand :) !", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'toast-background',
      bodyClassName: "toast-font-size",
      progressClassName: 'toast-progress-bar'
    });
  }

  notify = () => {
    this.initToast();
    this.setState({ notifyClicked: true });
    const that = this;
    setInterval(function(){ that.initToast(); }, 300000);
  };

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
    const { notifyClicked } = this.state;
    const showNotifyButton = !notifyClicked && window.location.pathname.match('/login') === null;
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
                  path="/location"
                  render={ props => <Location {...props} />}
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
            
            {showNotifyButton && <button type="button" className="btn btn-link" onClick={this.notify}>Notify to wash hands!</button>}
            <Footer />
          </center>
        </StyleRoot>
      </AppContext.Provider >
    );
  }
}

export default Radium(App);
