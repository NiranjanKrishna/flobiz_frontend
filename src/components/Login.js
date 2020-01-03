import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Registration from "./Registration";
import "./Login.css";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.OnChange = this.OnChange.bind(this);
  }
  OnChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div
        className="d-flex justify-content-end px-md-5"
        style={{
          color: "white",
          textAlign: "center",
          padding: 20,
          marginRight: 100,
          marginTop: 50
        }}
      >
        <form>
          <h1
            style={{
              textAlign: "end",
              color: "white",
              marginRight: "100px",
              marginTop: "50px"
            }}
          >
            Login
          </h1>
          <br></br>
          <div className="form-group ">
            <input
              placeholder="Email"
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              onChange={this.User}
            ></input>
          </div>
          <div className="form-group ">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              onChange={this.Pass}
            ></input>
          </div>

          <Link to={"/Home"} className="nav-link">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>

          <Link to={"/SignUp"} className="nav-link">
            Don't Have an account SignUp
          </Link>
          <br></br>
        </form>
      </div>
    );
  }
}
