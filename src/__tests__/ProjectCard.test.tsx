import React from "react";
import { shallow } from "enzyme";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

describe("testing ProjectList component", () => {
  it("renders without crashing", () => {
    const projectMock = {
      title: "Beta Testers Website",
      description:
        "Plateforme qui permet aux développeurs de montrer leurs projets et offrir aux intéressés la possibilité de tester leur projet.",
      creator: {
        name: "Michael Provencher"
      }
    };
    const wrapper = shallow(<ProjectCard project={projectMock} />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find("img").prop("src")).toEqual("vga.png");
    expect(wrapper.find(Link).props().children).toEqual(projectMock.title);
    expect(wrapper.find(".project-description").text()).toEqual(
      projectMock.description
    );
    expect(wrapper.find(".project-author").text()).toEqual(
      projectMock.creator.name
    );
  });
});
