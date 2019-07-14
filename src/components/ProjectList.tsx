import * as React from "react";
import Project from "./Project";

export default class ProjectList extends React.Component<{}, {}> {
    createProjects() {
        const projects = [];
        for (let index = 0; index < 6; index++) {
            projects.push(<Project key={index} />);
        }
        return projects;
    }
    render() {
        return <div className="row">{this.createProjects()}</div>;
    }
}
