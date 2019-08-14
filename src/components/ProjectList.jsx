import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ProjectsProps } from "../types/types";

const projectsQuery = gql`
  {
    projects(count: 10) {
      paginatorInfo {
        total
        hasMorePages
      }
      data {
        id
        title
        description
        creator {
          name
          email
        }
      }
    }
  }
`;

export default function ProjectList() {
  const { loading, error, data } = useQuery(projectsQuery);
  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;
  const projects = data.projects.data;
  return (
    <div className="row">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
