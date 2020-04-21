import React, { Component } from "react";
import AppContext from '../../AppContext';

import './Login.css';
import key from '../../assets/img/login/key.png';
import logo from '../../assets/img/login/logo.png';

export default class Login extends Component {

  state = {
    userName: '',
    password: ''
  };

  static contextType = AppContext;

  authorizeationHelper = () => {
    if (this.state.userName && this.state.password) {
      this.props.history.push(`/IntroOne`);
      this.context.authorizeUser(this.state);
    }
  }
  render() {
    return (
      <div className="login-container">
        <form>
          <img src={key} alt="login" />
          <br /><br /><br />

          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => this.setState({ userName: event.target.value })} value={this.state.userName} placeholder="Enter user name" />
          </div>

          <div className="form-group">
            <input type="password" className="form-control" onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password} placeholder="Enter password" />
          </div>

          <button type="button" onClick={this.authorizeationHelper} className="btn btn-success btn-block">Login</button>
        </form>

        <br /><br />
        <img src={logo} alt="login" />
      </div>
    );
  }
}