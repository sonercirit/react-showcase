import { shallow } from "enzyme";
import React from "react";
import Main from "./Main";
import Header from "./components/header";
import Footer from "./components/footer";

describe("Main", () => {
  it("should have header", () => {
    const render = shallow(<Main />);
    const header = render.find(Header);
    expect(header.length).toEqual(1);
  });

  it("should have footer", () => {
    const render = shallow(<Main />);
    const footer = render.find(Footer);
    expect(footer.length).toEqual(1);
  });
});
