import React, { Component } from "react";
import AppContext from '../../AppContext';

import './Login.css';

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
          <h3>Sign In</h3>

          <div className="form-group">
            <label>User name</label>
            <input type="text" className="form-control" onChange={(event) => this.setState({ userName: event.target.value })} value={this.state.userName} placeholder="Enter user name" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password} placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button type="button" onClick={this.authorizeationHelper} className="btn btn-primary btn-block">Login</button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}