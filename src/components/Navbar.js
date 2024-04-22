import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-light text-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/news">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/category=business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/category=entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/category=general">General</Link></li>
                    <li><Link className="dropdown-item" to="/category=health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/category=science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/category=sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/category=technology">Technology</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link to="login"><button className="btn btn-outline-primary mx-5" type="button">
                  Login
                </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
