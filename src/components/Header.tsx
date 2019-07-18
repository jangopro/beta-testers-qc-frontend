import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Beta Testers Qc
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
