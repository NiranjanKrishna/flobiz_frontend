import React, { Component } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Blogger
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Post">
                  Add New Post
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Show">
                  Show Posts
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="card-container">
          <div class="card" className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div class="card-body">
              <p class="card-text">Playing in my..</p>
            </div>
          </div>
          <div class="card" className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div class="card-body">
              <p class="card-text">Going to Swimming</p>
            </div>
          </div>
          <div class="card" className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">Ashoka the emporer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
