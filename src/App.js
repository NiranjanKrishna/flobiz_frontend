import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./components/Registration";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Index";
import Post, { Show, Profile } from "./components/Post";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/SignUp" component={Registration} />
            <Route path="/Home" component={Home}></Route>
            <Route path="/Post" component={Post}></Route>
            <Route path="/Show" component={Show}></Route>
            <Route path="/Profile" component={Profile}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
