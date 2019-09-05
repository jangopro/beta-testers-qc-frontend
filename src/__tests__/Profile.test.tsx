import React from "react";
import { mount } from "enzyme";
import Profile from "../components/Profile";

describe("testing Profile component", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Profile />);
    expect(wrapper.exists()).toEqual(true);
  });
});
