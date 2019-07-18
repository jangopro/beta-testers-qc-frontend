import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Project extends Component<{}, {}> {
  render() {
    return (
      <div className="card mx-2 mb-3" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={require("../img/vga.png")}
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/projectDetail`}>Nom du projet</Link>
          </h2>
          <p className="card-text">
            Non anim anim ipsum ullamco duis laborum quis pariatur sint ullamco.
            Ullamco proident excepteur aute dolor qui id adipisicing ut eiusmod
            commodo sunt sit laboris in. Amet veniam incididunt cillum
            incididunt dolore adipisicing laborum laboris aliquip duis fugiat ex
            aute.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}
