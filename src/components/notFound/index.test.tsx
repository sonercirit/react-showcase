import React from "react";
import { shallow } from "enzyme";
import NotFound from "./index";

describe("Not Found", () => {
  it("should render page", () => {
    const render = shallow(<NotFound />);
    expect(render.text()).toContain("Oops");
  });
});
