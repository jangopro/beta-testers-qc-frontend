import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Beta Testers Qc
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
