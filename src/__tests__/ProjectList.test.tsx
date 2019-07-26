import React from "react";
import { shallow } from "enzyme";
import ProjectList from "../components/ProjectList";

/* 
TODO: Test si nombre de data fit le nb de ProjectCard
*/

describe("testing ProjectList component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ProjectList />);
    expect(wrapper.exists()).toEqual(true);
  });
});
