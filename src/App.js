import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
// import Home from "./components/Home1";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  pageSize = 20;
  render() {
    return (
      <>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => this.setProgress(0)
          // }
          />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element = {<Login />} />
              <Route
                exact
                path="/home"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/news"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/category=business"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="business"
                    pageSize={this.pageSize}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/category=entertainment"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apiKey}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/category=general"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/category=health"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/category=science"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/category=sports"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/category=technology"
                element={
                  <News setProgress={this.setProgress} apiKey={this.apikey}
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  />
                }
              />

              {/* <Route path="/news" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

