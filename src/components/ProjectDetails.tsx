import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProjectDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Back</Link>
        <h2>Project Name</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src={require("../img/vga.png")}
              alt="Card image cap"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <strong>John Doe</strong>
            <p>
              Id laborum aute eu eiusmod quis irure nisi laborum. Aute velit
              velit sit commodo ex. In magna aute veniam velit aute veniam
              veniam sunt consequat laboris voluptate culpa voluptate. Laborum
              laboris qui elit ea. Laborum velit voluptate ipsum dolor magna
              aute enim. Ipsum consectetur sunt et officia exercitation
              incididunt Lorem ex proident. Ad voluptate in quis enim ex eiusmod
              dolor dolor aliquip quis exercitation.
            </p>
            <button className="btn btn-warning">Je veux tester!</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
