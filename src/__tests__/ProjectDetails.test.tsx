import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { mount, ReactWrapper } from "enzyme";
import { projectQuery, ProjectDetails } from "../components/ProjectDetails";

/*
TODO: Test Loading state
TODO: Test Error state
*/

describe("testing ProjectList component", () => {
  const mocks = {
    request: {
      query: projectQuery
    },
    result: {
      data: {
        project: {
          id: "1",
          title: "Beta Testers QC",
          description: "Description du project, on peut mettre n'importe quoi",
          creator: {
            name: "Jacob Bédard"
          }
        }
      }
    }
  };
  const projectData = mocks.result.data.project;

  const wait = (time = 0) => new Promise(res => setTimeout(res, time));
  const executeMockProviderTestCase = (wrapperInstance: ReactWrapper) => {
    return wait(100).then(() => wrapperInstance.update());
  };

  it("renders without crashing", async () => {
    const wrapper = mount(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProjectDetails />
      </MockedProvider>
    );
    expect(wrapper.exists()).toEqual(true);

    return executeMockProviderTestCase(wrapper).then(() => {
      expect(wrapper.find("h2").text()).toEqual(projectData.title);
      expect(wrapper.find("p").text()).toEqual(projectData.description);
      expect(wrapper.find("strong").text()).toEqual(projectData.creator.name);
    });
  });
});
