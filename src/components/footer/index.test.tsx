import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

describe("Footer", () => {
  it("should have 6 footer links", () => {
    const render = shallow(<Footer />);
    const elements = render.find(".listElement");
    expect(elements.length).toEqual(6);
  });

  it("should have 6 svg logos", () => {
    const render = shallow(<Footer />);
    const elements = render.find("svg");
    expect(elements.length).toEqual(6);
  });
});
