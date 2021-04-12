import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  it("should have login button", () => {
    const header = shallow(<Header />);
    const button = header.find(".loginButton");
    expect(button.length).toEqual(1);
  });

  it("should have trial button", () => {
    const header = shallow(<Header />);
    const button = header.find(".trialButton");
    expect(button.length).toEqual(1);
  });

  it("should have passed title", () => {
    const titleStr = "Test Title";
    const header = shallow(<Header title={titleStr} />);
    const title = header.find(".popular");
    expect(title.text()).toEqual(titleStr);
  });
});
