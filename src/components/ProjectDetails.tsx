import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Props } from "../types/types";

export const projectQuery = gql`
  {
    project(id: 1) {
      id
      title
      description
      creator {
        name
      }
    }
  }
`;

export function ProjectDetails() {
  const { loading, error, data } = useQuery(projectQuery);
  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;
  const project = data!.project;

  return (
    <React.Fragment>
      <a href="/">Back</a>
      <h2>{project.title}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../img/vga.png")}
            alt="Card cap"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <strong>{project.creator.name}</strong>
          <p>{project.description}</p>
          <button className="btn btn-warning">Je veux tester!</button>
        </div>
      </div>
    </React.Fragment>
  );
}
