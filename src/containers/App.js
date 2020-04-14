import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';

class App extends Component {

  render = () => {

    return (
      <StyleRoot>
        <center><h1>COVID WARRIORS</h1></center>
      </StyleRoot>
    );
  }
}

export default Radium(App);
