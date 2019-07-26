import React from "react";
import { shallow } from "enzyme";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

describe("testing ProjectList component", () => {
  it("renders without crashing", () => {
    const projectTitle = "Beta Testers Website";
    const projectDescription =
      "Plateforme qui permet aux développeurs de montrer leurs projets et offrir aux intéressés la possibilité de tester leur projet.";
    const creator = {
      name: "Michael Provencher"
    };
    const wrapper = shallow(
      <ProjectCard
        project={{
          title: projectTitle,
          description: projectDescription,
          creator: creator
        }}
      />
    );
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find("img").prop("src")).toEqual("vga.png");
    expect(wrapper.find(Link).props().children).toEqual(projectTitle);
    expect(wrapper.find(".project-description").text()).toEqual(
      projectDescription
    );
    expect(wrapper.find(".project-author").text()).toEqual(creator.name);
  });
});
