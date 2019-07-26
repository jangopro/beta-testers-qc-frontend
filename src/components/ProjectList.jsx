import * as React from "react";
import ProjectCard from "./ProjectCard";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const projectsQuery = gql`
  {
    projects(count: 2) {
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

export default class ProjectList extends React.Component {
  render() {
    return (
      <Query query={projectsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const projects = data.projects.data;
          return projects.map(project => {
            return <ProjectCard key={project.id} project={project} />;
          });
        }}
      </Query>
    );
  }
}
