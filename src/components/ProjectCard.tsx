import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Props } from "../types/types";

export default class Project extends Component<Props, {}> {
  render() {
    const { project } = this.props;
    return (
      <div className="col-md-6">
        <div className="card border-light mx-2 mb-3 ">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                className="card-img"
                src={project.image}
                alt="Project Landing Page"
              />
            </div>

            <div className="card-body">
              <h2 className="card-title card__title">
                <Link className="card__link" to={`/projectDetail`}>
                  {this.props.project.title}
                </Link>
              </h2>
              <p className="card-text">
                <strong className="text-muted card-subtitle project-author">
                  {this.props.project.creator.name}
                </strong>
              </p>
              <p className="card-text project-excerpt">
                {this.props.project.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
