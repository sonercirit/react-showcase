import React from "react";
import { shallow } from "enzyme";
import Filter from "./index";

describe("Filter", () => {
  it("should get dropdown with 4 options", () => {
    const render = shallow(<Filter />);
    const sortBar = render.find(".sortBar");
    expect(sortBar.children().props().options.length).toEqual(4);
  });
});
