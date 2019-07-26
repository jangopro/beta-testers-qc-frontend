import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Props } from "../types/types";

export default class Project extends Component<Props, {}> {
  render() {
    return (
      <div className="card mx-2 mb-3" style={{ width: 500 }}>
        <img
          className="card-img-top"
          src={require("../img/vga.png")}
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/projectDetail`}>{this.props.project.title}</Link>
          </h2>
          <p className="card-text">
            <strong className="text-muted project-author">
              {this.props.project.creator.name}
            </strong>
          </p>
          <p className="card-text project-description">
            {this.props.project.description}
          </p>
        </div>
      </div>
    );
  }
}
