import React, { Component } from "react";
import HomeConstructor from "./HomeConstructor";

export default class Home1 extends Component {
  obj = [
    { index: "1", name: "Anand", title: "Kumar" },
    { index: "2", name: "Sameer", title: "Singh" },
    { index: "3", name: "Mayank", title: "Shekhar" }
  ];
  constructor() {
    super();
    this.state = {
      obj: this.obj,
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.obj.map((element) => {
          return (
            <div className="container" key={element.index}>
              <HomeConstructor name={element.name} title={element.title} />
            </div>
          );
        })}
      </div>
    );
  }
}
