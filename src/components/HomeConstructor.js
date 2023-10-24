import React, { Component } from "react";

export default class HomeConstructor extends Component {
  render() {
    let { name, title } = this.props;
    return (
      <div className="container my-3">
        <ul className="list-group list-group-numbered">
          <li className="list-group-item list-group-item-success" style={{ fontWeight:'bolder' }}>
            {name} {title}
          </li>
        </ul>
      </div>
    );
  }
}
