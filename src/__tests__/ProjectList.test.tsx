import React from "react";
import { shallow, mount } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { projectsQuery, ProjectList } from "../components/ProjectList";

/* 
TODO: Test si nombre de data fit le nb de ProjectCard
*/

describe("testing ProjectList component", () => {
  const mocks = {
    request: {
      query: projectsQuery
    },
    result: {
      data: {
        projects: {
          data: {
            id: "1",
            title: "Beta Testers QC",
            description:
              "Description du project, on peut mettre n'importe quoi",
            url: "https://test.com",
            creator: {
              name: "Jacob Bédard"
            }
          }
        }
      }
    }
  };
  const projectData = mocks.result.data.projects;
  it("renders without crashing", () => {
    const wrapper = mount(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProjectList />
      </MockedProvider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
});
