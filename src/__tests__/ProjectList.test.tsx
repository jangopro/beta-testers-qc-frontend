import React from "react";
import { shallow } from "enzyme";
import ProjectList from "../components/ProjectList";

describe("testing ProjectList component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ProjectList />);
    expect(wrapper.exists()).toEqual(true);
  });
});
