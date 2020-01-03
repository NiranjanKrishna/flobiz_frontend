import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";
export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      email: "",
      password: ""
    };
    this.Change = this.Change.bind(this);
  }
  Change(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("https://localhost:9000/add", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
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
        <form action="/" onSubmit={this.handleSubmit.bind(this)}>
          <h1
            style={{
              textAlign: "end",
              color: "white",
              marginRight: "100px",
              marginTop: "50px"
            }}
          >
            Registration Info
          </h1>
          <br></br>
          <div className="form-group ">
            <input
              placeholder="Name"
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              onChange={this.Change}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              placeholder="Date"
            ></input>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="gender"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Gender
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Male
              </a>
              <a class="dropdown-item" href="#">
                Female
              </a>
              <a class="dropdown-item" href="#">
                Other
              </a>
            </div>
          </div>
          <br></br>
          <div className="form-group ">
            <input
              placeholder="Email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={this.Change}
            ></input>
          </div>
          <div className="form-group ">
            <input
              placeholder="password"
              type="password"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              onChange={this.Change}
            ></input>
          </div>
          <div className="form-group ">
            <input
              placeholder="ConfirmPassword"
              type="password"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <button
            type="submit"
            onSubmit={this.handleSubmit.bind(this)}
            className="btn btn-primary"
          >
            Submit
          </button>
          <i className=""></i>
          <Link to={"/"} className="nav-link">
            Back
          </Link>
        </form>
      </div>
    );
  }
}
