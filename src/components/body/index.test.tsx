import React from "react";
import { shallow } from "enzyme";
import Body from "./index";
import Filter from "../Filter";

describe("Body", () => {
  it("should get filter", () => {
    const render = shallow(<Body showFilter />);
    const filter = render.find(Filter);
    expect(filter.length).toEqual(1);
  });
});
