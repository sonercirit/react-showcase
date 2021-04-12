import { shallow } from "enzyme";
import React from "react";
import Main from "./Main";
import Header from "./components/header";

describe("Main", () => {
  it("should have header", () => {
    const render = shallow(<Main />);
    const header = render.find(Header);
    expect(header.length).toEqual(1);
  });
});
